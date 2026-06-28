// ============================================
// TAMBAHKAN DI SCRIPT.JS
// ============================================

// ============================================
// ZAXQUIZ - MAIN APPLICATION
// ============================================

// CEK APAKAH QUESTIONS SUDAH LOAD
console.log('🔍 Checking questions...');
console.log('window.questionsByCategory:', window.questionsByCategory);

if (!window.questionsByCategory) {
    console.error('❌ Questions not loaded!');
    alert('Maaf, data soal gagal dimuat. Silakan refresh halaman.');
}

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
// SOUND SYSTEM
// ============================================
class SoundManager {
    constructor() {
        this.audioContext = null;
        this.enabled = true;
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.initialized = true;
        } catch (e) {
            console.warn('Web Audio API tidak didukung');
        }
    }

    playTone(frequency, duration = 200, type = 'sine', volume = 0.3) {
        if (!this.enabled || !this.initialized) return;
        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            oscillator.type = type;
            oscillator.frequency.value = frequency;
            gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration / 1000);
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            oscillator.start();
            oscillator.stop(this.audioContext.currentTime + duration / 1000);
        } catch (e) {}
    }

    playCorrect() {
        this.playTone(523, 100, 'sine', 0.3);
        setTimeout(() => this.playTone(659, 100, 'sine', 0.3), 100);
        setTimeout(() => this.playTone(784, 150, 'sine', 0.3), 200);
    }

    playWrong() {
        this.playTone(330, 200, 'sawtooth', 0.2);
        setTimeout(() => this.playTone(277, 300, 'sawtooth', 0.2), 200);
    }

    playClick() {
        this.playTone(800, 50, 'sine', 0.15);
    }

    playComplete() {
        const notes = [523, 587, 659, 784, 659, 784, 880];
        notes.forEach((note, i) => {
            setTimeout(() => this.playTone(note, 120, 'sine', 0.25), i * 130);
        });
    }

    playTimerWarning() {
        this.playTone(440, 80, 'square', 0.15);
    }

    toggle() {
        this.enabled = !this.enabled;
        if (!this.enabled && this.audioContext) {
            try { this.audioContext.suspend(); } catch(e) {}
        } else if (this.enabled && this.audioContext) {
            try { this.audioContext.resume(); } catch(e) {}
        }
        return this.enabled;
    }

    setEnabled(enabled) {
        this.enabled = enabled;
        if (!enabled && this.audioContext) {
            try { this.audioContext.suspend(); } catch(e) {}
        }
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
        
        // Reset state
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

        // Ambil soal
        let questions = this.getQuestionsForCategory(category);
        console.log(`📚 Found ${questions.length} questions for category`);

        // Filter difficulty
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

        // Acak dan ambil 50
        questions = shuffleArray(questions);
        this.state.questions = questions.slice(0, 50);
        this.state.totalQuestions = this.state.questions.length;
        
        console.log(`✅ Quiz ready with ${this.state.totalQuestions} questions`);

        // Tampilkan
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
        if (window.questionsByCategory && window.questionsByCategory[category]) {
            return window.questionsByCategory[category];
        }
        return this.getAllQuestions();
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

        // Acak pilihan
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

        // Category stats
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
        setTimeout(()

/**
 * ============================================
 * PROTECTION - CEGAH COPY, PASTE, DRAG
 * ============================================
 */

function initProtection() {
    // 1. Cegah klik kanan (context menu)
    document.addEventListener('contextmenu', function(e) {
        // Izinkan di input/textarea
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        e.preventDefault();
        return false;
    });

    // 2. Cegah keyboard shortcuts untuk copy/paste
    document.addEventListener('keydown', function(e) {
        // Cegah Ctrl+C, Ctrl+V, Ctrl+X
        if (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'x')) {
            // Izinkan di input/textarea
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }
            e.preventDefault();
            return false;
        }
        
        // Cegah F12 (DevTools)
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        
        // Cegah Ctrl+Shift+I (DevTools)
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
            e.preventDefault();
            return false;
        }
        
        // Cegah Ctrl+U (View Source)
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
            e.preventDefault();
            return false;
        }
    });

    // 3. Cegah drag
    document.addEventListener('dragstart', function(e) {
        // Izinkan di input/textarea
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        e.preventDefault();
        return false;
    });

    // 4. Cegah copy dari menu konteks
    document.addEventListener('copy', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        e.preventDefault();
        return false;
    });

    // 5. Cegah paste
    document.addEventListener('paste', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        e.preventDefault();
        return false;
    });

    // 6. Cegah cut
    document.addEventListener('cut', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        e.preventDefault();
        return false;
    });

    // 7. Cegah select all
    document.addEventListener('selectstart', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        e.preventDefault();
        return false;
    });

    console.log('🛡️ Protection aktif!');
}

// Panggil di DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    initProtection();
});

/**
 * ============================================
 * ZAXQUIZ - Main Application Script
 * ============================================
 * 
 * Deskripsi: Aplikasi quiz interaktif dengan
 * berbagai kategori, dark/light mode, sound,
 * timer, hint, dan riwayat skor.
 * 
 * @version 1.0.0
 * @author ZaxQuiz Team
 * ============================================
 */

// ============================================
// APP STATE
// ============================================

/**
 * State utama aplikasi
 * Menyimpan semua data yang diperlukan selama sesi berjalan
 */
