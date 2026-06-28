// ============================================
// TAMBAHKAN DI QUESTIONS.JS (di awal)
// ============================================

/**
 * ============================================
 * VALIDASI DATA SOAL
 * ============================================
 */

/**
 * Validasi struktur soal
 * @param {Object} question - Objek soal yang akan divalidasi
 * @param {string} category - Nama kategori untuk logging
 * @param {number} index - Index soal untuk logging
 * @returns {boolean} - Apakah soal valid
 */
function validateQuestion(question, category, index) {
    const errors = [];
    
    // Cek properti yang wajib ada
    if (!question.question) errors.push('question tidak ada');
    if (!question.options || !Array.isArray(question.options) || question.options.length !== 4) {
        errors.push('options harus array dengan 4 item');
    }
    if (question.correctIndex === undefined || question.correctIndex < 0 || question.correctIndex > 3) {
        errors.push('correctIndex harus 0-3');
    }
    if (!question.explanation) errors.push('explanation tidak ada');
    if (!question.difficulty) errors.push('difficulty tidak ada');
    if (!question.hint) errors.push('hint tidak ada');
    
    if (errors.length > 0) {
        console.warn(`⚠️ Soal #${index + 1} di kategori "${category}" memiliki masalah:`, errors.join(', '));
        return false;
    }
    return true;
}

/**
 * Validasi semua soal di semua kategori
 */
function validateAllQuestions() {
    let totalErrors = 0;
    
    for (const category in window.questionsByCategory) {
        const questions = window.questionsByCategory[category];
        console.log(`🔍 Memvalidasi kategori "${category}" (${questions.length} soal)...`);
        
        questions.forEach((q, i) => {
            if (!validateQuestion(q, category, i)) {
                totalErrors++;
            }
        });
    }
    
    if (totalErrors === 0) {
        console.log('✅ Semua soal valid!');
    } else {
        console.warn(`⚠️ ${totalErrors} soal memiliki masalah. Silakan periksa log.`);
    }
    
    return totalErrors;
}

// Panggil validasi saat load
// validateAllQuestions();

// ============================================
// EKSPOR UNTUK KATEGORI LAIN
// ============================================

/**
 * Template untuk menambahkan kategori baru
 * Copy paste dan sesuaikan
 */
/*
const namaKategoriQuestions = [
    // Soal 1
    {
        question: '...',
        options: ['A', 'B', 'C', 'D'],
        correctIndex: 0,
        explanation: '...',
        difficulty: 'sedang',
        hint: '...'
    },
    // ... tambahkan hingga 50 soal
];

// Tambahkan ke global
window.questionsByCategory['nama-kategori'] = createCategoryQuestions(namaKategoriQuestions, 'Nama Kategori');

// Update total
window.totalQuestions = 0;
for (const category in window.questionsByCategory) {
    window.totalQuestions += window.questionsByCategory[category].length;
}
*/

/**
 * ============================================
 * ZAXQUIZ - Questions Data
 * ============================================
 * 
 * Deskripsi: Database semua soal untuk setiap kategori
 * Setiap kategori minimal 50 soal dengan berbagai tingkat kesulitan
 * 
 * Struktur Soal:
 * {
 *   question: string - Pertanyaan
 *   options: [string] - 4 pilihan jawaban
 *   correctIndex: number - Index jawaban benar (0-3)
 *   explanation: string - Penjelasan singkat
 *   difficulty: 'sedang' | 'sulit' - Tingkat kesulitan
 *   hint: string - Petunjuk singkat
 *   category: string - Nama kategori (otomatis diisi)
 * }
 * ============================================
 */

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Membuat objek soal dengan format yang konsisten
 * @param {Object} data - Data soal
 * @returns {Object} Soal lengkap dengan category
 */
function createQuestion(data) {
    return {
        question: data.question,
        options: data.options,
        correctIndex: data.correctIndex,
        explanation: data.explanation,
        difficulty: data.difficulty || 'sedang',
        hint: data.hint || 'Pikirkan dengan cermat!',
        category: data.category || 'Umum'
    };
}

/**
 * Membuat array soal untuk satu kategori
 * @param {Array} questions - Array data soal
 * @param {string} category - Nama kategori
 * @returns {Array} Array soal dengan category yang sudah diisi
 */
function createCategoryQuestions(questions, category) {
    return questions.map(q => createQuestion({ ...q, category }));
}

// ============================================
// KATEGORI 1: PENGETAHUAN UMUM (50 Soal)
// ============================================

