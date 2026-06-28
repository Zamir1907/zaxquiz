// ============================================
// KATEGORI 8: SEJARAH DUNIA (50 Soal)
// ============================================

const sejarahDuniaQuestions = [
    // ===== PERADABAN KUNO =====
    {
        question: 'Peradaban tertua di dunia adalah?',
        options: ['Mesopotamia', 'Mesir Kuno', 'Indus', 'Cina Kuno'],
        correctIndex: 0,
        explanation: 'Peradaban Mesopotamia di antara Sungai Tigris dan Efrat adalah peradaban tertua di dunia, muncul sekitar 3500 SM.',
        difficulty: 'sedang',
        hint: 'Peradaban ini terletak di antara dua sungai di Timur Tengah.'
    },
    {
        question: 'Piramida terbesar di Mesir adalah?',
        options: ['Piramida Giza', 'Piramida Djoser', 'Piramida Khafre', 'Piramida Menkaure'],
        correctIndex: 0,
        explanation: 'Piramida Giza (Piramida Agung) yang dibangun oleh Firaun Khufu adalah piramida terbesar di Mesir dengan tinggi 146 meter.',
        difficulty: 'sedang',
        hint: 'Piramida ini adalah salah satu dari 7 Keajaiban Dunia Kuno.'
    },
    {
        question: 'Siapa firaun terkenal dari Mesir Kuno?',
        options: ['Ramsis II', 'Tutankhamun', 'Cleopatra', 'Nebukadnezar'],
        correctIndex: 0,
        explanation: 'Ramsis II adalah salah satu firaun terbesar Mesir yang memerintah selama 66 tahun dan dikenal sebagai "Ramsis Agung".',
        difficulty: 'sedang',
        hint: 'Beliau adalah firaun yang memerintah sangat lama.'
    },
    {
        question: 'Apa nama kota kuno di Peru yang dibangun oleh suku Inca?',
        options: ['Machu Picchu', 'Cusco', 'Lima', 'Tiahuanaco'],
        correctIndex: 0,
        explanation: 'Machu Picchu adalah kota kuno suku Inca yang terletak di pegunungan Andes, Peru, dan merupakan salah satu keajaiban dunia modern.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di pegunungan Andes, Amerika Selatan.'
    },
    {
        question: 'Siapa pendiri Kekaisaran Romawi?',
        options: ['Augustus', 'Julius Caesar', 'Nero', 'Konstantin'],
        correctIndex: 0,
        explanation: 'Augustus (Oktavianus) adalah pendiri Kekaisaran Romawi yang memerintah dari 27 SM hingga 14 M.',
        difficulty: 'sedang',
        hint: 'Beliau adalah keponakan dari Julius Caesar.'
    },
    {
        question: 'Apa nama sistem tulisan kuno Mesir?',
        options: ['Hieroglif', 'Kuneiform', 'Sanskerta', 'Aksara Cina'],
        correctIndex: 0,
        explanation: 'Hieroglif adalah sistem tulisan kuno Mesir yang menggunakan gambar dan simbol untuk mewakili kata dan suara.',
        difficulty: 'sedang',
        hint: 'Tulisan ini ditemukan di dinding-dinding piramida.'
    },
    {
        question: 'Siapa raja Babilonia yang membuat Kode Hammurabi?',
        options: ['Hammurabi', 'Nebukadnezar', 'Sargon', 'Gilgamesh'],
        correctIndex: 0,
        explanation: 'Raja Hammurabi dari Babilonia membuat Kode Hammurabi sekitar 1754 SM, salah satu kode hukum tertua di dunia.',
        difficulty: 'sedang',
        hint: 'Beliau adalah raja Babilonia kuno.'
    },
    {
        question: 'Peradaban Lembah Indus berkembang di negara yang sekarang?',
        options: ['India dan Pakistan', 'Cina', 'Mesir', 'Irak'],
        correctIndex: 0,
        explanation: 'Peradaban Lembah Indus berkembang di sekitar sungai Indus yang sekarang berada di wilayah India dan Pakistan.',
        difficulty: 'sedang',
        hint: 'Peradaban ini berada di anak benua India.'
    },

    // ===== ABAD PERTENGAHAN =====
    {
        question: 'Siapa yang memimpin Perang Salib Pertama?',
        options: ['Paus Urbanus II', 'Richard I', 'Saladin', 'Godfrey dari Bouillon'],
        correctIndex: 0,
        explanation: 'Paus Urbanus II memimpin Perang Salib Pertama yang dimulai pada tahun 1095 untuk merebut Yerusalem dari kekuasaan Muslim.',
        difficulty: 'sedang',
        hint: 'Beliau adalah pemimpin Gereja Katolik.'
    },
    {
        question: 'Siapa tokoh Muslim yang merebut kembali Yerusalem dari tentara Salib?',
        options: ['Saladin', 'Suleiman I', 'Mehmed II', 'Harun al-Rashid'],
        correctIndex: 0,
        explanation: 'Saladin (Salahuddin Al-Ayyubi) merebut kembali Yerusalem dari tentara Salib pada tahun 1187.',
        difficulty: 'sedang',
        hint: 'Beliau adalah sultan dari Dinasti Ayyubiyah.'
    },
    {
        question: 'Apa nama peristiwa yang menyebabkan runtuhnya Kekaisaran Romawi Barat?',
        options: ['Invasi Barbar', 'Perang Salib', 'Reformasi', 'Renaisans'],
        correctIndex: 0,
        explanation: 'Invasi suku-suku Barbar seperti Visigoth, Vandal, dan Hun menyebabkan runtuhnya Kekaisaran Romawi Barat pada tahun 476 M.',
        difficulty: 'sedang',
        hint: 'Ini adalah invasi dari suku-suku Eropa Utara.'
    },
    {
        question: 'Siapa yang menemukan jalur laut ke India pada tahun 1498?',
        options: ['Vasco da Gama', 'Christopher Columbus', 'Ferdinand Magellan', 'Marco Polo'],
        correctIndex: 0,
        explanation: 'Vasco da Gama dari Portugal menemukan jalur laut ke India pada tahun 1498 melalui Tanjung Harapan.',
        difficulty: 'sedang',
        hint: 'Penjelajah ini berasal dari Portugal.'
    },
    {
        question: 'Apa nama perjanjian yang membagi dunia antara Spanyol dan Portugal?',
        options: ['Perjanjian Tordesillas', 'Perjanjian Paris', 'Perjanjian Versailles', 'Perjanjian Westphalia'],
        correctIndex: 0,
        explanation: 'Perjanjian Tordesillas tahun 1494 membagi dunia di luar Eropa antara Spanyol dan Portugal sepanjang meridian tertentu.',
        difficulty: 'sulit',
        hint: 'Perjanjian ini terjadi pada abad ke-15.'
    },
    {
        question: 'Siapa yang memimpin Ekspedisi Magellan?',
        options: ['Ferdinand Magellan', 'Juan Sebastián Elcano', 'Vasco da Gama', 'Christopher Columbus'],
        correctIndex: 0,
        explanation: 'Ferdinand Magellan memimpin ekspedisi pertama yang mengelilingi dunia (1519-1522), meskipun ia tewas di Filipina.',
        difficulty: 'sedang',
        hint: 'Penjelajah ini berasal dari Portugal.'
    },

    // ===== RENAISANS & PENJELAJAHAN =====
    {
        question: 'Siapa yang dikenal sebagai "Bapak Renaisans"?',
        options: ['Leonardo da Vinci', 'Michelangelo', 'Rafael', 'Donatello'],
        correctIndex: 0,
        explanation: 'Leonardo da Vinci dikenal sebagai "Bapak Renaisans" karena keahliannya di berbagai bidang: seni, sains, teknik, dan matematika.',
        difficulty: 'sedang',
        hint: 'Beliau pelukis Mona Lisa.'
    },
    {
        question: 'Siapa pelukis langit-langit Kapel Sistina?',
        options: ['Michelangelo', 'Leonardo da Vinci', 'Rafael', 'Botticelli'],
        correctIndex: 0,
        explanation: 'Michelangelo Buonarroti melukis langit-langit Kapel Sistina di Vatikan antara tahun 1508-1512.',
        difficulty: 'sedang',
        hint: 'Lukisan ini menggambarkan kisah penciptaan.'
    },
    {
        question: 'Siapa pencipta patung David?',
        options: ['Michelangelo', 'Donatello', 'Bernini', 'Rafael'],
        correctIndex: 0,
        explanation: 'Michelangelo menciptakan patung David antara tahun 1501-1504, yang menjadi salah satu mahakarya seni Renaisans.',
        difficulty: 'sedang',
        hint: 'Patung ini menggambarkan raja Israel.'
    },
    {
        question: 'Siapa yang menulis "The Prince" (Sang Pangeran)?',
        options: ['Niccolò Machiavelli', 'Thomas More', 'Erasmus', 'Francesco Petrarca'],
        correctIndex: 0,
        explanation: 'Niccolò Machiavelli menulis "The Prince" pada tahun 1532, sebuah buku tentang politik dan kekuasaan yang menjadi kontroversial.',
        difficulty: 'sedang',
        hint: 'Buku ini tentang seni memimpin.'
    },
    {
        question: 'Siapa yang menemukan benua Amerika untuk Eropa?',
        options: ['Christopher Columbus', 'Amerigo Vespucci', 'Leif Erikson', 'John Cabot'],
        correctIndex: 0,
        explanation: 'Christopher Columbus menemukan benua Amerika pada tahun 1492 saat mencari jalur ke Asia dan mendarat di Karibia.',
        difficulty: 'sedang',
        hint: 'Penjelajah ini berasal dari Italia.'
    },
    {
        question: 'Siapa yang pertama kali mengelilingi dunia?',
        options: ['Juan Sebastián Elcano', 'Ferdinand Magellan', 'Francis Drake', 'Vasco da Gama'],
        correctIndex: 0,
        explanation: 'Juan Sebastián Elcano adalah kapten yang berhasil mengelilingi dunia setelah Magellan tewas, menyelesaikan ekspedisi pada tahun 1522.',
        difficulty: 'sulit',
        hint: 'Beliau adalah kapten setelah Magellan.'
    },

    // ===== REVOLUSI & PERUBAHAN =====
    {
        question: 'Kapan Revolusi Prancis dimulai?',
        options: ['1789', '1776', '1799', '1804'],
        correctIndex: 0,
        explanation: 'Revolusi Prancis dimulai pada 14 Juli 1789 dengan penyerbuan Bastille dan berakhir dengan jatuhnya monarki Prancis.',
        difficulty: 'sedang',
        hint: 'Akhir abad ke-18.'
    },
    {
        question: 'Siapa yang menjadi kaisar Prancis setelah Revolusi?',
        options: ['Napoleon Bonaparte', 'Louis XVI', 'Maximilien Robespierre', 'Charles de Gaulle'],
        correctIndex: 0,
        explanation: 'Napoleon Bonaparte menjadi kaisar Prancis pada tahun 1804 setelah merebut kekuasaan melalui kudeta dan memimpin ekspansi Prancis.',
        difficulty: 'sedang',
        hint: 'Beliau adalah jenderal yang menjadi kaisar.'
    },
    {
        question: 'Apa nama pertempuran yang mengakhiri kekuasaan Napoleon?',
        options: ['Waterloo', 'Traflagar', 'Austerlitz', 'Borodino'],
        correctIndex: 0,
        explanation: 'Pertempuran Waterloo pada 18 Juni 1815 adalah kekalahan terakhir Napoleon Bonaparte dan mengakhiri kekuasaannya.',
        difficulty: 'sedang',
        hint: 'Pertempuran ini terjadi di Belgia.'
    },
    {
        question: 'Apa nama perjanjian yang mengakhiri Perang Dunia I?',
        options: ['Perjanjian Versailles', 'Perjanjian Paris', 'Perjanjian Westphalia', 'Perjanjian Tordesillas'],
        correctIndex: 0,
        explanation: 'Perjanjian Versailles ditandatangani pada 28 Juni 1919, secara resmi mengakhiri Perang Dunia I dan memberlakukan sanksi berat pada Jerman.',
        difficulty: 'sedang',
        hint: 'Perjanjian ini ditandatangani di Prancis.'
    },
    {
        question: 'Apa penyebab utama Perang Dunia I?',
        options: [
            'Pembunuhan Archduke Franz Ferdinand',
            'Invasi Polandia',
            'Serangan Pearl Harbor',
            'Revolusi Rusia'
        ],
        correctIndex: 0,
        explanation: 'Pembunuhan Archduke Franz Ferdinand dari Austria-Hongaria pada 28 Juni 1914 adalah pemicu utama Perang Dunia I.',
        difficulty: 'sedang',
        hint: 'Peristiwa ini terjadi di Sarajevo, Bosnia.'
    },
    {
        question: 'Siapa pemimpin Jerman selama Perang Dunia I?',
        options: ['Kaiser Wilhelm II', 'Adolf Hitler', 'Otto von Bismarck', 'Friedrich Ebert'],
        correctIndex: 0,
        explanation: 'Kaiser Wilhelm II adalah Kaisar Jerman selama Perang Dunia I dari 1914-1918, yang kemudian turun takhta dan melarikan diri ke Belanda.',
        difficulty: 'sedang',
        hint: 'Beliau adalah kaisar terakhir Jerman.'
    },

    // ===== PERANG DUNIA II =====
    {
        question: 'Kapan Perang Dunia II dimulai?',
        options: ['1 September 1939', '1 September 1940', '7 Desember 1941', '3 September 1939'],
        correctIndex: 0,
        explanation: 'Perang Dunia II dimulai pada 1 September 1939 ketika Jerman menginvasi Polandia, diikuti oleh deklarasi perang dari Prancis dan Inggris.',
        difficulty: 'sedang',
        hint: 'Invasi Jerman ke Polandia.'
    },
    {
        question: 'Siapa pemimpin Jerman selama Perang Dunia II?',
        options: ['Adolf Hitler', 'Kaiser Wilhelm II', 'Hermann Göring', 'Albert Speer'],
        correctIndex: 0,
        explanation: 'Adolf Hitler adalah pemimpin Nazi Jerman yang memulai Perang Dunia II dan bertanggung jawab atas Holocaust.',
        difficulty: 'sedang',
        hint: 'Beliau adalah diktator Jerman.'
    },
    {
        question: 'Apa nama operasi invasi Jerman ke Uni Soviet?',
        options: ['Operasi Barbarossa', 'Operasi Overlord', 'Operasi Sea Lion', 'Operasi Torch'],
        correctIndex: 0,
        explanation: 'Operasi Barbarossa adalah invasi Jerman ke Uni Soviet pada 22 Juni 1941, yang menjadi titik balik Perang Dunia II.',
        difficulty: 'sedang',
        hint: 'Ini adalah invasi terbesar dalam sejarah.'
    },
    {
        question: 'Kapan serangan Pearl Harbor terjadi?',
        options: ['7 Desember 1941', '7 Desember 1940', '7 Desember 1942', '1 Desember 1941'],
        correctIndex: 0,
        explanation: 'Serangan Pearl Harbor terjadi pada 7 Desember 1941 oleh Jepang terhadap pangkalan militer AS di Hawaii, menyebabkan AS masuk Perang Dunia II.',
        difficulty: 'sedang',
        hint: 'Serangan ini terjadi di Hawaii.'
    },
    {
        question: 'Siapa presiden AS yang memimpin Perang Dunia II?',
        options: ['Franklin D. Roosevelt', 'Harry S. Truman', 'Winston Churchill', 'Joseph Stalin'],
        correctIndex: 0,
        explanation: 'Franklin D. Roosevelt adalah presiden AS yang memimpin sebagian besar Perang Dunia II, kemudian digantikan oleh Harry S. Truman.',
        difficulty: 'sedang',
        hint: 'Beliau adalah presiden AS yang lama menjabat.'
    },
    {
        question: 'Apa nama pertempuran yang menjadi titik balik di Pasifik?',
        options: ['Midway', 'Guadalcanal', 'Iwo Jima', 'Okinawa'],
        correctIndex: 0,
        explanation: 'Pertempuran Midway pada 4-7 Juni 1942 adalah titik balik di Pasifik di mana AS mengalahkan Angkatan Laut Jepang secara dramatis.',
        difficulty: 'sulit',
        hint: 'Pertempuran ini menggunakan pesawat terbang.'
    },
    {
        question: 'Kapan Jerman menyerah dalam Perang Dunia II?',
        options: ['8 Mei 1945', '9 Mei 1945', '6 Juni 1944', '2 September 1945'],
        correctIndex: 0,
        explanation: 'Jerman menyerah secara resmi pada 8 Mei 1945 (VE Day) mengakhiri perang di Eropa.',
        difficulty: 'sedang',
        hint: 'Tanggal ini disebut "VE Day".'
    },
    {
        question: 'Kapan Jepang menyerah dalam Perang Dunia II?',
        options: ['15 Agustus 1945', '2 September 1945', '6 Agustus 1945', '9 Agustus 1945'],
        correctIndex: 0,
        explanation: 'Jepang menyerah pada 15 Agustus 1945 setelah pengeboman atom di Hiroshima dan Nagasaki, dengan penandatanganan resmi pada 2 September 1945.',
        difficulty: 'sedang',
        hint: 'Setelah pengeboman atom.'
    },

    // ===== ERA MODERN =====
    {
        question: 'Apa nama perserikatan bangsa-bangsa yang didirikan setelah PDII?',
        options: ['PBB', 'LBB', 'ASEAN', 'EU'],
        correctIndex: 0,
        explanation: 'Perserikatan Bangsa-Bangsa (PBB) didirikan pada 24 Oktober 1945 untuk menggantikan Liga Bangsa-Bangsa dan menjaga perdamaian dunia.',
        difficulty: 'sedang',
        hint: 'Ini adalah organisasi internasional terbesar.'
    },
    {
        question: 'Kapan Perang Dingin berakhir?',
        options: ['1991', '1989', '1995', '1985'],
        correctIndex: 0,
        explanation: 'Perang Dingin berakhir pada tahun 1991 dengan runtuhnya Uni Soviet dan disintegrasi Blok Timur.',
        difficulty: 'sedang',
        hint: 'Akhir abad ke-20, Uni Soviet runtuh.'
    },
    {
        question: 'Siapa pemimpin Uni Soviet yang memulai perestroika dan glasnost?',
        options: ['Mikhail Gorbachev', 'Leonid Brezhnev', 'Nikita Khrushchev', 'Joseph Stalin'],
        correctIndex: 0,
        explanation: 'Mikhail Gorbachev memulai perestroika (restrukturisasi) dan glasnost (keterbukaan) untuk mereformasi Uni Soviet pada tahun 1985-1991.',
        difficulty: 'sedang',
        hint: 'Beliau adalah presiden terakhir Uni Soviet.'
    },
    {
        question: 'Kapan Tembok Berlin runtuh?',
        options: ['9 November 1989', '9 November 1990', '9 November 1988', '3 Oktober 1990'],
        correctIndex: 0,
        explanation: 'Tembok Berlin runtuh pada 9 November 1989, menjadi simbol berakhirnya Perang Dingin dan penyatuan Jerman pada 1990.',
        difficulty: 'sedang',
        hint: 'Kejadian ini pada akhir tahun 1980-an.'
    },
    {
        question: 'Apa nama pendaratan pertama manusia di bulan?',
        options: ['Apollo 11', 'Apollo 13', 'Apollo 8', 'Apollo 17'],
        correctIndex: 0,
        explanation: 'Apollo 11 adalah misi yang berhasil mendaratkan manusia pertama di bulan pada 20 Juli 1969 dengan Neil Armstrong dan Buzz Aldrin.',
        difficulty: 'sedang',
        hint: 'Misi ini pada tahun 1969.'
    },
    {
        question: 'Siapa orang pertama yang berjalan di bulan?',
        options: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'John Glenn'],
        correctIndex: 0,
        explanation: 'Neil Armstrong adalah manusia pertama yang berjalan di bulan pada 20 Juli 1969 dengan kata-kata terkenal: "That\'s one small step for man..."',
        difficulty: 'sedang',
        hint: 'Beliau adalah komandan Apollo 11.'
    },
    {
        question: 'Apa nama pesawat ulang-alik yang meledak pada tahun 1986?',
        options: ['Challenger', 'Columbia', 'Discovery', 'Endeavour'],
        correctIndex: 0,
        explanation: 'Pesawat ulang-alik Challenger meledak 73 detik setelah lepas landas pada 28 Januari 1986, menewaskan 7 astronot.',
        difficulty: 'sulit',
        hint: 'Ini adalah bencana luar angkasa terkenal.'
    },
    {
        question: 'Kapan serangan 9/11 terjadi di Amerika Serikat?',
        options: ['11 September 2001', '11 September 2000', '11 September 2002', '11 November 2001'],
        correctIndex: 0,
        explanation: 'Serangan teroris 9/11 terjadi pada 11 September 2001 ketika empat pesawat dibajak dan menabrak WTC serta Pentagon.',
        difficulty: 'sedang',
        hint: 'Ini adalah serangan teroris terbesar di AS.'
    },
    {
        question: 'Siapa pemimpin Al-Qaeda pada serangan 9/11?',
        options: ['Osama bin Laden', 'Abu Bakr al-Baghdadi', 'Ayman al-Zawahiri', 'Khalid Sheikh Mohammed'],
        correctIndex: 0,
        explanation: 'Osama bin Laden adalah pemimpin Al-Qaeda yang merencanakan serangan 9/11 dan diburu oleh AS hingga tertembak pada 2011.',
        difficulty: 'sedang',
        hint: 'Beliau adalah pendiri Al-Qaeda.'
    },
    {
        question: 'Siapa presiden AS pertama yang berkunjung ke Indonesia?',
        options: ['Barack Obama', 'George H.W. Bush', 'Bill Clinton', 'Richard Nixon'],
        correctIndex: 0,
        explanation: 'Barack Obama adalah presiden AS pertama yang berkunjung ke Indonesia pada 2010, di mana ia menghabiskan masa kecilnya di Jakarta.',
        difficulty: 'sulit',
        hint: 'Beliau adalah presiden AS ke-44.'
    },
    {
        question: 'Apa nama pandemi yang melanda dunia pada 2020?',
        options: ['COVID-19', 'SARS', 'H1N1', 'Ebola'],
        correctIndex: 0,
        explanation: 'Pandemi COVID-19 yang disebabkan oleh virus SARS-CoV-2 melanda dunia pada 2020 dengan dampak global yang sangat besar.',
        difficulty: 'sedang',
        hint: 'Pandemi ini disebabkan oleh virus corona.'
    },
    {
        question: 'Siapa yang menulis "The Communist Manifesto" bersama Engels?',
        options: ['Karl Marx', 'Lenin', 'Stalin', 'Trotsky'],
        correctIndex: 0,
        explanation: 'Karl Marx dan Friedrich Engels menulis "The Communist Manifesto" pada tahun 1848 yang menjadi dasar ideologi komunis.',
        difficulty: 'sedang',
        hint: 'Ini adalah karya tentang komunisme.'
    },
    {
        question: 'Apa nama revolusi industri yang dimulai di Inggris pada abad ke-18?',
        options: ['Revolusi Industri', 'Revolusi Prancis', 'Revolusi Amerika', 'Revolusi Rusia'],
        correctIndex: 0,
        explanation: 'Revolusi Industri dimulai di Inggris pada abad ke-18 dengan penemuan mesin uap dan perubahan drastis dalam produksi barang.',
        difficulty: 'sedang',
        hint: 'Ini adalah perubahan dari produksi tangan ke mesin.'
    },
    {
        question: 'Siapa penemu mesin uap?',
        options: ['James Watt', 'Thomas Newcomen', 'George Stephenson', 'Richard Arkwright'],
        correctIndex: 0,
        explanation: 'James Watt mengembangkan mesin uap yang efisien pada tahun 1769, yang menjadi motor revolusi industri.',
        difficulty: 'sedang',
        hint: 'Penemu ini dari Skotlandia.'
    },
    {
        question: 'Apa nama sungai yang menjadi pusat peradaban Mesir Kuno?',
        options: ['Sungai Nil', 'Sungai Tigris', 'Sungai Efrat', 'Sungai Indus'],
        correctIndex: 0,
        explanation: 'Sungai Nil adalah pusat peradaban Mesir Kuno yang menyediakan air dan tanah subur untuk pertanian dan kehidupan masyarakat.',
        difficulty: 'sedang',
        hint: 'Ini adalah sungai terpanjang di Afrika.'
    },
    {
        question: 'Apa nama peradaban yang membangun Chichen Itza?',
        options: ['Suku Maya', 'Suku Aztek', 'Suku Inca', 'Suku Olmek'],
        correctIndex: 0,
        explanation: 'Suku Maya membangun Chichen Itza di Semenanjung Yucatan, Meksiko, sebagai pusat peradaban dan astronomi Maya.',
        difficulty: 'sedang',
        hint: 'Peradaban ini di Amerika Tengah.'
    },
    {
        question: 'Siapa yang menulis "The Wealth of Nations"?',
        options: ['Adam Smith', 'Karl Marx', 'John Maynard Keynes', 'David Ricardo'],
        correctIndex: 0,
        explanation: 'Adam Smith menulis "The Wealth of Nations" pada tahun 1776 yang menjadi dasar pemikiran ekonomi kapitalis modern.',
        difficulty: 'sedang',
        hint: 'Buku ini tentang ekonomi.'
    },
    {
        question: 'Apa nama perjanjian yang membentuk Uni Eropa?',
        options: ['Perjanjian Maastricht', 'Perjanjian Lisbon', 'Perjanjian Roma', 'Perjanjian Amsterdam'],
        correctIndex: 0,
        explanation: 'Perjanjian Maastricht ditandatangani pada tahun 1992 yang membentuk Uni Eropa dan memperkenalkan euro sebagai mata uang tunggal.',
        difficulty: 'sulit',
        hint: 'Perjanjian ini di Belanda.'
    }
];