const AppState = {
    // Konfigurasi quiz
    currentCategory: 'pengetahuan-umum',
    currentDifficulty: 'all',
    timerEnabled: true,
    soundEnabled: true,
    isDarkMode: false,
    
    // Data quiz
    questions: [],          // Array dari 50 soal yang sudah diacak
    currentIndex: 0,        // Index soal saat ini
    score: 0,               // Skor saat ini
    totalQuestions: 50,     // Total soal per sesi
    correctAnswers: 0,      // Jumlah jawaban benar
    wrongAnswers: 0,        // Jumlah jawaban salah
    answered: false,        // Apakah soal sudah dijawab
    startTime: null,        // Waktu mulai quiz
    endTime: null,          // Waktu selesai quiz
    
    // Timer
    timerInterval: null,
    timeLeft: 15,
    maxTime: 15,
    
    // Riwayat
    history: [],
    
    // Hint
    hintUsed: false,
    
    // Status
    isQuizActive: false,
    isLoading: false,
};

// ============================================
// DOM REFERENCES
// ============================================

/**
 * Referensi ke semua elemen DOM yang dibutuhkan
 * Diinisialisasi setelah DOM siap
 */
const DOM = {};

function initDOM() {
    // Screens
    DOM.homeScreen = document.getElementById('homeScreen');
    DOM.quizScreen = document.getElementById('quizScreen');
    DOM.explanationScreen = document.getElementById('explanationScreen');
    DOM.resultScreen = document.getElementById('resultScreen');
    DOM.historyScreen = document.getElementById('historyScreen');
    
    // Header
    DOM.themeToggle = document.getElementById('themeToggle');
    DOM.soundToggle = document.getElementById('soundToggle');
    
    // Home Screen
    DOM.categorySelect = document.getElementById('categorySelect');
    DOM.difficultySelect = document.getElementById('difficultySelect');
    DOM.timerToggle = document.getElementById('timerToggle');
    DOM.startQuizBtn = document.getElementById('startQuizBtn');
    DOM.historyBtn = document.getElementById('historyBtn');
    
    // Stats
    DOM.totalQuizzes = document.getElementById('totalQuizzes');
    DOM.avgScore = document.getElementById('avgScore');
    DOM.bestScore = document.getElementById('bestScore');
    
    // Quiz Screen
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
    
    // Explanation Screen
    DOM.explanationIcon = document.getElementById('explanationIcon');
    DOM.explanationTitle = document.getElementById('explanationTitle');
    DOM.correctAnswer = document.getElementById('correctAnswer');
    DOM.explanationText = document.getElementById('explanationText');
    DOM.continueBtn = document.getElementById('continueBtn');
    
    // Result Screen
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
    
    // History Screen
    DOM.historyList = document.getElementById('historyList');
    DOM.clearHistoryBtn = document.getElementById('clearHistoryBtn');
    DOM.backFromHistoryBtn = document.getElementById('backFromHistoryBtn');
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Acak array menggunakan Fisher-Yates algorithm
 * @param {Array} array - Array yang akan diacak
 * @returns {Array} Array yang sudah diacak (array baru)
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Format waktu dari detik ke menit:detik
 * @param {number} seconds - Waktu dalam detik
 * @returns {string} Waktu terformat (mm:ss)
 */
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Delay function untuk async/await
 * @param {number} ms - Milidetik untuk delay
 * @returns {Promise} Promise yang resolve setelah delay
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Dapatkan emoji berdasarkan persentase skor
 * @param {number} percentage - Persentase skor (0-100)
 * @returns {string} Emoji yang sesuai
 */
function getScoreEmoji(percentage) {
    if (percentage >= 90) return '🏆';
    if (percentage >= 75) return '🌟';
    if (percentage >= 60) return '⭐';
    if (percentage >= 40) return '📚';
    return '💪';
}

/**
 * Dapatkan kelas untuk badge persentase
 * @param {number} percentage - Persentase skor (0-100)
 * @returns {string} Nama kelas CSS
 */
function getPercentageClass(percentage) {
    if (percentage >= 70) return 'good';
    if (percentage >= 40) return 'medium';
    return 'bad';
}

// ============================================
// SOUND SYSTEM
// ============================================

/**
 * Sound Manager - Menangani semua efek suara
 * Menggunakan Web Audio API untuk generate suara tanpa file eksternal
 */
class SoundManager {
    constructor() {
        this.audioContext = null;
        this.enabled = true;
        this.initialized = false;
    }

    /**
     * Inisialisasi Audio Context (harus dipanggil setelah user interaction)
     */
    init() {
        if (this.initialized) return;
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.initialized = true;
        } catch (e) {
            console.warn('Web Audio API tidak didukung di browser ini');
        }
    }

    /**
     * Mainkan suara dengan frekuensi dan durasi tertentu
     * @param {number} frequency - Frekuensi nada (Hz)
     * @param {number} duration - Durasi suara (ms)
     * @param {string} type - Tipe waveform ('sine', 'square', 'sawtooth', 'triangle')
     * @param {number} volume - Volume (0-1)
     */
    playTone(frequency, duration = 200, type = 'sine', volume = 0.3) {
        if (!this.enabled || !this.initialized) return;
        
        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.type = type;
            oscillator.frequency.value = frequency;
            
            gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration / 1000);
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.start();
            oscillator.stop(this.audioContext.currentTime + duration / 1000);
        } catch (e) {
            // Silent fail jika ada error audio
        }
    }

    /**
     * Suara jawaban benar - Nada ceria naik
     */
    playCorrect() {
        this.playTone(523, 100, 'sine', 0.3); // C5
        setTimeout(() => this.playTone(659, 100, 'sine', 0.3), 100); // E5
        setTimeout(() => this.playTone(784, 150, 'sine', 0.3), 200); // G5
    }

    /**
     * Suara jawaban salah - Nada rendah turun
     */
    playWrong() {
        this.playTone(330, 200, 'sawtooth', 0.2);
        setTimeout(() => this.playTone(277, 300, 'sawtooth', 0.2), 200);
    }

    /**
     * Suara klik tombol
     */
    playClick() {
        this.playTone(800, 50, 'sine', 0.15);
    }

    /**
     * Suara selesai quiz - Melodi bahagia
     */
    playComplete() {
        const notes = [523, 587, 659, 784, 659, 784, 880];
        notes.forEach((note, i) => {
            setTimeout(() => this.playTone(note, 120, 'sine', 0.25), i * 130);
        });
    }

    /**
     * Suara timer warning - Bip cepat
     */
    playTimerWarning() {
        this.playTone(440, 80, 'square', 0.15);
    }

    /**
     * Toggle sound on/off
     */
    toggle() {
        this.enabled = !this.enabled;
        if (!this.enabled) {
            // Matikan semua suara yang sedang berjalan
            if (this.audioContext) {
                try {
                    this.audioContext.suspend();
                } catch (e) {}
            }
        } else {
            if (this.audioContext) {
                try {
                    this.audioContext.resume();
                } catch (e) {}
            }
        }
        return this.enabled;
    }

    /**
     * Set sound enabled
     */
    setEnabled(enabled) {
        this.enabled = enabled;
        if (!enabled && this.audioContext) {
            try {
                this.audioContext.suspend();
            } catch (e) {}
        }
    }
}