const pengetahuanUmumQuestions = [
    {
        question: 'Apa ibu kota Indonesia?',
        options: ['Jakarta', 'Bandung', 'Surabaya', 'Medan'],
        correctIndex: 0,
        explanation: 'Jakarta adalah ibu kota Indonesia sejak tahun 1945.',
        difficulty: 'sedang',
        hint: 'Kota ini juga dikenal sebagai Kota Metropolitan terbesar di Indonesia.'
    },
    {
        question: 'Berapa jumlah provinsi di Indonesia pada tahun 2024?',
        options: ['34', '35', '36', '37'],
        correctIndex: 2,
        explanation: 'Indonesia memiliki 38 provinsi pada tahun 2024 setelah pemekaran Papua.',
        difficulty: 'sulit',
        hint: 'Jumlah ini terus bertambah seiring dengan pemekaran wilayah.'
    },
    {
        question: 'Siapa presiden pertama Indonesia?',
        options: ['Soeharto', 'Soekarno', 'B.J. Habibie', 'Abdurrahman Wahid'],
        correctIndex: 1,
        explanation: 'Ir. Soekarno adalah presiden pertama Indonesia yang menjabat dari tahun 1945-1967.',
        difficulty: 'sedang',
        hint: 'Beliau juga dikenal sebagai "Bapak Proklamator".'
    },
    {
        question: 'Apa bahasa resmi Indonesia?',
        options: ['Jawa', 'Sunda', 'Indonesia', 'Melayu'],
        correctIndex: 2,
        explanation: 'Bahasa Indonesia adalah bahasa resmi negara Indonesia yang diikrarkan dalam Sumpah Pemuda 1928.',
        difficulty: 'sedang',
        hint: 'Bahasa ini digunakan sebagai alat pemersatu bangsa.'
    },
    {
        question: 'Hari kemerdekaan Indonesia diperingati setiap tanggal?',
        options: ['17 Agustus', '20 Mei', '28 Oktober', '1 Juni'],
        correctIndex: 0,
        explanation: 'Indonesia merdeka pada 17 Agustus 1945, yang diperingati setiap tahun sebagai Hari Kemerdekaan.',
        difficulty: 'sedang',
        hint: 'Tanggal ini adalah hari bersejarah bagi bangsa Indonesia.'
    },
    {
        question: 'Apa lambang negara Indonesia?',
        options: ['Garuda Pancasila', 'Banteng', 'Pohon Beringin', 'Padi dan Kapas'],
        correctIndex: 0,
        explanation: 'Garuda Pancasila adalah lambang negara Indonesia yang terdiri dari burung Garuda dengan perisai di dadanya.',
        difficulty: 'sedang',
        hint: 'Burung ini melambangkan kekuatan dan kebesaran.'
    },
    {
        question: 'Siapa penemu lampu pijar?',
        options: ['Thomas Edison', 'Nikola Tesla', 'Albert Einstein', 'Alexander Graham Bell'],
        correctIndex: 0,
        explanation: 'Thomas Edison menciptakan lampu pijar pertama yang praktis pada tahun 1879.',
        difficulty: 'sedang',
        hint: 'Penemu ini berasal dari Amerika Serikat.'
    },
    {
        question: 'Planet terbesar di tata surya adalah?',
        options: ['Jupiter', 'Saturnus', 'Neptunus', 'Uranus'],
        correctIndex: 0,
        explanation: 'Jupiter adalah planet terbesar di tata surya dengan diameter sekitar 139.820 km.',
        difficulty: 'sedang',
        hint: 'Planet ini memiliki bintik merah besar di permukaannya.'
    },
    {
        question: 'Sungai terpanjang di dunia adalah?',
        options: ['Amazon', 'Nil', 'Yangtze', 'Mississippi'],
        correctIndex: 1,
        explanation: 'Sungai Nil di Afrika adalah sungai terpanjang di dunia dengan panjang sekitar 6.650 km.',
        difficulty: 'sulit',
        hint: 'Sungai ini terletak di benua Afrika.'
    },
    {
        question: 'Gunung tertinggi di dunia adalah?',
        options: ['Everest', 'Kilimanjaro', 'Merapi', 'Fuji'],
        correctIndex: 0,
        explanation: 'Gunung Everest di Himalaya adalah gunung tertinggi di dunia dengan ketinggian 8.848 mdpl.',
        difficulty: 'sedang',
        hint: 'Gunung ini terletak di perbatasan Nepal dan Tibet.'
    },
    {
        question: 'Apa nama samudra terluas di dunia?',
        options: ['Pasifik', 'Atlantik', 'Hindia', 'Arktik'],
        correctIndex: 0,
        explanation: 'Samudra Pasifik adalah samudra terluas di dunia yang mencakup sepertiga permukaan bumi.',
        difficulty: 'sedang',
        hint: 'Samudra ini menghubungkan Amerika dengan Asia.'
    },
    {
        question: 'Berapa lama waktu yang dibutuhkan Bumi untuk mengelilingi Matahari?',
        options: ['365 hari', '360 hari', '366 hari', '364 hari'],
        correctIndex: 0,
        explanation: 'Bumi membutuhkan waktu 365 hari (satu tahun) untuk satu kali revolusi mengelilingi Matahari.',
        difficulty: 'sedang',
        hint: 'Inilah yang menyebabkan pergantian musim.'
    },
    {
        question: 'Apa nama ilmiah untuk manusia?',
        options: ['Homo sapiens', 'Homo erectus', 'Homo habilis', 'Homo neanderthalensis'],
        correctIndex: 0,
        explanation: 'Homo sapiens adalah nama ilmiah untuk manusia modern yang berarti "manusia bijak".',
        difficulty: 'sulit',
        hint: 'Kata ini berasal dari bahasa Latin.'
    },
    {
        question: 'Apa yang dimaksud dengan fotosintesis?',
        options: [
            'Proses pembuatan makanan oleh tumbuhan dengan bantuan cahaya matahari',
            'Proses pernapasan tumbuhan',
            'Proses perkembangbiakan tumbuhan',
            'Proses pengangkutan air pada tumbuhan'
        ],
        correctIndex: 0,
        explanation: 'Fotosintesis adalah proses di mana tumbuhan mengubah cahaya matahari, air, dan CO2 menjadi makanan dan oksigen.',
        difficulty: 'sedang',
        hint: 'Proses ini terjadi di daun tumbuhan.'
    },
    {
        question: 'Siapa pencipta lagu "Indonesia Raya"?',
        options: ['W.R. Supratman', 'Ibu Soed', 'Ismail Marzuki', 'Gesang'],
        correctIndex: 0,
        explanation: 'Wage Rudolf Supratman menciptakan lagu kebangsaan Indonesia Raya pada tahun 1924.',
        difficulty: 'sedang',
        hint: 'Lagu ini pertama kali diperdengarkan pada Kongres Pemuda II.'
    },
    {
        question: 'Apa mata uang tertua di dunia?',
        options: ['Pound Sterling', 'Dollar AS', 'Euro', 'Yen Jepang'],
        correctIndex: 0,
        explanation: 'Pound Sterling dari Inggris adalah mata uang tertua di dunia yang masih digunakan, berasal dari tahun 775 M.',
        difficulty: 'sulit',
        hint: 'Mata uang ini berasal dari Eropa.'
    },
    {
        question: 'Gurun terluas di dunia adalah?',
        options: ['Sahara', 'Arabia', 'Gobi', 'Kalahari'],
        correctIndex: 0,
        explanation: 'Gurun Sahara di Afrika adalah gurun terluas di dunia dengan luas sekitar 9,2 juta km².',
        difficulty: 'sedang',
        hint: 'Gurun ini terletak di Afrika Utara.'
    },
    {
        question: 'Apa nama bandara terbesar di dunia berdasarkan luas?',
        options: ['King Fahd', 'Denver', 'Dubai', 'Beijing'],
        correctIndex: 0,
        explanation: 'Bandara King Fahd di Arab Saudi adalah bandara terbesar di dunia dengan luas sekitar 780 km².',
        difficulty: 'sulit',
        hint: 'Bandara ini terletak di Timur Tengah.'
    },
    {
        question: 'Siapa tokoh yang dijuluki "Bapak Proklamator"?',
        options: ['Soekarno', 'Soeharto', 'Muhammad Hatta', 'Ahmad Yani'],
        correctIndex: 0,
        explanation: 'Soekarno dan Muhammad Hatta dijuluki sebagai Bapak Proklamator karena perannya dalam memproklamasikan kemerdekaan Indonesia.',
        difficulty: 'sedang',
        hint: 'Beliau adalah presiden pertama Indonesia.'
    },
    {
        question: 'Apa nama tarian tradisional dari Bali yang terkenal?',
        options: ['Kecak', 'Saman', 'Pendet', 'Jaipong'],
        correctIndex: 0,
        explanation: 'Tari Kecak adalah tarian tradisional dari Bali yang menceritakan kisah Ramayana dengan iringan suara "cak" dari penari.',
        difficulty: 'sedang',
        hint: 'Tarian ini tidak menggunakan alat musik gamelan.'
    },
    {
        question: 'Berapa jumlah benua di dunia?',
        options: ['7', '6', '5', '8'],
        correctIndex: 0,
        explanation: 'Terdapat 7 benua di dunia: Asia, Afrika, Amerika Utara, Amerika Selatan, Eropa, Australia, dan Antartika.',
        difficulty: 'sedang',
        hint: 'Asia adalah benua terbesar.'
    },
    {
        question: 'Apa nama hewan tercepat di darat?',
        options: ['Cheetah', 'Singa', 'Kuda', 'Rusa'],
        correctIndex: 0,
        explanation: 'Cheetah adalah hewan tercepat di darat dengan kecepatan mencapai 120 km/jam.',
        difficulty: 'sedang',
        hint: 'Hewan ini berasal dari Afrika.'
    },
    {
        question: 'Siapa penulis novel "Laskar Pelangi"?',
        options: ['Andrea Hirata', 'Pramoedya Ananta Toer', 'Tere Liye', 'Dewi Lestari'],
        correctIndex: 0,
        explanation: 'Andrea Hirata adalah penulis novel Laskar Pelangi yang terinspirasi dari masa kecilnya di Belitung.',
        difficulty: 'sedang',
        hint: 'Novel ini diangkat menjadi film pada tahun 2008.'
    },
    {
        question: 'Apa nama gedung tertinggi di Indonesia?',
        options: ['Gama Tower', 'Wisma 46', 'Menara BNI', 'Sequis Tower'],
        correctIndex: 0,
        explanation: 'Gama Tower di Jakarta memiliki ketinggian 310 meter dan merupakan gedung tertinggi di Indonesia.',
        difficulty: 'sulit',
        hint: 'Gedung ini terletak di Jakarta Selatan.'
    },
    {
        question: 'Apa makanan khas Indonesia yang dibuat dari kedelai fermentasi?',
        options: ['Tempe', 'Tahu', 'Kecap', 'Oncom'],
        correctIndex: 0,
        explanation: 'Tempe adalah makanan khas Indonesia yang terbuat dari kedelai yang difermentasi dengan kapang Rhizopus.',
        difficulty: 'sedang',
        hint: 'Makanan ini kaya akan protein.'
    },
    {
        question: 'Siapa penemu telepon?',
        options: ['Alexander Graham Bell', 'Thomas Edison', 'Guglielmo Marconi', 'Nikola Tesla'],
        correctIndex: 0,
        explanation: 'Alexander Graham Bell mendapatkan paten untuk telepon pada tahun 1876.',
        difficulty: 'sedang',
        hint: 'Penemu ini berasal dari Skotlandia.'
    },
    {
        question: 'Apa planet terkecil di tata surya?',
        options: ['Merkurius', 'Venus', 'Mars', 'Pluto'],
        correctIndex: 0,
        explanation: 'Merkurius adalah planet terkecil di tata surya dengan diameter hanya 4.879 km.',
        difficulty: 'sedang',
        hint: 'Planet ini terdekat dengan Matahari.'
    },
    {
        question: 'Apa nama kelompok pulau di Indonesia yang terkenal dengan komoditas palanya?',
        options: ['Maluku', 'Bali', 'Sumatra', 'Kalimantan'],
        correctIndex: 0,
        explanation: 'Kepulauan Maluku dikenal sebagai "Kepulauan Rempah" karena menghasilkan pala, cengkeh, dan rempah-rempah lainnya.',
        difficulty: 'sedang',
        hint: 'Daerah ini dikenal sebagai "Kepulauan Rempah".'
    },
    {
        question: 'Siapa pemimpin Gerakan 30 September?',
        options: ['Soekarno', 'Soeharto', 'D.N. Aidit', 'Muhammad Hatta'],
        correctIndex: 2,
        explanation: 'D.N. Aidit adalah pemimpin Partai Komunis Indonesia (PKI) yang menjadi dalang Gerakan 30 September 1965.',
        difficulty: 'sulit',
        hint: 'Beliau adalah tokoh PKI.'
    },
    {
        question: 'Apa nama rumah adat dari Jawa Barat?',
        options: ['Rumah Baduy', 'Rumah Gadang', 'Rumah Joglo', 'Rumah Lamin'],
        correctIndex: 0,
        explanation: 'Rumah Baduy adalah rumah adat masyarakat Baduy di Jawa Barat dengan arsitektur sederhana dan tradisional.',
        difficulty: 'sedang',
        hint: 'Masyarakat ini tinggal di daerah Banten.'
    },
    {
        question: 'Berapa lama manusia rata-rata tidur dalam sehari?',
        options: ['7-8 jam', '4-5 jam', '9-10 jam', '6-7 jam'],
        correctIndex: 0,
        explanation: 'Manusia dewasa rata-rata membutuhkan waktu tidur 7-8 jam per hari untuk menjaga kesehatan.',
        difficulty: 'sedang',
        hint: 'Kurang tidur dapat mempengaruhi kesehatan.'
    },
    {
        question: 'Apa nama danau terbesar di Indonesia?',
        options: ['Toba', 'Poso', 'Singkarak', 'Maninjau'],
        correctIndex: 0,
        explanation: 'Danau Toba di Sumatra Utara adalah danau terbesar di Indonesia dengan luas 1.145 km².',
        difficulty: 'sedang',
        hint: 'Danau ini terbentuk dari letusan gunung berapi.'
    },
    {
        question: 'Siapa penulis "Siti Nurbaya"?',
        options: ['Marah Rusli', 'Abdul Muis', 'Sutan Takdir Alisjahbana', 'Hamka'],
        correctIndex: 0,
        explanation: 'Marah Rusli menulis novel Siti Nurbaya pada tahun 1922, salah satu karya sastra Indonesia terkenal.',
        difficulty: 'sedang',
        hint: 'Novel ini berkisah tentang percintaan di Minangkabau.'
    },
    {
        question: 'Apa nama benua yang tidak memiliki negara?',
        options: ['Antartika', 'Australia', 'Eropa', 'Amerika'],
        correctIndex: 0,
        explanation: 'Antartika adalah satu-satunya benua yang tidak memiliki negara dan diatur melalui Perjanjian Antartika.',
        difficulty: 'sedang',
        hint: 'Benua ini tertutup es sepanjang tahun.'
    },
    {
        question: 'Apa nama ibukota Korea Selatan?',
        options: ['Seoul', 'Busan', 'Incheon', 'Daegu'],
        correctIndex: 0,
        explanation: 'Seoul adalah ibukota Korea Selatan yang menjadi pusat pemerintahan, ekonomi, dan budaya.',
        difficulty: 'sedang',
        hint: 'Kota ini berpenduduk sekitar 10 juta jiwa.'
    },
    {
        question: 'Siapa tokoh yang mengumandangkan Proklamasi Kemerdekaan Indonesia?',
        options: ['Soekarno', 'Mohammad Hatta', 'Ahmad Soebardjo', 'Sayuti Melik'],
        correctIndex: 0,
        explanation: 'Ir. Soekarno mengumandangkan teks Proklamasi Kemerdekaan Indonesia pada 17 Agustus 1945.',
        difficulty: 'sedang',
        hint: 'Beliau adalah presiden pertama.'
    },
    {
        question: 'Apa nama pulau terpadat di Indonesia?',
        options: ['Jawa', 'Sumatra', 'Kalimantan', 'Sulawesi'],
        correctIndex: 0,
        explanation: 'Jawa adalah pulau terpadat di Indonesia dengan populasi sekitar 150 juta jiwa atau 50% dari total populasi.',
        difficulty: 'sedang',
        hint: 'Pulau ini memiliki kota metropolitan seperti Jakarta dan Surabaya.'
    },
    {
        question: 'Apa nama alat musik tradisional dari Sunda?',
        options: ['Angklung', 'Gamelan', 'Sasando', 'Kolintang'],
        correctIndex: 0,
        explanation: 'Angklung adalah alat musik tradisional dari Sunda yang terbuat dari bambu dan dimainkan dengan digoyangkan.',
        difficulty: 'sedang',
        hint: 'Alat musik ini terbuat dari bambu.'
    },
    {
        question: 'Berapa jumlah rasul dalam Islam?',
        options: ['25', '20', '30', '15'],
        correctIndex: 0,
        explanation: 'Dalam Islam, terdapat 25 rasul yang wajib diimani, mulai dari Nabi Adam hingga Nabi Muhammad SAW.',
        difficulty: 'sedang',
        hint: 'Rasul terakhir adalah Nabi Muhammad SAW.'
    },
    {
        question: 'Apa nama samudra terkecil di dunia?',
        options: ['Arktik', 'Hindia', 'Pasifik', 'Atlantik'],
        correctIndex: 0,
        explanation: 'Samudra Arktik adalah samudra terkecil di dunia dengan luas sekitar 14 juta km².',
        difficulty: 'sulit',
        hint: 'Samudra ini terletak di Kutub Utara.'
    },
    {
        question: 'Siapa penemu benua Amerika?',
        options: ['Christopher Columbus', 'Amerigo Vespucci', 'Vasco da Gama', 'Ferdinand Magellan'],
        correctIndex: 0,
        explanation: 'Christopher Columbus adalah penjelajah yang menemukan benua Amerika pada tahun 1492.',
        difficulty: 'sedang',
        hint: 'Penemu ini berasal dari Italia.'
    },
    {
        question: 'Apa nama kawah terbesar di dunia?',
        options: ['Kawah Ngorongoro', 'Kawah Toba', 'Kawah Krakatau', 'Kawah Yellowstone'],
        correctIndex: 0,
        explanation: 'Kawah Ngorongoro di Tanzania adalah kawah vulkanik terbesar di dunia dengan diameter 19 km.',
        difficulty: 'sulit',
        hint: 'Kawah ini terletak di Afrika Timur.'
    },
    {
        question: 'Apa nama festival film tertua di dunia?',
        options: ['Venice', 'Cannes', 'Berlin', 'Oscar'],
        correctIndex: 0,
        explanation: 'Festival Film Venice di Italia adalah festival film tertua di dunia yang dimulai pada tahun 1932.',
        difficulty: 'sulit',
        hint: 'Festival ini diadakan di Eropa.'
    },
    {
        question: 'Apa nama universitas tertua di dunia?',
        options: ['University of Bologna', 'Oxford', 'Cambridge', 'Harvard'],
        correctIndex: 0,
        explanation: 'University of Bologna di Italia adalah universitas tertua di dunia yang didirikan pada tahun 1088.',
        difficulty: 'sulit',
        hint: 'Universitas ini terletak di Italia.'
    },
    {
        question: 'Apa nama hewan nasional Indonesia?',
        options: ['Komodo', 'Harimau', 'Gajah', 'Orangutan'],
        correctIndex: 0,
        explanation: 'Komodo adalah hewan nasional Indonesia dan merupakan kadal terbesar di dunia yang hanya ditemukan di Indonesia.',
        difficulty: 'sedang',
        hint: 'Hewan ini hanya ditemukan di Nusa Tenggara Timur.'
    },
    {
        question: 'Apa nama minuman tradisional Indonesia dari ketan?',
        options: ['Bajigur', 'Bandrek', 'Wedang', 'Es Cendol'],
        correctIndex: 0,
        explanation: 'Bajigur adalah minuman tradisional Sunda yang terbuat dari ketan dan santan yang dihangatkan.',
        difficulty: 'sedang',
        hint: 'Minuman ini hangat dan manis.'
    },
    {
        question: 'Siapa tokoh yang dikenal sebagai "Bapak Koperasi Indonesia"?',
        options: ['Mohammad Hatta', 'Soekarno', 'Soeharto', 'Adam Malik'],
        correctIndex: 0,
        explanation: 'Mohammad Hatta adalah Bapak Koperasi Indonesia yang memiliki peran besar dalam pengembangan koperasi di Indonesia.',
        difficulty: 'sedang',
        hint: 'Beliau adalah wakil presiden pertama.'
    },
    {
        question: 'Apa nama wilayah di Indonesia yang memiliki bahasa daerah terbanyak?',
        options: ['Papua', 'Jawa', 'Sumatra', 'Kalimantan'],
        correctIndex: 0,
        explanation: 'Papua memiliki keragaman bahasa terbanyak di Indonesia dengan lebih dari 270 bahasa daerah.',
        difficulty: 'sulit',
        hint: 'Wilayah ini terletak di bagian timur Indonesia.'
    },
    {
        question: 'Apa nama pohon terbesar di dunia?',
        options: ['Sequoia', 'Pohon Beringin', 'Pohon Jati', 'Pohon Mahoni'],
        correctIndex: 0,
        explanation: 'Pohon Sequoia di California adalah pohon terbesar di dunia dengan tinggi mencapai 100 meter.',
        difficulty: 'sulit',
        hint: 'Pohon ini tumbuh di Amerika Utara.'
    },
    {
        question: 'Apa nama hewan purba yang masih hidup?',
        options: ['Komodo', 'Dinosaurus', 'Mammoth', 'Dodo'],
        correctIndex: 0,
        explanation: 'Komodo adalah hewan purba yang masih hidup dan telah ada sejak zaman prasejarah.',
        difficulty: 'sedang',
        hint: 'Hewan ini hidup di Indonesia.'
    },
    {
        question: 'Apa nama ibukota negara Jepang?',
        options: ['Tokyo', 'Kyoto', 'Osaka', 'Nagoya'],
        correctIndex: 0,
        explanation: 'Tokyo adalah ibukota Jepang yang merupakan pusat pemerintahan dan ekonomi Jepang.',
        difficulty: 'sedang',
        hint: 'Kota ini adalah kota terbesar di Jepang.'
    }
];