// ============================================
// TAMBAHKAN KE GLOBAL QUESTIONS
// ============================================

// Tambahkan kategori Sejarah Dunia ke questionsByCategory
window.questionsByCategory['sejarah-dunia'] = createCategoryQuestions(sejarahDuniaQuestions, 'Sejarah Dunia');

// Update total soal
window.totalQuestions = 0;
for (const category in window.questionsByCategory) {
    window.totalQuestions += window.questionsByCategory[category].length;
}

console.log(`✅ Kategori "Sejarah Dunia" ditambahkan! (${sejarahDuniaQuestions.length} soal)`);
console.log(`📚 Total soal sekarang: ${window.totalQuestions}`);
console.log(`📂 ${Object.keys(window.questionsByCategory).length} kategori tersedia`);

// ============================================
// RINGKASAN SEMUA KATEGORI
// ============================================

console.log('\n=== RINGKASAN KATEGORI ZAXQUIZ ===');
console.log('1. Pengetahuan Umum        : 50 soal');
console.log('2. Matematika              : 50 soal');
console.log('3. Agama Islam             : 50 soal');
console.log('4. Nama Bendera Dunia      : 50 soal');
console.log('5. Negara dan Ibu Kota     : 50 soal');
console.log('6. Provinsi Indonesia      : 50 soal');
console.log('7. Sejarah Indonesia       : 50 soal');
console.log('8. Sejarah Dunia           : 50 soal');
console.log(`Total soal keseluruhan     : ${window.totalQuestions} soal`);
console.log('===============================');