// Inisialisasi Sound Manager
const sound = new SoundManager();

// ============================================
// THEME SYSTEM
// ============================================

/**
 * Theme Manager - Menangani dark/light mode
 */
class ThemeManager {
    constructor() {
        this.isDark = localStorage.getItem('zaxquiz-theme') === 'dark';
        this.applyTheme();
    }

    /**
     * Terapkan tema berdasarkan state
     */
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
        DOM.themeToggle.innerHTML = this.isDark ? '☀️' : '🌙';
        DOM.themeToggle.title = this.isDark ? 'Mode Terang' : 'Mode Gelap';
    }

    /**
     * Toggle tema
     */
    toggle() {
        this.isDark = !this.isDark;
        localStorage.setItem('zaxquiz-theme', this.isDark ? 'dark' : 'light');
        this.applyTheme();
        sound.playClick();
    }

    /**
     * Set tema
     */
    setDark(isDark) {
        this.isDark = isDark;
        localStorage.setItem('zaxquiz-theme', this.isDark ? 'dark' : 'light');
        this.applyTheme();
    }
}

// Inisialisasi Theme Manager
const theme = new ThemeManager();

// ============================================
// STORAGE SYSTEM
// ============================================

/**
 * Storage Manager - Menangani LocalStorage
 */
class StorageManager {
    /**
     * Simpan riwayat quiz
     * @param {Object} data - Data quiz yang akan disimpan
     */
    static saveHistory(data) {
        const history = this.getHistory();
        history.unshift({
            id: Date.now(),
            date: new Date().toISOString(),
            ...data
        });
        
        // Batasi hanya 50 riwayat terakhir
        if (history.length > 50) {
            history.length = 50;
        }
        
        localStorage.setItem('zaxquiz-history', JSON.stringify(history));
    }

    /**
     * Ambil riwayat quiz
     * @returns {Array} Array riwayat quiz
     */
    static getHistory() {
        try {
            const data = localStorage.getItem('zaxquiz-history');
            return data ? JSON.parse(data) : [];
        } catch (e) {
            return [];
        }
    }

    /**
     * Hapus semua riwayat
     */
    static clearHistory() {
        localStorage.removeItem('zaxquiz-history');
    }

