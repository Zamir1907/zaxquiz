// ============================================
// KATEGORI 6: PROVINSI DAN IBU KOTA INDONESIA (50 Soal)
// ============================================

const provinsiIndonesiaQuestions = [
    // ===== SUMATRA =====
    {
        question: 'Apa ibu kota Provinsi Aceh?',
        options: ['Banda Aceh', 'Medan', 'Padang', 'Pekanbaru'],
        correctIndex: 0,
        explanation: 'Banda Aceh adalah ibu kota Provinsi Aceh yang terletak di ujung utara Pulau Sumatra.',
        difficulty: 'sedang',
        hint: 'Kota ini terkenal dengan masjid Baiturrahman yang megah.'
    },
    {
        question: 'Apa ibu kota Provinsi Sumatra Utara?',
        options: ['Medan', 'Pematangsiantar', 'Binjai', 'Tebing Tinggi'],
        correctIndex: 0,
        explanation: 'Medan adalah ibu kota Provinsi Sumatra Utara yang merupakan kota terbesar ketiga di Indonesia.',
        difficulty: 'sedang',
        hint: 'Kota ini terkenal dengan soto Medan dan duriannya.'
    },
    {
        question: 'Apa ibu kota Provinsi Sumatra Barat?',
        options: ['Padang', 'Bukittinggi', 'Payakumbuh', 'Solok'],
        correctIndex: 0,
        explanation: 'Padang adalah ibu kota Provinsi Sumatra Barat yang terkenal dengan rumah gadang dan rendangnya.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di pesisir barat Sumatra.'
    },
    {
        question: 'Apa ibu kota Provinsi Riau?',
        options: ['Pekanbaru', 'Dumai', 'Siak', 'Bengkalawan'],
        correctIndex: 0,
        explanation: 'Pekanbaru adalah ibu kota Provinsi Riau yang terletak di tepi Sungai Siak dan pusat industri minyak.',
        difficulty: 'sedang',
        hint: 'Kota ini terkenal sebagai kota minyak.'
    },
    {
        question: 'Apa ibu kota Provinsi Jambi?',
        options: ['Jambi', 'Sungai Penuh', 'Kota Bangko', 'Muara Bungo'],
        correctIndex: 0,
        explanation: 'Kota Jambi adalah ibu kota Provinsi Jambi yang terletak di tepi Sungai Batanghari.',
        difficulty: 'sedang',
        hint: 'Kota ini dilalui oleh sungai terpanjang di Sumatra.'
    },
    {
        question: 'Apa ibu kota Provinsi Sumatra Selatan?',
        options: ['Palembang', 'Lubuklinggau', 'Prabumulih', 'Baturaja'],
        correctIndex: 0,
        explanation: 'Palembang adalah ibu kota Provinsi Sumatra Selatan yang dikenal dengan jembatan Ampera dan pempeknya.',
        difficulty: 'sedang',
        hint: 'Kota ini terkenal dengan jembatan Ampera.'
    },
    {
        question: 'Apa ibu kota Provinsi Bengkulu?',
        options: ['Bengkulu', 'Curup', 'Bintuhan', 'Manna'],
        correctIndex: 0,
        explanation: 'Kota Bengkulu adalah ibu kota Provinsi Bengkulu yang terletak di pesisir barat Sumatra.',
        difficulty: 'sedang',
        hint: 'Kota ini adalah tempat pengasingan Soekarno.'
    },
    {
        question: 'Apa ibu kota Provinsi Lampung?',
        options: ['Bandar Lampung', 'Metro', 'Kotabumi', 'Teluk Betung'],
        correctIndex: 0,
        explanation: 'Bandar Lampung adalah ibu kota Provinsi Lampung yang terletak di ujung selatan Pulau Sumatra.',
        difficulty: 'sedang',
        hint: 'Kota ini merupakan pintu gerbang ke Sumatra dari Jawa.'
    },
    {
        question: 'Apa ibu kota Provinsi Kepulauan Bangka Belitung?',
        options: ['Pangkalpinang', 'Belinyu', 'Muntok', 'Tanjungpandan'],
        correctIndex: 0,
        explanation: 'Pangkalpinang adalah ibu kota Provinsi Kepulauan Bangka Belitung yang terkenal dengan laskar pelangi.',
        difficulty: 'sedang',
        hint: 'Kota ini terkenal dengan film Laskar Pelangi.'
    },
    {
        question: 'Apa ibu kota Provinsi Kepulauan Riau?',
        options: ['Tanjungpinang', 'Batam', 'Bintan', 'Karimun'],
        correctIndex: 0,
        explanation: 'Tanjungpinang adalah ibu kota Provinsi Kepulauan Riau yang terletak di Pulau Bintan.',
        difficulty: 'sedang',
        hint: 'Kota ini terkenal dengan sejarah Kerajaan Melayu Riau.'
    },

    // ===== JAWA =====
    {
        question: 'Apa ibu kota Provinsi DKI Jakarta?',
        options: ['Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Barat'],
        correctIndex: 0,
        explanation: 'Jakarta Pusat adalah pusat pemerintahan Provinsi DKI Jakarta yang juga menjadi ibu kota Indonesia.',
        difficulty: 'sedang',
        hint: 'Kota ini adalah pusat pemerintahan Indonesia.'
    },
    {
        question: 'Apa ibu kota Provinsi Jawa Barat?',
        options: ['Bandung', 'Bogor', 'Bekasi', 'Depok'],
        correctIndex: 0,
        explanation: 'Bandung adalah ibu kota Provinsi Jawa Barat yang dikenal sebagai "Kota Kembang" dan "Paris van Java".',
        difficulty: 'sedang',
        hint: 'Kota ini dijuluki "Kota Kembang".'
    },
    {
        question: 'Apa ibu kota Provinsi Jawa Tengah?',
        options: ['Semarang', 'Surakarta', 'Magelang', 'Pekalongan'],
        correctIndex: 0,
        explanation: 'Semarang adalah ibu kota Provinsi Jawa Tengah yang terletak di pesisir utara Jawa.',
        difficulty: 'sedang',
        hint: 'Kota ini terkenal dengan lawan sebrang dan lumpia.'
    },
    {
        question: 'Apa ibu kota Provinsi DI Yogyakarta?',
        options: ['Yogyakarta', 'Sleman', 'Bantul', 'Kulon Progo'],
        correctIndex: 0,
        explanation: 'Kota Yogyakarta adalah ibu kota Provinsi DI Yogyakarta yang dikenal sebagai "Kota Pelajar" dan "Kota Budaya".',
        difficulty: 'sedang',
        hint: 'Kota ini memiliki kerajaan yang masih berjalan.'
    },
    {
        question: 'Apa ibu kota Provinsi Jawa Timur?',
        options: ['Surabaya', 'Malang', 'Sidoarjo', 'Madiun'],
        correctIndex: 0,
        explanation: 'Surabaya adalah ibu kota Provinsi Jawa Timur yang merupakan kota terbesar kedua di Indonesia.',
        difficulty: 'sedang',
        hint: 'Kota ini terkenal sebagai "Kota Pahlawan".'
    },
    {
        question: 'Apa ibu kota Provinsi Banten?',
        options: ['Serang', 'Tangerang', 'Cilegon', 'Pandeglang'],
        correctIndex: 0,
        explanation: 'Serang adalah ibu kota Provinsi Banten yang terletak di ujung barat Pulau Jawa.',
        difficulty: 'sedang',
        hint: 'Kota ini berbatasan dengan Jakarta dan Lampung.'
    },

    // ===== BALI & NUSA TENGGARA =====
    {
        question: 'Apa ibu kota Provinsi Bali?',
        options: ['Denpasar', 'Badung', 'Gianyar', 'Tabanan'],
        correctIndex: 0,
        explanation: 'Denpasar adalah ibu kota Provinsi Bali yang merupakan pusat pemerintahan dan ekonomi Pulau Dewata.',
        difficulty: 'sedang',
        hint: 'Kota ini memiliki pantai Kuta yang terkenal.'
    },
    {
        question: 'Apa ibu kota Provinsi Nusa Tenggara Barat?',
        options: ['Mataram', 'Lombok Timur', 'Sumbawa', 'Bima'],
        correctIndex: 0,
        explanation: 'Mataram adalah ibu kota Provinsi Nusa Tenggara Barat yang terletak di Pulau Lombok.',
        difficulty: 'sedang',
        hint: 'Kota ini dekat dengan pantai Senggigi yang terkenal.'
    },
    {
        question: 'Apa ibu kota Provinsi Nusa Tenggara Timur?',
        options: ['Kupang', 'Ende', 'Maumere', 'Ruteng'],
        correctIndex: 0,
        explanation: 'Kupang adalah ibu kota Provinsi Nusa Tenggara Timur yang terletak di Pulau Timor.',
        difficulty: 'sedang',
        hint: 'Kota ini berbatasan langsung dengan Timor Leste.'
    },

    // ===== KALIMANTAN =====
    {
        question: 'Apa ibu kota Provinsi Kalimantan Barat?',
        options: ['Pontianak', 'Singkawang', 'Sambas', 'Ketapang'],
        correctIndex: 0,
        explanation: 'Pontianak adalah ibu kota Provinsi Kalimantan Barat yang terletak tepat di garis khatulistiwa.',
        difficulty: 'sedang',
        hint: 'Kota ini dilalui oleh garis khatulistiwa.'
    },
    {
        question: 'Apa ibu kota Provinsi Kalimantan Tengah?',
        options: ['Palangka Raya', 'Sampit', 'Pangkalan Bun', 'Kuala Kapuas'],
        correctIndex: 0,
        explanation: 'Palangka Raya adalah ibu kota Provinsi Kalimantan Tengah yang merupakan kota terbesar di Kalimantan Tengah.',
        difficulty: 'sedang',
        hint: 'Kota ini memiliki Taman Nasional Sebangau.'
    },
    {
        question: 'Apa ibu kota Provinsi Kalimantan Selatan?',
        options: ['Banjarmasin', 'Banjarbaru', 'Martapura', 'Barabai'],
        correctIndex: 0,
        explanation: 'Banjarmasin adalah ibu kota Provinsi Kalimantan Selatan yang terkenal dengan pasar terapungnya.',
        difficulty: 'sedang',
        hint: 'Kota ini dijuluki "Kota Seribu Sungai".'
    },
    {
        question: 'Apa ibu kota Provinsi Kalimantan Timur?',
        options: ['Samarinda', 'Balikpapan', 'Bontang', 'Tenggarong'],
        correctIndex: 0,
        explanation: 'Samarinda adalah ibu kota Provinsi Kalimantan Timur yang terkenal dengan batik dan rumah adatnya.',
        difficulty: 'sedang',
        hint: 'Kota ini menjadi ibu kota provinsi sebelum pemindahan ke Nusantara.'
    },
    {
        question: 'Apa ibu kota Provinsi Kalimantan Utara?',
        options: ['Tanjung Selor', 'Tarakan', 'Malinau', 'Nunukan'],
        correctIndex: 0,
        explanation: 'Tanjung Selor adalah ibu kota Provinsi Kalimantan Utara yang merupakan provinsi termuda di Kalimantan.',
        difficulty: 'sedang',
        hint: 'Provinsi ini adalah hasil pemekaran dari Kalimantan Timur.'
    },

    // ===== SULAWESI =====
    {
        question: 'Apa ibu kota Provinsi Sulawesi Utara?',
        options: ['Manado', 'Bitung', 'Tomohon', 'Kotamobagu'],
        correctIndex: 0,
        explanation: 'Manado adalah ibu kota Provinsi Sulawesi Utara yang terkenal dengan Taman Laut Bunaken.',
        difficulty: 'sedang',
        hint: 'Kota ini memiliki Taman Nasional Bunaken.'
    },
    {
        question: 'Apa ibu kota Provinsi Sulawesi Tengah?',
        options: ['Palu', 'Poso', 'Luwuk', 'Tolitoli'],
        correctIndex: 0,
        explanation: 'Palu adalah ibu kota Provinsi Sulawesi Tengah yang terletak di teluk Palu dan pernah dilanda gempa dan tsunami.',
        difficulty: 'sedang',
        hint: 'Kota ini memiliki Teluk Palu yang indah.'
    },
    {
        question: 'Apa ibu kota Provinsi Sulawesi Selatan?',
        options: ['Makassar', 'Parepare', 'Palopo', 'Pinrang'],
        correctIndex: 0,
        explanation: 'Makassar adalah ibu kota Provinsi Sulawesi Selatan yang dikenal dengan benteng Fort Rotterdam dan kuliner coto.',
        difficulty: 'sedang',
        hint: 'Kota ini dijuluki "Kota Daeng".'
    },
    {
        question: 'Apa ibu kota Provinsi Sulawesi Tenggara?',
        options: ['Kendari', 'Baubau', 'Kolaka', 'Raha'],
        correctIndex: 0,
        explanation: 'Kendari adalah ibu kota Provinsi Sulawesi Tenggara yang terletak di Teluk Kendari.',
        difficulty: 'sedang',
        hint: 'Kota ini terkenal dengan wisata bawah lautnya.'
    },
    {
        question: 'Apa ibu kota Provinsi Gorontalo?',
        options: ['Gorontalo', 'Limboto', 'Suhu', 'Kwandang'],
        correctIndex: 0,
        explanation: 'Kota Gorontalo adalah ibu kota Provinsi Gorontalo yang merupakan hasil pemekaran dari Sulawesi Utara.',
        difficulty: 'sedang',
        hint: 'Provinsi ini terkenal dengan upacara adat "Molontalo".'
    },
    {
        question: 'Apa ibu kota Provinsi Sulawesi Barat?',
        options: ['Mamuju', 'Majene', 'Polewali', 'Kalumpang'],
        correctIndex: 0,
        explanation: 'Mamuju adalah ibu kota Provinsi Sulawesi Barat yang merupakan provinsi termuda di Sulawesi.',
        difficulty: 'sedang',
        hint: 'Provinsi ini adalah hasil pemekaran dari Sulawesi Selatan.'
    },

    // ===== MALUKU & PAPUA =====
    {
        question: 'Apa ibu kota Provinsi Maluku?',
        options: ['Ambon', 'Ternate', 'Tidore', 'Banda Neira'],
        correctIndex: 0,
        explanation: 'Ambon adalah ibu kota Provinsi Maluku yang terkenal sebagai "Kota Musik" dan "Kota Rempah".',
        difficulty: 'sedang',
        hint: 'Kota ini dijuluki "Kota Ambon Manise".'
    },
    {
        question: 'Apa ibu kota Provinsi Maluku Utara?',
        options: ['Sofifi', 'Ternate', 'Tidore', 'Halmahera'],
        correctIndex: 0,
        explanation: 'Sofifi adalah ibu kota Provinsi Maluku Utara yang terletak di Pulau Halmahera.',
        difficulty: 'sedang',
        hint: 'Provinsi ini adalah hasil pemekaran dari Maluku.'
    },
    {
        question: 'Apa ibu kota Provinsi Papua?',
        options: ['Jayapura', 'Merauke', 'Manokwari', 'Sorong'],
        correctIndex: 0,
        explanation: 'Jayapura adalah ibu kota Provinsi Papua yang terletak di ujung timur Indonesia dan berbatasan dengan PNG.',
        difficulty: 'sedang',
        hint: 'Kota ini berbatasan langsung dengan Papua Nugini.'
    },
    {
        question: 'Apa ibu kota Provinsi Papua Barat?',
        options: ['Manokwari', 'Sorong', 'Jayapura', 'Merauke'],
        correctIndex: 0,
        explanation: 'Manokwari adalah ibu kota Provinsi Papua Barat yang terletak di Teluk Manokwari.',
        difficulty: 'sedang',
        hint: 'Kota ini adalah ibu kota provinsi bagian barat Papua.'
    },
    {
        question: 'Apa ibu kota Provinsi Papua Tengah?',
        options: ['Nabire', 'Timika', 'Jayapura', 'Merauke'],
        correctIndex: 0,
        explanation: 'Nabire adalah ibu kota Provinsi Papua Tengah yang merupakan hasil pemekaran Provinsi Papua.',
        difficulty: 'sulit',
        hint: 'Provinsi ini adalah hasil pemekaran terbaru dari Papua.'
    },
    {
        question: 'Apa ibu kota Provinsi Papua Pegunungan?',
        options: ['Wamena', 'Jayapura', 'Nabire', 'Timika'],
        correctIndex: 0,
        explanation: 'Wamena adalah ibu kota Provinsi Papua Pegunungan yang terletak di Lembah Balim.',
        difficulty: 'sulit',
        hint: 'Kota ini berada di dataran tinggi Papua.'
    },
    {
        question: 'Apa ibu kota Provinsi Papua Selatan?',
        options: ['Merauke', 'Timika', 'Jayapura', 'Nabire'],
        correctIndex: 0,
        explanation: 'Merauke adalah ibu kota Provinsi Papua Selatan yang merupakan hasil pemekaran Provinsi Papua.',
        difficulty: 'sulit',
        hint: 'Kota ini terkenal dengan "semboyan Merauke".'
    },
    {
        question: 'Apa ibu kota Provinsi Papua Barat Daya?',
        options: ['Sorong', 'Manokwari', 'Jayapura', 'Timika'],
        correctIndex: 0,
        explanation: 'Sorong adalah ibu kota Provinsi Papua Barat Daya yang merupakan hasil pemekaran Provinsi Papua Barat.',
        difficulty: 'sulit',
        hint: 'Kota ini adalah pintu gerbang ke Raja Ampat.'
    },

    // ===== SOAL TAMBAHAN UNTUK MELENGKAPI 50 =====
    {
        question: 'Provinsi mana yang memiliki ibu kota Palangkaraya?',
        options: ['Kalimantan Tengah', 'Kalimantan Selatan', 'Kalimantan Timur', 'Kalimantan Barat'],
        correctIndex: 0,
        explanation: 'Palangkaraya adalah ibu kota Provinsi Kalimantan Tengah yang terletak di Pulau Kalimantan.',
        difficulty: 'sedang',
        hint: 'Provinsi ini memiliki Taman Nasional Sebangau.'
    },
    {
        question: 'Provinsi mana yang memiliki ibu kota Kendari?',
        options: ['Sulawesi Tenggara', 'Sulawesi Selatan', 'Sulawesi Utara', 'Sulawesi Barat'],
        correctIndex: 0,
        explanation: 'Kendari adalah ibu kota Provinsi Sulawesi Tenggara yang terletak di Teluk Kendari.',
        difficulty: 'sedang',
        hint: 'Provinsi ini berada di bagian tenggara Sulawesi.'
    },
    {
        question: 'Provinsi mana yang memiliki ibu kota Ambon?',
        options: ['Maluku', 'Maluku Utara', 'Sulawesi Utara', 'Papua'],
        correctIndex: 0,
        explanation: 'Ambon adalah ibu kota Provinsi Maluku yang terkenal sebagai "Kota Rempah".',
        difficulty: 'sedang',
        hint: 'Provinsi ini terdiri dari ribuan pulau di timur Indonesia.'
    },
    {
        question: 'Provinsi mana yang memiliki ibu kota Pontianak?',
        options: ['Kalimantan Barat', 'Kalimantan Timur', 'Kalimantan Selatan', 'Kalimantan Tengah'],
        correctIndex: 0,
        explanation: 'Pontianak adalah ibu kota Provinsi Kalimantan Barat yang terletak tepat di garis khatulistiwa.',
        difficulty: 'sedang',
        hint: 'Kota ini dilalui garis khatulistiwa.'
    },
    {
        question: 'Provinsi mana yang memiliki ibu kota Pekanbaru?',
        options: ['Riau', 'Jambi', 'Sumatra Barat', 'Sumatra Utara'],
        correctIndex: 0,
        explanation: 'Pekanbaru adalah ibu kota Provinsi Riau yang terletak di tepi Sungai Siak.',
        difficulty: 'sedang',
        hint: 'Provinsi ini terkenal dengan kebudayaan Melayu.'
    },
    {
        question: 'Provinsi mana yang memiliki ibu kota Denpasar?',
        options: ['Bali', 'NTB', 'NTT', 'Jawa Timur'],
        correctIndex: 0,
        explanation: 'Denpasar adalah ibu kota Provinsi Bali yang terletak di Pulau Dewata.',
        difficulty: 'sedang',
        hint: 'Provinsi ini terkenal dengan keindahan pantainya.'
    },
    {
        question: 'Provinsi mana yang memiliki ibu kota Tanjung Pinang?',
        options: ['Kepulauan Riau', 'Riau', 'Kepulauan Bangka Belitung', 'Sumatra Selatan'],
        correctIndex: 0,
        explanation: 'Tanjung Pinang adalah ibu kota Provinsi Kepulauan Riau yang terletak di Pulau Bintan.',
        difficulty: 'sedang',
        hint: 'Provinsi ini berbatasan langsung dengan Singapura.'
    },
    {
        question: 'Provinsi mana yang memiliki ibu kota Serang?',
        options: ['Banten', 'Jawa Barat', 'Jawa Tengah', 'DKI Jakarta'],
        correctIndex: 0,
        explanation: 'Serang adalah ibu kota Provinsi Banten yang terletak di ujung barat Pulau Jawa.',
        difficulty: 'sedang',
        hint: 'Provinsi ini adalah hasil pemekaran dari Jawa Barat.'
    },
    {
        question: 'Provinsi mana yang memiliki ibu kota Mataram?',
        options: ['NTB', 'Bali', 'NTT', 'Jawa Timur'],
        correctIndex: 0,
        explanation: 'Mataram adalah ibu kota Provinsi Nusa Tenggara Barat yang terletak di Pulau Lombok.',
        difficulty: 'sedang',
        hint: 'Provinsi ini terkenal dengan pantai Senggigi.'
    },
    {
        question: 'Provinsi mana yang memiliki ibu kota Sofifi?',
        options: ['Maluku Utara', 'Maluku', 'Sulawesi Utara', 'Papua'],
        correctIndex: 0,
        explanation: 'Sofifi adalah ibu kota Provinsi Maluku Utara yang terletak di Pulau Halmahera.',
        difficulty: 'sedang',
        hint: 'Provinsi ini adalah hasil pemekaran dari Maluku.'
    },
    {
        question: 'Apa ibu kota Provinsi Sumatera Utara?',
        options: ['Medan', 'Pematangsiantar', 'Binjai', 'Tebing Tinggi'],
        correctIndex: 0,
        explanation: 'Medan adalah ibu kota Provinsi Sumatera Utara yang merupakan kota terbesar di Sumatra.',
        difficulty: 'sedang',
        hint: 'Kota ini terkenal dengan soto dan duriannya.'
    },
    {
        question: 'Apa ibu kota Provinsi Nusa Tenggara Timur?',
        options: ['Kupang', 'Ende', 'Maumere', 'Ruteng'],
        correctIndex: 0,
        explanation: 'Kupang adalah ibu kota Provinsi Nusa Tenggara Timur yang terletak di Pulau Timor.',
        difficulty: 'sedang',
        hint: 'Provinsi ini berbatasan dengan Timor Leste.'
    },
    {
        question: 'Provinsi mana yang memiliki ibu kota Palu?',
        options: ['Sulawesi Tengah', 'Sulawesi Selatan', 'Sulawesi Utara', 'Sulawesi Barat'],
        correctIndex: 0,
        explanation: 'Palu adalah ibu kota Provinsi Sulawesi Tengah yang terletak di Teluk Palu.',
        difficulty: 'sedang',
        hint: 'Provinsi ini memiliki Danau Poso dan Lindu.'
    },
    {
        question: 'Provinsi mana yang memiliki ibu kota Manokwari?',
        options: ['Papua Barat', 'Papua', 'Maluku', 'Sulawesi Utara'],
        correctIndex: 0,
        explanation: 'Manokwari adalah ibu kota Provinsi Papua Barat yang terletak di Teluk Manokwari.',
        difficulty: 'sedang',
        hint: 'Provinsi ini terkenal dengan Taman Wisata Teluk Cendrawasih.'
    }
];

// ============================================
// TAMBAHKAN KE GLOBAL QUESTIONS
// ============================================

// Tambahkan kategori Provinsi dan Ibu Kota Indonesia ke questionsByCategory
window.questionsByCategory['provinsi-indonesia'] = createCategoryQuestions(provinsiIndonesiaQuestions, 'Provinsi dan Ibu Kota Indonesia');

// Update total soal
window.totalQuestions = 0;
for (const category in window.questionsByCategory) {
    window.totalQuestions += window.questionsByCategory[category].length;
}

console.log(`✅ Kategori "Provinsi dan Ibu Kota Indonesia" ditambahkan! (${provinsiIndonesiaQuestions.length} soal)`);
console.log(`📚 Total soal sekarang: ${window.totalQuestions}`);
console.log(`📂 ${Object.keys(window.questionsByCategory).length} kategori tersedia`);