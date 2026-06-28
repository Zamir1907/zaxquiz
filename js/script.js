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
    
    // ✅ TAMBAH: Validasi kategori PERTAMA
    if (!category) {
        console.error('❌ ERROR: Kategori tidak dipilih!');
        alert('⚠️ Maaf, Anda belum memilih kategori. Silakan pilih kategori terlebih dahulu.');
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

    // ✅ TAMBAH: Ambil soal dengan error handling
    let questions = this.getQuestionsForCategory(category);
    
    // ✅ TAMBAH: Validasi soal ditemukan
    if (!questions || questions.length === 0) {
        console.error(`❌ ERROR: Tidak ada soal untuk kategori '${category}'`);
        alert(`⚠️ Maaf, kategori "${category}" tidak tersedia atau tidak memiliki soal.\n\nSilakan pilih kategori lain.`);
        this.isQuizActive = false;
        return;
    }

    console.log(`📚 Found ${questions.length} questions for category`);

    if (difficulty !== 'all') {
        questions = questions.filter(q => q.difficulty === difficulty);
        console.log(`📊 Filtered to ${questions.length} ${difficulty} questions`);
        
        // ✅ FIX: Jika filter hasilnya kurang soal
        if (questions.length < 50) {
            const allQuestions = this.getAllQuestions();
            const filtered = allQuestions.filter(q => q.difficulty === difficulty);
            
            // ✅ TAMBAH: Validasi ada soal dari kategori lain
            if (filtered.length === 0) {
                console.warn(`⚠️ WARNING: Tidak ada soal dengan level '${difficulty}' di database manapun`);
                // Fallback: gunakan soal dengan filter ditiadakan
                questions = this.getQuestionsForCategory(category);
            } else {
                const shuffled = shuffleArray(filtered);
                const need = Math.min(50 - questions.length, shuffled.length);
                const additional = shuffled.slice(0, need);
                questions = [...questions, ...additional];
            }
        }
    }

    questions = shuffleArray(questions);
    this.state.questions = questions.slice(0, 50);
    this.state.totalQuestions = this.state.questions.length;
    
    // ✅ TAMBAH: Validasi akhir sebelum mulai
    if (this.state.totalQuestions === 0) {
        console.error('❌ ERROR: Tidak ada soal yang tersedia!');
        alert('⚠️ Maaf, sistem tidak menemukan soal yang sesuai. Silakan coba lagi.');
        this.isQuizActive = false;
        return;
    }
    
    console.log(`✅ Quiz ready with ${this.state.totalQuestions} questions`);

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
    // ✅ Cek window.questionsByCategory ada
    if (!window.questionsByCategory) {
        console.error('❌ ERROR: window.questionsByCategory tidak ditemukan!');
        console.error('   Pastikan questions.js sudah di-load sebelum script.js');
        return [];
    }

    // ✅ Cek kategori ada di object
    if (!window.questionsByCategory[category]) {
        console.error(`❌ ERROR: Kategori '${category}' tidak ada dalam database`);
        console.log('   Kategori yang tersedia:', Object.keys(window.questionsByCategory));
        return [];
    }

    // ✅ Cek category adalah array dan punya data
    const questions = window.questionsByCategory[category];
    if (!Array.isArray(questions)) {
        console.error(`❌ ERROR: Data kategori '${category}' bukan array!`);
        return [];
    }

    if (questions.length === 0) {
        console.error(`❌ ERROR: Kategori '${category}' kosong (tidak ada soal)`);
        return [];
    }

    console.log(`✅ Kategori '${category}': ${questions.length} soal ditemukan`);
    return questions;
}

    showQuestion() {
    const questions = this.state.questions;
    const index = this.state.currentIndex;

    // ✅ TAMBAH: Validasi array ada dan punya isi
    if (!questions || !Array.isArray(questions) || questions.length === 0) {
        console.error('❌ ERROR: Array soal kosong atau invalid!');
        console.error('   State questions:', this.state.questions);
        alert('⚠️ Error: Tidak ada soal untuk ditampilkan!');
        this.resetQuiz();
        return;
    }

    // ✅ TAMBAH: Check index valid
    if (index < 0) {
        console.error('❌ ERROR: Index soal negatif:', index);
        this.state.currentIndex = 0;
        return this.showQuestion();
    }

    if (index >= questions.length) {
        console.log(`✅ Semua soal selesai (${index} >= ${questions.length})`);
        this.finishQuiz();
        return;
    }

    const question = questions[index];
    
    // ✅ TAMBAH: Validasi soal object validbhhh
    if (!question || !question.question || !question.options) {
        console.error('❌ ERROR: Soal format invalid!', question);
        alert('⚠️ Error: Format soal tidak sesuai!');
        this.nextQuestion();
        return;
    }

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

    if (this.state.timerEnabled) {
        this.state.timeLeft = this.state.maxTime;
        this.updateTimerUI();
        this.startTimer();
    }
                      }

            console.log('🎯 Start Quiz clicked!');
        e.preventDefault();
        
        const category = DOM.categorySelect.value;
        const difficulty = DOM.difficultySelect.value;
        const timerEnabled = DOM.timerToggle.checked;

        sound.init();

        if (!window.questionsByCategory || !window.questionsByCategory[category]) {
            console.error('❌ Category not found:', category);
            alert('Maaf, kategori tidak ditemukan. Silakan refresh halaman.');
            return;
        }

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

    // ✅ TAMBAH: Cek window.questionsByCategory sebelum lanjut
    if (!window.questionsByCategory) {
        console.error('❌ FATAL ERROR: window.questionsByCategory tidak ditemukan!');
        console.error('   Pastikan questions.js sudah di-load dengan benar');
        alert('❌ FATAL ERROR: Data soal tidak ditemukan!\n\nSilakan refresh halaman.');
        return;
    }

    const categoryCount = Object.keys(window.questionsByCategory).length;
    const totalQuestions = window.totalQuestions || 0;
    
    if (categoryCount === 0 || totalQuestions === 0) {
        console.error('❌ ERROR: Tidak ada kategori atau soal!');
        console.error(`   Kategori: ${categoryCount}, Total soal: ${totalQuestions}`);
        alert('❌ ERROR: Database soal kosong atau belum di-load!');
        return;
    }

    console.log(`✅ Database ready: ${categoryCount} kategori, ${totalQuestions} soal`);

    initDOM();
    setupEventListeners();
    quizEngine.updateHomeStats();

    // Load categories ke select
    if (window.questionsByCategory) {
        const select = DOM.categorySelect;
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
            
            // ✅ TAMBAH: Cek kategori punya soal
            const questionCount = window.questionsByCategory[key].length;
            if (questionCount === 0) {
                option.disabled = true;
                option.textContent += ' (Kosong)';
                console.warn(`⚠️ Kategori '${key}' tidak memiliki soal`);
            }
            
            select.appendChild(option);
        }
    }

    // Init protection
    initProtection();

    quizEngine.showScreen('homeScreen');

    console.log('✅ ZaxQuiz ready!');
    console.log(`📚 ${Object.keys(window.questionsByCategory || {}).length} categories`);
    console.log(`📝 ${window.totalQuestions || 0} total questions`);
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
    getScoreEmoji
};

console.log('🚀 ZaxQuiz v1.0.0 loaded successfully!');