    /**
     * Ambil statistik dari riwayat
     * @returns {Object} Statistik { total, avgScore, bestScore }
     */
    static getStats() {
        const history = this.getHistory();
        if (history.length === 0) {
            return { total: 0, avgScore: 0, bestScore: 0 };
        }
        
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

/**
 * Quiz Engine - Inti dari aplikasi quiz
 */
class QuizEngine {
    constructor() {
        this.state = AppState;
        this.sound = sound;
        this.theme = theme;
    }

    /**
     * Inisialisasi quiz
     * @param {string} category - Kategori yang dipilih
     * @param {string} difficulty - Tingkat kesulitan
     * @param {boolean} timerEnabled - Apakah timer aktif
     */
    initQuiz(category, difficulty, timerEnabled) {
        // Reset state
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
        
        // Ambil soal berdasarkan kategori
        let questions = this.getQuestionsForCategory(category);
        
        // Filter berdasarkan kesulitan
        if (difficulty !== 'all') {
            questions = questions.filter(q => q.difficulty === difficulty);
            // Jika kurang dari 50 soal, ambil semua yang tersedia
            if (questions.length < 50) {
                // Tambahkan soal dari kategori lain dengan kesulitan yang sama
                const allQuestions = this.getAllQuestions();
                const filtered = allQuestions.filter(q => q.difficulty === difficulty);
                const shuffled = shuffleArray(filtered);
                const need = 50 - questions.length;
                const additional = shuffled.slice(0, need);
                questions = [...questions, ...additional];
            }
        }
        
        // Acak soal dan ambil 50
        questions = shuffleArray(questions);
        this.state.questions = questions.slice(0, 50);
        this.state.totalQuestions = this.state.questions.length;
        
        // Tampilkan soal pertama
        this.showQuestion();
        this.updateUI();
        this.showScreen('quizScreen');
        
        // Inisialisasi timer
        if (this.state.timerEnabled) {
            this.startTimer();
        }
        
        sound.playClick();
    }

    /**
     * Ambil semua soal dari semua kategori
     * @returns {Array} Array semua soal
     */
    getAllQuestions() {
        // Menggabungkan semua soal dari window.questionsByCategory
        const all = [];
        for (const category in window.questionsByCategory) {
            all.push(...window.questionsByCategory[category]);
        }
        return all;
    }

    /**
     * Ambil soal berdasarkan kategori
     * @param {string} category - Nama kategori
     * @returns {Array} Array soal
     */
    getQuestionsForCategory(category) {
        if (window.questionsByCategory && window.questionsByCategory[category]) {
            return window.questionsByCategory[category];
        }
        // Fallback: ambil semua soal jika kategori tidak ditemukan
        return this.getAllQuestions();
    }

    /**
     * Tampilkan soal saat ini
     */
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
        
        // Update nomor soal
        DOM.questionNumber.textContent = `Pertanyaan #${index + 1}`;
        DOM.questionText.textContent = question.question;
        
        // Acak pilihan jawaban
        const shuffledOptions = shuffleArray(
            question.options.map((text, i) => ({
                text,
                index: i,
                isCorrect: i === question.correctIndex
            }))
        );
        
        // Render options
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
        
        // Reset hint
        DOM.hintContainer.style.display = 'none';
        DOM.hintText.textContent = '';
        
        // Update progress
        this.updateProgress();
        this.updateScore();
        
        // Sembunyikan timer warning
        DOM.timerBar.classList.remove('warning', 'danger');
        
        // Reset timer
        if (this.state.timerEnabled) {
            this.state.timeLeft = this.state.maxTime;
            this.updateTimerUI();
            this.startTimer();
        }
    }

    /**
     * Handle jawaban user
     * @param {HTMLElement} btn - Elemen tombol yang diklik
     * @param {boolean} isCorrect - Apakah jawaban benar
     * @param {Object} question - Objek soal
     */
    handleAnswer(btn, isCorrect, question) {
        if (this.state.answered) return;
        this.state.answered = true;
        
        // Hentikan timer
        this.stopTimer();
        
        // Disable semua tombol
        const allBtns = DOM.optionsContainer.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.disabled = true);
        
        // Tandai jawaban yang benar
        allBtns.forEach(b => {
            if (b.dataset.correct === 'true') {
                b.classList.add('correct');
            }
        });
        
        if (isCorrect) {
            // Jawaban benar
            btn.classList.add('correct');
            this.state.score += 1;
            this.state.correctAnswers += 1;
            sound.playCorrect();
            
            // Lanjut otomatis setelah delay
            setTimeout(() => this.nextQuestion(), 800);
        } else {
            // Jawaban salah
            btn.classList.add('wrong');
            this.state.wrongAnswers += 1;
            sound.playWrong();
            
            // Tampilkan penjelasan
            this.showExplanation(question);
        }
        
        this.updateScore();
        this.updateProgress();
    }

    /**
     * Tampilkan penjelasan saat jawaban salah
     * @param {Object} question - Objek soal
     */
    showExplanation(question) {
        DOM.explanationIcon.textContent = '❌';
        DOM.explanationTitle.textContent = 'Jawaban Kurang Tepat!';
        DOM.correctAnswer.textContent = question.options[question.correctIndex];
        DOM.explanationText.textContent = question.explanation;
        this.showScreen('explanationScreen');
    }

    /**
     * Lanjut ke soal berikutnya
     */
    nextQuestion() {
        this.state.currentIndex += 1;
        if (this.state.currentIndex >= this.state.questions.length) {
            this.finishQuiz();
        } else {
            this.showScreen('quizScreen');
            this.showQuestion();
        }
        sound.playClick();
    }

    /**
     * Selesaikan quiz
     */
    finishQuiz() {
        this.state.isQuizActive = false;
        this.state.endTime = Date.now();
        this.stopTimer();
        
        const total = this.state.totalQuestions;
        const correct = this.state.correctAnswers;
        const wrong = this.state.wrongAnswers;
        const percentage = Math.round((correct / total) * 100);
        const timeSpent = Math.floor((this.state.endTime - this.state.startTime) / 1000);
        
        // Tampilkan hasil
        DOM.resultEmoji.textContent = getScoreEmoji(percentage);
        DOM.resultTitle.textContent = percentage >= 70 ? '🎉 Hebat sekali!' : '💪 Terus belajar!';
        DOM.resultScore.textContent = correct;
        DOM.resultCorrect.textContent = correct;
        DOM.resultWrong.textContent = wrong;
        DOM.resultPercentage.textContent = `${percentage}%`;
        DOM.resultTime.textContent = formatTime(timeSpent);
        
        // Statistik per kategori (jika ada)
        this.showCategoryStats();
        
        sound.playComplete();
        this.showScreen('resultScreen');
        
        // Simpan ke riwayat
        StorageManager.saveHistory({
            category: this.state.currentCategory,
            difficulty: this.state.currentDifficulty,
            score: correct,
            total: total,
            percentage: percentage,
            time: timeSpent
        });
        
        // Update statistik home
        this.updateHomeStats();
    }

