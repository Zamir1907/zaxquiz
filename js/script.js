// ============================================
// ZAXQUIZ - MAIN APPLICATION SCRIPT
// ============================================

// ============================================
// APP STATE
// ============================================
const AppState = {
    currentCategory: 'pengetahuan-umum',
    currentDifficulty: 'all',
    timerEnabled: true,
    soundEnabled: true,
    isDarkMode: false,
    questions: [],
    currentIndex: 0,
    score: 0,
    totalQuestions: 50,
    correctAnswers: 0,
    wrongAnswers: 0,
    answered: false,
    startTime: null,
    endTime: null,
    timerInterval: null,
    timeLeft: 15,
    maxTime: 15,
    history: [],
    hintUsed: false,
    isQuizActive: false,
    isLoading: false,
};

// ============================================
// DOM REFERENCES
// ============================================
const DOM = {};

function initDOM() {
    DOM.homeScreen = document.getElementById('homeScreen');
    DOM.quizScreen = document.getElementById('quizScreen');
    DOM.explanationScreen = document.getElementById('explanationScreen');
    DOM.resultScreen = document.getElementById('resultScreen');
    DOM.historyScreen = document.getElementById('historyScreen');
    DOM.themeToggle = document.getElementById('themeToggle');
    DOM.soundToggle = document.getElementById('soundToggle');
    DOM.categorySelect = document.getElementById('categorySelect');
    DOM.difficultySelect = document.getElementById('difficultySelect');
    DOM.timerToggle = document.getElementById('timerToggle');
    DOM.startQuizBtn = document.getElementById('startQuizBtn');
    DOM.historyBtn = document.getElementById('historyBtn');
    DOM.totalQuizzes = document.getElementById('totalQuizzes');
    DOM.avgScore = document.getElementById('avgScore');
    DOM.bestScore = document.getElementById('bestScore');
    DOM.quizCategory = document.getElementById('quizCategory');
    DOM.quizDifficulty = document.getElementById('quizDifficulty');
    DOM.currentScore = document.getElementById('currentScore');
    DOM.progressBar = document.getElementById('progressBar');
    DOM.questionCounter = document.getElementById('questionCounter');
    DOM.progressPercentage = document.getElementById('progressPercentage');
    DOM.timerContainer = document.getElementById('timerContainer');
    DOM.timerBar = document.getElementById('timerBar');
    DOM.timerText = document.getElementById('timerText');
    DOM.questionNumber = document.getElementById('questionNumber');
    DOM.questionText = document.getElementById('questionText');
    DOM.optionsContainer = document.getElementById('optionsContainer');
    DOM.hintBtn = document.getElementById('hintBtn');
    DOM.hintContainer = document.getElementById('hintContainer');
    DOM.hintText = document.getElementById('hintText');
    DOM.exitQuizBtn = document.getElementById('exitQuizBtn');
    DOM.explanationIcon = document.getElementById('explanationIcon');
    DOM.explanationTitle = document.getElementById('explanationTitle');
    DOM.correctAnswer = document.getElementById('correctAnswer');
    DOM.explanationText = document.getElementById('explanationText');
    DOM.continueBtn = document.getElementById('continueBtn');
    DOM.resultEmoji = document.getElementById('resultEmoji');
    DOM.resultTitle = document.getElementById('resultTitle');
    DOM.resultScore = document.getElementById('resultScore');
    DOM.resultCorrect = document.getElementById('resultCorrect');
    DOM.resultWrong = document.getElementById('resultWrong');
    DOM.resultPercentage = document.getElementById('resultPercentage');
    DOM.resultTime = document.getElementById('resultTime');
    DOM.resultStats = document.getElementById('resultStats');
    DOM.retryBtn = document.getElementById('retryBtn');
    DOM.homeBtn = document.getElementById('homeBtn');
    DOM.historyList = document.getElementById('historyList');
    DOM.clearHistoryBtn = document.getElementById('clearHistoryBtn');
    DOM.backFromHistoryBtn = document.getElementById('backFromHistoryBtn');
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getScoreEmoji(percentage) {
    if (percentage >= 90) return '🏆';
    if (percentage >= 75) return '🌟';
    if (percentage >= 60) return '⭐';
    if (percentage >= 40) return '📚';
    return '💪';
}

function getPercentageClass(percentage) {
    if (percentage >= 70) return 'good';
    if (percentage >= 40) return 'medium';
    return 'bad';
}

// ============================================
// SOUND SYSTEM - Menggunakan File MP3
// ============================================
class SoundManager {
    constructor() {
        this.sounds = {};
        this.enabled = true;
        this.loadSounds();
    }

    loadSounds() {
        const soundFiles = {
            click: 'sounds/click.mp3',
            correct: 'sounds/correct.mp3',
            wrong: 'sounds/wrong.mp3',
            complete: 'sounds/complete.mp3'
        };

        for (const [key, path] of Object.entries(soundFiles)) {
            try {
                const audio = new Audio(path);
                audio.preload = 'auto';
                this.sounds[key] = audio;
            } catch (e) {
                console.warn(`Gagal memuat suara ${key}:`, e);
            }
        }
    }

    play(soundName) {
        if (!this.enabled) return;
        try {
            const sound = this.sounds[soundName];
            if (sound) {
                sound.currentTime = 0;
                const playPromise = sound.play();
                if (playPromise !== undefined) {
                    playPromise.catch(e => console.warn(`Gagal memutar ${soundName}:`, e));
                }
            }
        } catch (e) {
            console.warn(`Error memutar ${soundName}:`, e);
        }
    }

    playCorrect() {
        this.play('correct');
    }

    playWrong() {
        this.play('wrong');
    }

    playClick() {
        this.play('click');
    }

    playComplete() {
        this.play('complete');
    }

    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }

    setEnabled(enabled) {
        this.enabled = enabled;
    }
}

