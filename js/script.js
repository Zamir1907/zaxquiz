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
    totalQuestions: 15,
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
    usedQuestions: {},
    currentUsedIndices: [],
};

// ============================================
// CUSTOM DIALOG SYSTEM
// ============================================
function showCustomDialog(message, options = {}) {
    return new Promise((resolve) => {
        const dialog = document.getElementById('customDialog');
        const msgEl = document.getElementById('dialogMessage');
        const confirmBtn = document.getElementById('dialogConfirmBtn');
        const cancelBtn = document.getElementById('dialogCancelBtn');
        const closeBtn = document.getElementById('dialogCloseBtn');
        
        // Set pesan
        msgEl.textContent = message;
        
        // Tampilkan dialog
        dialog.style.display = 'flex';
        
        // Sembunyikan tombol yang tidak diperlukan
        if (options.type === 'alert') {
            cancelBtn.style.display = 'none';
            confirmBtn.textContent = 'OK';
        } else {
            cancelBtn.style.display = 'inline-flex';
            confirmBtn.textContent = options.confirmText || 'OK';
            cancelBtn.textContent = options.cancelText || 'Batal';
        }
        
        // Fungsi close
        function close(result) {
            dialog.style.display = 'none';
            resolve(result);
        }
        
        // Event listeners
        confirmBtn.onclick = () => {
    sound.playClick();
    close(true);
};

cancelBtn.onclick = () => {
    sound.playClick();
    close(false);
};

closeBtn.onclick = () => {
    sound.playClick();
    close(false);
};
        
        // Klik di luar overlay (opsional)
        const overlay = dialog.querySelector('.custom-dialog-overlay');
        overlay.onclick = () => {
            if (options.type !== 'alert') {
                close(false);
            }
        };
        
        // Escape key
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                close(false);
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
    });
}

// ============================================
// DOM REFERENCES
// ============================================
const DOM = {};