// ============================================
// KATEGORI 2: MATEMATIKA (50 Soal)
// ============================================

const matematikaQuestions = [
    {
        question: 'Berapa hasil dari 7 × 8?',
        options: ['56', '54', '58', '52'],
        correctIndex: 0,
        explanation: '7 × 8 = 56, karena 7 dikali 8 sama dengan menjumlahkan 7 sebanyak 8 kali.',
        difficulty: 'sedang',
        hint: 'Ingat perkalian dasar!'
    },
    {
        question: 'Apa hasil dari 144 ÷ 12?',
        options: ['12', '14', '16', '18'],
        correctIndex: 0,
        explanation: '144 ÷ 12 = 12, karena 12 × 12 = 144.',
        difficulty: 'sedang',
        hint: 'Coba bagi angka 144 dengan 12.'
    },
    {
        question: 'Berapa akar kuadrat dari 81?',
        options: ['9', '8', '7', '10'],
        correctIndex: 0,
        explanation: '√81 = 9, karena 9 × 9 = 81.',
        difficulty: 'sedang',
        hint: 'Angka berapa yang dikuadratkan menghasilkan 81?'
    },
    {
        question: 'Berapa nilai π (pi) yang paling umum digunakan?',
        options: ['3.14', '3.16', '3.12', '3.18'],
        correctIndex: 0,
        explanation: 'Nilai π yang umum digunakan adalah 3.14 atau 22/7 untuk perhitungan sederhana.',
        difficulty: 'sedang',
        hint: 'Ini adalah konstanta matematika yang terkenal.'
    },
    {
        question: 'Berapa hasil dari 2⁵?',
        options: ['32', '64', '16', '128'],
        correctIndex: 0,
        explanation: '2⁵ = 2 × 2 × 2 × 2 × 2 = 32.',
        difficulty: 'sedang',
        hint: 'Kalikan 2 sebanyak 5 kali.'
    },
    {
        question: 'Berapa hasil dari 3! (3 faktorial)?',
        options: ['6', '9', '3', '12'],
        correctIndex: 0,
        explanation: '3! = 3 × 2 × 1 = 6.',
        difficulty: 'sedang',
        hint: 'Faktorial adalah perkalian dari angka tersebut sampai 1.'
    },
    {
        question: 'Berapa luas persegi dengan sisi 5 cm?',
        options: ['25 cm²', '20 cm²', '30 cm²', '15 cm²'],
        correctIndex: 0,
        explanation: 'Luas persegi = sisi × sisi = 5 × 5 = 25 cm².',
        difficulty: 'sedang',
        hint: 'Rumus luas persegi adalah sisi × sisi.'
    },
    {
        question: 'Berapa keliling lingkaran dengan jari-jari 7 cm?',
        options: ['44 cm', '42 cm', '46 cm', '48 cm'],
        correctIndex: 0,
        explanation: 'Keliling lingkaran = 2 × π × r = 2 × 22/7 × 7 = 44 cm.',
        difficulty: 'sulit',
        hint: 'Gunakan π = 22/7.'
    },
    {
        question: 'Berapa hasil dari 15% dari 200?',
        options: ['30', '25', '35', '40'],
        correctIndex: 0,
        explanation: '15% dari 200 = 15/100 × 200 = 30.',
        difficulty: 'sedang',
        hint: 'Ubahlah persen menjadi pecahan.'
    },
    {
        question: 'Berapa FPB dari 24 dan 36?',
        options: ['12', '6', '18', '24'],
        correctIndex: 0,
        explanation: 'FPB dari 24 dan 36 adalah 12, karena 12 adalah faktor terbesar dari kedua angka tersebut.',
        difficulty: 'sulit',
        hint: 'Cari faktor persekutuan terbesar.'
    },
    {
        question: 'Berapa KPK dari 6 dan 8?',
        options: ['24', '12', '36', '48'],
        correctIndex: 0,
        explanation: 'KPK dari 6 dan 8 adalah 24, karena 24 adalah kelipatan persekutuan terkecil dari kedua angka.',
        difficulty: 'sulit',
        hint: 'Cari kelipatan persekutuan terkecil.'
    },
    {
        question: 'Berapa hasil dari (-5) + 8?',
        options: ['3', '-3', '5', '-5'],
        correctIndex: 0,
        explanation: '(-5) + 8 = 3, karena 8 - 5 = 3.',
        difficulty: 'sedang',
        hint: 'Ingat aturan penjumlahan bilangan negatif.'
    },
    {
        question: 'Berapa hasil dari (-4) × (-6)?',
        options: ['24', '-24', '12', '-12'],
        correctIndex: 0,
        explanation: '(-4) × (-6) = 24, karena negatif dikali negatif menghasilkan positif.',
        difficulty: 'sedang',
        hint: 'Ingat aturan perkalian bilangan negatif.'
    },
    {
        question: 'Berapa hasil dari 5/8 + 3/8?',
        options: ['1', '2/8', '8/8', '4/8'],
        correctIndex: 0,
        explanation: '5/8 + 3/8 = 8/8 = 1, karena penyebut sudah sama.',
        difficulty: 'sedang',
        hint: 'Jumlahkan pembilang karena penyebut sama.'
    },
    {
        question: 'Berapa hasil dari 2/3 × 4/5?',
        options: ['8/15', '6/15', '4/15', '2/15'],
        correctIndex: 0,
        explanation: '2/3 × 4/5 = 8/15, kalikan pembilang dan penyebut.',
        difficulty: 'sedang',
        hint: 'Kalikan pembilang dengan pembilang, penyebut dengan penyebut.'
    },
    {
        question: 'Berapa hasil dari 2,5 + 3,7?',
        options: ['6,2', '5,2', '6,4', '5,4'],
        correctIndex: 0,
        explanation: '2,5 + 3,7 = 6,2, karena 2,5 + 3,7 = 6,2.',
        difficulty: 'sedang',
        hint: 'Jumlahkan seperti biasa dengan tanda koma.'
    },
    {
        question: 'Berapa akar pangkat tiga dari 27?',
        options: ['3', '9', '2', '4'],
        correctIndex: 0,
        explanation: '³√27 = 3, karena 3 × 3 × 3 = 27.',
        difficulty: 'sedang',
        hint: 'Angka berapa yang jika dipangkatkan tiga menghasilkan 27?'
    },
    {
        question: 'Berapa hasil dari 10³?',
        options: ['1000', '100', '10000', '100000'],
        correctIndex: 0,
        explanation: '10³ = 10 × 10 × 10 = 1000.',
        difficulty: 'sedang',
        hint: 'Kalikan 10 sebanyak 3 kali.'
    },
    {
        question: 'Berapa jumlah sudut dalam segitiga?',
        options: ['180°', '90°', '360°', '270°'],
        correctIndex: 0,
        explanation: 'Jumlah sudut dalam segitiga adalah 180°.',
        difficulty: 'sedang',
        hint: 'Ini adalah sifat dasar segitiga.'
    },
    {
        question: 'Berapa volume kubus dengan sisi 4 cm?',
        options: ['64 cm³', '48 cm³', '32 cm³', '16 cm³'],
        correctIndex: 0,
        explanation: 'Volume kubus = sisi³ = 4³ = 64 cm³.',
        difficulty: 'sedang',
        hint: 'Rumus volume kubus adalah sisi × sisi × sisi.'
    },
    {
        question: 'Berapa hasil dari 3⁴?',
        options: ['81', '27', '9', '243'],
        correctIndex: 0,
        explanation: '3⁴ = 3 × 3 × 3 × 3 = 81.',
        difficulty: 'sedang',
        hint: 'Kalikan 3 sebanyak 4 kali.'
    },
    {
        question: 'Berapa hasil dari 4/9 × 3/4?',
        options: ['1/3', '2/3', '1/6', '2/9'],
        correctIndex: 0,
        explanation: '4/9 × 3/4 = 12/36 = 1/3, setelah disederhanakan.',
        difficulty: 'sulit',
        hint: 'Sederhanakan pecahan hasil perkalian.'
    },
    {
        question: 'Berapa hasil dari 12,5 - 8,75?',
        options: ['3,75', '3,25', '4,75', '4,25'],
        correctIndex: 0,
        explanation: '12,5 - 8,75 = 3,75, karena 12,50 - 8,75 = 3,75.',
        difficulty: 'sedang',
        hint: 'Kurangkan seperti biasa dengan tanda koma.'
    },
    {
        question: 'Berapa luas lingkaran dengan jari-jari 14 cm?',
        options: ['616 cm²', '616 cm³', '308 cm²', '308 cm³'],
        correctIndex: 0,
        explanation: 'Luas lingkaran = π × r² = 22/7 × 14² = 22/7 × 196 = 616 cm².',
        difficulty: 'sulit',
        hint: 'Gunakan π = 22/7.'
    },
    {
        question: 'Berapa hasil dari 2 log 8?',
        options: ['3', '4', '5', '6'],
        correctIndex: 0,
        explanation: '²log 8 = 3, karena 2³ = 8.',
        difficulty: 'sulit',
        hint: 'Cari pangkat dari 2 yang menghasilkan 8.'
    },
    {
        question: 'Berapa hasil dari 5³ × 5²?',
        options: ['3125', '625', '125', '25'],
        correctIndex: 0,
        explanation: '5³ × 5² = 5^(3+2) = 5⁵ = 3125.',
        difficulty: 'sulit',
        hint: 'Gunakan sifat perkalian pangkat.'
    },
    {
        question: 'Berapa hasil dari √64?',
        options: ['8', '16', '4', '32'],
        correctIndex: 0,
        explanation: '√64 = 8, karena 8 × 8 = 64.',
        difficulty: 'sedang',
        hint: 'Angka berapa yang dikuadratkan menghasilkan 64?'
    },
    {
        question: 'Berapa hasil dari 7 × 9 - 15?',
        options: ['48', '63', '78', '54'],
        correctIndex: 0,
        explanation: '7 × 9 - 15 = 63 - 15 = 48.',
        difficulty: 'sedang',
        hint: 'Kerjakan perkalian terlebih dahulu.'
    },
    {
        question: 'Berapa hasil dari (12 - 4) × 3?',
        options: ['24', '36', '12', '48'],
        correctIndex: 0,
        explanation: '(12 - 4) × 3 = 8 × 3 = 24.',
        difficulty: 'sedang',
        hint: 'Kerjakan yang di dalam kurung terlebih dahulu.'
    },
    {
        question: 'Berapa hasil dari 5! (5 faktorial)?',
        options: ['120', '60', '80', '100'],
        correctIndex: 0,
        explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120.',
        difficulty: 'sedang',
        hint: 'Kalikan semua angka dari 5 sampai 1.'
    },
    {
        question: 'Berapa hasil dari 45 + 37 - 28?',
        options: ['54', '52', '56', '50'],
        correctIndex: 0,
        explanation: '45 + 37 - 28 = 82 - 28 = 54.',
        difficulty: 'sedang',
        hint: 'Kerjakan dari kiri ke kanan.'
    },
    {
        question: 'Berapa hasil dari 3,14 × 10?',
        options: ['31,4', '314', '3,14', '0,314'],
        correctIndex: 0,
        explanation: '3,14 × 10 = 31,4, karena menggeser koma satu angka ke kanan.',
        difficulty: 'sedang',
        hint: 'Perkalian dengan 10 menggeser koma ke kanan.'
    },
    {
        question: 'Berapa hasil dari 2/5 + 1/4?',
        options: ['13/20', '3/9', '3/20', '6/20'],
        correctIndex: 0,
        explanation: '2/5 + 1/4 = 8/20 + 5/20 = 13/20, dengan menyamakan penyebut.',
        difficulty: 'sulit',
        hint: 'Samakan penyebut terlebih dahulu.'
    },
    {
        question: 'Berapa hasil dari 3/7 × 7/9?',
        options: ['1/3', '2/3', '1/9', '2/9'],
        correctIndex: 0,
        explanation: '3/7 × 7/9 = 21/63 = 1/3, setelah disederhanakan.',
        difficulty: 'sulit',
        hint: 'Sederhanakan sebelum mengalikan.'
    },
    {
        question: 'Berapa hasil dari -6 + 15?',
        options: ['9', '21', '6', '15'],
        correctIndex: 0,
        explanation: '-6 + 15 = 9, karena 15 - 6 = 9.',
        difficulty: 'sedang',
        hint: 'Kurangi angka positif dengan angka negatif.'
    },
    {
        question: 'Berapa hasil dari (-8) × 5?',
        options: ['-40', '40', '-45', '45'],
        correctIndex: 0,
        explanation: '(-8) × 5 = -40, karena negatif × positif = negatif.',
        difficulty: 'sedang',
        hint: 'Negatif dikali positif menghasilkan negatif.'
    },
    {
        question: 'Berapa hasil dari 9/6 - 1/3?',
        options: ['7/6', '5/6', '8/6', '9/6'],
        correctIndex: 0,
        explanation: '9/6 - 1/3 = 9/6 - 2/6 = 7/6, dengan menyamakan penyebut.',
        difficulty: 'sulit',
        hint: 'Samakan penyebut menjadi 6.'
    },
    {
        question: 'Berapa hasil dari 0,25 + 0,75?',
        options: ['1', '0,5', '1,5', '0,25'],
        correctIndex: 0,
        explanation: '0,25 + 0,75 = 1, karena 25/100 + 75/100 = 100/100 = 1.',
        difficulty: 'sedang',
        hint: 'Jumlahkan seperti biasa.'
    },
    {
        question: 'Berapa hasil dari 12 × 12?',
        options: ['144', '124', '134', '154'],
        correctIndex: 0,
        explanation: '12 × 12 = 144, karena perkalian 12 kuadrat.',
        difficulty: 'sedang',
        hint: 'Ingat perkalian 12 × 12.'
    },
    {
        question: 'Berapa hasil dari 2³ × 3²?',
        options: ['72', '64', '48', '96'],
        correctIndex: 0,
        explanation: '2³ × 3² = 8 × 9 = 72.',
        difficulty: 'sulit',
        hint: 'Hitung pangkat terlebih dahulu.'
    },
    {
        question: 'Berapa hasil dari √144?',
        options: ['12', '14', '16', '18'],
        correctIndex: 0,
        explanation: '√144 = 12, karena 12 × 12 = 144.',
        difficulty: 'sedang',
        hint: 'Angka berapa yang dikuadratkan menghasilkan 144?'
    },
    {
        question: 'Berapa hasil dari 18 + 27 - 15?',
        options: ['30', '45', '33', '27'],
        correctIndex: 0,
        explanation: '18 + 27 - 15 = 45 - 15 = 30.',
        difficulty: 'sedang',
        hint: 'Kerjakan dari kiri ke kanan.'
    },
    {
        question: 'Berapa hasil dari 9² - 4²?',
        options: ['65', '81', '16', '49'],
        correctIndex: 0,
        explanation: '9² - 4² = 81 - 16 = 65.',
        difficulty: 'sedang',
        hint: 'Hitung pangkat terlebih dahulu.'
    },
    {
        question: 'Berapa hasil dari 5³ - 3³?',
        options: ['98', '125', '27', '80'],
        correctIndex: 0,
        explanation: '5³ - 3³ = 125 - 27 = 98.',
        difficulty: 'sulit',
        hint: 'Hitung pangkat terlebih dahulu.'
    },
    {
        question: 'Berapa hasil dari 7 + 8 × 3?',
        options: ['31', '45', '21', '18'],
        correctIndex: 0,
        explanation: '7 + 8 × 3 = 7 + 24 = 31, kerjakan perkalian terlebih dahulu.',
        difficulty: 'sedang',
        hint: 'Kerjakan perkalian sebelum penjumlahan.'
    },
    {
        question: 'Berapa hasil dari 2 × 5² - 4²?',
        options: ['34', '50', '16', '66'],
        correctIndex: 0,
        explanation: '2 × 25 - 16 = 50 - 16 = 34.',
        difficulty: 'sulit',
        hint: 'Hitung pangkat terlebih dahulu.'
    },
    {
        question: 'Berapa hasil dari 12 ÷ 4 + 5?',
        options: ['8', '3', '17', '5'],
        correctIndex: 0,
        explanation: '12 ÷ 4 + 5 = 3 + 5 = 8.',
        difficulty: 'sedang',
        hint: 'Kerjakan pembagian terlebih dahulu.'
    },
    {
        question: 'Berapa hasil dari 0,5 × 0,5?',
        options: ['0,25', '0,5', '1', '0,75'],
        correctIndex: 0,
        explanation: '0,5 × 0,5 = 0,25, karena 5/10 × 5/10 = 25/100 = 0,25.',
        difficulty: 'sedang',
        hint: 'Kalikan seperti biasa dengan koma.'
    },
    {
        question: 'Berapa hasil dari 2⁶?',
        options: ['64', '32', '128', '256'],
        correctIndex: 0,
        explanation: '2⁶ = 2 × 2 × 2 × 2 × 2 × 2 = 64.',
        difficulty: 'sedang',
        hint: 'Kalikan 2 sebanyak 6 kali.'
    },
    {
        question: 'Berapa hasil dari 10⁴?',
        options: ['10000', '1000', '100000', '100'],
        correctIndex: 0,
        explanation: '10⁴ = 10 × 10 × 10 × 10 = 10000.',
        difficulty: 'sedang',
        hint: '10 pangkat 4 adalah 10 diikuti 4 angka nol.'
    },
    {
        question: 'Berapa hasil dari 9 × 8 + 12?',
        options: ['84', '72', '96', '60'],
        correctIndex: 0,
        explanation: '9 × 8 + 12 = 72 + 12 = 84.',
        difficulty: 'sedang',
        hint: 'Kerjakan perkalian terlebih dahulu.'
    }
];