const sound = new SoundManager();

// ============================================
// THEME SYSTEM
// ============================================
class ThemeManager {
    constructor() {
        this.isDark = localStorage.getItem('zaxquiz-theme') === 'dark';
        this.applyTheme();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
        if (DOM.themeToggle) {
            DOM.themeToggle.innerHTML = this.isDark ? '☀️' : '🌙';
            DOM.themeToggle.title = this.isDark ? 'Mode Terang' : 'Mode Gelap';
        }
    }

    toggle() {
        this.isDark = !this.isDark;
        localStorage.setItem('zaxquiz-theme', this.isDark ? 'dark' : 'light');
        this.applyTheme();
        sound.playClick();
    }

    setDark(isDark) {
        this.isDark = isDark;
        localStorage.setItem('zaxquiz-theme', this.isDark ? 'dark' : 'light');
        this.applyTheme();
    }
}

const theme = new ThemeManager();

// ============================================
// STORAGE SYSTEM
// ============================================
class StorageManager {
    static saveHistory(data) {
        const history = this.getHistory();
        history.unshift({ id: Date.now(), date: new Date().toISOString(), ...data });
        if (history.length > 50) history.length = 50;
        localStorage.setItem('zaxquiz-history', JSON.stringify(history));
    }

    static getHistory() {
        try {
            const data = localStorage.getItem('zaxquiz-history');
            return data ? JSON.parse(data) : [];
        } catch (e) { return []; }
    }

    static clearHistory() {
        localStorage.removeItem('zaxquiz-history');
    }

    static getStats() {
        const history = this.getHistory();
        if (history.length === 0) return { total: 0, avgScore: 0, bestScore: 0 };
        const total = history.length;
        const scores = history.map(h => h.score);
        const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / total);
        const bestScore = Math.max(...scores);
        return { total, avgScore, bestScore };
    }
}

// ============================================
// QUIZ ENGINE
// ============================================
class QuizEngine {
    constructor() {
        this.state = AppState;
        this.sound = sound;
        this.theme = theme;
    }