    /**
     * Tampilkan statistik per kategori di hasil
     */
    showCategoryStats() {
        const stats = {};
        this.state.questions.forEach(q => {
            const cat = q.category || 'Umum';
            if (!stats[cat]) {
                stats[cat] = { correct: 0, total: 0 };
            }
            stats[cat].total += 1;
        });
        
        // Tambahkan data benar per kategori (dari jawaban)
        // Ini hanya perkiraan karena kita tidak track per kategori
        DOM.resultStats.innerHTML = Object.keys(stats).map(cat => `
            <div class="result-stats-item">
                <span class="stat-category">📂 ${cat}</span>
                <span class="stat-score">${stats[cat].total} soal</span>
            </div>
        `).join('');
    }

    /**
     * Update progress bar dan counter
     */
    updateProgress() {
        const total = this.state.totalQuestions;
        const current = this.state.currentIndex + 1;
        const progress = Math.min((current / total) * 100, 100);
        
        DOM.progressBar.style.width = `${progress}%`;
        DOM.questionCounter.textContent = `${Math.min(current, total)} / ${total}`;
        DOM.progressPercentage.textContent = `${Math.round(progress)}%`;
    }

    /**
     * Update skor
     */
    updateScore() {
        DOM.currentScore.textContent = this.state.score;
    }

    /**
     * Update timer UI
     */
    updateTimerUI() {
        const percentage = (this.state.timeLeft / this.state.maxTime) * 100;
        DOM.timerBar.style.width = `${percentage}%`;
        DOM.timerText.textContent = `⏱️ ${Math.ceil(this.state.timeLeft)}s`;
        
        // Ubah warna berdasarkan sisa waktu
        DOM.timerBar.classList.remove('warning', 'danger');
        if (this.state.timeLeft <= 3) {
            DOM.timerBar.classList.add('danger');
        } else if (this.state.timeLeft <= 7) {
            DOM.timerBar.classList.add('warning');
        }
    }

    /**
     * Start timer
     */
    startTimer() {
        this.stopTimer();
        if (!this.state.timerEnabled) return;
        
        this.state.timeLeft = this.state.maxTime;
        this.updateTimerUI();
        
        this.state.timerInterval = setInterval(() => {
            this.state.timeLeft -= 0.1;
            this.updateTimerUI();
            
            if (this.state.timeLeft <= 0) {
                // Timer habis
                this.stopTimer();
                this.handleTimeout();
            }
        }, 100);
    }

    /**
     * Stop timer
     */
    stopTimer() {
        if (this.state.timerInterval) {
            clearInterval(this.state.timerInterval);
            this.state.timerInterval = null;
        }
    }

    /**
     * Handle timeout - jawaban otomatis salah
     */
    handleTimeout() {
        if (this.state.answered) return;
        this.state.answered = true;
        
        // Disable semua tombol
        const allBtns = DOM.optionsContainer.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.disabled = true);
        
        // Tandai jawaban yang benar
        allBtns.forEach(b => {
            if (b.dataset.correct === 'true') {
                b.classList.add('correct');
            }
        });
        
        // Tandai sebagai salah
        this.state.wrongAnswers += 1;
        sound.playWrong();
        
        // Ambil soal saat ini
        const question = this.state.questions[this.state.currentIndex];
        
        // Tampilkan penjelasan
        setTimeout(() => {
            this.showExplanation(question);
        }, 300);
        