// ============================================
// KATEGORI 3: AGAMA ISLAM (50 Soal)
// ============================================

const agamaIslamQuestions = [
    {
        question: 'Berapa jumlah rukun Islam?',
        options: ['5', '6', '3', '4'],
        correctIndex: 0,
        explanation: 'Rukun Islam ada 5: Syahadat, Shalat, Zakat, Puasa, dan Haji.',
        difficulty: 'sedang',
        hint: 'Rukun Islam berbeda dengan rukun Iman.'
    },
    {
        question: 'Berapa jumlah rukun Iman?',
        options: ['6', '5', '7', '4'],
        correctIndex: 0,
        explanation: 'Rukun Iman ada 6: Iman kepada Allah, Malaikat, Kitab, Rasul, Hari Kiamat, dan Qada Qadar.',
        difficulty: 'sedang',
        hint: 'Rukun Iman terdiri dari 6 perkara.'
    },
    {
        question: 'Siapa nabi terakhir dalam Islam?',
        options: ['Muhammad SAW', 'Isa AS', 'Musa AS', 'Ibrahim AS'],
        correctIndex: 0,
        explanation: 'Nabi Muhammad SAW adalah nabi terakhir yang diutus oleh Allah SWT.',
        difficulty: 'sedang',
        hint: 'Beliau adalah penutup para nabi.'
    },
    {
        question: 'Apa nama kitab suci umat Islam?',
        options: ['Al-Quran', 'Taurat', 'Zabur', 'Injil'],
        correctIndex: 0,
        explanation: 'Al-Quran adalah kitab suci umat Islam yang diturunkan kepada Nabi Muhammad SAW.',
        difficulty: 'sedang',
        hint: 'Kitab ini diturunkan di Jazirah Arab.'
    },
    {
        question: 'Shalat wajib berapa kali sehari?',
        options: ['5', '4', '6', '3'],
        correctIndex: 0,
        explanation: 'Shalat wajib dilakukan 5 kali sehari: Subuh, Dzuhur, Ashar, Maghrib, dan Isya.',
        difficulty: 'sedang',
        hint: 'Salah satu rukun Islam.'
    },
    {
        question: 'Apa nama bulan puasa dalam Islam?',
        options: ['Ramadhan', 'Syawal', 'Dzulhijjah', 'Muharram'],
        correctIndex: 0,
        explanation: 'Ramadhan adalah bulan puasa yang diwajibkan bagi umat Islam.',
        difficulty: 'sedang',
        hint: 'Bulan ini adalah bulan ke-9 dalam kalender Hijriah.'
    },
    {
        question: 'Apa nama malaikat yang bertugas menyampaikan wahyu?',
        options: ['Jibril', 'Mikail', 'Rakib', 'Atid'],
        correctIndex: 0,
        explanation: 'Malaikat Jibril adalah malaikat yang menyampaikan wahyu kepada para nabi dan rasul.',
        difficulty: 'sedang',
        hint: 'Beliau adalah malaikat yang menemui Nabi Muhammad SAW.'
    },
    {
        question: 'Apa nama ibadah haji yang dilakukan di Arafah?',
        options: ['Wukuf', 'Tawaf', 'Sa\'i', 'Ihram'],
        correctIndex: 0,
        explanation: 'Wukuf di Arafah adalah rukun haji yang dilakukan pada tanggal 9 Dzulhijjah.',
        difficulty: 'sedang',
        hint: 'Ini adalah puncak dari ibadah haji.'
    },
    {
        question: 'Apa nama surat pertama dalam Al-Quran?',
        options: ['Al-Fatihah', 'Al-Baqarah', 'An-Nas', 'Al-Ikhlas'],
        correctIndex: 0,
        explanation: 'Surat Al-Fatihah adalah surat pertama dalam Al-Quran dan disebut sebagai "Ummul Kitab".',
        difficulty: 'sedang',
        hint: 'Surat ini terdiri dari 7 ayat.'
    },
    {
        question: 'Apa nama shalat sunnah yang dilakukan setelah shalat Isya?',
        options: ['Qiyamul Lail', 'Dhuha', 'Tahajud', 'Shalat Jumat'],
        correctIndex: 0,
        explanation: 'Qiyamul Lail adalah shalat sunnah yang dilakukan pada malam hari setelah shalat Isya.',
        difficulty: 'sedang',
        hint: 'Shalat ini dilakukan di sepertiga malam.'
    },
    {
        question: 'Berapa jumlah ayat dalam surat Al-Baqarah?',
        options: ['286', '285', '287', '284'],
        correctIndex: 0,
        explanation: 'Surat Al-Baqarah memiliki 286 ayat dan merupakan surat terpanjang dalam Al-Quran.',
        difficulty: 'sulit',
        hint: 'Surat ini adalah surat terpanjang.'
    },
    {
        question: 'Apa arti dari "Bismillah"?',
        options: ['Dengan nama Allah', 'Segala puji bagi Allah', 'Allah Maha Besar', 'Tidak ada Tuhan selain Allah'],
        correctIndex: 0,
        explanation: 'Bismillah berarti "Dengan menyebut nama Allah" yang selalu diucapkan sebelum melakukan sesuatu.',
        difficulty: 'sedang',
        hint: 'Ini adalah bacaan yang diucapkan sebelum memulai sesuatu.'
    },
    {
        question: 'Apa nama nabi yang memiliki mukjizat membelah laut?',
        options: ['Musa AS', 'Ibrahim AS', 'Nuh AS', 'Isa AS'],
        correctIndex: 0,
        explanation: 'Nabi Musa AS membelah Laut Merah untuk menyelamatkan Bani Israil dari kejaran Fir\'aun.',
        difficulty: 'sedang',
        hint: 'Beliau adalah nabi yang diutus ke Bani Israil.'
    },
    {
        question: 'Apa nama tempat suci umat Islam di Mekkah?',
        options: ['Ka\'bah', 'Masjid Nabawi', 'Masjid Al-Aqsa', 'Arafah'],
        correctIndex: 0,
        explanation: 'Ka\'bah adalah bangunan suci di Masjidil Haram, Mekkah, yang menjadi kiblat umat Islam.',
        difficulty: 'sedang',
        hint: 'Tempat ini menjadi kiblat shalat.'
    },
    {
        question: 'Apa nama hari raya yang menandai berakhirnya puasa?',
        options: ['Idul Fitri', 'Idul Adha', 'Isra Mi\'raj', 'Maulid Nabi'],
        correctIndex: 0,
        explanation: 'Idul Fitri adalah hari raya yang dirayakan setelah berakhirnya bulan Ramadhan.',
        difficulty: 'sedang',
        hint: 'Hari raya ini disebut juga "Lebaran".'
    },
    {
        question: 'Apa nama surat yang menyatakan bahwa Allah adalah Esa?',
        options: ['Al-Ikhlas', 'Al-Fatihah', 'An-Nas', 'Al-Falaq'],
        correctIndex: 0,
        explanation: 'Surat Al-Ikhlas menjelaskan keesaan Allah dan setara dengan sepertiga Al-Quran.',
        difficulty: 'sedang',
        hint: 'Surat ini terdiri dari 4 ayat.'
    },
    {
        question: 'Apa nama malaikat yang mencatat amal baik?',
        options: ['Rakib', 'Atid', 'Jibril', 'Mikail'],
        correctIndex: 0,
        explanation: 'Malaikat Rakib adalah malaikat yang bertugas mencatat amal baik manusia.',
        difficulty: 'sedang',
        hint: 'Beliau adalah malaikat yang selalu ada di sebelah kanan manusia.'
    },
    {
        question: 'Apa nama zakat yang dikeluarkan pada Idul Fitri?',
        options: ['Zakat Fitrah', 'Zakat Mal', 'Zakat Profesi', 'Zakat Pertanian'],
        correctIndex: 0,
        explanation: 'Zakat Fitrah adalah zakat yang wajib dikeluarkan setiap muslim pada bulan Ramadhan menjelang Idul Fitri.',
        difficulty: 'sedang',
        hint: 'Zakat ini dikeluarkan dalam bentuk makanan pokok.'
    },
    {
        question: 'Apa nama nabi yang disebut "Abul Anbiya"?',
        options: ['Ibrahim AS', 'Muhammad SAW', 'Nuh AS', 'Musa AS'],
        correctIndex: 0,
        explanation: 'Nabi Ibrahim AS disebut "Abul Anbiya" atau Bapak Para Nabi karena menjadi nenek moyang banyak nabi.',
        difficulty: 'sedang',
        hint: 'Beliau adalah nabi yang dijuluki "Khalilullah".'
    },
    {
        question: 'Apa nama ibadah yang dilakukan dengan berjalan mengelilingi Ka\'bah?',
        options: ['Tawaf', 'Sa\'i', 'Wukuf', 'Ihram'],
        correctIndex: 0,
        explanation: 'Tawaf adalah ibadah berjalan mengelilingi Ka\'bah sebanyak 7 kali yang dilakukan saat haji dan umrah.',
        difficulty: 'sedang',
        hint: 'Ibadah ini dilakukan searah jarum jam.'
    },
    {
        question: 'Apa nama kitab yang diturunkan kepada Nabi Isa AS?',
        options: ['Injil', 'Taurat', 'Zabur', 'Al-Quran'],
        correctIndex: 0,
        explanation: 'Injil adalah kitab yang diturunkan Allah SWT kepada Nabi Isa AS.',
        difficulty: 'sedang',
        hint: 'Kitab ini diturunkan di Baitul Maqdis.'
    },
    {
        question: 'Apa nama malaikat yang mencabut nyawa?',
        options: ['Izrail', 'Jibril', 'Rakib', 'Atid'],
        correctIndex: 0,
        explanation: 'Malaikat Izrail adalah malaikat yang bertugas mencabut nyawa manusia ketika ajalnya tiba.',
        difficulty: 'sedang',
        hint: 'Beliau disebut juga "Malaikat Maut".'
    },
    {
        question: 'Apa nama shalat sunnah yang dilakukan pada malam Jumat?',
        options: ['Shalat Jumat', 'Shalat Hajat', 'Shalat Tahajud', 'Shalat Dhuha'],
        correctIndex: 2,
        explanation: 'Shalat Tahajud adalah shalat sunnah yang dilakukan pada malam hari, termasuk malam Jumat.',
        difficulty: 'sedang',
        hint: 'Shalat ini dilakukan di sepertiga malam.'
    },
    {
        question: 'Apa nama tempat ibadah umat Islam?',
        options: ['Masjid', 'Gereja', 'Vihara', 'Pura'],
        correctIndex: 0,
        explanation: 'Masjid adalah tempat ibadah umat Islam yang digunakan untuk melaksanakan shalat berjamaah.',
        difficulty: 'sedang',
        hint: 'Tempat ini disebut juga "Rumah Allah".'
    },
    {
        question: 'Apa nama surat yang dibaca pada shalat Jumat?',
        options: ['Al-Jumu\'ah', 'Al-Baqarah', 'Ali-Imran', 'An-Nisa'],
        correctIndex: 0,
        explanation: 'Surat Al-Jumu\'ah dianjurkan untuk dibaca pada shalat Jumat karena menjelaskan tentang keutamaan hari Jumat.',
        difficulty: 'sedang',
        hint: 'Surat ini berada di juz ke-28.'
    },
    {
        question: 'Apa nama hewan yang disebutkan dalam surat Al-Fil?',
        options: ['Gajah', 'Kuda', 'Unta', 'Kucing'],
        correctIndex: 0,
        explanation: 'Surat Al-Fil menceritakan tentang pasukan bergajah yang hendak menghancurkan Ka\'bah.',
        difficulty: 'sedang',
        hint: 'Hewan ini adalah hewan terbesar di darat.'
    },
    {
        question: 'Apa nama malaikat yang meniup sangkakala?',
        options: ['Israfil', 'Jibril', 'Mikail', 'Rakib'],
        correctIndex: 0,
        explanation: 'Malaikat Israfil bertugas meniup sangkakala pada hari kiamat sebagai tanda kehancuran alam semesta.',
        difficulty: 'sedang',
        hint: 'Beliau adalah malaikat yang memiliki tugas besar di akhir zaman.'
    },
    {
        question: 'Apa nama hari akhir dalam Islam?',
        options: ['Yaumul Qiyamah', 'Yaumul Jumat', 'Yaumul Id', 'Yaumul Arafah'],
        correctIndex: 0,
        explanation: 'Yaumul Qiyamah adalah hari kiamat di mana seluruh manusia akan dibangkitkan kembali.',
        difficulty: 'sedang',
        hint: 'Hari ini disebut juga sebagai hari kebangkitan.'
    },
    {
        question: 'Apa nama nabi yang dibakar oleh Raja Namrud?',
        options: ['Ibrahim AS', 'Musa AS', 'Isa AS', 'Muhammad SAW'],
        correctIndex: 0,
        explanation: 'Nabi Ibrahim AS dibakar oleh Raja Namrud karena menolak menyembah berhala, namun Allah menyelamatkannya.',
        difficulty: 'sedang',
        hint: 'Beliau adalah nabi yang dijuluki "Khalilullah".'
    },
    {
        question: 'Apa nama surat yang menjelaskan tentang keesaan Allah?',
        options: ['Al-Ikhlas', 'Al-Fatihah', 'Al-Baqarah', 'Ali-Imran'],
        correctIndex: 0,
        explanation: 'Surat Al-Ikhlas secara khusus menjelaskan tentang keesaan Allah dan menolak segala bentuk kemusyrikan.',
        difficulty: 'sedang',
        hint: 'Surat ini disebut juga "Surat Tauhid".'
    },
    {
        question: 'Apa nama ibadah yang dilakukan dengan mengucapkan "Allahu Akbar"?',
        options: ['Takbir', 'Tahmid', 'Tasbih', 'Tahlil'],
        correctIndex: 0,
        explanation: 'Takbir adalah pengucapan "Allahu Akbar" yang berarti "Allah Maha Besar", sering diucapkan dalam ibadah.',
        difficulty: 'sedang',
        hint: 'Ini adalah bacaan yang mengagungkan Allah.'
    },
    {
        question: 'Apa nama nabi yang diutus untuk bangsa Ad?',
        options: ['Hud AS', 'Saleh AS', 'Nuh AS', 'Ibrahim AS'],
        correctIndex: 0,
        explanation: 'Nabi Hud AS diutus untuk bangsa Ad yang tinggal di daerah Ahqaf (Yaman) dan mereka mendustakan beliau.',
        difficulty: 'sedang',
        hint: 'Beliau adalah nabi yang diutus kepada kaum yang memiliki fisik besar.'
    },
    {
        question: 'Apa nama surat yang merupakan "Qalbu" (jantung) Al-Quran?',
        options: ['Yasin', 'Al-Fatihah', 'Al-Baqarah', 'Al-Ikhlas'],
        correctIndex: 0,
        explanation: 'Surat Yasin disebut sebagai "Qalbul Quran" atau jantung Al-Quran karena kandungannya yang sangat mendalam.',
        difficulty: 'sedang',
        hint: 'Surat ini sering dibaca pada malam Jumat.'
    },
    {
        question: 'Apa nama tempat yang digunakan untuk berihram saat haji?',
        options: ['Miqat', 'Arafah', 'Muzdalifah', 'Mina'],
        correctIndex: 0,
        explanation: 'Miqat adalah tempat atau batas waktu untuk memulai ihram dalam ibadah haji dan umrah.',
        difficulty: 'sedang',
        hint: 'Ini adalah tempat untuk berniat memulai haji.'
    },
    {
        question: 'Apa nama bidadari yang disebut dalam Al-Quran?',
        options: ['Hurul Ain', 'Malaikat', 'Jin', 'Syaitan'],
        correctIndex: 0,
        explanation: 'Hurul Ain adalah bidadari yang dijanjikan Allah untuk penghuni surga dengan kecantikan yang sempurna.',
        difficulty: 'sedang',
        hint: 'Ini adalah hadiah untuk orang-orang yang bertakwa.'
    },
    {
        question: 'Apa nama peristiwa Isra Mi\'raj yang terjadi pada malam?',
        options: ['27 Rajab', '27 Ramadhan', '27 Dzulhijjah', '27 Muharram'],
        correctIndex: 0,
        explanation: 'Isra Mi\'raj terjadi pada 27 Rajab, di mana Nabi Muhammad SAW melakukan perjalanan dari Masjidil Haram ke Masjidil Aqsa dan naik ke Sidratul Muntaha.',
        difficulty: 'sedang',
        hint: 'Peristiwa ini terjadi di bulan Rajab.'
    },
    {
        question: 'Apa nama surat yang menceritakan tentang bahtera Nuh?',
        options: ['Nuh', 'Hud', 'Al-Anbiya', 'Asy-Syuara'],
        correctIndex: 0,
        explanation: 'Surat Nuh menceritakan tentang dakwah Nabi Nuh AS kepada kaumnya dan pembuatan bahtera.',
        difficulty: 'sedang',
        hint: 'Surat ini dinamakan sesuai dengan nama nabi.'
    },
    {
        question: 'Apa nama malaikat yang memohon ampun untuk orang-orang di bumi?',
        options: ['Hamalatul Arsy', 'Jibril', 'Mikail', 'Izrail'],
        correctIndex: 0,
        explanation: 'Malaikat Hamalatul Arsy adalah malaikat pembawa Arsy yang memohon ampun bagi orang-orang yang beriman.',
        difficulty: 'sulit',
        hint: 'Mereka adalah malaikat yang dekat dengan Allah.'
    },
    {
        question: 'Apa nama shalat sunnah yang dilakukan setelah shalat Dzuhur?',
        options: ['Shalat Sunnah Ba\'diyah', 'Shalat Dhuha', 'Shalat Tahajud', 'Shalat Witir'],
        correctIndex: 0,
        explanation: 'Shalat Sunnah Ba\'diyah Dzuhur adalah shalat sunnah yang dilakukan setelah shalat Dzuhur, biasanya 2 atau 4 rakaat.',
        difficulty: 'sedang',
        hint: 'Shalat ini mengikuti shalat wajib.'
    },
    {
        question: 'Apa nama kitab yang diturunkan kepada Nabi Daud AS?',
        options: ['Zabur', 'Taurat', 'Injil', 'Al-Quran'],
        correctIndex: 0,
        explanation: 'Zabur adalah kitab yang diturunkan kepada Nabi Daud AS sebagai petunjuk bagi Bani Israil.',
        difficulty: 'sedang',
        hint: 'Kitab ini berisi puji-pujian kepada Allah.'
    },
    {
        question: 'Apa nama nabi yang dijuluki "Bapak Para Nabi"?',
        options: ['Ibrahim AS', 'Muhammad SAW', 'Nuh AS', 'Adam AS'],
        correctIndex: 0,
        explanation: 'Nabi Ibrahim AS dijuluki "Abul Anbiya" karena banyak nabi yang merupakan keturunannya.',
        difficulty: 'sedang',
        hint: 'Beliau adalah nabi yang membangun Ka\'bah bersama putranya.'
    },
    {
        question: 'Apa nama surat yang dibaca saat shalat Jumat?',
        options: ['Al-Jumu\'ah', 'Al-Fatihah', 'Al-Baqarah', 'Ali-Imran'],
        correctIndex: 0,
        explanation: 'Surat Al-Jumu\'ah dianjurkan untuk dibaca saat shalat Jumat karena menjelaskan tentang keutamaan hari Jumat.',
        difficulty: 'sedang',
        hint: 'Surat ini berada di juz ke-28.'
    },
    {
        question: 'Apa nama zakat yang dikeluarkan dari harta perniagaan?',
        options: ['Zakat Mal', 'Zakat Fitrah', 'Zakat Profesi', 'Zakat Pertanian'],
        correctIndex: 0,
        explanation: 'Zakat Mal adalah zakat yang dikeluarkan dari harta yang dimiliki, termasuk harta perniagaan, emas, perak, dan uang.',
        difficulty: 'sedang',
        hint: 'Zakat ini dikeluarkan saat harta mencapai nisab.'
    },
    {
        question: 'Apa nama nabi yang memiliki mukjizat bisa berbicara dengan hewan?',
        options: ['Sulaiman AS', 'Musa AS', 'Ibrahim AS', 'Isa AS'],
        correctIndex: 0,
        explanation: 'Nabi Sulaiman AS diberi mukjizat untuk berbicara dengan hewan dan memiliki kerajaan yang luar biasa.',
        difficulty: 'sedang',
        hint: 'Beliau adalah nabi yang juga seorang raja.'
    },
    {
        question: 'Apa nama surat yang berisi 3 inti ajaran Islam?',
        options: ['Al-Ikhlas', 'Al-Fatihah', 'Al-Baqarah', 'Ali-Imran'],
        correctIndex: 0,
        explanation: 'Surat Al-Ikhlas mengandung 3 inti ajaran Islam: Tauhid (keesaan Allah), Al-Ikhlas (ketulusan), dan Al-Qur\'an (penjelasan).',
        difficulty: 'sedang',
        hint: 'Surat ini memiliki 4 ayat.'
    },
    {
        question: 'Apa nama ibadah yang dilakukan dengan berlari-lari kecil antara Safa dan Marwah?',
        options: ['Sa\'i', 'Tawaf', 'Wukuf', 'Ihram'],
        correctIndex: 0,
        explanation: 'Sa\'i adalah ibadah berlari-lari kecil atau berjalan antara bukit Safa dan Marwah sebanyak 7 kali.',
        difficulty: 'sedang',
        hint: 'Ibadah ini dilakukan untuk mengenang perjuangan Siti Hajar.'
    },
    {
        question: 'Apa nama nabi yang diangkat ke langit tanpa mengalami kematian?',
        options: ['Idris AS', 'Isa AS', 'Musa AS', 'Ibrahim AS'],
        correctIndex: 0,
        explanation: 'Nabi Idris AS diangkat ke langit tanpa mengalami kematian karena ketaatannya kepada Allah.',
        difficulty: 'sedang',
        hint: 'Beliau adalah nabi yang diutus setelah Nabi Adam AS.'
    },
    {
        question: 'Apa nama surat yang menjelaskan tentang keutamaan Shalat Jumat?',
        options: ['Al-Jumu\'ah', 'Al-Fatihah', 'Al-Baqarah', 'Ali-Imran'],
        correctIndex: 0,
        explanation: 'Surat Al-Jumu\'ah menjelaskan tentang keutamaan Shalat Jumat dan kewajiban melaksanakannya.',
        difficulty: 'sedang',
        hint: 'Surat ini juga menjelaskan tentang orang-orang Yahudi yang melanggar perintah Allah.'
    },
    {
        question: 'Apa nama hewan yang disebut dalam surat Al-Fil?',
        options: ['Gajah', 'Kuda', 'Unta', 'Kucing'],
        correctIndex: 0,
        explanation: 'Surat Al-Fil menceritakan tentang pasukan bergajah yang dipimpin oleh Abrahah untuk menghancurkan Ka\'bah.',
        difficulty: 'sedang',
        hint: 'Hewan ini adalah hewan darat terbesar.'
    },
    {
        question: 'Apa nama nabi yang diutus untuk kaum Madyan?',
        options: ['Syuaib AS', 'Hud AS', 'Saleh AS', 'Luth AS'],
        correctIndex: 0,
        explanation: 'Nabi Syuaib AS diutus untuk kaum Madyan yang hidup dari perdagangan dan sering curang dalam timbangan.',
        difficulty: 'sedang',
        hint: 'Beliau adalah mertua Nabi Musa AS.'
    },
    {
        question: 'Apa nama surat yang berisi tentang keutamaan Al-Quran?',
        options: ['Al-Baqarah', 'Al-Fatihah', 'Al-Ikhlas', 'An-Nas'],
        correctIndex: 0,
        explanation: 'Surat Al-Baqarah adalah surat terpanjang yang mengandung banyak keutamaan dan petunjuk bagi umat Islam.',
        difficulty: 'sedang',
        hint: 'Surat ini disebut juga "Puncak Al-Quran".'
    }
];