    initQuiz(category, difficulty, timerEnabled) {
    console.log('🚀 Initiating quiz...', { category, difficulty, timerEnabled });
    console.log('📚 questionsByCategory:', Object.keys(window.questionsByCategory || {}));
    console.log(`🔍 Mencari kategori: "${category}"`);
    
    // ✅ CEK APAKAH KATEGORI ADA
    if (!window.questionsByCategory || !window.questionsByCategory[category]) {
        console.error(`❌ KATEGORI "${category}" TIDAK DITEMUKAN!`);
        console.log('📚 Kategori yang tersedia:', Object.keys(window.questionsByCategory || {}));
        alert(`❌ Maaf, kategori "${category}" tidak ditemukan.\n\nSilakan refresh halaman dan coba lagi.`);
        return;
    }
    
    this.state.currentCategory = category;
    this.state.currentDifficulty = difficulty;
    this.state.timerEnabled = timerEnabled;
    this.state.currentIndex = 0;
    this.state.score = 0;
    this.state.correctAnswers = 0;
    this.state.wrongAnswers = 0;
    this.state.answered = false;
    this.state.hintUsed = false;
    this.state.startTime = Date.now();
    this.state.endTime = null;
    this.state.isQuizActive = true;

    let questions = this.getQuestionsForCategory(category);
    console.log(`📚 Found ${questions.length} questions for category`);

    if (difficulty !== 'all') {
        questions = questions.filter(q => q.difficulty === difficulty);
        console.log(`📊 Filtered to ${questions.length} ${difficulty} questions`);
        if (questions.length < 50) {
            const allQuestions = this.getAllQuestions();
            const filtered = allQuestions.filter(q => q.difficulty === difficulty);
            const shuffled = shuffleArray(filtered);
            const need = 50 - questions.length;
            const additional = shuffled.slice(0, need);
            questions = [...questions, ...additional];
        }
    }

    questions = shuffleArray(questions);
    this.state.questions = questions.slice(0, 50);
    this.state.totalQuestions = this.state.questions.length;
    
    console.log(`✅ Quiz ready with ${this.state.totalQuestions} questions`);

    // ✅ TAMBAHKAN INI - Update visibilitas timer sebelum menampilkan
    this.updateTimerVisibility();
    
    this.showQuestion();
    this.updateUI();
    this.showScreen('quizScreen');

    if (this.state.timerEnabled) {
        this.startTimer();
    }

    this.sound.playClick();
}

    getAllQuestions() {
        const all = [];
        for (const category in window.questionsByCategory) {
            all.push(...window.questionsByCategory[category]);
        }
        return all;
    }

    getQuestionsForCategory(category) {
    // ✅ VALIDASI LEBIH KETAT
    if (!window.questionsByCategory) {
        console.error('❌ questionsByCategory tidak ada!');
        return [];
    }

    if (!window.questionsByCategory[category]) {
        console.error(`❌ Kategori "${category}" tidak ditemukan!`);
        console.log('📚 Kategori yang tersedia:', Object.keys(window.questionsByCategory));
        return [];
    }

    const questions = window.questionsByCategory[category];
    if (!questions || questions.length === 0) {
        console.error(`❌ Kategori "${category}" kosong!`);
        return [];
    }

    return questions;
}

    showQuestion() {
    const questions = this.state.questions;
    const index = this.state.currentIndex;

    if (index >= questions.length) {
        this.finishQuiz();
        return;
    }

    const question = questions[index];
    this.state.answered = false;
    this.state.hintUsed = false;

    DOM.questionNumber.textContent = `Pertanyaan #${index + 1}`;
    DOM.questionText.textContent = question.question;

    const shuffledOptions = shuffleArray(
        question.options.map((text, i) => ({
            text,
            index: i,
            isCorrect: i === question.correctIndex
        }))
    );

    DOM.optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    shuffledOptions.forEach((option, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.dataset.index = option.index;
        btn.dataset.correct = option.isCorrect;
        btn.innerHTML = `
            <span class="option-letter">${letters[i]}</span>
            <span>${option.text}</span>
        `;
        btn.addEventListener('click', () => this.handleAnswer(btn, option.isCorrect, question));
        DOM.optionsContainer.appendChild(btn);
    });

    DOM.hintContainer.style.display = 'none';
    DOM.hintText.textContent = '';

    this.updateProgress();
    this.updateScore();

    DOM.timerBar.classList.remove('warning', 'danger');

    // ✅ TAMBAHKAN INI - Update visibilitas timer setiap ganti soal
    this.updateTimerVisibility();

    if (this.state.timerEnabled) {
        this.state.timeLeft = this.state.maxTime;
        this.updateTimerUI();
        this.startTimer();
    }
}