        this.updateProgress();
    }

    /**
     * Tampilkan hint
     */
    showHint() {
        if (this.state.answered) return;
        if (this.state.hintUsed) return;
        
        const question = this.state.questions[this.state.currentIndex];
        DOM.hintText.textContent = question.hint || 'Petunjuk: Pikirkan dengan cermat!';
        DOM.hintContainer.style.display = 'block';
        this.state.hintUsed = true;
        sound.playClick();
        
        // Animasi muncul
        DOM.hintContainer.style.animation = 'none';
        setTimeout(() => {
            DOM.hintContainer.style.animation = 'fadeSlideIn 0.3s ease';
        }, 10);
    }

    /**
     * Reset quiz
     */
    resetQuiz() {
        this.stopTimer();
        this.state.isQuizActive = false;
        this.state.currentIndex = 0;
        this.state.score = 0;
        this.state.correctAnswers = 0;
        this.state.wrongAnswers = 0;
        this.state.questions = [];
        this.showScreen('homeScreen');
        sound.playClick();
    }

    /**
     * Tampilkan screen tertentu
     * @param {string} screenId - ID screen yang akan ditampilkan
     */
    showScreen(screenId) {
        // Sembunyikan semua screen
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.remove('active');
        });
        
        // Tampilkan screen yang dipilih
        const screen = document.getElementById(screenId);
        if (screen) {
            screen.classList.add('active');
            // Reset animasi
            screen.style.animation = 'none';
            setTimeout(() => {
                screen.style.animation = 'fadeSlideIn 0.4s ease-out';
            }, 10);
        }
        
        // Update header visibility
        const header = document.querySelector('.app-header');
        if (screenId === 'homeScreen' || screenId === 'historyScreen') {
            header.style.display = 'flex';
        } else {
            header.style.display = 'flex';
        }
    }

    /**
     * Update statistik di home screen
     */
    updateHomeStats() {
        const stats = StorageManager.getStats();
        DOM.totalQuizzes.textContent = stats.total;
        DOM.avgScore.textContent = `${stats.avgScore}%`;
        DOM.bestScore.textContent = stats.bestScore;
    }

    /**
     * Update UI yang bersifat global
     */
    updateUI() {
        // Update quiz info
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

/**
 * Setup semua event listeners
 */
function setupEventListeners() {
    // Theme Toggle
    DOM.themeToggle.addEventListener('click', () => {
        theme.toggle();
    });

    // Sound Toggle
    DOM.soundToggle.addEventListener('click', () => {
        const enabled = sound.toggle();
        DOM.soundToggle.innerHTML = enabled ? '🔊' : '🔇';
        DOM.soundToggle.title = enabled ? 'Suara Aktif' : 'Suara Nonaktif';
        // Simpan preferensi
        localStorage.setItem('zaxquiz-sound', enabled ? 'on' : 'off');
    });

    // Start Quiz
    DOM.startQuizBtn.addEventListener('click', () => {
        const category = DOM.categorySelect.value;
        const difficulty = DOM.difficultySelect.value;
        const timerEnabled = DOM.timerToggle.checked;
        
        // Inisialisasi audio context (diperlukan untuk suara)
        sound.init();
        
        // Cek apakah soal tersedia
        if (!window.questionsByCategory || !window.questionsByCategory[category]) {
            alert('Mohon tunggu, soal sedang dimuat...');
            return;
        }
        
        quizEngine.initQuiz(category, difficulty, timerEnabled);
    });

    // Exit Quiz
    DOM.exitQuizBtn.addEventListener('click', () => {
        if (confirm('Yakin ingin keluar dari quiz? Progress akan hilang.')) {
            quizEngine.resetQuiz();
        }
    });

    // Continue from explanation
    DOM.continueBtn.addEventListener('click', () => {
        quizEngine.nextQuestion();
    });

    // Hint
    DOM.hintBtn.addEventListener('click', () => {
        quizEngine.showHint();
    });

    // Retry
    DOM.retryBtn.addEventListener('click', () => {
        const category = DOM.categorySelect.value;
        const difficulty = DOM.difficultySelect.value;
        const timerEnabled = DOM.timerToggle.checked;
        quizEngine.initQuiz(category, difficulty, timerEnabled);
    });

    // Home
    DOM.homeBtn.addEventListener('click', () => {
        quizEngine.resetQuiz();
    });

    // History
    DOM.historyBtn.addEventListener('click', () => {
        renderHistory();
        quizEngine.showScreen('historyScreen');
        sound.playClick();
    });

    // Back from history
    DOM.backFromHistoryBtn.addEventListener('click', () => {
        quizEngine.showScreen('homeScreen');
        quizEngine.updateHomeStats();
        sound.playClick();
    });

    // Clear history
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
        // Escape untuk keluar quiz
        if (e.key === 'Escape' && quizEngine.state.isQuizActive) {
            if (confirm('Yakin ingin keluar dari quiz?')) {
                quizEngine.resetQuiz();
            }
        }
        // H untuk hint
        if (e.key === 'h' && quizEngine.state.isQuizActive) {
            quizEngine.showHint();
        }
        // 1-4 untuk pilihan jawaban
        if (e.key >= '1' && e.key <= '4' && quizEngine.state.isQuizActive && !quizEngine.state.answered) {
            const btns = DOM.optionsContainer.querySelectorAll('.option-btn');
            const idx = parseInt(e.key) - 1;
            if (btns[idx]) btns[idx].click();
        }
    });

    // Load sound preference
    const soundPref = localStorage.getItem('zaxquiz-sound');
    if (soundPref === 'off') {
        sound.setEnabled(false);
        DOM.soundToggle.innerHTML = '🔇';
        DOM.soundToggle.title = 'Suara Nonaktif';
    }
}

/**
 * Render riwayat di history screen
 */
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
    
    history.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        const date = new Date(item.date);
        const dateStr = date.toLocaleDateString('id-ID', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
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
// INITIALIZATION
// ============================================

// Inisialisasi Quiz Engine
const quizEngine = new QuizEngine();

/**
 * Inisialisasi aplikasi saat DOM siap
 */
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi DOM references
    initDOM();
    
    // Setup event listeners
    setupEventListeners();
    
    // Update stats di home
    quizEngine.updateHomeStats();
    
    // Tampilkan home screen
    quizEngine.showScreen('homeScreen');
    
    // Load kategori ke select
    if (window.questionsByCategory) {
        const select = DOM.categorySelect;
        // Clear existing options (keep first one)
        while (select.options.length > 0) {
            select.remove(0);
        }
        
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
            const option = document.createElement('option');
            option.value = key;
            option.textContent = categoryNames[key] || key;
            select.appendChild(option);
        }
    }
    
    console.log('🎯 ZaxQuiz siap digunakan!');
    console.log(`📚 ${Object.keys(window.questionsByCategory || {}).length} kategori tersedia`);
    console.log(`📝 Total soal: ${window.totalQuestions || '?'}`);
});