// ============================================
// EXPOSE KE GLOBAL
// ============================================

/**
 * Menggabungkan semua kategori ke dalam satu objek global
 * Setiap kategori memiliki 50 soal
 */
window.questionsByCategory = {
    'pengetahuan-umum': createCategoryQuestions(pengetahuanUmumQuestions, 'Pengetahuan Umum'),
    'matematika': createCategoryQuestions(matematikaQuestions, 'Matematika'),
    'agama-islam': createCategoryQuestions(agamaIslamQuestions, 'Agama Islam')
    // Kategori lain akan ditambahkan di tahap berikutnya
};

/**
 * Total soal yang tersedia
 */
window.totalQuestions = 
    window.questionsByCategory['pengetahuan-umum'].length +
    window.questionsByCategory['matematika'].length +
    window.questionsByCategory['agama-islam'].length;

console.log(`📚 Database soal dimuat: ${window.totalQuestions} soal`);
console.log(`📂 ${Object.keys(window.questionsByCategory).length} kategori tersedia`);

// ============================================
// INFORMASI UNTUK PENGEMBANG
// ============================================

/**
 * Untuk menambahkan kategori baru, tambahkan:
 * 1. Array questions baru
 * 2. Masukkan ke window.questionsByCategory
 * 
 * Pastikan setiap soal memiliki format yang konsisten:
 * {
 *   question: string,
 *   options: [string],
 *   correctIndex: number (0-3),
 *   explanation: string,
 *   difficulty: 'sedang' | 'sulit',
 *   hint: string
 * }
 */