    handleAnswer(btn, isCorrect, question) {
        if (this.state.answered) return;
        this.state.answered = true;

        this.stopTimer();

        const allBtns = DOM.optionsContainer.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.disabled = true);

        allBtns.forEach(b => {
            if (b.dataset.correct === 'true') {
                b.classList.add('correct');
            }
        });

        if (isCorrect) {
            btn.classList.add('correct');
            this.state.score += 1;
            this.state.correctAnswers += 1;
            this.sound.playCorrect();
            setTimeout(() => this.nextQuestion(), 800);
        } else {
            btn.classList.add('wrong');
            this.state.wrongAnswers += 1;
            this.sound.playWrong();
            this.showExplanation(question);
        }

        this.updateScore();
        this.updateProgress();
    }

    showExplanation(question) {
        DOM.explanationIcon.textContent = '❌';
        DOM.explanationTitle.textContent = 'Jawaban Kurang Tepat!';
        DOM.correctAnswer.textContent = question.options[question.correctIndex];
        DOM.explanationText.textContent = question.explanation;
        this.showScreen('explanationScreen');
    }

    nextQuestion() {
        this.state.currentIndex += 1;
        if (this.state.currentIndex >= this.state.questions.length) {
            this.finishQuiz();
        } else {
            this.showScreen('quizScreen');
            this.showQuestion();
        }
        this.sound.playClick();
    }

    finishQuiz() {
        this.state.isQuizActive = false;
        this.state.endTime = Date.now();
        this.stopTimer();

        const total = this.state.totalQuestions;
        const correct = this.state.correctAnswers;
        const wrong = this.state.wrongAnswers;
        const percentage = Math.round((correct / total) * 100);
        const timeSpent = Math.floor((this.state.endTime - this.state.startTime) / 1000);

        DOM.resultEmoji.textContent = getScoreEmoji(percentage);
        DOM.resultTitle.textContent = percentage >= 70 ? '🎉 Hebat sekali!' : '💪 Terus belajar!';
        DOM.resultScore.textContent = correct;
        DOM.resultCorrect.textContent = correct;
        DOM.resultWrong.textContent = wrong;
        DOM.resultPercentage.textContent = `${percentage}%`;
        DOM.resultTime.textContent = formatTime(timeSpent);

        const stats = {};
        this.state.questions.forEach(q => {
            const cat = q.category || 'Umum';
            if (!stats[cat]) stats[cat] = { total: 0 };
            stats[cat].total += 1;
        });
        DOM.resultStats.innerHTML = Object.keys(stats).map(cat => `
            <div class="result-stats-item">
                <span class="stat-category">📂 ${cat}</span>
                <span class="stat-score">${stats[cat].total} soal</span>
            </div>
        `).join('');

        this.sound.playComplete();
        this.showScreen('resultScreen');

        StorageManager.saveHistory({
            category: this.state.currentCategory,
            difficulty: this.state.currentDifficulty,
            score: correct,
            total: total,
            percentage: percentage,
            time: timeSpent
        });

        this.updateHomeStats();
    }

    updateProgress() {
        const total = this.state.totalQuestions;
        const current = this.state.currentIndex + 1;
        const progress = Math.min((current / total) * 100, 100);

        DOM.progressBar.style.width = `${progress}%`;
        DOM.questionCounter.textContent = `${Math.min(current, total)} / ${total}`;
        DOM.progressPercentage.textContent = `${Math.round(progress)}%`;
    }

    updateScore() {
        DOM.currentScore.textContent = this.state.score;
    }
    
    // ============================================