// ============================================
// GLOBAL EXPOSURE (untuk debugging)
// ============================================

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

// ============================================
// TAMBAHKAN DI SCRIPT.JS (setelah kode yang ada)
// ============================================

/**
 * ============================================
 * FITUR TAMBAHAN
 * ============================================
 */

// ============================================
// 1. ANIMASI SLIMEY SQUISHY UNTUK SEMUA TOMBOL
// ============================================

/**
 * Tambahkan efek squishy ke semua tombol secara dinamis
 */
function initSquishyAnimations() {
    document.querySelectorAll('.btn-squishy').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Efek squishy sudah ada di CSS
            // Tapi kita tambahkan efek ripple
            createRipple(e, this);
        });
    });
}

/**
 * Buat efek ripple pada tombol
 */
function createRipple(e, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'ripple';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ============================================
// 2. CONFETTI ANIMATION UNTUK SKOR TINGGI
// ============================================

/**
 * Tampilkan confetti saat skor tinggi
 * @param {number} percentage - Persentase skor
 */
function showConfetti(percentage) {
    if (percentage < 70) return;
    
    const colors = ['#6C63FF', '#FF6B9D', '#FFD93D', '#6BCB77', '#FF6B6B', '#FFA94D'];
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
    
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (Math.random() * 10 + 5) + 'px';
        confetti.style.height = (Math.random() * 10 + 5) + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.animationDelay = (Math.random() * 2) + 's';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        container.appendChild(confetti);
        
        // Hapus confetti setelah animasi selesai
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
    
    // Hapus container setelah semua confetti selesai
    setTimeout(() => {
        container.remove();
    }, 4500);
}

// ============================================
// 3. KEYBOARD SHORTCUTS - TAMBAHAN
// ============================================

/**
 * Tambahkan keyboard shortcuts tambahan
 */
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl + H untuk home
        if (e.ctrlKey && e.key === 'h') {
            e.preventDefault();
            if (!quizEngine.state.isQuizActive) {
                quizEngine.showScreen('homeScreen');
                quizEngine.updateHomeStats();
                sound.playClick();
            }
        }
        
        // Ctrl + R untuk restart quiz
        if (e.ctrlKey && e.key === 'r') {
            e.preventDefault();
            if (quizEngine.state.isQuizActive) {
                if (confirm('Yakin ingin mereset quiz?')) {
                    const category = DOM.categorySelect.value;
                    const difficulty = DOM.difficultySelect.value;
                    const timerEnabled = DOM.timerToggle.checked;
                    quizEngine.initQuiz(category, difficulty, timerEnabled);
                }
            }
        }
        
        // ? untuk menampilkan shortcut help
        if (e.key === '?' && !quizEngine.state.isQuizActive) {
            showShortcutHelp();
        }
    });
}

/**
 * Tampilkan help keyboard shortcuts
 */
function showShortcutHelp() {
    const help = document.createElement('div');
    help.className = 'shortcut-help';
    help.innerHTML = `
        <div class="shortcut-help-content">
            <h3>⌨️ Keyboard Shortcuts</h3>
            <ul>
                <li><kbd>1</kbd> - <kbd>4</kbd> Pilih jawaban</li>
                <li><kbd>H</kbd> - Tampilkan hint</li>
                <li><kbd>ESC</kbd> - Keluar quiz</li>
                <li><kbd>Ctrl</kbd> + <kbd>H</kbd> - Kembali ke Home</li>
                <li><kbd>Ctrl</kbd> + <kbd>R</kbd> - Restart quiz</li>
                <li><kbd>?</kbd> - Tampilkan help ini</li>
            </ul>
            <button class="btn btn-secondary btn-squishy" onclick="this.parentElement.parentElement.remove()">
                Tutup
            </button>
        </div>
    `;
    document.body.appendChild(help);
    
    // Tutup dengan klik di luar
    help.addEventListener('click', (e) => {
        if (e.target === help) {
            help.remove();
        }
    });
}

// ============================================
// 4. AUTO-SAVE PROGRESS (LocalStorage)
// ============================================

/**
 * Simpan progress quiz ke localStorage
 */
function saveProgress() {
    if (!quizEngine.state.isQuizActive) return;
    
    const progress = {
        category: quizEngine.state.currentCategory,
        difficulty: quizEngine.state.currentDifficulty,
        index: quizEngine.state.currentIndex,
        score: quizEngine.state.score,
        correctAnswers: quizEngine.state.correctAnswers,
        wrongAnswers: quizEngine.state.wrongAnswers,
        timestamp: Date.now()
    };
    
    localStorage.setItem('zaxquiz-progress', JSON.stringify(progress));
}

/**
 * Load progress quiz dari localStorage
 */
function loadProgress() {
    try {
        const data = localStorage.getItem('zaxquiz-progress');
        if (!data) return null;
        return JSON.parse(data);
    } catch (e) {
        return null;
    }
}

/**
 * Cek dan tawarkan untuk melanjutkan quiz yang tersimpan
 */