function initDOM() {
    DOM.homeScreen = document.getElementById('homeScreen');
    DOM.quizScreen = document.getElementById('quizScreen');
    DOM.explanationScreen = document.getElementById('explanationScreen');
    DOM.resultScreen = document.getElementById('resultScreen');
    DOM.resultTotalLabel = document.getElementById('resultTotalLabel');
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
// RESULT MESSAGE - BERDASARKAN SKOR (CUSTOM)
// ============================================
function getResultMessageData(score, total) {
    const messages = [
        { range: [0, 0], emoji: "👍", text: "Agak ngontol tapi oke." },
        { range: [1, 1], emoji: "🗿", text: "Yang penting nyentuh." },
        { range: [2, 2], emoji: "😭", text: "Skor kayak biji pler." },
        { range: [3, 3], emoji: "😂", text: "Masih mending lah." },
        { range: [4, 4], emoji: "🤭", text: "Jari aja ada lima." },
        { range: [5, 5], emoji: "😢", text: "Belajar lagi dek." },
        { range: [6, 7], emoji: "😁", text: "Usaha bagus diddy." },
        { range: [8, 9], emoji: "🧠", text: "Einstein pun sujud." },
        { range: [10, 12], emoji: "😍", text: "Idaman banget." },
        { range: [13, 14], emoji: "👑", text: "Mahkotamu lagi dilas." },
        { range: [15, 15], emoji: "🏆", text: "Pialamu king." }
    ];

    for (const msg of messages) {
        if (score >= msg.range[0] && score <= msg.range[1]) {
            return msg;
        }
    }
    return { emoji: "🗿", text: `Gas lagi! (${score}/${total})` };
}

function getResultMessage(score, total) {
    const data = getResultMessageData(score, total);
    return `${data.emoji} ${data.text}`;
}

// ============================================
// USED QUESTIONS TRACKING - UNTUK SOAL TIDAK BERULANG
// ============================================
function getUsedQuestionsKey(category) {
    return `zaxquiz_used_${category}`;
}

function loadUsedQuestions(category) {
    try {
        const key = getUsedQuestionsKey(category);
        const data = localStorage.getItem(key);
        if (!data) return [];
        return JSON.parse(data);
    } catch (e) {
        console.warn('Gagal memuat used questions:', e);
        return [];
    }
}

function saveUsedQuestions(category, usedIndices) {
    try {
        const key = getUsedQuestionsKey(category);
        localStorage.setItem(key, JSON.stringify(usedIndices));
    } catch (e) {
        console.warn('Gagal menyimpan used questions:', e);
    }
}

function resetUsedQuestions(category) {
    try {
        const key = getUsedQuestionsKey(category);
        localStorage.removeItem(key);
    } catch (e) {
        console.warn('Gagal reset used questions:', e);
    }
}

function getRandomQuestions(allQuestions, category, count = 15) {
    const totalAvailable = allQuestions.length;
    
    if (totalAvailable <= count) {
        return shuffleArray([...allQuestions]);
    }
    
    let usedIndices = loadUsedQuestions(category);
    
    const allIndices = Array.from({ length: totalAvailable }, (_, i) => i);
    const usedSet = new Set(usedIndices);
    const availableIndices = allIndices.filter(i => !usedSet.has(i));
    
    let selectedIndices = [];
    
    if (availableIndices.length >= count) {
        const shuffledAvailable = shuffleArray(availableIndices);
        selectedIndices = shuffledAvailable.slice(0, count);
    } else {
        const remaining = shuffleArray(availableIndices);
        const needed = count - remaining.length;
        
        const shuffledUsed = shuffleArray(usedIndices);
        const additional = shuffledUsed.slice(0, needed);
        
        selectedIndices = [...remaining, ...additional];
    }
    
    selectedIndices = shuffleArray(selectedIndices);
    
    AppState.currentUsedIndices = selectedIndices;
    
    const selectedQuestions = selectedIndices.map(i => allQuestions[i]);
    
    return selectedQuestions;
}

// ============================================
// STATE PERSISTENCE - UNTUK REFRESH
// ============================================
function saveQuizState() {
    try {
        const state = {
            currentCategory: AppState.currentCategory,
            currentDifficulty: AppState.currentDifficulty,
            timerEnabled: AppState.timerEnabled,
            questions: AppState.questions,
            currentIndex: AppState.currentIndex,
            score: AppState.score,
            totalQuestions: AppState.totalQuestions,
            correctAnswers: AppState.correctAnswers,
            wrongAnswers: AppState.wrongAnswers,
            answered: AppState.answered,
            startTime: AppState.startTime,
            hintUsed: AppState.hintUsed,
            isQuizActive: AppState.isQuizActive,
            timeLeft: AppState.timeLeft,
            currentUsedIndices: AppState.currentUsedIndices,
            timestamp: Date.now()
        };
        sessionStorage.setItem('zaxquiz_state', JSON.stringify(state));
    } catch (e) {
        console.warn('Gagal menyimpan state:', e);
    }
}

function loadQuizState() {
    try {
        const data = sessionStorage.getItem('zaxquiz_state');
        if (!data) return null;
        
        const state = JSON.parse(data);
        
        if (Date.now() - state.timestamp > 3600000) {
            sessionStorage.removeItem('zaxquiz_state');
            return null;
        }
        
        return state;
    } catch (e) {
        console.warn('Gagal memuat state:', e);
        return null;
    }
}

function clearQuizState() {
    sessionStorage.removeItem('zaxquiz_state');
}

// ============================================
// SOUND SYSTEM - PRIORITASKAN FILE MP3
// ============================================
class SoundManager {
    constructor() {
        this.sounds = {};
        this.enabled = true;
        this.audioContext = null;
        this.loadSounds();
    }

    initAudioContext() {
        if (!this.audioContext) {
            try {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            } catch (e) {
                console.warn('Web Audio API tidak didukung');
            }
        }
        return this.audioContext;
    }

    generateBeep(frequency, duration, type = 'sine') {
        try {
            const ctx = this.initAudioContext();
            if (!ctx) return;
            
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = type;
            
            gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
            
            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + duration);
        } catch (e) {}
    }

    loadSounds() {
        const soundFiles = {
            click: 'assets/sounds/click.mp3',
            correct: 'assets/sounds/correct.mp3',
            wrong: 'assets/sounds/wrong.mp3',
            complete: 'assets/sounds/complete.mp3'
        };

        for (const [key, path] of Object.entries(soundFiles)) {
            try {
                const audio = new Audio(path);
                audio.preload = 'auto';
                this.sounds[key] = audio;
            } catch (e) {
                this.sounds[key] = null;
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
                    playPromise.catch(() => {
                        this.playFallback(soundName);
                    });
                }
                return;
            }
        } catch (e) {
            this.playFallback(soundName);
        }
    }

    playFallback(soundName) {
        const sounds = {
            click: { freq: 800, duration: 0.08, type: 'sine' },
            correct: { freq: 523, duration: 0.15, type: 'sine' },
            wrong: { freq: 300, duration: 0.3, type: 'sawtooth' },
            complete: { freq: 660, duration: 0.2, type: 'sine' }
        };

        const config = sounds[soundName];
        if (!config) return;

        if (soundName === 'correct') {
            this.generateBeep(523, 0.12);
            setTimeout(() => this.generateBeep(659, 0.12), 120);
            setTimeout(() => this.generateBeep(784, 0.15), 240);
        } else if (soundName === 'complete') {
            this.generateBeep(523, 0.1);
            setTimeout(() => this.generateBeep(659, 0.1), 100);
            setTimeout(() => this.generateBeep(784, 0.1), 200);
            setTimeout(() => this.generateBeep(1047, 0.2), 300);
        } else {
            this.generateBeep(config.freq, config.duration, config.type);
        }
    }

    playCorrect() { this.play('correct'); }
    playWrong() { this.play('wrong'); }
    playClick() { this.play('click'); }
    playComplete() { this.play('complete'); }

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
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.applyTheme());
        } else {
            this.applyTheme();
        }
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
        
        const themeColor = document.getElementById('themeColor');
        if (themeColor) {
            themeColor.content = this.isDark ? '#1A1A2E' : '#6C63FF';
        }
        
        if (DOM.themeToggle) {
            const icon = DOM.themeToggle.querySelector('i');
            if (icon) {
                icon.className = this.isDark ? 'fas fa-sun' : 'fas fa-moon';
            }
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
        
        if (!window.questionsByCategory || !window.questionsByCategory[category]) {
            console.error(`❌ KATEGORI "${category}" TIDAK DITEMUKAN!`);
            alert(`❌ Maaf, kategori "${category}" tidak ditemukan.\n\nSilakan refresh halaman dan coba lagi.`);
            return;
        }
        
        clearQuizState();
        
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

        sound.initAudioContext();

        let allQuestions = this.getQuestionsForCategory(category);

        if (difficulty !== 'all') {
            allQuestions = allQuestions.filter(q => q.difficulty === difficulty);
            if (allQuestions.length < 15) {
                const backupQuestions = this.getAllQuestions().filter(q => q.difficulty === difficulty);
                const shuffled = shuffleArray(backupQuestions);
                const need = 15 - allQuestions.length;
                const additional = shuffled.slice(0, need);
                allQuestions = [...allQuestions, ...additional];
            }
        }

        if (allQuestions.length < 15) {
            this.state.questions = shuffleArray([...allQuestions]);
            this.state.totalQuestions = this.state.questions.length;
            console.log(`⚠️ Hanya ${this.state.totalQuestions} soal tersedia untuk kategori ini`);
        } else {
            const selectedQuestions = getRandomQuestions(allQuestions, category, 15);
            this.state.questions = selectedQuestions;
            this.state.totalQuestions = this.state.questions.length;
            console.log(`✅ ${this.state.totalQuestions} soal acak dipilih (tidak berulang)`);
        }
        
        this.updateTimerVisibility();
        this.showQuestion();
        this.updateUI();
        this.showScreen('quizScreen');

        if (this.state.timerEnabled) {
            this.startTimer();
        }

        saveQuizState();
        this.sound.playClick();
        
        history.pushState({ source: 'zaxquiz', page: 'quiz', timestamp: Date.now() }, '', window.location.href);
    }

    getAllQuestions() {
        const all = [];
        for (const category in window.questionsByCategory) {
            all.push(...window.questionsByCategory[category]);
        }
        return all;
    }

    getQuestionsForCategory(category) {
        if (!window.questionsByCategory) {
            console.error('❌ questionsByCategory tidak ada!');
            return [];
        }
        if (!window.questionsByCategory[category]) {
            console.error(`❌ Kategori "${category}" tidak ditemukan!`);
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
        
        DOM.hintContainer.style.display = 'none';
        DOM.hintContainer.classList.remove('active');

        DOM.questionNumber.textContent = `Pertanyaan #${index + 1}`;
        
        if (question.category === 'Nama Bendera Dunia' && question.flagCode) {
            DOM.questionText.innerHTML = `
                <div class="flag-container">
                    <div class="flag-skeleton" id="flagSkeleton">
                        <div class="flag-spinner"></div>
                        <span class="flag-skeleton-text">Memuat bendera...</span>
                    </div>
                    <img src="https://flagcdn.com/w320/${question.flagCode}.png" 
                         alt="Bendera" 
                         class="flag-image"
                         loading="lazy"
                         onerror="this.style.display='none'"
                         onload="this.classList.add('loaded'); const skeleton = document.getElementById('flagSkeleton'); if(skeleton) skeleton.classList.add('hidden')">
                </div>
                <div class="question-text-only">${question.question}</div>
            `;
        } else {
            DOM.questionText.innerHTML = question.question;
        }

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

        DOM.hintText.textContent = '';

        this.updateProgress();
        this.updateScore();

        DOM.timerBar.classList.remove('warning', 'danger');

        this.updateTimerVisibility();

        if (this.state.timerEnabled) {
            this.state.timeLeft = this.state.maxTime;
            this.updateTimerUI();
            this.startTimer();
        }

        saveQuizState();
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
        saveQuizState();
    }

    showExplanation(question) {
        DOM.explanationIcon.textContent = '❌';
        DOM.explanationTitle.textContent = 'Jawaban Kurang Tepat!';
        DOM.correctAnswer.textContent = question.options[question.correctIndex];
        DOM.explanationText.textContent = question.explanation;
        this.showScreen('explanationScreen');
        this.sound.playClick();
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
        console.log('🏁 finishQuiz() dipanggil!');
        
        this.state.isQuizActive = false;
        this.state.endTime = Date.now();
        this.stopTimer();

        const category = this.state.currentCategory;
        if (this.state.currentUsedIndices && this.state.currentUsedIndices.length > 0) {
            const existingUsed = loadUsedQuestions(category);
            const newUsed = [...existingUsed, ...this.state.currentUsedIndices];
            const uniqueUsed = [...new Set(newUsed)];
            saveUsedQuestions(category, uniqueUsed);
            console.log(`✅ ${this.state.currentUsedIndices.length} soal ditandai sebagai sudah pernah keluar`);
        }

        clearQuizState();

        const total = this.state.totalQuestions;
        const correct = this.state.correctAnswers;
        const wrong = this.state.wrongAnswers;
        const percentage = Math.round((correct / total) * 100);
        const timeSpent = Math.floor((this.state.endTime - this.state.startTime) / 1000);

        // === AMBIL EMOJI & TEKS BERDASARKAN SKOR ===
        const resultData = getResultMessageData(correct, total);
        DOM.resultEmoji.textContent = resultData.emoji;
        DOM.resultTitle.textContent = resultData.text;
        
        DOM.resultTotalLabel.textContent = `dari ${total}`;
        DOM.resultScore.textContent = `${correct}/${total}`;
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
        this.sound.playClick();

        StorageManager.saveHistory({
            category: this.state.currentCategory,
            difficulty: this.state.currentDifficulty,
            score: correct,
            total: total,
            percentage: percentage,
            time: timeSpent
        });

        this.updateHomeStats();
        history.pushState({ source: 'zaxquiz', page: 'result', timestamp: Date.now() }, '', window.location.href);
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

    updateTimerVisibility() {
        if (this.state.timerEnabled) {
            DOM.timerContainer.classList.add('active');
            DOM.timerContainer.style.display = 'block';
        } else {
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
        if (this.state.answered) return;
        
        if (DOM.hintContainer.style.display === 'block') {
            DOM.hintContainer.style.display = 'none';
            DOM.hintContainer.classList.remove('active');
            this.state.hintUsed = false;
            this.sound.playClick();
            return;
        }

        const question = this.state.questions[this.state.currentIndex];
        DOM.hintText.textContent = question.hint || 'Petunjuk: Pikirkan dengan cermat!';
        DOM.hintContainer.style.display = 'block';
        DOM.hintContainer.classList.add('active');
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
        this.state.currentUsedIndices = [];
        
        clearQuizState();
        
        DOM.timerContainer.classList.remove('active');
        DOM.timerContainer.style.display = 'none';
        DOM.hintContainer.style.display = 'none';
        DOM.hintContainer.classList.remove('active');
        
        this.showScreen('homeScreen');
        this.sound.playClick();
        
        history.pushState({ source: 'zaxquiz', page: 'home', timestamp: Date.now() }, '', window.location.href);
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
        DOM.avgScore.textContent = stats.total > 0 ? `${stats.avgScore}%` : '0%';
        DOM.bestScore.textContent = stats.total > 0 ? stats.bestScore : '0';
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
        const icon = DOM.soundToggle.querySelector('i');
        if (icon) {
            icon.className = enabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
        }
        DOM.soundToggle.title = enabled ? 'Suara Aktif' : 'Suara Nonaktif';
        localStorage.setItem('zaxquiz-sound', enabled ? 'on' : 'off');
        sound.initAudioContext();
        sound.playClick();
    });

    DOM.startQuizBtn.addEventListener('click', function(e) {
        console.log('🎯 Start Quiz clicked!');
        sound.playClick();
        
        const category = DOM.categorySelect.value;
        const difficulty = DOM.difficultySelect.value;
        const timerEnabled = DOM.timerToggle.checked;

        if (!window.questionsByCategory) {
            console.error('❌ questionsByCategory tidak ditemukan!');
            alert('❌ Data soal belum dimuat. Silakan refresh halaman.');
            return;
        }

        if (!window.questionsByCategory[category]) {
            console.error('❌ Kategori tidak ditemukan:', category);
            alert(`❌ Kategori "${category}" tidak ditemukan.\n\nSilakan pilih kategori lain.`);
            return;
        }

        const questions = window.questionsByCategory[category];
        if (!questions || questions.length === 0) {
            alert(`❌ Kategori "${category}" tidak memiliki soal.\n\nSilakan pilih kategori lain.`);
            return;
        }

        quizEngine.initQuiz(category, difficulty, timerEnabled);
    });

    DOM.exitQuizBtn.addEventListener('click', async () => {
    sound.playClick();
    if (await showCustomDialog('Yakin ingin keluar dari quiz? Progress akan hilang.')) {
        sound.playClick();
        quizEngine.resetQuiz();
    } else {
        sound.playClick();
    }
});

    DOM.continueBtn.addEventListener('click', () => {
        sound.playClick();
        quizEngine.nextQuestion();
    });

    DOM.hintBtn.addEventListener('click', () => {
        quizEngine.showHint();
    });

    DOM.retryBtn.addEventListener('click', () => {
        sound.playClick();
        const category = DOM.categorySelect.value;
        const difficulty = DOM.difficultySelect.value;
        const timerEnabled = DOM.timerToggle.checked;
        quizEngine.initQuiz(category, difficulty, timerEnabled);
    });

    DOM.homeBtn.addEventListener('click', () => {
        sound.playClick();
        quizEngine.resetQuiz();
    });

    DOM.historyBtn.addEventListener('click', () => {
        sound.playClick();
        renderHistory();
        quizEngine.showScreen('historyScreen');
        history.pushState({ source: 'zaxquiz', page: 'history', timestamp: Date.now() }, '', window.location.href);
    });

    DOM.backFromHistoryBtn.addEventListener('click', () => {
        sound.playClick();
        quizEngine.showScreen('homeScreen');
        quizEngine.updateHomeStats();
        history.pushState({ source: 'zaxquiz', page: 'home', timestamp: Date.now() }, '', window.location.href);
    });

    DOM.clearHistoryBtn.addEventListener('click', async () => {
        sound.playClick();
        if (await showCustomDialog('Yakin ingin menghapus semua riwayat?')) {
            sound.playClick();
            StorageManager.clearHistory();
            renderHistory();
            quizEngine.updateHomeStats();
        } else {
            sound.playClick();
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
       if (e.key === 'Escape' && quizEngine.state.isQuizActive) {
    e.preventDefault();
    sound.playClick();
    (async () => {
        if (await showCustomDialog('Yakin ingin keluar dari quiz?')) {
            sound.playClick();
            quizEngine.resetQuiz();
        } else {
            sound.playClick();
        }
    })();
}
        if (e.key === 'h' && quizEngine.state.isQuizActive) {
            quizEngine.showHint();
            e.preventDefault();
        }
        if (e.key === 't' || e.key === 'T') {
            theme.toggle();
            e.preventDefault();
        }
        if (e.key >= '1' && e.key <= '4' && quizEngine.state.isQuizActive && !quizEngine.state.answered) {
            const btns = DOM.optionsContainer.querySelectorAll('.option-btn');
            const idx = parseInt(e.key) - 1;
            if (btns[idx]) btns[idx].click();
        }
    });

// Sound saat ganti kategori
DOM.categorySelect.addEventListener('change', function() {
    sound.playClick();
});

// Sound saat ganti tingkat kesulitan
DOM.difficultySelect.addEventListener('change', function() {
    sound.playClick();
});

// Sound saat timer toggle
DOM.timerToggle.addEventListener('change', function() {
    sound.playClick();
});

    // ============================================
    // BACK NAVIGATION
    // ============================================
    window.addEventListener('popstate', function(e) {
        console.log('🔙 Back button pressed! State:', e.state);
        
        if (quizEngine.state.isQuizActive) {
            sound.playClick();
            const confirmed = confirm('Yakin ingin keluar dari quiz? Progress akan hilang dan tidak akan tersimpan di riwayat.');
            
            if (confirmed) {
                sound.playClick();
                clearQuizState();
                quizEngine.resetQuiz();
            } else {
                sound.playClick();
                history.pushState({ source: 'zaxquiz', page: 'quiz', timestamp: Date.now() }, '', window.location.href);
            }
            return;
        }
        
        if (e.state && e.state.source === 'zaxquiz') {
            const page = e.state.page;
            
            switch(page) {
                case 'home':
                    quizEngine.showScreen('homeScreen');
                    quizEngine.updateHomeStats();
                    break;
                case 'quiz':
                    const savedState = loadQuizState();
                    if (savedState && savedState.isQuizActive) {
                        AppState.currentCategory = savedState.currentCategory;
                        AppState.currentDifficulty = savedState.currentDifficulty;
                        AppState.timerEnabled = savedState.timerEnabled;
                        AppState.questions = savedState.questions;
                        AppState.currentIndex = savedState.currentIndex;
                        AppState.score = savedState.score;
                        AppState.totalQuestions = savedState.totalQuestions;
                        AppState.correctAnswers = savedState.correctAnswers;
                        AppState.wrongAnswers = savedState.wrongAnswers;
                        AppState.answered = savedState.answered;
                        AppState.startTime = savedState.startTime;
                        AppState.hintUsed = savedState.hintUsed;
                        AppState.isQuizActive = savedState.isQuizActive;
                        AppState.timeLeft = savedState.timeLeft;
                        AppState.currentUsedIndices = savedState.currentUsedIndices || [];
                        
                        quizEngine.updateUI();
                        quizEngine.updateProgress();
                        quizEngine.updateScore();
                        quizEngine.updateTimerVisibility();
                        quizEngine.showScreen('quizScreen');
                        quizEngine.showQuestion();
                        
                        if (AppState.timerEnabled && AppState.isQuizActive) {
                            quizEngine.updateTimerUI();
                            quizEngine.startTimer();
                        }
                        console.log('✅ Quiz state restored from back button');
                    }
                    break;
                case 'history':
                    renderHistory();
                    quizEngine.showScreen('historyScreen');
                    break;
                case 'result':
                    quizEngine.showScreen('resultScreen');
                    break;
                default:
                    quizEngine.showScreen('homeScreen');
            }
        } else {
            quizEngine.showScreen('homeScreen');
            quizEngine.updateHomeStats();
            history.replaceState({ source: 'zaxquiz', page: 'home', timestamp: Date.now() }, '', window.location.href);
        }
    });

    document.addEventListener('mousedown', function(e) {
        const target = e.target.closest('button, .btn, .option-btn, .header-btn');
        if (target) {
            setTimeout(() => target.blur(), 10);
        }
    });

    document.addEventListener('touchstart', function(e) {
        const target = e.target.closest('button, .btn, .option-btn, .header-btn');
        if (target) {
            setTimeout(() => target.blur(), 10);
        }
    });

    const soundPref = localStorage.getItem('zaxquiz-sound');
    if (soundPref === 'off') {
        sound.setEnabled(false);
        const icon = DOM.soundToggle.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-volume-mute';
        }
        DOM.soundToggle.title = 'Suara Nonaktif';
    }
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

    if (window.questionsByCategory) {
        const select = DOM.categorySelect;
        select.innerHTML = '';

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

        for (const key in window.questionsByCategory) {
            if (window.questionsByCategory[key] && window.questionsByCategory[key].length > 0) {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = categoryNames[key] || key;
                select.appendChild(option);
            }
        }
    }

    const savedState = loadQuizState();
    
    if (savedState && savedState.isQuizActive && savedState.questions && savedState.questions.length > 0) {
        AppState.currentCategory = savedState.currentCategory;
        AppState.currentDifficulty = savedState.currentDifficulty;
        AppState.timerEnabled = savedState.timerEnabled;
        AppState.questions = savedState.questions;
        AppState.currentIndex = savedState.currentIndex;
        AppState.score = savedState.score;
        AppState.totalQuestions = savedState.totalQuestions;
        AppState.correctAnswers = savedState.correctAnswers;
        AppState.wrongAnswers = savedState.wrongAnswers;
        AppState.answered = savedState.answered;
        AppState.startTime = savedState.startTime;
        AppState.hintUsed = savedState.hintUsed;
        AppState.isQuizActive = savedState.isQuizActive;
        AppState.timeLeft = savedState.timeLeft;
        AppState.currentUsedIndices = savedState.currentUsedIndices || [];
        
        quizEngine.updateUI();
        quizEngine.updateProgress();
        quizEngine.updateScore();
        quizEngine.updateTimerVisibility();
        
        quizEngine.showScreen('quizScreen');
        quizEngine.showQuestion();
        
        if (AppState.timerEnabled && AppState.isQuizActive) {
            quizEngine.updateTimerUI();
            quizEngine.startTimer();
        }
        
        history.replaceState({ source: 'zaxquiz', page: 'quiz', timestamp: Date.now() }, '', window.location.href);
        console.log('✅ State restored from refresh!');
    } else {
        quizEngine.showScreen('homeScreen');
        history.replaceState({ source: 'zaxquiz', page: 'home', timestamp: Date.now() }, '', window.location.href);
    }

    theme.applyTheme();
    initProtection();

    console.log('✅ ZaxQuiz ready!');
    console.log(`📚 ${Object.keys(window.questionsByCategory || {}).length} categories`);
    console.log(`📝 ${window.totalQuestions || 0} total questions`);
    console.log('🎯 Setiap quiz menampilkan 15 soal acak (tidak berulang)');
});

// Global exposure
window.ZaxQuiz = {
    AppState,
    quizEngine,
    sound,
    theme,
    StorageManager,
    shuffleArray,
    formatTime,
    getScoreEmoji,
    getResultMessageData,
    getResultMessage,
    getRandomQuestions,
    loadUsedQuestions,
    saveUsedQuestions,
    resetUsedQuestions
};

console.log('🚀 ZaxQuiz v6.0.0 - Result Emoji & Message berdasarkan SKOR loaded successfully!');