// TIMER VISIBILITY CONTROL
// ============================================
updateTimerVisibility() {
    if (this.state.timerEnabled) {
        // Timer aktif - tampilkan
        DOM.timerContainer.classList.add('active');
        DOM.timerContainer.style.display = 'block';
    } else {
        // Timer nonaktif - sembunyikan
        DOM.timerContainer.classList.remove('active');
        DOM.timerContainer.style.display = 'none';
    }
}

    updateTimerUI() {
        const percentage = (this.state.timeLeft / this.state.maxTime) * 100;
        DOM.timerBar.style.width = `${percentage}%`;
        DOM.timerText.textContent = `⏱️ ${Math.ceil(this.state.timeLeft)}s`;

        DOM.timerBar.classList.remove('warning', 'danger');
        if (this.state.timeLeft <= 3) {
            DOM.timerBar.classList.add('danger');
        } else if (this.state.timeLeft <= 7) {
            DOM.timerBar.classList.add('warning');
        }
    }

    startTimer() {
        this.stopTimer();
        if (!this.state.timerEnabled) return;

        this.state.timeLeft = this.state.maxTime;
        this.updateTimerUI();

        this.state.timerInterval = setInterval(() => {
            this.state.timeLeft -= 0.1;
            this.updateTimerUI();

            if (this.state.timeLeft <= 0) {
                this.stopTimer();
                this.handleTimeout();
            }
        }, 100);
    }

    stopTimer() {
        if (this.state.timerInterval) {
            clearInterval(this.state.timerInterval);
            this.state.timerInterval = null;
        }
    }

    handleTimeout() {
        if (this.state.answered) return;
        this.state.answered = true;

        const allBtns = DOM.optionsContainer.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.disabled = true);

        allBtns.forEach(b => {
            if (b.dataset.correct === 'true') {
                b.classList.add('correct');
            }
        });

        this.state.wrongAnswers += 1;
        this.sound.playWrong();

        const question = this.state.questions[this.state.currentIndex];
        setTimeout(() => {
            this.showExplanation(question);
        }, 300);

        this.updateProgress();
    }

    showHint() {
        if (this.state.answered || this.state.hintUsed) return;

        const question = this.state.questions[this.state.currentIndex];
        DOM.hintText.textContent = question.hint || 'Petunjuk: Pikirkan dengan cermat!';
        DOM.hintContainer.style.display = 'block';
        this.state.hintUsed = true;
        this.sound.playClick();

        DOM.hintContainer.style.animation = 'none';
        setTimeout(() => {
            DOM.hintContainer.style.animation = 'fadeSlideIn 0.3s ease';
        }, 10);
    }

    resetQuiz() {
    this.stopTimer();
    this.state.isQuizActive = false;
    this.state.currentIndex = 0;
    this.state.score = 0;
    this.state.correctAnswers = 0;
    this.state.wrongAnswers = 0;
    this.state.questions = [];
    
    // ✅ TAMBAHKAN INI - Sembunyikan timer saat reset
    DOM.timerContainer.classList.remove('active');
    DOM.timerContainer.style.display = 'none';
    
    this.showScreen('homeScreen');
    this.sound.playClick();
}

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.remove('active');
        });

        const screen = document.getElementById(screenId);
        if (screen) {
            screen.classList.add('active');
            screen.style.animation = 'none';
            setTimeout(() => {
                screen.style.animation = 'fadeSlideIn 0.4s ease-out';
            }, 10);
        }

        const header = document.querySelector('.app-header');
        if (header) header.style.display = 'flex';
    }

    updateHomeStats() {
        const stats = StorageManager.getStats();
        DOM.totalQuizzes.textContent = stats.total;
        DOM.avgScore.textContent = `${stats.avgScore}%`;
        DOM.bestScore.textContent = stats.bestScore;
    }

    updateUI() {
        const categoryNames = {
            'pengetahuan-umum': 'Pengetahuan Umum',
            'matematika': 'Matematika',
            'agama-islam': 'Agama Islam',
            'nama-bendera': 'Nama Bendera Dunia',
            'negara-ibukota': 'Negara dan Ibu Kota',
            'provinsi-indonesia': 'Provinsi Indonesia',
            'sejarah-indonesia': 'Sejarah Indonesia',
            'sejarah-dunia': 'Sejarah Dunia'
        };
        DOM.quizCategory.textContent = categoryNames[this.state.currentCategory] || this.state.currentCategory;
        DOM.quizDifficulty.textContent = this.state.currentDifficulty === 'all' ? 'Semua Level' : 
            this.state.currentDifficulty.charAt(0).toUpperCase() + this.state.currentDifficulty.slice(1);
        DOM.quizDifficulty.dataset.difficulty = this.state.currentDifficulty;
    }
}