function checkSavedProgress() {
    const progress = loadProgress();
    if (!progress) return;
    
    // Cek apakah progress masih valid (kurang dari 1 jam)
    const elapsed = Date.now() - progress.timestamp;
    if (elapsed > 3600000) {
        localStorage.removeItem('zaxquiz-progress');
        return;
    }
    
    // Tawarkan untuk melanjutkan
    if (confirm(`💾 Ada quiz tersimpan dari ${new Date(progress.timestamp).toLocaleTimeString()}. Lanjutkan?`)) {
        // Set state
        DOM.categorySelect.value = progress.category;
        DOM.difficultySelect.value = progress.difficulty;
        
        // Lanjutkan quiz
        quizEngine.initQuiz(progress.category, progress.difficulty, DOM.timerToggle.checked);
        
        // Set state ke posisi tersimpan
        quizEngine.state.currentIndex = progress.index;
        quizEngine.state.score = progress.score;
        quizEngine.state.correctAnswers = progress.correctAnswers;
        quizEngine.state.wrongAnswers = progress.wrongAnswers;
        
        // Tampilkan soal yang sesuai
        quizEngine.showQuestion();
        quizEngine.updateUI();
        quizEngine.updateProgress();
        quizEngine.updateScore();
        
        sound.playClick();
    } else {
        localStorage.removeItem('zaxquiz-progress');
    }
}

// ============================================
// 5. EFEK SUARA TAMBAHAN
// ============================================

/**
 * Tambahkan efek suara untuk timer warning
 */
// Tambahkan ke SoundManager class di script.js
// Cari method playTimerWarning dan tambahkan:

// Di sound.js / SoundManager:
// playTimerWarning() {
//     if (!this.enabled || !this.initialized) return;
//     
//     try {
//         const oscillator = this.audioContext.createOscillator();
//         const gainNode = this.audioContext.createGain();
//         
//         oscillator.type = 'square';
//         oscillator.frequency.value = 880;
//         
//         gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
//         gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
//         
//         oscillator.connect(gainNode);
//         gainNode.connect(this.audioContext.destination);
//         
//         oscillator.start();
//         oscillator.stop(this.audioContext.currentTime + 0.1);
//     } catch (e) {
//         // Silent fail
//     }
// }

// ============================================
// 6. ANIMASI TRANSISI SOAL LEBIH HALUS
// ============================================

/**
 * Tambahkan animasi transisi yang lebih halus untuk soal
 */
// Override showQuestion di QuizEngine
// Tambahkan di awal method showQuestion:

// // Animasi keluar
// const questionArea = document.querySelector('.question-area');
// questionArea.style.animation = 'fadeOut 0.2s ease forwards';
// 
// await delay(200);
// 
// // Render soal baru
// // ... existing code ...
// 
// // Animasi masuk
// questionArea.style.animation = 'fadeSlideIn 0.3s ease forwards';

// Tambahkan keyframe fadeOut di CSS:
/*
@keyframes fadeOut {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-20px);
    }
}
*/

// ============================================
// 7. RESPONSIVE TOUCH OPTIMIZATION
// ============================================

/**
 * Optimasi untuk perangkat sentuh
 */
function initTouchOptimization() {
    // Hapus hover effect di touch devices
    if ('ontouchstart' in window) {
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('touchstart', function() {
                // Tidak ada hover di touch
            }, { passive: true });
        });
    }
    
    // Aktifkan haptic feedback jika tersedia
    if (navigator.vibrate) {
        document.querySelectorAll('.btn, .option-btn').forEach(el => {
            el.addEventListener('click', () => {
                navigator.vibrate(10);
            });
        });
    }
}

// ============================================
// 8. DARK MODE AUTO DETECTION
// ============================================

/**
 * Deteksi preferensi dark mode sistem
 */
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (!localStorage.getItem('zaxquiz-theme')) {
            theme.setDark(true);
        }
    }
    
    // Listen for changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('zaxquiz-theme')) {
            theme.setDark(e.matches);
        }
    });
}

// ============================================
// 9. PERFORMANCE OPTIMIZATION
// ============================================

/**
 * Lazy loading untuk soal (load per kategori)
 */
function preloadCategory(category) {
    // Soal sudah dimuat di questions.js
    // Tapi kita bisa preload untuk kategori yang mungkin dipilih
}

/**
 * Debounce untuk event yang sering dipanggil
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// 10. ERROR HANDLING & FALLBACK
// ============================================

/**
 * Error handling global
 */
function initErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('ZaxQuiz Error:', e.message);
        // Tampilkan pesan error yang user-friendly
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-toast';
        errorDiv.innerHTML = `
            <span class="error-icon">⚠️</span>
            <span class="error-message">Terjadi kesalahan. Silakan refresh halaman.</span>
            <button onclick="this.parentElement.remove()">✕</button>
        `;
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    });
}

// ============================================
// INISIALISASI FITUR TAMBAHAN
// ============================================

// Tambahkan ke DOMContentLoaded:
document.addEventListener('DOMContentLoaded', function() {
    // ... existing init code ...
    
    // Inisialisasi fitur tambahan
    initSquishyAnimations();
    initKeyboardShortcuts();
    initTouchOptimization();
    detectSystemTheme();
    initErrorHandling();
    
    // Cek saved progress
    setTimeout(() => {
        checkSavedProgress();
    }, 1000);
    
    // Auto-save progress setiap 10 detik
    setInterval(() => {
        saveProgress();
    }, 10000);
    
    console.log('✨ Fitur tambahan ZaxQuiz aktif!');
});
