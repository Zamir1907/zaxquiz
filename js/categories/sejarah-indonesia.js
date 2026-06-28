// ============================================
// KATEGORI 7: SEJARAH INDONESIA (50 Soal)
// ============================================

const sejarahIndonesiaQuestions = [
    // ===== ERA KERAJAAN =====
    {
        question: 'Kerajaan Hindu tertua di Indonesia adalah?',
        options: ['Kutai', 'Tarumanegara', 'Sriwijaya', 'Majapahit'],
        correctIndex: 0,
        explanation: 'Kerajaan Kutai di Kalimantan Timur adalah kerajaan Hindu tertua di Indonesia, berdiri sekitar abad ke-4 M.',
        difficulty: 'sedang',
        hint: 'Kerajaan ini terletak di Pulau Kalimantan.'
    },
    {
        question: 'Kerajaan Buddha terbesar di Nusantara adalah?',
        options: ['Sriwijaya', 'Kutai', 'Tarumanegara', 'Majapahit'],
        correctIndex: 0,
        explanation: 'Kerajaan Sriwijaya adalah kerajaan Buddha terbesar di Nusantara yang berpusat di Palembang, Sumatra Selatan.',
        difficulty: 'sedang',
        hint: 'Kerajaan ini menguasai jalur perdagangan Selat Malaka.'
    },
    {
        question: 'Kerajaan Majapahit mencapai puncak kejayaan di bawah kepemimpinan?',
        options: ['Hayam Wuruk', 'Gajah Mada', 'Raden Wijaya', 'Tribhuwana Tunggadewi'],
        correctIndex: 0,
        explanation: 'Majapahit mencapai puncak kejayaan di bawah pemerintahan Hayam Wuruk dengan patih Gajah Mada sebagai mahapatih.',
        difficulty: 'sedang',
        hint: 'Beliau adalah raja Majapahit yang terkenal.'
    },
    {
        question: 'Sumpah Palapa diucapkan oleh?',
        options: ['Gajah Mada', 'Hayam Wuruk', 'Raden Wijaya', 'Tribhuwana Tunggadewi'],
        correctIndex: 0,
        explanation: 'Gajah Mada mengucapkan Sumpah Palapa yang berisi tekad untuk menyatukan Nusantara di bawah Majapahit.',
        difficulty: 'sedang',
        hint: 'Beliau adalah mahapatih Majapahit yang terkenal.'
    },
    {
        question: 'Kerajaan Islam pertama di Indonesia adalah?',
        options: ['Samudera Pasai', 'Demak', 'Malaka', 'Ternate'],
        correctIndex: 0,
        explanation: 'Kerajaan Samudera Pasai di Aceh adalah kerajaan Islam pertama di Indonesia yang berdiri pada abad ke-13.',
        difficulty: 'sedang',
        hint: 'Kerajaan ini terletak di Aceh.'
    },
    {
        question: 'Sunan Giri adalah salah satu anggota?',
        options: ['Wali Songo', 'Kerajaan Demak', 'Kerajaan Mataram', 'Penyebar Islam'],
        correctIndex: 0,
        explanation: 'Sunan Giri adalah salah satu dari Wali Songo yang berperan penting dalam penyebaran Islam di Jawa.',
        difficulty: 'sedang',
        hint: 'Beliau adalah tokoh penyebar Islam di Jawa.'
    },
    {
        question: 'Kerajaan Mataram Islam didirikan oleh?',
        options: ['Sutawijaya', 'Panembahan Senopati', 'Sultan Agung', 'Amangkurat I'],
        correctIndex: 0,
        explanation: 'Kerajaan Mataram Islam didirikan oleh Sutawijaya yang bergelar Panembahan Senopati pada akhir abad ke-16.',
        difficulty: 'sedang',
        hint: 'Kerajaan ini berpusat di Jawa Tengah.'
    },
    {
        question: 'Sultan Agung adalah raja dari?',
        options: ['Mataram Islam', 'Demak', 'Cirebon', 'Banten'],
        correctIndex: 0,
        explanation: 'Sultan Agung adalah raja besar dari Kerajaan Mataram Islam yang memerintah pada abad ke-17.',
        difficulty: 'sedang',
        hint: 'Beliau terkenal dengan serangan ke Batavia.'
    },
    {
        question: 'Kerajaan Ternate dan Tidore terkenal dengan?',
        options: ['Rempah-rempah', 'Emas', 'Perak', 'Budaya'],
        correctIndex: 0,
        explanation: 'Kerajaan Ternate dan Tidore di Maluku terkenal sebagai penghasil rempah-rempah seperti cengkeh dan pala.',
        difficulty: 'sedang',
        hint: 'Keduanya terletak di Maluku.'
    },

    // ===== ERA PENJAJAHAN =====
    {
        question: 'Kapan bangsa Portugis pertama kali datang ke Indonesia?',
        options: ['1511', '1521', '1498', '1500'],
        correctIndex: 0,
        explanation: 'Portugis datang ke Indonesia pada tahun 1511 saat Alfonso de Albuquerque menaklukkan Malaka.',
        difficulty: 'sedang',
        hint: 'Mereka datang untuk mencari rempah-rempah.'
    },
    {
        question: 'VOC didirikan pada tahun?',
        options: ['1602', '1596', '1600', '1619'],
        correctIndex: 0,
        explanation: 'VOC (Vereenigde Oost-Indische Compagnie) didirikan pada 20 Maret 1602 sebagai kongsi dagang Belanda di Asia.',
        difficulty: 'sedang',
        hint: 'Ini adalah perusahaan dagang Belanda.'
    },
    {
        question: 'VOC mengalami kebangkrutan pada tahun?',
        options: ['1799', '1800', '1801', '1810'],
        correctIndex: 0,
        explanation: 'VOC dinyatakan bangkrut pada 31 Desember 1799 dan asetnya diambil alih oleh pemerintah Belanda.',
        difficulty: 'sedang',
        hint: 'Akhir abad ke-18.'
    },
    {
        question: 'Perang Diponegoro berlangsung pada tahun?',
        options: ['1825-1830', '1820-1825', '1830-1835', '1815-1820'],
        correctIndex: 0,
        explanation: 'Perang Diponegoro (Perang Jawa) berlangsung dari tahun 1825-1830 melawan Belanda yang dipimpin oleh Pangeran Diponegoro.',
        difficulty: 'sedang',
        hint: 'Perang ini terjadi di Jawa.'
    },
    {
        question: 'Pangeran Diponegoro ditangkap oleh Belanda pada tahun?',
        options: ['1830', '1825', '1835', '1840'],
        correctIndex: 0,
        explanation: 'Pangeran Diponegoro ditangkap oleh Belanda pada tahun 1830 dan diasingkan ke Manado kemudian Makassar.',
        difficulty: 'sedang',
        hint: 'Akhir dari Perang Jawa.'
    },
    {
        question: 'Kapan Belanda mulai menerapkan sistem tanam paksa (Cultuurstelsel)?',
        options: ['1830', '1800', '1850', '1840'],
        correctIndex: 0,
        explanation: 'Sistem tanam paksa diterapkan oleh Gubernur Jenderal Van den Bosch pada tahun 1830 untuk mengisi kas Belanda.',
        difficulty: 'sedang',
        hint: 'Awal abad ke-19.'
    },
    {
        question: 'Sistem tanam paksa dihapuskan pada tahun?',
        options: ['1870', '1860', '1880', '1850'],
        correctIndex: 0,
        explanation: 'Sistem tanam paksa dihapuskan pada tahun 1870 melalui UU Agraria dan UU Gula sebagai awal politik liberal.',
        difficulty: 'sedang',
        hint: 'Digantikan dengan sistem liberal.'
    },
    {
        question: 'Siapa yang mendirikan Budi Utomo?',
        options: ['Dr. Wahidin Sudirohusodo', 'Sutomo', 'Ki Hajar Dewantara', 'H.O.S. Tjokroaminoto'],
        correctIndex: 0,
        explanation: 'Budi Utomo didirikan oleh Dr. Wahidin Sudirohusodo pada 20 Mei 1908, yang kini diperingati sebagai Hari Kebangkitan Nasional.',
        difficulty: 'sedang',
        hint: 'Ini adalah organisasi modern pertama di Indonesia.'
    },
    {
        question: 'Sumpah Pemuda terjadi pada tanggal?',
        options: ['28 Oktober 1928', '20 Mei 1908', '17 Agustus 1945', '10 November 1945'],
        correctIndex: 0,
        explanation: 'Sumpah Pemuda diikrarkan pada 28 Oktober 1928 sebagai tekad pemuda Indonesia untuk bersatu satu nusa, bangsa, dan bahasa.',
        difficulty: 'sedang',
        hint: 'Bulan Oktober 1928.'
    },
    {
        question: 'Siapa tokoh yang dijuluki "Bapak Pendidikan Indonesia"?',
        options: ['Ki Hajar Dewantara', 'Dr. Wahidin Sudirohusodo', 'Sutomo', 'H.O.S. Tjokroaminoto'],
        correctIndex: 0,
        explanation: 'Ki Hajar Dewantara adalah tokoh pendidikan Indonesia yang mendirikan Taman Siswa dan dijuluki Bapak Pendidikan Indonesia.',
        difficulty: 'sedang',
        hint: 'Beliau memiliki semboyan "Ing Ngarso Sung Tulodo".'
    },

    // ===== ERA KEMERDEKAAN =====
    {
        question: 'Kapan Proklamasi Kemerdekaan Indonesia dibacakan?',
        options: ['17 Agustus 1945', '17 Agustus 1946', '18 Agustus 1945', '16 Agustus 1945'],
        correctIndex: 0,
        explanation: 'Proklamasi Kemerdekaan Indonesia dibacakan oleh Ir. Soekarno pada 17 Agustus 1945 pukul 10.00 WIB di Jalan Pegangsaan Timur 56, Jakarta.',
        difficulty: 'sedang',
        hint: 'Tanggal ini diperingati sebagai Hari Kemerdekaan RI.'
    },
    {
        question: 'Siapa yang mengetik naskah proklamasi?',
        options: ['Sayuti Melik', 'Soekarno', 'Mohammad Hatta', 'Ahmad Soebardjo'],
        correctIndex: 0,
        explanation: 'Sayuti Melik adalah yang mengetik naskah proklamasi yang sudah ditulis tangan oleh Soekarno dan disetujui oleh para tokoh.',
        difficulty: 'sulit',
        hint: 'Beliau adalah tokoh yang bekerja di biro kawat.'
    },
    {
        question: 'Apa isi dari Proklamasi Kemerdekaan Indonesia?',
        options: [
            'Pernyataan kemerdekaan Indonesia',
            'Pernyataan perang melawan Belanda',
            'Pembentukan negara Republik Indonesia',
            'Penetapan UUD 1945'
        ],
        correctIndex: 0,
        explanation: 'Proklamasi berisi pernyataan bahwa Indonesia merdeka dan hal-hal yang berkaitan dengan perpindahan kekuasaan akan dilaksanakan dengan saksama.',
        difficulty: 'sedang',
        hint: 'Ini adalah pernyataan kemerdekaan.'
    },
    {
        question: 'Siapa yang menjadi presiden pertama Indonesia?',
        options: ['Ir. Soekarno', 'Dr. Mohammad Hatta', 'Letjen Soeharto', 'B.J. Habibie'],
        correctIndex: 0,
        explanation: 'Ir. Soekarno adalah presiden pertama Indonesia yang menjabat dari 1945-1967 bersama dengan Dr. Mohammad Hatta sebagai wakil presiden.',
        difficulty: 'sedang',
        hint: 'Beliau adalah proklamator kemerdekaan.'
    },
    {
        question: 'Apa yang dimaksud dengan "Konferensi Meja Bundar"?',
        options: [
            'Perundingan Indonesia-Belanda untuk pengakuan kedaulatan',
            'Perundingan G-30S/PKI',
            'Konferensi Asia-Afrika',
            'Perundingan tentang Irian Barat'
        ],
        correctIndex: 0,
        explanation: 'Konferensi Meja Bundar (KMB) adalah perundingan antara Indonesia dan Belanda di Den Haag pada 1949 yang menghasilkan pengakuan kedaulatan RI.',
        difficulty: 'sedang',
        hint: 'Ini terjadi di Belanda tahun 1949.'
    },
    {
        question: 'Kapan Belanda mengakui kedaulatan Indonesia?',
        options: ['27 Desember 1949', '17 Agustus 1945', '1 Maret 1949', '9 Maret 1949'],
        correctIndex: 0,
        explanation: 'Belanda mengakui kedaulatan Indonesia pada 27 Desember 1949 melalui Konferensi Meja Bundar di Den Haag.',
        difficulty: 'sedang',
        hint: 'Akhir Desember 1949.'
    },
    {
        question: 'Apa yang dimaksud dengan Peristiwa G-30 S/PKI?',
        options: [
            'Pemberontakan PKI pada 1965',
            'Demonstrasi mahasiswa 1966',
            'Konflik Indonesia-Malaysia',
            'Peristiwa Malari 1974'
        ],
        correctIndex: 0,
        explanation: 'G-30 S/PKI adalah peristiwa pemberontakan yang dilakukan oleh Partai Komunis Indonesia pada 30 September 1965 yang berujung pada kudeta gagal.',
        difficulty: 'sedang',
        hint: 'Ini terjadi pada tahun 1965.'
    },
    {
        question: 'Siapa tokoh yang menjadi presiden setelah Soekarno?',
        options: ['Soeharto', 'B.J. Habibie', 'Abdurrahman Wahid', 'Megawati Soekarnoputri'],
        correctIndex: 0,
        explanation: 'Soeharto menjadi presiden Indonesia setelah Soekarno mundur pada tahun 1967 dan memerintah selama 32 tahun melalui Orde Baru.',
        difficulty: 'sedang',
        hint: 'Beliau menjabat sebagai presiden selama 32 tahun.'
    },
    {
        question: 'Kapan reformasi bergulir di Indonesia?',
        options: ['1998', '1997', '1999', '2000'],
        correctIndex: 0,
        explanation: 'Reformasi bergulir pada tahun 1998 yang ditandai dengan demonstrasi mahasiswa, jatuhnya Soeharto pada 21 Mei 1998, dan dimulainya era reformasi.',
        difficulty: 'sedang',
        hint: 'Akhir abad ke-20, Soeharto turun.'
    },

    // ===== ERA REFORMASI =====
    {
        question: 'Siapa presiden Indonesia pada era reformasi setelah Soeharto?',
        options: ['B.J. Habibie', 'Abdurrahman Wahid', 'Megawati Soekarnoputri', 'Susilo Bambang Yudhoyono'],
        correctIndex: 0,
        explanation: 'B.J. Habibie menjadi presiden Indonesia setelah Soeharto mundur, menjabat dari 1998-1999 sebagai presiden ketiga.',
        difficulty: 'sedang',
        hint: 'Beliau adalah presiden pada masa transisi reformasi.'
    },
    {
        question: 'Siapa presiden keempat Indonesia?',
        options: ['Abdurrahman Wahid', 'B.J. Habibie', 'Megawati Soekarnoputri', 'Susilo Bambang Yudhoyono'],
        correctIndex: 0,
        explanation: 'Abdurrahman Wahid atau Gus Dur adalah presiden keempat Indonesia yang menjabat dari 1999-2001.',
        difficulty: 'sedang',
        hint: 'Beliau adalah pemimpin NU.'
    },
    {
        question: 'Siapa presiden perempuan pertama Indonesia?',
        options: ['Megawati Soekarnoputri', 'Sri Mulyani', 'Tri Rismaharini', 'Khofifah Indar Parawansa'],
        correctIndex: 0,
        explanation: 'Megawati Soekarnoputri adalah presiden perempuan pertama Indonesia yang menjabat dari 2001-2004.',
        difficulty: 'sedang',
        hint: 'Beliau adalah putri dari Soekarno.'
    },
    {
        question: 'Siapa presiden Indonesia yang menjabat dua periode dari 2004-2014?',
        options: ['Susilo Bambang Yudhoyono', 'Joko Widodo', 'Abdurrahman Wahid', 'B.J. Habibie'],
        correctIndex: 0,
        explanation: 'Susilo Bambang Yudhoyono (SBY) menjabat dua periode sebagai presiden ke-6 Indonesia dari 2004-2014.',
        difficulty: 'sedang',
        hint: 'Beliau dikenal dengan program "100 Hari Kerja".'
    },
    {
        question: 'Siapa presiden Indonesia saat ini (2024)?',
        options: ['Joko Widodo', 'Prabowo Subianto', 'Susilo Bambang Yudhoyono', 'Megawati Soekarnoputri'],
        correctIndex: 0,
        explanation: 'Joko Widodo (Jokowi) adalah presiden ke-7 Indonesia yang menjabat sejak 2014 hingga saat ini (2024).',
        difficulty: 'sedang',
        hint: 'Beliau adalah presiden dari Partai PDI-P.'
    },
    {
        question: 'Apa nama ibu kota baru Indonesia yang sedang dibangun?',
        options: ['Nusantara', 'Palangkaraya', 'Balikpapan', 'Samarinda'],
        correctIndex: 0,
        explanation: 'Nusantara adalah nama ibu kota baru Indonesia yang sedang dibangun di Kalimantan Timur untuk menggantikan Jakarta.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di Kalimantan Timur.'
    },

    // ===== PERISTIWA PENTING LAINNYA =====
    {
        question: 'Perang Padri berlangsung di wilayah?',
        options: ['Sumatra Barat', 'Sumatra Utara', 'Jawa Barat', 'Sulawesi Selatan'],
        correctIndex: 0,
        explanation: 'Perang Padri terjadi di Sumatra Barat pada 1803-1838 antara kaum Padri dengan kaum Adat dan Belanda.',
        difficulty: 'sedang',
        hint: 'Perang ini terjadi di ranah Minang.'
    },
    {
        question: 'Perang Aceh berlangsung selama?',
        options: ['30 tahun', '20 tahun', '40 tahun', '25 tahun'],
        correctIndex: 0,
        explanation: 'Perang Aceh berlangsung dari 1873-1904 atau sekitar 30 tahun melawan Belanda yang dipimpin oleh para ulama dan tokoh Aceh.',
        difficulty: 'sedang',
        hint: 'Perang ini terjadi di Aceh.'
    },
    {
        question: 'Siapa tokoh perempuan yang menjadi pahlawan nasional dari Aceh?',
        options: ['Cut Nyak Dien', 'R.A. Kartini', 'Martha Christina Tiahahu', 'Nyai Ahmad Dahlan'],
        correctIndex: 0,
        explanation: 'Cut Nyak Dien adalah pahlawan nasional dari Aceh yang memimpin perlawanan melawan Belanda bersama suaminya.',
        difficulty: 'sedang',
        hint: 'Beliau adalah pejuang wanita dari Aceh.'
    },
    {
        question: 'Siapa tokoh yang dijuluki "Bung Tomo"?',
        options: ['Sutomo', 'Sukarno', 'Mohammad Hatta', 'Soedirman'],
        correctIndex: 0,
        explanation: 'Bung Tomo adalah tokoh pejuang Surabaya yang terkenal melalui pidatonya yang membakar semangat arek-arek Surabaya.',
        difficulty: 'sedang',
        hint: 'Beliau terkenal dengan pidato di Surabaya.'
    },
    {
        question: 'Apa nama pertempuran yang terjadi di Surabaya pada 10 November 1945?',
        options: ['Pertempuran 10 November', 'Pertempuran Surabaya', 'Perang Kemerdekaan', 'Peristiwa 10 November'],
        correctIndex: 0,
        explanation: 'Pertempuran 10 November 1945 adalah pertempuran heroik antara arek-arek Surabaya melawan sekutu dan Belanda yang diperingati sebagai Hari Pahlawan.',
        difficulty: 'sedang',
        hint: 'Tanggal ini diperingati sebagai Hari Pahlawan.'
    },
    {
        question: 'Siapa yang dijuluki "Panglima Besar" dan "Jenderal Gerilya"?',
        options: ['Jenderal Soedirman', 'Letjen Soeharto', 'Jenderal Nasution', 'Letjen Urip Sumohardjo'],
        correctIndex: 0,
        explanation: 'Jenderal Soedirman adalah Panglima Besar TNI yang dijuluki "Jenderal Gerilya" karena memimpin perang gerilya melawan Belanda.',
        difficulty: 'sedang',
        hint: 'Beliau adalah panglima besar TNI.'
    },
    {
        question: 'Kapan Irian Barat bergabung dengan Indonesia?',
        options: ['1963', '1962', '1961', '1964'],
        correctIndex: 0,
        explanation: 'Irian Barat resmi bergabung dengan Indonesia pada 1 Mei 1963 melalui Perjanjian New York yang ditandatangani tahun 1962.',
        difficulty: 'sulit',
        hint: 'Awal tahun 1960-an.'
    },
    {
        question: 'Apa nama peristiwa penculikan 7 perwira TNI pada 1965?',
        options: ['Peristiwa G-30 S', 'Peristiwa Malari', 'Peristiwa 15 Januari', 'Peristiwa Sumur Kuning'],
        correctIndex: 0,
        explanation: 'Peristiwa G-30 S/PKI adalah peristiwa penculikan 7 perwira TNI yang dilakukan oleh PKI pada 30 September 1965.',
        difficulty: 'sedang',
        hint: 'Ini adalah peristiwa yang melibatkan PKI.'
    },
    {
        question: 'Siapa sastrawan Indonesia yang terkenal dengan novel "Laskar Pelangi"?',
        options: ['Andrea Hirata', 'Pramoedya Ananta Toer', 'Tere Liye', 'Dewi Lestari'],
        correctIndex: 0,
        explanation: 'Andrea Hirata menulis novel Laskar Pelangi (2005) yang menceritakan masa kecilnya di Belitung dan menjadi inspirasi bagi banyak orang.',
        difficulty: 'sedang',
        hint: 'Novel ini diangkat menjadi film tahun 2008.'
    },
    {
        question: 'Apa nama bandara terbesar di Indonesia saat ini?',
        options: ['Soekarno-Hatta', 'Ngurah Rai', 'Juanda', 'Husein Sastranegara'],
        correctIndex: 0,
        explanation: 'Bandara Soekarno-Hatta di Tangerang, Banten adalah bandara terbesar dan tersibuk di Indonesia.',
        difficulty: 'sedang',
        hint: 'Bandara ini dinamai dari presiden pertama dan wakil presiden pertama Indonesia.'
    },
    {
        question: 'Apa nama pahlawan nasional yang dikenal sebagai "Ibu Pendidikan"?',
        options: ['R.A. Kartini', 'Cut Nyak Dien', 'Dewi Sartika', 'Martha Christina Tiahahu'],
        correctIndex: 0,
        explanation: 'R.A. Kartini adalah pahlawan nasional yang memperjuangkan emansipasi wanita dan pendidikan bagi perempuan Indonesia.',
        difficulty: 'sedang',
        hint: 'Beliau dikenal sebagai "Ibu Kartini".'
    },
    {
        question: 'Apa nama kereta api pertama di Indonesia?',
        options: ['Kereta Api Indonesia', 'Kereta Api Solo', 'Kereta Api Batavia', 'Kereta Api Semarang'],
        correctIndex: 0,
        explanation: 'Kereta api pertama di Indonesia dioperasikan pada tahun 1867 di Jawa Tengah oleh perusahaan swasta Belanda.',
        difficulty: 'sulit',
        hint: 'Dioperasikan pertama kali di Semarang.'
    },
    {
        question: 'Siapa tokoh yang mendirikan Muhammadiyah?',
        options: ['KH. Ahmad Dahlan', 'KH. Hasyim Asy\'ari', 'Dr. Wahidin Sudirohusodo', 'H.O.S. Tjokroaminoto'],
        correctIndex: 0,
        explanation: 'KH. Ahmad Dahlan mendirikan Muhammadiyah pada tahun 1912 sebagai organisasi Islam yang bergerak di bidang pendidikan dan sosial.',
        difficulty: 'sedang',
        hint: 'Organisasi ini didirikan di Yogyakarta.'
    },
    {
        question: 'Siapa tokoh yang mendirikan Nahdlatul Ulama (NU)?',
        options: ['KH. Hasyim Asy\'ari', 'KH. Ahmad Dahlan', 'KH. Bisri Syansuri', 'KH. Wahab Hasbullah'],
        correctIndex: 0,
        explanation: 'KH. Hasyim Asy\'ari mendirikan Nahdlatul Ulama (NU) pada tahun 1926 di Surabaya sebagai organisasi Islam tradisional.',
        difficulty: 'sedang',
        hint: 'Organisasi ini didirikan di Surabaya.'
    },
    {
        question: 'Apa nama peristiwa yang terjadi pada 15 Januari 1974 di Jakarta?',
        options: ['Peristiwa Malari', 'Peristiwa G-30 S', 'Peristiwa 10 November', 'Peristiwa 17 Agustus'],
        correctIndex: 0,
        explanation: 'Peristiwa Malari (Malapetaka 15 Januari) adalah peristiwa demonstrasi dan kerusuhan yang terjadi di Jakarta pada 15 Januari 1974.',
        difficulty: 'sulit',
        hint: 'Ini terjadi pada masa Orde Baru.'
    },
    {
        question: 'Apa nama tarian tradisional Indonesia yang diakui UNESCO sebagai warisan budaya dunia?',
        options: ['Tari Saman', 'Tari Kecak', 'Tari Pendet', 'Tari Jaipong'],
        correctIndex: 0,
        explanation: 'Tari Saman dari Aceh diakui UNESCO sebagai Warisan Budaya Takbenda Dunia pada tahun 2011.',
        difficulty: 'sedang',
        hint: 'Tarian ini berasal dari Aceh.'
    }
];

// ============================================
// TAMBAHKAN KE GLOBAL QUESTIONS
// ============================================

// Tambahkan kategori Sejarah Indonesia ke questionsByCategory
window.questionsByCategory['sejarah-indonesia'] = createCategoryQuestions(sejarahIndonesiaQuestions, 'Sejarah Indonesia');

// Update total soal
window.totalQuestions = 0;
for (const category in window.questionsByCategory) {
    window.totalQuestions += window.questionsByCategory[category].length;
}

console.log(`✅ Kategori "Sejarah Indonesia" ditambahkan! (${sejarahIndonesiaQuestions.length} soal)`);
console.log(`📚 Total soal sekarang: ${window.totalQuestions}`);
console.log(`📂 ${Object.keys(window.questionsByCategory).length} kategori tersedia`);