// ============================================
// EVENT HANDLERS
// ============================================
function setupEventListeners() {
    console.log('🔧 Setting up event listeners...');

    DOM.themeToggle.addEventListener('click', () => {
        theme.toggle();
    });

    DOM.soundToggle.addEventListener('click', () => {
        const enabled = sound.toggle();
        DOM.soundToggle.innerHTML = enabled ? '🔊' : '🔇';
        DOM.soundToggle.title = enabled ? 'Suara Aktif' : 'Suara Nonaktif';
        localStorage.setItem('zaxquiz-sound', enabled ? 'on' : 'off');
    });

    DOM.startQuizBtn.addEventListener('click', function(e) {
    console.log('🎯 Start Quiz clicked!');
    e.preventDefault();
    
    const category = DOM.categorySelect.value;
    const difficulty = DOM.difficultySelect.value;
    const timerEnabled = DOM.timerToggle.checked;

    // ✅ VALIDASI LEBIH BAIK
    if (!window.questionsByCategory) {
        console.error('❌ questionsByCategory tidak ditemukan!');
        alert('❌ Data soal belum dimuat. Silakan refresh halaman.');
        return;
    }

    if (!window.questionsByCategory[category]) {
        console.error('❌ Kategori tidak ditemukan:', category);
        console.log('📚 Kategori yang tersedia:', Object.keys(window.questionsByCategory));
        
        // ✅ TAMPILKAN PESAN YANG LEBIH INFORMATIF
        alert(`❌ Kategori "${category}" tidak ditemukan.\n\nKategori yang tersedia:\n${Object.keys(window.questionsByCategory).join('\n')}\n\nSilakan pilih kategori lain atau refresh halaman.`);
        return;
    }

    const questions = window.questionsByCategory[category];
    if (!questions || questions.length === 0) {
        alert(`❌ Kategori "${category}" tidak memiliki soal.\n\nSilakan pilih kategori lain.`);
        return;
    }

    // ✅ LANJUTKAN QUIZ
    quizEngine.initQuiz(category, difficulty, timerEnabled);
});

    DOM.exitQuizBtn.addEventListener('click', () => {
        if (confirm('Yakin ingin keluar dari quiz? Progress akan hilang.')) {
            quizEngine.resetQuiz();
        }
    });

    DOM.continueBtn.addEventListener('click', () => {
        quizEngine.nextQuestion();
    });

    DOM.hintBtn.addEventListener('click', () => {
        quizEngine.showHint();
    });

    DOM.retryBtn.addEventListener('click', () => {
        const category = DOM.categorySelect.value;
        const difficulty = DOM.difficultySelect.value;
        const timerEnabled = DOM.timerToggle.checked;
        quizEngine.initQuiz(category, difficulty, timerEnabled);
    });

    DOM.homeBtn.addEventListener('click', () => {
        quizEngine.resetQuiz();
    });

    DOM.historyBtn.addEventListener('click', () => {
        renderHistory();
        quizEngine.showScreen('historyScreen');
        sound.playClick();
    });

    DOM.backFromHistoryBtn.addEventListener('click', () => {
        quizEngine.showScreen('homeScreen');
        quizEngine.updateHomeStats();
        sound.playClick();
    });

    DOM.clearHistoryBtn.addEventListener('click', () => {
        if (confirm('Yakin ingin menghapus semua riwayat?')) {
            StorageManager.clearHistory();
            renderHistory();
            quizEngine.updateHomeStats();
            sound.playClick();
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && quizEngine.state.isQuizActive) {
            if (confirm('Yakin ingin keluar dari quiz?')) {
                quizEngine.resetQuiz();
            }
        }
        if (e.key === 'h' && quizEngine.state.isQuizActive) {
            quizEngine.showHint();
        }
        if (e.key >= '1' && e.key <= '4' && quizEngine.state.isQuizActive && !quizEngine.state.answered) {
            const btns = DOM.optionsContainer.querySelectorAll('.option-btn');
            const idx = parseInt(e.key) - 1;
            if (btns[idx]) btns[idx].click();
        }
    });

    const soundPref = localStorage.getItem('zaxquiz-sound');
    if (soundPref === 'off') {
        sound.setEnabled(false);
        DOM.soundToggle.innerHTML = '🔇';
        DOM.soundToggle.title = 'Suara Nonaktif';
    }

    console.log('✅ Event listeners ready!');
}

function renderHistory() {
    const history = StorageManager.getHistory();
    DOM.historyList.innerHTML = '';

    if (history.length === 0) {
        DOM.historyList.innerHTML = `
            <div class="history-empty">
                <span class="empty-icon">📭</span>
                <p>Belum ada riwayat quiz. Yuk, mulai quiz sekarang!</p>
            </div>
        `;
        return;
    }

    const categoryNames = {
        'pengetahuan-umum': 'Pengetahuan Umum',
        'matematika': 'Matematika',
        'agama-islam': 'Agama Islam',
        'nama-bendera': 'Nama Bendera',
        'negara-ibukota': 'Negara & Ibu Kota',
        'provinsi-indonesia': 'Provinsi Indonesia',
        'sejarah-indonesia': 'Sejarah Indonesia',
        'sejarah-dunia': 'Sejarah Dunia'
    };

    history.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        const date = new Date(item.date);
        const dateStr = date.toLocaleDateString('id-ID', { 
            day: 'numeric', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });

        const catName = categoryNames[item.category] || item.category;

        div.innerHTML = `
            <div class="history-item-left">
                <span class="history-item-category">📚 ${catName}</span>
                <span class="history-item-date">${dateStr}</span>
            </div>
            <div class="history-item-right">
                <span class="history-item-score">${item.score}/${item.total}</span>
                <span class="history-item-percentage ${getPercentageClass(item.percentage)}">
                    ${item.percentage}%
                </span>
            </div>
        `;
        DOM.historyList.appendChild(div);
    });
}

// ============================================
// PROTECTION - CEGAH COPY, PASTE, DRAG
// ============================================
function initProtection() {
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        e.preventDefault();
        return false;
    });

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'x')) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            e.preventDefault();
            return false;
        }
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
            e.preventDefault();
            return false;
        }
    });

    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        e.preventDefault();
        return false;
    });

    document.addEventListener('copy', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        e.preventDefault();
        return false;
    });

    document.addEventListener('paste', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        e.preventDefault();
        return false;
    });

    document.addEventListener('cut', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        e.preventDefault();
        return false;
    });

    document.addEventListener('selectstart', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        e.preventDefault();
        return false;
    });

    console.log('🛡️ Protection aktif!');
}

// ============================================
// INITIALIZATION
// ============================================
const quizEngine = new QuizEngine();

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 ZaxQuiz initializing...');

    initDOM();
    setupEventListeners();
    quizEngine.updateHomeStats();

// Load categories ke select
if (window.questionsByCategory) {
    const select = DOM.categorySelect;
    // ❌ HAPUS while loop ini jika ada, atau ganti dengan:
    select.innerHTML = ''; // Lebih bersih

    const categoryNames = {
        'pengetahuan-umum': 'Pengetahuan Umum',
        'matematika': 'Matematika',
        'agama-islam': 'Agama Islam',
        'nama-bendera': 'Nama Bendera Dunia',
        'negara-ibukota': 'Negara dan Ibu Kota',
        'provinsi-indonesia': 'Provinsi dan Ibu Kota Indonesia',
        'sejarah-indonesia': 'Sejarah Indonesia',
        'sejarah-dunia': 'Sejarah Dunia'
    };

    // ✅ HANYA TAMBAHKAN KATEGORI YANG VALID
    for (const key in window.questionsByCategory) {
        if (window.questionsByCategory[key] && window.questionsByCategory[key].length > 0) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = categoryNames[key] || key;
            select.appendChild(option);
        } else {
            console.warn(`⚠️ Kategori "${key}" kosong atau tidak valid, dilewati.`);
        }
    }
    
    console.log(`✅ ${select.options.length} kategori dimuat ke dropdown`);
} else {
    console.error('❌ questionsByCategory tidak ditemukan saat inisialisasi!');
}

// Global exposure
window.ZaxQuiz = {
    AppState,
    quizEngine,
    sound,
    theme,
    StorageManager,
    shuffleArray,
    formatTime,
    getScoreEmoji
};

console.log('🚀 ZaxQuiz v1.0.0 loaded successfully!');