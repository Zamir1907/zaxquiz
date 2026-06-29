function createQuestion(data) {
    return {
        question: data.question,
        options: data.options,
        correctIndex: data.correctIndex,
        explanation: data.explanation,
        difficulty: data.difficulty || 'sedang',
        hint: data.hint || 'Pikirkan dengan cermat!',
        category: data.category || 'Umum',
        flagCode: data.flagCode || null  
    };
}

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
// KATEGORI 4: NAMA BENDERA DUNIA (195 Soal)
// ============================================
const namaBenderaQuestions = [
    // ===== ASIA (48 Negara) =====
    // INDONESIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Indonesia', 'Malaysia', 'Singapura', 'Filipina'],
        correctIndex: 0,
        explanation: 'Bendera Indonesia disebut Sang Saka Merah Putih, terdiri dari dua warna merah di atas dan putih di bawah.',
        difficulty: 'sedang',
        hint: 'Negara kepulauan terbesar di dunia.',
        flagCode: 'id'
    },
    // MALAYSIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Malaysia', 'Indonesia', 'Filipina', 'Thailand'],
        correctIndex: 0,
        explanation: 'Bendera Malaysia disebut Jalur Gemilang, memiliki 14 garis merah-putih dan bulan sabit dengan bintang.',
        difficulty: 'sedang',
        hint: 'Negara ini terbagi menjadi dua bagian: Semenanjung dan Kalimantan.',
        flagCode: 'my'
    },
    // SINGAPURA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Singapura', 'Malaysia', 'Indonesia', 'Brunei'],
        correctIndex: 0,
        explanation: 'Bendera Singapura memiliki dua warna: merah di atas dan putih di bawah dengan bulan sabit dan lima bintang.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah kota-negara di Asia Tenggara.',
        flagCode: 'sg'
    },
    // FILIPINA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Filipina', 'Indonesia', 'Malaysia', 'Thailand'],
        correctIndex: 0,
        explanation: 'Bendera Filipina memiliki tiga warna: biru, merah, dan putih dengan matahari dan tiga bintang di segitiga putih.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki lebih dari 7.000 pulau.',
        flagCode: 'ph'
    },
    // THAILAND
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Thailand', 'Laos', 'Kamboja', 'Vietnam'],
        correctIndex: 0,
        explanation: 'Bendera Thailand memiliki tiga warna: merah, putih, dan biru yang melambangkan tanah air, agama, dan raja.',
        difficulty: 'sedang',
        hint: 'Negara ini dulunya dikenal sebagai Siam.',
        flagCode: 'th'
    },
    // VIETNAM
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Vietnam', 'Laos', 'Kamboja', 'Thailand'],
        correctIndex: 0,
        explanation: 'Bendera Vietnam memiliki latar merah dengan bintang kuning di tengah, melambangkan revolusi dan persatuan.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan Perang Vietnam.',
        flagCode: 'vn'
    },
    // KAMBOJA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Kamboja', 'Thailand', 'Laos', 'Vietnam'],
        correctIndex: 0,
        explanation: 'Bendera Kamboja memiliki gambar Angkor Wat di tengah dengan latar biru dan merah.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki candi Angkor Wat yang terkenal.',
        flagCode: 'kh'
    },
    // LAOS
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Laos', 'Thailand', 'Kamboja', 'Vietnam'],
        correctIndex: 0,
        explanation: 'Bendera Laos memiliki tiga garis horizontal: merah-biru-merah dengan lingkaran putih di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah satu-satunya negara di Asia Tenggara yang tidak memiliki laut.',
        flagCode: 'la'
    },
    // MYANMAR
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Myanmar', 'Thailand', 'Laos', 'Bangladesh'],
        correctIndex: 0,
        explanation: 'Bendera Myanmar memiliki tiga garis horizontal: kuning, hijau, dan merah dengan bintang putih di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini dulunya dikenal sebagai Burma.',
        flagCode: 'mm'
    },
        // HONGKONG
    {
        question: 'Bendera ini milik wilayah mana?',
        options: ['Hongkong', 'Macao', 'China', 'Taiwan'],
        correctIndex: 0,
        explanation: 'Bendera Hongkong memiliki latar merah dengan bunga bakung putih bergaya di tengah.',
        difficulty: 'sedang',
        hint: 'Wilayah ini adalah Daerah Administratif Khusus China.',
        flagCode: 'hk'
    },
    // MACAO
    {
        question: 'Bendera ini milik wilayah mana?',
        options: ['Macao', 'Hongkong', 'China', 'Taiwan'],
        correctIndex: 0,
        explanation: 'Bendera Macao memiliki latar hijau dengan teratai putih di atas jembatan dan air, serta bintang di atasnya.',
        difficulty: 'sedang',
        hint: 'Wilayah ini adalah Daerah Administratif Khusus China.',
        flagCode: 'mo'
    },
    // BRUNEI
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Brunei', 'Malaysia', 'Singapura', 'Indonesia'],
        correctIndex: 0,
        explanation: 'Bendera Brunei memiliki latar kuning dengan garis hitam dan putih diagonal serta lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di pulau Kalimantan.',
        flagCode: 'bn'
    },
    // TIMOR LESTE
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Timor Leste', 'Indonesia', 'Filipina', 'Papua Nugini'],
        correctIndex: 0,
        explanation: 'Bendera Timor Leste memiliki latar merah dengan segitiga kuning dan hitam serta bintang putih di sudut kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini berbatasan dengan Indonesia di pulau Timor.',
        flagCode: 'tl'
    },
    // JEPANG
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Jepang', 'Korea Selatan', 'China', 'Taiwan'],
        correctIndex: 0,
        explanation: 'Bendera Jepang, yang disebut Hinomaru, memiliki lingkaran merah di tengah yang melambangkan matahari terbit.',
        difficulty: 'sedang',
        hint: 'Negara ini dikenal sebagai "Negeri Matahari Terbit".',
        flagCode: 'jp'
    },
    // KOREA SELATAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Korea Selatan', 'Korea Utara', 'Jepang', 'China'],
        correctIndex: 0,
        explanation: 'Bendera Korea Selatan, yang disebut Taegukgi, memiliki simbol yin-yang di tengah dengan trigram di setiap sudut.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan K-Pop dan Samsung.',
        flagCode: 'kr'
    },
    // KOREA UTARA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Korea Utara', 'Korea Selatan', 'China', 'Jepang'],
        correctIndex: 0,
        explanation: 'Bendera Korea Utara memiliki bintang merah di dalam lingkaran putih dengan latar merah dan garis biru di tepi.',
        difficulty: 'sedang',
        hint: 'Negara ini dipimpin oleh Kim Jong-un.',
        flagCode: 'kp'
    },
    // CHINA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['China', 'Taiwan', 'Vietnam', 'Korea Utara'],
        correctIndex: 0,
        explanation: 'Bendera China memiliki latar merah dengan lima bintang kuning di sudut kiri atas.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki populasi terbesar di dunia.',
        flagCode: 'cn'
    },
    // TAIWAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Taiwan', 'China', 'Jepang', 'Filipina'],
        correctIndex: 0,
        explanation: 'Bendera Taiwan memiliki latar merah dengan matahari biru di sudut kiri atas.',
        difficulty: 'sedang',
        hint: 'Negara ini juga dikenal sebagai Republik Cina.',
        flagCode: 'tw'
    },
    // MONGOLIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Mongolia', 'China', 'Rusia', 'Kazakhstan'],
        correctIndex: 0,
        explanation: 'Bendera Mongolia memiliki tiga garis vertikal: merah-biru-merah dengan lambang negara di sisi kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah tempat kelahiran Genghis Khan.',
        flagCode: 'mn'
    },
    // INDIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['India', 'Pakistan', 'Bangladesh', 'Sri Lanka'],
        correctIndex: 0,
        explanation: 'Bendera India memiliki tiga warna: saffron, putih, dan hijau dengan roda Ashoka di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara demokrasi terbesar di dunia.',
        flagCode: 'in'
    },
    // PAKISTAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Pakistan', 'India', 'Bangladesh', 'Afghanistan'],
        correctIndex: 0,
        explanation: 'Bendera Pakistan memiliki latar hijau dengan bulan sabit dan bintang putih.',
        difficulty: 'sedang',
        hint: 'Negara ini merdeka dari India pada tahun 1947.',
        flagCode: 'pk'
    },
    // BANGLADESH
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Bangladesh', 'Pakistan', 'India', 'Nepal'],
        correctIndex: 0,
        explanation: 'Bendera Bangladesh memiliki latar hijau dengan lingkaran merah yang melambangkan darah perjuangan kemerdekaan.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di delta sungai Ganges.',
        flagCode: 'bd'
    },
    // SRI LANKA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Sri Lanka', 'India', 'Bangladesh', 'Nepal'],
        correctIndex: 0,
        explanation: 'Bendera Sri Lanka memiliki latar merah dengan singa emas dan empat daun bodhi di sudut.',
        difficulty: 'sedang',
        hint: 'Negara ini berbentuk seperti tetesan air mata di bawah India.',
        flagCode: 'lk'
    },
    // NEPAL
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Nepal', 'India', 'Bhutan', 'Bangladesh'],
        correctIndex: 0,
        explanation: 'Bendera Nepal adalah satu-satunya bendera nasional yang berbentuk bukan persegi panjang, dengan dua segitiga bersusun.',
        difficulty: 'sulit',
        hint: 'Negara ini memiliki Gunung Everest di perbatasannya.',
        flagCode: 'np'
    },
    // BHUTAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Bhutan', 'Nepal', 'India', 'Tibet'],
        correctIndex: 0,
        explanation: 'Bendera Bhutan memiliki naga putih di tengah dengan latar kuning dan oranye.',
        difficulty: 'sedang',
        hint: 'Negara ini dikenal sebagai "Negeri Naga Guntur".',
        flagCode: 'bt'
    },
    // AFGHANISTAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Afghanistan', 'Iran', 'Pakistan', 'Tajikistan'],
        correctIndex: 0,
        explanation: 'Bendera Afghanistan memiliki tiga warna vertikal: hitam, merah, dan hijau dengan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di Asia Tengah.',
        flagCode: 'af'
    },
    // IRAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Iran', 'Irak', 'Afghanistan', 'Pakistan'],
        correctIndex: 0,
        explanation: 'Bendera Iran memiliki tiga garis horizontal: hijau, putih, dan merah dengan lambang Allah di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini dulunya dikenal sebagai Persia.',
        flagCode: 'ir'
    },
    // IRAK
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Irak', 'Iran', 'Suriah', 'Yordania'],
        correctIndex: 0,
        explanation: 'Bendera Irak memiliki tiga garis horizontal: merah, putih, dan hitam dengan tulisan Allahu Akbar di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di antara Sungai Tigris dan Efrat.',
        flagCode: 'iq'
    },
    // SURIAH
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Suriah', 'Irak', 'Yordania', 'Lebanon'],
        correctIndex: 0,
        explanation: 'Bendera Suriah memiliki tiga garis horizontal: merah, putih, dan hitam dengan dua bintang hijau di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki ibu kota Damaskus, salah satu kota tertua di dunia.',
        flagCode: 'sy'
    },
    // YORDANIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Yordania', 'Suriah', 'Irak', 'Arab Saudi'],
        correctIndex: 0,
        explanation: 'Bendera Yordania memiliki tiga garis horizontal: hitam, putih, dan hijau dengan segitiga merah di sisi kiri yang berisi bintang putih.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki situs Petra yang terkenal.',
        flagCode: 'jo'
    },
    // LEBANON
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Lebanon', 'Suriah', 'Yordania', 'Israel'],
        correctIndex: 0,
        explanation: 'Bendera Lebanon memiliki tiga garis horizontal: merah-putih-merah dengan pohon cedar hijau di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki pohon cedar sebagai simbol nasionalnya.',
        flagCode: 'lb'
    },
    // ISRAEL
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Israel', 'Lebanon', 'Yordania', 'Mesir'],
        correctIndex: 0,
        explanation: 'Bendera Israel memiliki bintang Daud biru di tengah dengan latar putih dan dua garis biru di tepi.',
        difficulty: 'sedang',
        hint: 'Negara ini didirikan pada tahun 1948.',
        flagCode: 'il'
    },
    // ARAB SAUDI
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Arab Saudi', 'Uni Emirat Arab', 'Yaman', 'Oman'],
        correctIndex: 0,
        explanation: 'Bendera Arab Saudi memiliki latar hijau dengan tulisan syahadat dan pedang putih.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah tempat kelahiran Islam.',
        flagCode: 'sa'
    },
    // YAMAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Yaman', 'Oman', 'Uni Emirat Arab', 'Arab Saudi'],
        correctIndex: 0,
        explanation: 'Bendera Yaman memiliki tiga garis horizontal: merah, putih, dan hitam.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di ujung selatan Jazirah Arab.',
        flagCode: 'ye'
    },
    // OMAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Oman', 'Yaman', 'Uni Emirat Arab', 'Arab Saudi'],
        correctIndex: 0,
        explanation: 'Bendera Oman memiliki tiga warna: putih, merah, dan hijau dengan lambang negara di sudut kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di ujung timur Jazirah Arab.',
        flagCode: 'om'
    },
    // UAE
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Uni Emirat Arab', 'Arab Saudi', 'Yaman', 'Oman'],
        correctIndex: 0,
        explanation: 'Bendera Uni Emirat Arab memiliki tiga warna: hijau, putih, dan hitam dengan garis merah vertikal di sisi kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini dikenal dengan gedung-gedung pencakar langitnya.',
        flagCode: 'ae'
    },
    // QATAR
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Qatar', 'Uni Emirat Arab', 'Arab Saudi', 'Oman'],
        correctIndex: 0,
        explanation: 'Bendera Qatar memiliki latar maroon dengan garis putih bergerigi di sisi kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah salah satu negara terkaya di dunia.',
        flagCode: 'qa'
    },
    // KUWAIT
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Kuwait', 'Irak', 'Arab Saudi', 'Qatar'],
        correctIndex: 0,
        explanation: 'Bendera Kuwait memiliki tiga garis horizontal: hijau, putih, dan merah dengan trapesium hitam di sisi kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di Teluk Persia.',
        flagCode: 'kw'
    },
    // BAHRAIN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Bahrain', 'Qatar', 'Kuwait', 'Uni Emirat Arab'],
        correctIndex: 0,
        explanation: 'Bendera Bahrain memiliki latar merah dengan garis putih bergerigi di sisi kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara kepulauan di Teluk Persia.',
        flagCode: 'bh'
    },
    // TURKI
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Turki', 'Suriah', 'Irak', 'Iran'],
        correctIndex: 0,
        explanation: 'Bendera Turki memiliki latar merah dengan bulan sabit dan bintang putih.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di antara Eropa dan Asia.',
        flagCode: 'tr'
    },
    // GEORGIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Georgia', 'Armenia', 'Azerbaijan', 'Rusia'],
        correctIndex: 0,
        explanation: 'Bendera Georgia memiliki lima salib merah di latar putih.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di wilayah Kaukasus.',
        flagCode: 'ge'
    },
    // ARMENIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Armenia', 'Georgia', 'Azerbaijan', 'Turki'],
        correctIndex: 0,
        explanation: 'Bendera Armenia memiliki tiga garis horizontal: merah, biru, dan oranye.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah salah satu negara tertua di dunia.',
        flagCode: 'am'
    },
    // AZERBAIJAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Azerbaijan', 'Armenia', 'Georgia', 'Rusia'],
        correctIndex: 0,
        explanation: 'Bendera Azerbaijan memiliki tiga garis horizontal: biru, merah, dan hijau dengan bulan sabit dan bintang di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di wilayah Kaukasus.',
        flagCode: 'az'
    },
    // KAZAKHSTAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Kazakhstan', 'Uzbekistan', 'Kirgizstan', 'Rusia'],
        correctIndex: 0,
        explanation: 'Bendera Kazakhstan memiliki latar biru dengan matahari dan elang emas di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terbesar di Asia Tengah.',
        flagCode: 'kz'
    },
    // UZBEKISTAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Uzbekistan', 'Kazakhstan', 'Kirgizstan', 'Turkmenistan'],
        correctIndex: 0,
        explanation: 'Bendera Uzbekistan memiliki tiga garis horizontal: biru, putih, dan hijau dengan bulan sabit dan bintang di sudut kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di Asia Tengah.',
        flagCode: 'uz'
    },
    // TURKMENISTAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Turkmenistan', 'Uzbekistan', 'Kazakhstan', 'Iran'],
        correctIndex: 0,
        explanation: 'Bendera Turkmenistan memiliki latar hijau dengan bulan sabit, bintang, dan karpet tradisional di sisi kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan karpet tradisionalnya.',
        flagCode: 'tm'
    },
    // TAJIKISTAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Tajikistan', 'Uzbekistan', 'Kirgizstan', 'Afghanistan'],
        correctIndex: 0,
        explanation: 'Bendera Tajikistan memiliki tiga garis horizontal: merah, putih, dan hijau dengan mahkota dan bintang di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di Asia Tengah.',
        flagCode: 'tj'
    },
    // KYRGYZSTAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Kirgizstan', 'Kazakhstan', 'Uzbekistan', 'Tajikistan'],
        correctIndex: 0,
        explanation: 'Bendera Kirgizstan memiliki latar merah dengan matahari dan tiang tenda tradisional di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di Asia Tengah.',
        flagCode: 'kg'
    },

    // ===== EROPA (44 Negara) =====
        // LUKSEMBURG
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Luksemburg', 'Belanda', 'Prancis', 'Jerman'],
        correctIndex: 0,
        explanation: 'Bendera Luksemburg memiliki tiga garis horizontal: merah-putih-biru muda.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terkecil di Benelux.',
        flagCode: 'lu'
    },
    // ISLANDIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Islandia', 'Norwegia', 'Denmark', 'Swedia'],
        correctIndex: 0,
        explanation: 'Bendera Islandia memiliki latar biru dengan salib merah bergaris putih.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan aurora borealis dan geiser.',
        flagCode: 'is'
    },
    // MALTA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Malta', 'Italia', 'Siprus', 'Yunani'],
        correctIndex: 0,
        explanation: 'Bendera Malta memiliki dua garis vertikal: putih dan merah dengan salib George di sudut kiri atas.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara kepulauan di Mediterania.',
        flagCode: 'mt'
    },
    // SIPRUS
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Siprus', 'Yunani', 'Turki', 'Malta'],
        correctIndex: 0,
        explanation: 'Bendera Siprus memiliki latar putih dengan peta pulau Siprus dan dua cabang zaitun di bawahnya.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di Mediterania Timur.',
        flagCode: 'cy'
    },
    // CEKO
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Ceko', 'Slovakia', 'Polandia', 'Austria'],
        correctIndex: 0,
        explanation: 'Bendera Ceko memiliki dua garis horizontal: putih dan merah dengan segitiga biru di sisi kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki ibu kota Praha yang terkenal.',
        flagCode: 'cz'
    },
    // SLOVAKIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Slovakia', 'Ceko', 'Polandia', 'Hungaria'],
        correctIndex: 0,
        explanation: 'Bendera Slovakia memiliki tiga garis horizontal: putih-biru-merah dengan lambang negara di sudut kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki Pegunungan Tatra.',
        flagCode: 'sk'
    },
    // BOSNIA DAN HERZEGOVINA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Bosnia dan Herzegovina', 'Serbia', 'Kroasia', 'Montenegro'],
        correctIndex: 0,
        explanation: 'Bendera Bosnia dan Herzegovina memiliki latar biru dengan segitiga kuning dan bintang putih di sepanjang sisi.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki jembatan Stari Most yang terkenal.',
        flagCode: 'ba'
    },
    // MONTENEGRO
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Montenegro', 'Serbia', 'Bosnia', 'Kroasia'],
        correctIndex: 0,
        explanation: 'Bendera Montenegro memiliki latar merah dengan bingkai emas dan elang lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki pantai Adriatik yang indah.',
        flagCode: 'me'
    },
    // MAKEDONIA UTARA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Makedonia Utara', 'Yunani', 'Bulgaria', 'Albania'],
        correctIndex: 0,
        explanation: 'Bendera Makedonia Utara memiliki latar merah dengan matahari kuning di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini berbatasan dengan Yunani dan Bulgaria.',
        flagCode: 'mk'
    },
    // ALBANIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Albania', 'Yunani', 'Makedonia Utara', 'Montenegro'],
        correctIndex: 0,
        explanation: 'Bendera Albania memiliki latar merah dengan elang hitam berkepala dua di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di Semenanjung Balkan.',
        flagCode: 'al'
    },
    // LITHUANIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Lithuania', 'Latvia', 'Estonia', 'Polandia'],
        correctIndex: 0,
        explanation: 'Bendera Lithuania memiliki tiga garis horizontal: kuning-hijau-merah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah salah satu negara Baltik.',
        flagCode: 'lt'
    },
    // LATVIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Latvia', 'Lithuania', 'Estonia', 'Polandia'],
        correctIndex: 0,
        explanation: 'Bendera Latvia memiliki tiga garis horizontal: merah-putih-merah dengan putih di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah salah satu negara Baltik.',
        flagCode: 'lv'
    },
    // ESTONIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Estonia', 'Latvia', 'Lithuania', 'Finlandia'],
        correctIndex: 0,
        explanation: 'Bendera Estonia memiliki tiga garis horizontal: biru-hitam-putih.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah salah satu negara Baltik.',
        flagCode: 'ee'
    },
    // MOLDOVA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Moldova', 'Rumania', 'Ukraina', 'Bulgaria'],
        correctIndex: 0,
        explanation: 'Bendera Moldova memiliki tiga garis vertikal: biru-kuning-merah dengan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di antara Rumania dan Ukraina.',
        flagCode: 'md'
    },
    // BELARUS
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Belarus', 'Rusia', 'Ukraina', 'Polandia'],
        correctIndex: 0,
        explanation: 'Bendera Belarus memiliki dua garis horizontal: merah dan hijau dengan ornamen tradisional di sisi kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini berbatasan dengan Rusia dan Ukraina.',
        flagCode: 'by'
    },
    // KOSOVO
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Kosovo', 'Serbia', 'Albania', 'Makedonia Utara'],
        correctIndex: 0,
        explanation: 'Bendera Kosovo memiliki latar biru dengan peta Kosovo dan enam bintang putih di atasnya.',
        difficulty: 'sedang',
        hint: 'Negara ini memproklamasikan kemerdekaan pada tahun 2008.',
        flagCode: 'xk'
    },
    // ANDORRA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Andorra', 'Spanyol', 'Prancis', 'Monaco'],
        correctIndex: 0,
        explanation: 'Bendera Andorra memiliki tiga garis vertikal: biru-kuning-merah dengan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di Pegunungan Pyrenees.',
        flagCode: 'ad'
    },
    // MONACO
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Monaco', 'Prancis', 'Italia', 'Andorra'],
        correctIndex: 0,
        explanation: 'Bendera Monaco memiliki dua garis horizontal: merah dan putih.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terkecil kedua di dunia.',
        flagCode: 'mc'
    },
    // LIECHTENSTEIN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Liechtenstein', 'Swiss', 'Austria', 'Jerman'],
        correctIndex: 0,
        explanation: 'Bendera Liechtenstein memiliki dua garis horizontal: biru dan merah dengan mahkota di sudut kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di antara Swiss dan Austria.',
        flagCode: 'li'
    },
    // SAN MARINO
    {
        question: 'Bendera ini milik negara mana?',
        options: ['San Marino', 'Italia', 'Vatikan', 'Monaco'],
        correctIndex: 0,
        explanation: 'Bendera San Marino memiliki dua garis horizontal: putih dan biru dengan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah republik tertua di dunia.',
        flagCode: 'sm'
    },
    // VATIKAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Vatikan', 'Italia', 'San Marino', 'Monaco'],
        correctIndex: 0,
        explanation: 'Bendera Vatikan memiliki dua garis vertikal: kuning dan putih dengan kunci dan tiara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terkecil di dunia.',
        flagCode: 'va'
    },
    // INGGRIS
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Inggris', 'Amerika Serikat', 'Australia', 'Selandia Baru'],
        correctIndex: 0,
        explanation: 'Bendera Inggris, yang disebut Union Jack, menggabungkan salib dari tiga santo pelindung.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah bagian dari Britania Raya.',
        flagCode: 'gb'
    },
    // PRANCIS
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Prancis', 'Italia', 'Belanda', 'Rusia'],
        correctIndex: 0,
        explanation: 'Bendera Prancis, yang disebut Tricolore, memiliki tiga warna vertikal: biru, putih, dan merah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan Menara Eiffel.',
        flagCode: 'fr'
    },
    // JERMAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Jerman', 'Belgia', 'Austria', 'Swiss'],
        correctIndex: 0,
        explanation: 'Bendera Jerman memiliki tiga garis horizontal: hitam, merah, dan emas.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah salah satu negara terbesar di Eropa.',
        flagCode: 'de'
    },
    // ITALIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Italia', 'Prancis', 'Irlandia', 'Meksiko'],
        correctIndex: 0,
        explanation: 'Bendera Italia memiliki tiga warna vertikal: hijau, putih, dan merah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan bentuknya yang seperti sepatu bot.',
        flagCode: 'it'
    },
    // SPANYOL
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Spanyol', 'Portugal', 'Andorra', 'Meksiko'],
        correctIndex: 0,
        explanation: 'Bendera Spanyol memiliki tiga garis horizontal: merah-kuning-merah dengan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan tomatina dan sepak bola.',
        flagCode: 'es'
    },
    // PORTUGAL
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Portugal', 'Spanyol', 'Brasil', 'Angola'],
        correctIndex: 0,
        explanation: 'Bendera Portugal memiliki dua warna: hijau dan merah dengan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di ujung barat Eropa.',
        flagCode: 'pt'
    },
    // BELANDA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Belanda', 'Prancis', 'Rusia', 'Luksemburg'],
        correctIndex: 0,
        explanation: 'Bendera Belanda memiliki tiga garis horizontal: merah, putih, dan biru.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan kincir angin dan bunga tulip.',
        flagCode: 'nl'
    },
    // BELGIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Belgia', 'Jerman', 'Prancis', 'Belanda'],
        correctIndex: 0,
        explanation: 'Bendera Belgia memiliki tiga warna vertikal: hitam, kuning, dan merah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan cokelat dan wafel.',
        flagCode: 'be'
    },
    // SWISS
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Swiss', 'Swedia', 'Norwegia', 'Finlandia'],
        correctIndex: 0,
        explanation: 'Bendera Swiss berbentuk persegi dengan latar merah dan salib putih di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan gunung Alpen dan cokelat.',
        flagCode: 'ch'
    },
    // AUSTRIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Austria', 'Jerman', 'Hungaria', 'Swiss'],
        correctIndex: 0,
        explanation: 'Bendera Austria memiliki tiga garis horizontal: merah-putih-merah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan musik klasiknya.',
        flagCode: 'at'
    },
    // YUNANI
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Yunani', 'Siprus', 'Malta', 'Turki'],
        correctIndex: 0,
        explanation: 'Bendera Yunani memiliki sembilan garis biru-putih dan salib di sudut kiri atas.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah tempat lahirnya demokrasi.',
        flagCode: 'gr'
    },
    // RUSIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Rusia', 'Prancis', 'Belanda', 'Bulgaria'],
        correctIndex: 0,
        explanation: 'Bendera Rusia memiliki tiga garis horizontal: putih, biru, dan merah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terbesar di dunia.',
        flagCode: 'ru'
    },
    // UKRAINA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Ukraina', 'Polandia', 'Rusia', 'Belarus'],
        correctIndex: 0,
        explanation: 'Bendera Ukraina memiliki dua garis horizontal: biru dan kuning.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terbesar di Eropa Timur.',
        flagCode: 'ua'
    },
    // POLANDIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Polandia', 'Ukraina', 'Rusia', 'Jerman'],
        correctIndex: 0,
        explanation: 'Bendera Polandia memiliki dua garis horizontal: putih dan merah.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di Eropa Tengah.',
        flagCode: 'pl'
    },
    // HUNGARIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Hungaria', 'Austria', 'Rumania', 'Bulgaria'],
        correctIndex: 0,
        explanation: 'Bendera Hungaria memiliki tiga garis horizontal: merah, putih, dan hijau.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki ibu kota Budapest yang terkenal.',
        flagCode: 'hu'
    },
    // RUMANIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Rumania', 'Hungaria', 'Bulgaria', 'Moldova'],
        correctIndex: 0,
        explanation: 'Bendera Rumania memiliki tiga warna vertikal: biru, kuning, dan merah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan Dracula.',
        flagCode: 'ro'
    },
    // BULGARIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Bulgaria', 'Rumania', 'Yunani', 'Turki'],
        correctIndex: 0,
        explanation: 'Bendera Bulgaria memiliki tiga garis horizontal: putih, hijau, dan merah.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di Semenanjung Balkan.',
        flagCode: 'bg'
    },
    // SERBIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Serbia', 'Kroasia', 'Slovenia', 'Montenegro'],
        correctIndex: 0,
        explanation: 'Bendera Serbia memiliki tiga garis horizontal: merah, biru, dan putih dengan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di Semenanjung Balkan.',
        flagCode: 'rs'
    },
    // KROASIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Kroasia', 'Serbia', 'Slovenia', 'Bosnia'],
        correctIndex: 0,
        explanation: 'Bendera Kroasia memiliki tiga garis horizontal: merah, putih, dan biru dengan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan pantai Adriatiknya.',
        flagCode: 'hr'
    },
    // SLOVENIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Slovenia', 'Kroasia', 'Serbia', 'Austria'],
        correctIndex: 0,
        explanation: 'Bendera Slovenia memiliki tiga garis horizontal: putih, biru, dan merah dengan lambang negara di sudut kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di Eropa Tengah.',
        flagCode: 'si'
    },
    // SWEDIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Swedia', 'Norwegia', 'Finlandia', 'Denmark'],
        correctIndex: 0,
        explanation: 'Bendera Swedia memiliki latar biru dengan salib kuning.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara Skandinavia terbesar.',
        flagCode: 'se'
    },
    // NORWEGIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Norwegia', 'Swedia', 'Finlandia', 'Denmark'],
        correctIndex: 0,
        explanation: 'Bendera Norwegia memiliki latar merah dengan salib biru bergaris putih.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan fjordnya.',
        flagCode: 'no'
    },
    // DENMARK
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Denmark', 'Swedia', 'Norwegia', 'Finlandia'],
        correctIndex: 0,
        explanation: 'Bendera Denmark, yang disebut Dannebrog, memiliki latar merah dengan salib putih.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah salah satu negara tertua di Eropa.',
        flagCode: 'dk'
    },
    // FINLANDIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Finlandia', 'Swedia', 'Norwegia', 'Rusia'],
        correctIndex: 0,
        explanation: 'Bendera Finlandia memiliki latar putih dengan salib biru.',
        difficulty: 'sedang',
        hint: 'Negara ini dikenal sebagai "Negeri Seribu Danau".',
        flagCode: 'fi'
    },
    // IRLANDIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Irlandia', 'Inggris', 'Prancis', 'Italia'],
        correctIndex: 0,
        explanation: 'Bendera Irlandia memiliki tiga warna vertikal: hijau, putih, dan oranye.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan Hari St. Patrick.',
        flagCode: 'ie'
    },

    // ===== AMERIKA (35 Negara) =====
        // BELIZE
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Belize', 'Guatemala', 'Honduras', 'El Salvador'],
        correctIndex: 0,
        explanation: 'Bendera Belize memiliki latar biru dengan lambang negara di tengah yang dikelilingi 50 daun.',
        difficulty: 'sedang',
        hint: 'Negara ini berbatasan dengan Meksiko dan Guatemala.',
        flagCode: 'bz'
    },
    // EL SALVADOR
    {
        question: 'Bendera ini milik negara mana?',
        options: ['El Salvador', 'Guatemala', 'Honduras', 'Nikaragua'],
        correctIndex: 0,
        explanation: 'Bendera El Salvador memiliki tiga garis horizontal: biru-putih-biru dengan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terkecil di Amerika Tengah.',
        flagCode: 'sv'
    },
    // GUATEMALA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Guatemala', 'El Salvador', 'Honduras', 'Belize'],
        correctIndex: 0,
        explanation: 'Bendera Guatemala memiliki tiga garis vertikal: biru-putih-biru dengan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan peradaban Maya kuno.',
        flagCode: 'gt'
    },
    // HONDURAS
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Honduras', 'Guatemala', 'El Salvador', 'Nikaragua'],
        correctIndex: 0,
        explanation: 'Bendera Honduras memiliki tiga garis horizontal: biru-putih-biru dengan lima bintang biru di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki situs Maya Copán yang terkenal.',
        flagCode: 'hn'
    },
    // NICARAGUA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Nikaragua', 'Honduras', 'El Salvador', 'Kosta Rika'],
        correctIndex: 0,
        explanation: 'Bendera Nikaragua memiliki tiga garis horizontal: biru-putih-biru dengan lambang negara di tengah yang dikelilingi lima gunung berapi.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki Danau Nikaragua yang besar.',
        flagCode: 'ni'
    },
    // BAHAMA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Bahama', 'Jamaika', 'Kuba', 'Haiti'],
        correctIndex: 0,
        explanation: 'Bendera Bahama memiliki tiga garis horizontal: aqua-kuning-aqua dengan segitiga hitam di sisi kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan pantai pasir merah muda.',
        flagCode: 'bs'
    },
    // BARBADOS
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Barbados', 'Jamaika', 'Trinidad dan Tobago', 'Bahama'],
        correctIndex: 0,
        explanation: 'Bendera Barbados memiliki tiga garis vertikal: biru-kuning-biru dengan trisula hitam di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan rumah kolonial dan pantai karang.',
        flagCode: 'bb'
    },
    // DOMINIKA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Dominika', 'Republik Dominika', 'Kuba', 'Haiti'],
        correctIndex: 0,
        explanation: 'Bendera Dominika memiliki latar hijau dengan salib kuning-hitam-putih dan burung beo sisserou merah di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki burung beo nasional yang ikonik.',
        flagCode: 'dm'
    },
    // GRENADA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Grenada', 'Trinidad dan Tobago', 'Dominika', 'Saint Lucia'],
        correctIndex: 0,
        explanation: 'Bendera Grenada memiliki latar merah dengan bingkai kuning dan hijau, serta tujuh bintang emas.',
        difficulty: 'sedang',
        hint: 'Negara ini dikenal sebagai "Pulau Rempah".',
        flagCode: 'gd'
    },
    // SAINT KITTS DAN NEVIS
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Saint Kitts dan Nevis', 'Antigua dan Barbuda', 'Dominika', 'Grenada'],
        correctIndex: 0,
        explanation: 'Bendera Saint Kitts dan Nevis memiliki latar hijau dan merah dengan garis kuning hitam diagonal dan dua bintang putih.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terkecil di Amerika.',
        flagCode: 'kn'
    },
    // SAINT LUCIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Saint Lucia', 'Saint Vincent dan Grenadines', 'Dominika', 'Barbados'],
        correctIndex: 0,
        explanation: 'Bendera Saint Lucia memiliki latar biru dengan segitiga kuning dan hitam di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan dua gunung piton yang ikonik.',
        flagCode: 'lc'
    },
    // SAINT VINCENT DAN GRENADINES
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Saint Vincent dan Grenadines', 'Saint Lucia', 'Barbados', 'Grenada'],
        correctIndex: 0,
        explanation: 'Bendera Saint Vincent dan Grenadines memiliki tiga garis vertikal: biru-kuning-hijau dengan tiga buah berlian hijau di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terdiri dari 32 pulau.',
        flagCode: 'vc'
    },
    // TRINIDAD DAN TOBAGO
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Trinidad dan Tobago', 'Barbados', 'Grenada', 'Jamaika'],
        correctIndex: 0,
        explanation: 'Bendera Trinidad dan Tobago memiliki latar merah dengan garis hitam diagonal bergaris putih di kedua sisinya.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan karnaval dan budaya calypso.',
        flagCode: 'tt'
    },
    // ANTIGUA DAN BARBUDA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Antigua dan Barbuda', 'Saint Kitts dan Nevis', 'Dominika', 'Grenada'],
        correctIndex: 0,
        explanation: 'Bendera Antigua dan Barbuda memiliki latar merah dengan segitiga hitam dan biru yang membentuk huruf V, serta matahari kuning di atasnya.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki 365 pantai.',
        flagCode: 'ag'
    },
    // AMERIKA SERIKAT
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Amerika Serikat', 'Inggris', 'Kanada', 'Australia'],
        correctIndex: 0,
        explanation: 'Bendera Amerika Serikat memiliki 13 garis merah-putih dan 50 bintang putih di bidang biru.',
        difficulty: 'sedang',
        hint: 'Negara ini dikenal sebagai "Negeri Paman Sam".',
        flagCode: 'us'
    },
    // KANADA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Kanada', 'Amerika Serikat', 'Inggris', 'Australia'],
        correctIndex: 0,
        explanation: 'Bendera Kanada terkenal dengan daun maple merah di tengah dengan latar putih di antara dua garis merah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terbesar kedua di dunia.',
        flagCode: 'ca'
    },
    // MEKSIKO
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Meksiko', 'Spanyol', 'Italia', 'Kolombia'],
        correctIndex: 0,
        explanation: 'Bendera Meksiko memiliki tiga warna vertikal: hijau, putih, dan merah dengan lambang elang di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan makanan pedasnya.',
        flagCode: 'mx'
    },
    // BRASIL
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Brasil', 'Portugal', 'Kolombia', 'Argentina'],
        correctIndex: 0,
        explanation: 'Bendera Brasil memiliki latar hijau dengan berlian kuning dan lingkaran biru berisi bintang-bintang.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terbesar di Amerika Selatan.',
        flagCode: 'br'
    },
    // ARGENTINA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Argentina', 'Uruguay', 'Chili', 'Peru'],
        correctIndex: 0,
        explanation: 'Bendera Argentina memiliki tiga garis horizontal: biru-putih-biru dengan matahari di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan danau dan gunung es di Patagonia.',
        flagCode: 'ar'
    },
    // CHILI
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Chili', 'Argentina', 'Peru', 'Bolivia'],
        correctIndex: 0,
        explanation: 'Bendera Chili memiliki dua warna: putih dan biru dengan bintang putih di sudut kiri, dan merah di bagian bawah.',
        difficulty: 'sedang',
        hint: 'Negara ini berbentuk seperti cabai.',
        flagCode: 'cl'
    },
    // PERU
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Peru', 'Ekuador', 'Kolombia', 'Bolivia'],
        correctIndex: 0,
        explanation: 'Bendera Peru memiliki tiga garis vertikal: merah-putih-merah dengan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan Machu Picchu.',
        flagCode: 'pe'
    },
    // KOLOMBIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Kolombia', 'Ekuador', 'Venezuela', 'Panama'],
        correctIndex: 0,
        explanation: 'Bendera Kolombia memiliki tiga garis horizontal: kuning di atas (setengah), biru, dan merah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan kopi dan salsa.',
        flagCode: 'co'
    },
    // VENEZUELA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Venezuela', 'Kolombia', 'Ekuador', 'Peru'],
        correctIndex: 0,
        explanation: 'Bendera Venezuela memiliki tiga garis horizontal: kuning, biru, dan merah dengan bintang-bintang di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki danau terbesar di Amerika Selatan.',
        flagCode: 've'
    },
    // EKUADOR
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Ekuador', 'Kolombia', 'Peru', 'Venezuela'],
        correctIndex: 0,
        explanation: 'Bendera Ekuador memiliki tiga garis horizontal: kuning, biru, dan merah dengan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di garis khatulistiwa.',
        flagCode: 'ec'
    },
    // BOLIVIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Bolivia', 'Peru', 'Chili', 'Argentina'],
        correctIndex: 0,
        explanation: 'Bendera Bolivia memiliki tiga garis horizontal: merah, kuning, dan hijau.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di pegunungan Andes.',
        flagCode: 'bo'
    },
    // PARAGUAY
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Paraguay', 'Argentina', 'Brasil', 'Uruguay'],
        correctIndex: 0,
        explanation: 'Bendera Paraguay memiliki tiga garis horizontal: merah, putih, dan biru dengan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di Amerika Selatan bagian tengah.',
        flagCode: 'py'
    },
    // URUGUAY
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Uruguay', 'Argentina', 'Brasil', 'Paraguay'],
        correctIndex: 0,
        explanation: 'Bendera Uruguay memiliki sembilan garis biru-putih dan matahari di sudut kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di antara Argentina dan Brasil.',
        flagCode: 'uy'
    },
    // KOSTA RIKA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Kosta Rika', 'Panama', 'Nikaragua', 'Honduras'],
        correctIndex: 0,
        explanation: 'Bendera Kosta Rika memiliki lima garis: biru-putih-merah-putih-biru dengan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan keindahan alamnya.',
        flagCode: 'cr'
    },
    // PANAMA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Panama', 'Kosta Rika', 'Kolombia', 'Nikaragua'],
        correctIndex: 0,
        explanation: 'Bendera Panama memiliki empat bagian: putih dengan bintang biru di kiri atas, putih dengan bintang merah di kanan atas, biru di kiri bawah, dan merah di kanan bawah.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki terusan yang menghubungkan Samudra Pasifik dan Atlantik.',
        flagCode: 'pa'
    },
    // KUBA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Kuba', 'Puerto Riko', 'Republik Dominika', 'Haiti'],
        correctIndex: 0,
        explanation: 'Bendera Kuba memiliki tiga garis biru dan dua garis putih dengan segitiga merah dan bintang putih di sisi kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan cerutu dan mobil klasiknya.',
        flagCode: 'cu'
    },
    // REPUBLIK DOMINIKA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Republik Dominika', 'Kuba', 'Puerto Riko', 'Haiti'],
        correctIndex: 0,
        explanation: 'Bendera Republik Dominika memiliki salib putih dengan empat bagian biru dan merah serta lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini berbagi pulau dengan Haiti.',
        flagCode: 'do'
    },
    // HAITI
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Haiti', 'Republik Dominika', 'Kuba', 'Jamaika'],
        correctIndex: 0,
        explanation: 'Bendera Haiti memiliki dua garis horizontal: biru dan merah dengan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara merdeka pertama di Karibia.',
        flagCode: 'ht'
    },
    // JAMAICA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Jamaika', 'Kuba', 'Haiti', 'Bahama'],
        correctIndex: 0,
        explanation: 'Bendera Jamaika memiliki latar kuning dengan segitiga hijau di atas dan bawah serta segitiga hitam di kiri dan kanan.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan musik reggae.',
        flagCode: 'jm'
    },

    // ===== AFRIKA (54 Negara) =====
        // ANGOLA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Angola', 'Mozambik', 'Namibia', 'Zambia'],
        correctIndex: 0,
        explanation: 'Bendera Angola memiliki dua garis horizontal: merah dan hitam dengan lambang parang dan roda gigi di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini kaya akan minyak dan berlian.',
        flagCode: 'ao'
    },
    // BENIN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Benin', 'Ghana', 'Nigeria', 'Togo'],
        correctIndex: 0,
        explanation: 'Bendera Benin memiliki dua warna: hijau di sisi kiri dan kuning-merah di sisi kanan.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah tempat lahirnya agama Vodun.',
        flagCode: 'bj'
    },
    // BOTSWANA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Botswana', 'Namibia', 'Afrika Selatan', 'Zimbabwe'],
        correctIndex: 0,
        explanation: 'Bendera Botswana memiliki tiga garis horizontal: biru-putih-biru dengan garis hitam tipis di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan taman safari Okavango Delta.',
        flagCode: 'bw'
    },
    // BURKINA FASO
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Burkina Faso', 'Mali', 'Niger', 'Ghana'],
        correctIndex: 0,
        explanation: 'Bendera Burkina Faso memiliki dua garis horizontal: merah dan hijau dengan bintang kuning di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini dulunya bernama Upper Volta.',
        flagCode: 'bf'
    },
    // BURUNDI
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Burundi', 'Rwanda', 'Tanzania', 'Uganda'],
        correctIndex: 0,
        explanation: 'Bendera Burundi memiliki latar merah dengan salib putih dan tiga bintang merah di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di Great Lakes Region Afrika.',
        flagCode: 'bi'
    },
    // CAMEROON
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Kamerun', 'Nigeria', 'Gabon', 'Chad'],
        correctIndex: 0,
        explanation: 'Bendera Kamerun memiliki tiga garis vertikal: hijau-merah-kuning dengan bintang kuning di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini dikenal sebagai "Afrika Miniatur".',
        flagCode: 'cm'
    },
    // CAPE VERDE
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Cape Verde', 'Guinea-Bissau', 'Senegal', 'Mauritania'],
        correctIndex: 0,
        explanation: 'Bendera Cape Verde memiliki latar biru dengan lingkaran sepuluh bintang kuning dan garis merah-putih.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah kepulauan di lepas pantai Afrika Barat.',
        flagCode: 'cv'
    },
    // CHAD
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Chad', 'Kamerun', 'Nigeria', 'Sudan'],
        correctIndex: 0,
        explanation: 'Bendera Chad memiliki tiga warna vertikal: biru-kuning-merah.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki Gurun Sahara di utara.',
        flagCode: 'td'
    },
    // KOMOROS
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Komoros', 'Madagaskar', 'Mauritius', 'Seychelles'],
        correctIndex: 0,
        explanation: 'Bendera Komoros memiliki empat garis horizontal: kuning-putih-merah-biru dengan segitiga hijau di sisi kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah kepulauan di Samudra Hindia.',
        flagCode: 'km'
    },
    // KONGO (DRC)
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Kongo (DRC)', 'Kongo (Republik)', 'Angola', 'Zambia'],
        correctIndex: 0,
        explanation: 'Bendera Kongo (DRC) memiliki latar biru dengan garis diagonal merah dan kuning, serta bintang kuning di sudut kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terbesar di Afrika Tengah.',
        flagCode: 'cd'
    },
    // KONGO (REPUBLIK)
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Kongo (Republik)', 'Kongo (DRC)', 'Gabon', 'Kamerun'],
        correctIndex: 0,
        explanation: 'Bendera Kongo (Republik) memiliki latar hijau dengan garis diagonal kuning dan merah.',
        difficulty: 'sedang',
        hint: 'Negara ini berbatasan dengan DRC dan Gabon.',
        flagCode: 'cg'
    },
    // PANTAI GADING
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Pantai Gading', 'Ghana', 'Nigeria', 'Benin'],
        correctIndex: 0,
        explanation: 'Bendera Pantai Gading memiliki tiga garis vertikal: oranye-putih-hijau.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah penghasil kakao terbesar di dunia.',
        flagCode: 'ci'
    },
    // DJIBOUTI
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Djibouti', 'Somalia', 'Eritrea', 'Etiopia'],
        correctIndex: 0,
        explanation: 'Bendera Djibouti memiliki dua garis horizontal: biru dan hijau dengan segitiga putih dan bintang merah di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di Tanduk Afrika.',
        flagCode: 'dj'
    },
    // EKUATORIAL GUINEA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Ekuatorial Guinea', 'Gabon', 'Kamerun', 'Kongo'],
        correctIndex: 0,
        explanation: 'Bendera Ekuatorial Guinea memiliki tiga garis horizontal: hijau-putih-merah dengan segitiga biru di sisi kiri dan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah satu-satunya negara berbahasa Spanyol di Afrika.',
        flagCode: 'gq'
    },
    // ERITREA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Eritrea', 'Etiopia', 'Sudan', 'Djibouti'],
        correctIndex: 0,
        explanation: 'Bendera Eritrea memiliki dua segitiga: hijau dan biru dengan karangan bunga zaitun di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini merdeka dari Etiopia pada tahun 1993.',
        flagCode: 'er'
    },
    // GABON
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Gabon', 'Kongo', 'Kamerun', 'Ekuatorial Guinea'],
        correctIndex: 0,
        explanation: 'Bendera Gabon memiliki tiga garis horizontal: hijau-kuning-biru.',
        difficulty: 'sedang',
        hint: 'Negara ini kaya akan minyak dan hutan hujan.',
        flagCode: 'ga'
    },
       // GAMBIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Gambia', 'Senegal', 'Guinea', 'Guinea-Bissau'],
        correctIndex: 0,
        explanation: 'Bendera Gambia memiliki tiga garis horizontal: merah-biru-hijau dengan garis putih di antara biru.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terkecil di Afrika daratan.',
        flagCode: 'gm'
    },
    // GUINEA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Guinea', 'Guinea-Bissau', 'Senegal', 'Mali'],
        correctIndex: 0,
        explanation: 'Bendera Guinea memiliki tiga garis vertikal: merah-kuning-hijau.',
        difficulty: 'sedang',
        hint: 'Negara ini kaya akan bauksit.',
        flagCode: 'gn'
    },
    // GUINEA-BISSAU
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Guinea-Bissau', 'Guinea', 'Senegal', 'Gambia'],
        correctIndex: 0,
        explanation: 'Bendera Guinea-Bissau memiliki dua garis horizontal: kuning dan hijau dengan segitiga merah dan bintang hitam di sisi kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini merdeka dari Portugal pada tahun 1973.',
        flagCode: 'gw'
    },
    // LESOTHO
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Lesotho', 'Afrika Selatan', 'Zimbabwe', 'Botswana'],
        correctIndex: 0,
        explanation: 'Bendera Lesotho memiliki tiga garis horizontal: biru-putih-hijau dengan topi Basotho hitam di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara enklave di Afrika Selatan.',
        flagCode: 'ls'
    },
    // LIBERIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Liberia', 'Sierra Leone', 'Ghana', 'Pantai Gading'],
        correctIndex: 0,
        explanation: 'Bendera Liberia memiliki 11 garis merah-putih dan bintang putih di bidang biru, menyerupai bendera AS.',
        difficulty: 'sedang',
        hint: 'Negara ini didirikan oleh mantan budak AS.',
        flagCode: 'lr'
    },
    // MADAGASCAR
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Madagaskar', 'Komoros', 'Mauritius', 'Seychelles'],
        correctIndex: 0,
        explanation: 'Bendera Madagaskar memiliki dua warna: putih di sisi kiri dan merah-hijau di sisi kanan.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah pulau terbesar keempat di dunia.',
        flagCode: 'mg'
    },
    // MALAWI
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Malawi', 'Zambia', 'Tanzania', 'Mozambik'],
        correctIndex: 0,
        explanation: 'Bendera Malawi memiliki tiga garis horizontal: hitam-merah-hijau dengan matahari merah di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini dikenal sebagai "Jantung Afrika".',
        flagCode: 'mw'
    },
    // MALI
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Mali', 'Niger', 'Burkina Faso', 'Guinea'],
        correctIndex: 0,
        explanation: 'Bendera Mali memiliki tiga garis vertikal: hijau-kuning-merah.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki Timbuktu yang terkenal.',
        flagCode: 'ml'
    },
    // MAURITANIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Mauritania', 'Senegal', 'Mali', 'Sahara Barat'],
        correctIndex: 0,
        explanation: 'Bendera Mauritania memiliki latar hijau dengan bulan sabit dan bintang merah di atas garis merah di bagian bawah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terbesar di Maghreb.',
        flagCode: 'mr'
    },
    // MAURITIUS
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Mauritius', 'Seychelles', 'Madagaskar', 'Komoros'],
        correctIndex: 0,
        explanation: 'Bendera Mauritius memiliki empat garis horizontal: merah-biru-kuning-hijau.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan burung Dodo yang punah.',
        flagCode: 'mu'
    },
    // MOZAMBIK
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Mozambik', 'Angola', 'Tanzania', 'Madagaskar'],
        correctIndex: 0,
        explanation: 'Bendera Mozambik memiliki tiga garis horizontal: hijau-hitam-kuning dengan segitiga merah di sisi kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki pantai panjang di Samudra Hindia.',
        flagCode: 'mz'
    },
    // NAMIBIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Namibia', 'Angola', 'Botswana', 'Afrika Selatan'],
        correctIndex: 0,
        explanation: 'Bendera Namibia memiliki latar biru dengan garis diagonal merah dan hijau, serta matahari kuning di sudut kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki Gurun Namib yang terkenal.',
        flagCode: 'na'
    },
    // NIGER
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Niger', 'Nigeria', 'Mali', 'Burkina Faso'],
        correctIndex: 0,
        explanation: 'Bendera Niger memiliki tiga garis horizontal: oranye-putih-hijau dengan lingkaran oranye di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki Gurun Sahara di utara.',
        flagCode: 'ne'
    },
    // RWANDA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Rwanda', 'Burundi', 'Uganda', 'Tanzania'],
        correctIndex: 0,
        explanation: 'Bendera Rwanda memiliki tiga garis horizontal: biru-kuning-hijau dengan matahari kuning di sudut kanan atas.',
        difficulty: 'sedang',
        hint: 'Negara ini dikenal sebagai "Negeri Seribu Bukit".',
        flagCode: 'rw'
    },
    // SAO TOME DAN PRINCIPE
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Sao Tome dan Principe', 'Gabon', 'Kamerun', 'Angola'],
        correctIndex: 0,
        explanation: 'Bendera Sao Tome dan Principe memiliki dua garis horizontal: hijau dan kuning dengan segitiga merah dan dua bintang hitam di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terkecil kedua di Afrika.',
        flagCode: 'st'
    },
    // SENEGAL
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Senegal', 'Mali', 'Guinea', 'Gambia'],
        correctIndex: 0,
        explanation: 'Bendera Senegal memiliki tiga garis vertikal: hijau-kuning-merah dengan bintang hijau di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan Danau Retba yang berwarna merah muda.',
        flagCode: 'sn'
    },
        // SEYCHELLES
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Seychelles', 'Mauritius', 'Madagaskar', 'Komoros'],
        correctIndex: 0,
        explanation: 'Bendera Seychelles memiliki lima garis diagonal: biru, kuning, merah, putih, dan hijau yang menyebar dari sudut kiri bawah.',
        difficulty: 'sedang',
        hint: 'Negara ini terdiri dari 115 pulau.',
        flagCode: 'sc'
    },
    // SIERRA LEONE
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Sierra Leone', 'Liberia', 'Guinea', 'Ghana'],
        correctIndex: 0,
        explanation: 'Bendera Sierra Leone memiliki tiga garis horizontal: hijau-putih-biru.',
        difficulty: 'sedang',
        hint: 'Negara ini kaya akan berlian.',
        flagCode: 'sl'
    },
    // SOMALIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Somalia', 'Etiopia', 'Kenya', 'Djibouti'],
        correctIndex: 0,
        explanation: 'Bendera Somalia memiliki latar biru dengan bintang putih di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki garis pantai terpanjang di Afrika.',
        flagCode: 'so'
    },
    // SWAZILAND (ESWATINI)
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Eswatini', 'Afrika Selatan', 'Lesotho', 'Zimbabwe'],
        correctIndex: 0,
        explanation: 'Bendera Eswatini memiliki tiga garis horizontal: biru-kuning-biru dengan perisai dan dua tombak di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini dulunya bernama Swaziland.',
        flagCode: 'sz'
    },
    // TANZANIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Tanzania', 'Kenya', 'Uganda', 'Mozambik'],
        correctIndex: 0,
        explanation: 'Bendera Tanzania memiliki latar hijau dan biru dengan garis diagonal hitam dan kuning.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki Gunung Kilimanjaro.',
        flagCode: 'tz'
    },
    // TOGO
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Togo', 'Ghana', 'Benin', 'Nigeria'],
        correctIndex: 0,
        explanation: 'Bendera Togo memiliki lima garis hijau-kuning bergantian dan bintang putih di bidang merah di sudut kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terkecil di Teluk Guinea.',
        flagCode: 'tg'
    },
    // UGANDA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Uganda', 'Kenya', 'Tanzania', 'Rwanda'],
        correctIndex: 0,
        explanation: 'Bendera Uganda memiliki enam garis horizontal: hitam-kuning-merah bergantian dengan burung bangau mahkota di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki Danau Victoria yang terkenal.',
        flagCode: 'ug'
    },
    // ZAMBIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Zambia', 'Zimbabwe', 'Malawi', 'Tanzania'],
        correctIndex: 0,
        explanation: 'Bendera Zambia memiliki latar hijau dengan elang kuning di sudut kanan atas dan tiga garis vertikal di sisi kanan.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki Air Terjun Victoria.',
        flagCode: 'zm'
    },
    // ZIMBABWE
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Zimbabwe', 'Zambia', 'Afrika Selatan', 'Botswana'],
        correctIndex: 0,
        explanation: 'Bendera Zimbabwe memiliki tujuh garis horizontal: hijau-kuning-merah-hitam-merah-kuning-hijau dengan segitiga putih dan burung di sisi kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki reruntuhan Great Zimbabwe.',
        flagCode: 'zw'
    },
    // MESIR
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Mesir', 'Libya', 'Sudan', 'Yordania'],
        correctIndex: 0,
        explanation: 'Bendera Mesir memiliki tiga garis horizontal: merah, putih, dan hitam dengan lambang elang di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan piramida dan Sungai Nil.',
        flagCode: 'eg'
    },
    // NIGERIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Nigeria', 'Ghana', 'Pantai Gading', 'Kamerun'],
        correctIndex: 0,
        explanation: 'Bendera Nigeria memiliki tiga garis vertikal: hijau-putih-hijau.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terpadat di Afrika.',
        flagCode: 'ng'
    },
    // AFRIKA SELATAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Afrika Selatan', 'Namibia', 'Botswana', 'Zimbabwe'],
        correctIndex: 0,
        explanation: 'Bendera Afrika Selatan memiliki desain Y yang unik dengan enam warna yang melambangkan persatuan.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan Nelson Mandela.',
        flagCode: 'za'
    },
    // MAROKO
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Maroko', 'Aljazair', 'Tunisia', 'Libya'],
        correctIndex: 0,
        explanation: 'Bendera Maroko memiliki latar merah dengan bintang hijau di tengah yang disebut Bintang Sulaiman.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di ujung barat laut Afrika.',
        flagCode: 'ma'
    },
    // ALJAZAIR
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Aljazair', 'Maroko', 'Tunisia', 'Libya'],
        correctIndex: 0,
        explanation: 'Bendera Aljazair memiliki dua warna: hijau dan putih dengan bulan sabit dan bintang merah di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terbesar di Afrika.',
        flagCode: 'dz'
    },
    // TUNISIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Tunisia', 'Aljazair', 'Maroko', 'Libya'],
        correctIndex: 0,
        explanation: 'Bendera Tunisia memiliki latar merah dengan lingkaran putih dan bulan sabit serta bintang merah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan Puncak Es Krim Tunisia.',
        flagCode: 'tn'
    },
    // LIBYA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Libya', 'Mesir', 'Sudan', 'Tunisia'],
        correctIndex: 0,
        explanation: 'Bendera Libya memiliki tiga warna: merah, hitam, dan hijau dengan bulan sabit dan bintang di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki cadangan minyak terbesar di Afrika.',
        flagCode: 'ly'
    },
    // SUDAN
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Sudan', 'Mesir', 'Etiopia', 'Yaman'],
        correctIndex: 0,
        explanation: 'Bendera Sudan memiliki tiga garis horizontal: merah, putih, dan hitam dengan segitiga hijau di sisi kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terbesar di Afrika.',
        flagCode: 'sd'
    },
    // ETHIOPIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Etiopia', 'Eritrea', 'Somali', 'Sudan'],
        correctIndex: 0,
        explanation: 'Bendera Etiopia memiliki tiga warna: hijau, kuning, dan merah dengan lambang di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah salah satu yang tertua di dunia.',
        flagCode: 'et'
    },
    // KENYA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Kenya', 'Tanzania', 'Uganda', 'Etiopia'],
        correctIndex: 0,
        explanation: 'Bendera Kenya memiliki tiga warna: hitam, merah, dan hijau dengan perisai dan tombak tradisional.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan safari dan maraton.',
        flagCode: 'ke'
    },
    // GHANA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Ghana', 'Nigeria', 'Pantai Gading', 'Togo'],
        correctIndex: 0,
        explanation: 'Bendera Ghana memiliki tiga garis horizontal: merah, kuning, dan hijau dengan bintang hitam di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara pertama di Afrika yang merdeka dari kolonial.',
        flagCode: 'gh'
    },

    // ===== OSEANIA (14 Negara) =====
        // SAMOA AMERIKA
    {
        question: 'Bendera ini milik wilayah mana?',
        options: ['Samoa Amerika', 'Samoa', 'Tonga', 'Kepulauan Cook'],
        correctIndex: 0,
        explanation: 'Bendera Samoa Amerika memiliki latar biru dengan segitiga putih dan elang botak di tengahnya.',
        difficulty: 'sedang',
        hint: 'Wilayah ini adalah wilayah AS di Pasifik Selatan.',
        flagCode: 'as'
    },
    // GUAM
    {
        question: 'Bendera ini milik wilayah mana?',
        options: ['Guam', 'Samoa Amerika', 'Kepulauan Mariana Utara', 'Palau'],
        correctIndex: 0,
        explanation: 'Bendera Guam memiliki latar biru dengan lambang di tengah yang menggambarkan perahu proa di teluk.',
        difficulty: 'sedang',
        hint: 'Wilayah ini adalah wilayah AS di Mikronesia.',
        flagCode: 'gu'
    },
    // POLINESIA PRANCIS
    {
        question: 'Bendera ini milik wilayah mana?',
        options: ['Polinesia Prancis', 'Kepulauan Cook', 'Samoa', 'Tonga'],
        correctIndex: 0,
        explanation: 'Bendera Polinesia Prancis memiliki tiga garis horizontal: merah-putih-merah dengan lambang kapal di tengah.',
        difficulty: 'sedang',
        hint: 'Wilayah ini adalah wilayah Prancis di Pasifik Selatan.',
        flagCode: 'pf'
    },
    // AUSTRALIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Australia', 'Selandia Baru', 'Fiji', 'Papua Nugini'],
        correctIndex: 0,
        explanation: 'Bendera Australia memiliki latar biru dengan Union Jack di sudut dan bintang persemakmuran serta salib selatan.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah benua sekaligus negara.',
        flagCode: 'au'
    },
    // SELANDIA BARU
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Selandia Baru', 'Australia', 'Fiji', 'Kepulauan Cook'],
        correctIndex: 0,
        explanation: 'Bendera Selandia Baru memiliki latar biru dengan Union Jack dan empat bintang merah di sisi kanan.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan film Lord of the Rings.',
        flagCode: 'nz'
    },
    // PAPUA NUGINI
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Papua Nugini', 'Australia', 'Indonesia', 'Kepulauan Solomon'],
        correctIndex: 0,
        explanation: 'Bendera Papua Nugini memiliki dua bagian: merah dengan burung cendrawasih dan hitam dengan bintang salib selatan.',
        difficulty: 'sedang',
        hint: 'Negara ini berbatasan dengan Indonesia di bagian timur.',
        flagCode: 'pg'
    },
    // FIJI
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Fiji', 'Australia', 'Selandia Baru', 'Tonga'],
        correctIndex: 0,
        explanation: 'Bendera Fiji memiliki latar biru dengan Union Jack dan lambang negara di sisi kanan.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan pantai dan resornya.',
        flagCode: 'fj'
    },
    // KEPULAUAN SOLOMON
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Kepulauan Solomon', 'Papua Nugini', 'Vanuatu', 'Fiji'],
        correctIndex: 0,
        explanation: 'Bendera Kepulauan Solomon memiliki segitiga biru dan hijau dengan garis kuning diagonal dan bintang putih di sudut kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di Pasifik Selatan.',
        flagCode: 'sb'
    },
    // VANUATU
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Vanuatu', 'Kepulauan Solomon', 'Fiji', 'Papua Nugini'],
        correctIndex: 0,
        explanation: 'Bendera Vanuatu memiliki dua warna utama: merah dan hijau dengan garis kuning dan lambang negara di sudut kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan gunung berapi aktifnya.',
        flagCode: 'vu'
    },
    // SAMOA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Samoa', 'Tonga', 'Fiji', 'Kepulauan Cook'],
        correctIndex: 0,
        explanation: 'Bendera Samoa memiliki latar merah dengan bintang putih di sudut kiri dan Union Jack di sudut kanan.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan budaya Polinesianya.',
        flagCode: 'ws'
    },
    // TONGA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Tonga', 'Samoa', 'Fiji', 'Kepulauan Cook'],
        correctIndex: 0,
        explanation: 'Bendera Tonga memiliki latar merah dengan salib putih di sudut kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah satu-satunya kerajaan di Polinesia.',
        flagCode: 'to'
    },
    // KIRIBATI
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Kiribati', 'Tuvalu', 'Nauru', 'Kepulauan Marshall'],
        correctIndex: 0,
        explanation: 'Bendera Kiribati memiliki matahari terbit di atas laut dengan burung frigate di atasnya.',
        difficulty: 'sedang',
        hint: 'Negara ini terdiri dari 33 atol.',
        flagCode: 'ki'
    },
    // TUVALU
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Tuvalu', 'Kiribati', 'Nauru', 'Kepulauan Marshall'],
        correctIndex: 0,
        explanation: 'Bendera Tuvalu memiliki latar biru dengan Union Jack dan sembilan bintang kuning.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah salah satu yang terkecil di dunia.',
        flagCode: 'tv'
    },
    // NAURU
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Nauru', 'Tuvalu', 'Kiribati', 'Kepulauan Marshall'],
        correctIndex: 0,
        explanation: 'Bendera Nauru memiliki latar biru dengan garis kuning dan bintang putih di bawah garis.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara pulau terkecil di dunia.',
        flagCode: 'nr'
    },
    // KEPULAUAN MARSHALL
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Kepulauan Marshall', 'Nauru', 'Tuvalu', 'Kiribati'],
        correctIndex: 0,
        explanation: 'Bendera Kepulauan Marshall memiliki latar biru dengan garis oranye dan putih diagonal serta bintang putih.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di Samudra Pasifik.',
        flagCode: 'mh'
    },
    // PALAU
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Palau', 'Kepulauan Marshall', 'Nauru', 'Tuvalu'],
        correctIndex: 0,
        explanation: 'Bendera Palau memiliki latar biru dengan bulan sabit kuning di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan danau ubur-uburnya.',
        flagCode: 'pw'
    },
    // MICRONESIA
    {
        question: 'Bendera ini milik negara mana?',
        options: ['Mikronesia', 'Palau', 'Kepulauan Marshall', 'Nauru'],
        correctIndex: 0,
        explanation: 'Bendera Mikronesia memiliki latar biru dengan empat bintang putih yang melambangkan empat negara bagian.',
        difficulty: 'sedang',
        hint: 'Negara ini terdiri dari empat negara bagian utama.',
        flagCode: 'fm'
    }
];

// ============================================
// KATEGORI 5: NEGARA DAN IBU KOTA (50 Soal)
// ============================================
const negaraIbukotaQuestions = [
    {
        question: 'Apa ibu kota Indonesia?',
        options: ['Jakarta', 'Bandung', 'Surabaya', 'Medan'],
        correctIndex: 0,
        explanation: 'Jakarta adalah ibu kota Indonesia yang terletak di pulau Jawa dan merupakan pusat pemerintahan serta ekonomi.',
        difficulty: 'sedang',
        hint: 'Kota ini memiliki julukan "Kota Metropolitan".'
    },
    {
        question: 'Apa ibu kota Malaysia?',
        options: ['Kuala Lumpur', 'Putrajaya', 'Singapura', 'Bandar Seri Begawan'],
        correctIndex: 0,
        explanation: 'Kuala Lumpur adalah ibu kota Malaysia yang juga merupakan kota terbesar di negara tersebut.',
        difficulty: 'sedang',
        hint: 'Kota ini terkenal dengan Menara Kembar Petronas.'
    },
    {
        question: 'Apa ibu kota Singapura?',
        options: ['Singapura', 'Kuala Lumpur', 'Bandar Seri Begawan', 'Jakarta'],
        correctIndex: 0,
        explanation: 'Singapura adalah negara kota yang sekaligus menjadi ibu kotanya sendiri, dikenal sebagai pusat keuangan global.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah satu-satunya negara kota di Asia Tenggara.'
    },
    {
        question: 'Apa ibu kota Filipina?',
        options: ['Manila', 'Cebu', 'Davao', 'Quezon City'],
        correctIndex: 0,
        explanation: 'Manila adalah ibu kota Filipina yang terletak di pulau Luzon dan merupakan pusat pemerintahan negara.',
        difficulty: 'sedang',
        hint: 'Kota ini berada di pulau terbesar Filipina.'
    },
    {
        question: 'Apa ibu kota Thailand?',
        options: ['Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya'],
        correctIndex: 0,
        explanation: 'Bangkok adalah ibu kota Thailand yang dikenal sebagai kota metropolitan dengan nama panjang "Krung Thep Maha Nakhon".',
        difficulty: 'sedang',
        hint: 'Kota ini memiliki nama terpanjang di dunia.'
    },
    {
        question: 'Apa ibu kota Vietnam?',
        options: ['Hanoi', 'Ho Chi Minh', 'Da Nang', 'Hue'],
        correctIndex: 0,
        explanation: 'Hanoi adalah ibu kota Vietnam yang terletak di bagian utara negara dan merupakan pusat politik dan budaya.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di tepi Sungai Merah.'
    },
    {
        question: 'Apa ibu kota Kamboja?',
        options: ['Phnom Penh', 'Siem Reap', 'Battambang', 'Sihanoukville'],
        correctIndex: 0,
        explanation: 'Phnom Penh adalah ibu kota Kamboja yang terletak di pertemuan sungai Mekong dan Tonle Sap.',
        difficulty: 'sedang',
        hint: 'Kota ini berada di tepi Sungai Mekong.'
    },
    {
        question: 'Apa ibu kota Laos?',
        options: ['Vientiane', 'Luang Prabang', 'Pakse', 'Savannakhet'],
        correctIndex: 0,
        explanation: 'Vientiane adalah ibu kota Laos yang terletak di tepi Sungai Mekong dan berbatasan dengan Thailand.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di sepanjang Sungai Mekong.'
    },
    {
        question: 'Apa ibu kota Myanmar?',
        options: ['Naypyidaw', 'Yangon', 'Mandalay', 'Bagan'],
        correctIndex: 0,
        explanation: 'Naypyidaw adalah ibu kota Myanmar yang menggantikan Yangon sebagai ibu kota pada tahun 2005.',
        difficulty: 'sulit',
        hint: 'Kota ini adalah ibu kota yang relatif baru.'
    },
    {
        question: 'Apa ibu kota Brunei Darussalam?',
        options: ['Bandar Seri Begawan', 'Kuala Lumpur', 'Singapura', 'Jakarta'],
        correctIndex: 0,
        explanation: 'Bandar Seri Begawan adalah ibu kota Brunei Darussalam yang terletak di pulau Kalimantan.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di pesisir utara Kalimantan.'
    },
    {
        question: 'Apa ibu kota Timor Leste?',
        options: ['Dili', 'Baucau', 'Suai', 'Maliana'],
        correctIndex: 0,
        explanation: 'Dili adalah ibu kota Timor Leste yang terletak di pesisir utara pulau Timor.',
        difficulty: 'sedang',
        hint: 'Kota ini menghadap Selat Wetar.'
    },
    {
        question: 'Apa ibu kota Jepang?',
        options: ['Tokyo', 'Kyoto', 'Osaka', 'Nagoya'],
        correctIndex: 0,
        explanation: 'Tokyo adalah ibu kota Jepang yang merupakan kota metropolitan terbesar di dunia dan pusat pemerintahan.',
        difficulty: 'sedang',
        hint: 'Kota ini sebelumnya bernama Edo.'
    },
    {
        question: 'Apa ibu kota Korea Selatan?',
        options: ['Seoul', 'Busan', 'Incheon', 'Daegu'],
        correctIndex: 0,
        explanation: 'Seoul adalah ibu kota Korea Selatan yang merupakan pusat pemerintahan, ekonomi, dan budaya negara.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di sepanjang Sungai Han.'
    },
    {
        question: 'Apa ibu kota China?',
        options: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'],
        correctIndex: 0,
        explanation: 'Beijing adalah ibu kota China yang merupakan pusat pemerintahan dan budaya selama berabad-abad.',
        difficulty: 'sedang',
        hint: 'Kota ini memiliki Kota Terlarang dan Taman Surga.'
    },
    {
        question: 'Apa ibu kota India?',
        options: ['New Delhi', 'Mumbai', 'Kolkata', 'Bangalore'],
        correctIndex: 0,
        explanation: 'New Delhi adalah ibu kota India yang terletak di wilayah Delhi dan merupakan pusat pemerintahan negara.',
        difficulty: 'sedang',
        hint: 'Kota ini memiliki monumen India Gate yang terkenal.'
    },
    {
        question: 'Apa ibu kota Pakistan?',
        options: ['Islamabad', 'Karachi', 'Lahore', 'Rawalpindi'],
        correctIndex: 0,
        explanation: 'Islamabad adalah ibu kota Pakistan yang dibangun sebagai ibu kota baru pada tahun 1960-an.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di kaki Pegunungan Himalaya.'
    },
    {
        question: 'Apa ibu kota Bangladesh?',
        options: ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi'],
        correctIndex: 0,
        explanation: 'Dhaka adalah ibu kota Bangladesh yang merupakan kota terpadat di negara tersebut dan pusat pemerintahan.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di tepi Sungai Buriganga.'
    },
    {
        question: 'Apa ibu kota Sri Lanka?',
        options: ['Sri Jayawardenepura Kotte', 'Colombo', 'Kandy', 'Galle'],
        correctIndex: 0,
        explanation: 'Sri Jayawardenepura Kotte adalah ibu kota administratif Sri Lanka, sedangkan Colombo adalah ibu kota komersial.',
        difficulty: 'sulit',
        hint: 'Kota ini terletak di pinggiran Colombo.'
    },
    {
        question: 'Apa ibu kota Nepal?',
        options: ['Kathmandu', 'Pokhara', 'Biratnagar', 'Lalitpur'],
        correctIndex: 0,
        explanation: 'Kathmandu adalah ibu kota Nepal yang terletak di lembah Kathmandu dan merupakan pusat budaya dan politik.',
        difficulty: 'sedang',
        hint: 'Kota ini dikelilingi oleh pegunungan Himalaya.'
    },
    {
        question: 'Apa ibu kota Afghanistan?',
        options: ['Kabul', 'Kandahar', 'Herat', 'Mazar-i-Sharif'],
        correctIndex: 0,
        explanation: 'Kabul adalah ibu kota Afghanistan yang terletak di bagian timur negara dan merupakan pusat pemerintahan.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di antara pegunungan Hindu Kush.'
    },
    {
        question: 'Apa ibu kota Iran?',
        options: ['Tehran', 'Isfahan', 'Shiraz', 'Mashhad'],
        correctIndex: 0,
        explanation: 'Tehran adalah ibu kota Iran yang merupakan kota terbesar di negara dan pusat politik serta ekonomi.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di kaki Pegunungan Alborz.'
    },
    {
        question: 'Apa ibu kota Irak?',
        options: ['Baghdad', 'Mosul', 'Basra', 'Kirkuk'],
        correctIndex: 0,
        explanation: 'Baghdad adalah ibu kota Irak yang terletak di tepi Sungai Tigris dan merupakan pusat peradaban Islam.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di antara Sungai Tigris dan Efrat.'
    },
    {
        question: 'Apa ibu kota Turki?',
        options: ['Ankara', 'Istanbul', 'Izmir', 'Antalya'],
        correctIndex: 0,
        explanation: 'Ankara adalah ibu kota Turki yang menggantikan Istanbul sebagai ibu kota pada tahun 1923 setelah berdirinya Republik Turki.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di dataran tinggi Anatolia.'
    },
    {
        question: 'Apa ibu kota Arab Saudi?',
        options: ['Riyadh', 'Jeddah', 'Mekkah', 'Madinah'],
        correctIndex: 0,
        explanation: 'Riyadh adalah ibu kota Arab Saudi yang merupakan pusat pemerintahan dan keuangan negara.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di tengah Jazirah Arab.'
    },
    {
        question: 'Apa ibu kota Uni Emirat Arab?',
        options: ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman'],
        correctIndex: 0,
        explanation: 'Abu Dhabi adalah ibu kota Uni Emirat Arab yang merupakan pusat pemerintahan dan memiliki kekayaan minyak.',
        difficulty: 'sedang',
        hint: 'Kota ini adalah salah satu emirat terkaya.'
    },
    {
        question: 'Apa ibu kota Yaman?',
        options: ['Sana\'a', 'Aden', 'Taiz', 'Hodeidah'],
        correctIndex: 0,
        explanation: 'Sana\'a adalah ibu kota Yaman yang terletak di pegunungan dan merupakan salah satu kota tertua di dunia.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di ketinggian 2.300 meter.'
    },
    {
        question: 'Apa ibu kota Oman?',
        options: ['Muskat', 'Salalah', 'Nizwa', 'Sohar'],
        correctIndex: 0,
        explanation: 'Muskat adalah ibu kota Oman yang terletak di pesisir Teluk Oman dan merupakan pusat pemerintahan.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di tepi Teluk Oman.'
    },
    {
        question: 'Apa ibu kota Mesir?',
        options: ['Kairo', 'Aleksandria', 'Giza', 'Luxor'],
        correctIndex: 0,
        explanation: 'Kairo adalah ibu kota Mesir yang terletak di tepi Sungai Nil dan merupakan kota terbesar di dunia Arab.',
        difficulty: 'sedang',
        hint: 'Kota ini dikenal sebagai "Ibu Kota Dunia Arab".'
    },
    {
        question: 'Apa ibu kota Maroko?',
        options: ['Rabat', 'Casablanca', 'Marrakesh', 'Fez'],
        correctIndex: 0,
        explanation: 'Rabat adalah ibu kota Maroko yang terletak di pesisir Samudra Atlantik dan merupakan pusat pemerintahan.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di tepi Samudra Atlantik.'
    },
    {
        question: 'Apa ibu kota Aljazair?',
        options: ['Algiers', 'Oran', 'Constantine', 'Annaba'],
        correctIndex: 0,
        explanation: 'Algiers adalah ibu kota Aljazair yang terletak di pesisir Mediterania dan merupakan kota terbesar di negara.',
        difficulty: 'sedang',
        hint: 'Kota ini menghadap Laut Mediterania.'
    },
    {
        question: 'Apa ibu kota Tunisia?',
        options: ['Tunis', 'Sfax', 'Sousse', 'Kairouan'],
        correctIndex: 0,
        explanation: 'Tunis adalah ibu kota Tunisia yang terletak di pesisir Mediterania dan merupakan pusat politik dan ekonomi.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di tepi Danau Tunis.'
    },
    {
        question: 'Apa ibu kota Libya?',
        options: ['Tripoli', 'Benghazi', 'Misrata', 'Sabha'],
        correctIndex: 0,
        explanation: 'Tripoli adalah ibu kota Libya yang terletak di pesisir Mediterania dan merupakan kota terbesar di negara.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di pesisir Laut Mediterania.'
    },
    {
        question: 'Apa ibu kota Sudan?',
        options: ['Khartoum', 'Omdurman', 'Port Sudan', 'Kassala'],
        correctIndex: 0,
        explanation: 'Khartoum adalah ibu kota Sudan yang terletak di pertemuan Sungai Nil Biru dan Nil Putih.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di pertemuan dua sungai Nil.'
    },
    {
        question: 'Apa ibu kota Afrika Selatan?',
        options: ['Pretoria', 'Cape Town', 'Johannesburg', 'Durban'],
        correctIndex: 0,
        explanation: 'Afrika Selatan memiliki tiga ibu kota: Pretoria (eksekutif), Cape Town (legislatif), dan Bloemfontein (yudikatif).',
        difficulty: 'sulit',
        hint: 'Negara ini memiliki tiga ibu kota.'
    },
    {
        question: 'Apa ibu kota Nigeria?',
        options: ['Abuja', 'Lagos', 'Kano', 'Ibadan'],
        correctIndex: 0,
        explanation: 'Abuja adalah ibu kota Nigeria yang menggantikan Lagos sebagai ibu kota pada tahun 1991.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di pusat Nigeria.'
    },
    {
        question: 'Apa ibu kota Kenya?',
        options: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru'],
        correctIndex: 0,
        explanation: 'Nairobi adalah ibu kota Kenya yang terletak di dataran tinggi dan merupakan pusat keuangan di Afrika Timur.',
        difficulty: 'sedang',
        hint: 'Kota ini dijuluki "Kota Hijau di Matahari".'
    },
    {
        question: 'Apa ibu kota Etiopia?',
        options: ['Addis Ababa', 'Dire Dawa', 'Mekele', 'Gondar'],
        correctIndex: 0,
        explanation: 'Addis Ababa adalah ibu kota Etiopia yang terletak di dataran tinggi dan merupakan ibu kota tertinggi di Afrika.',
        difficulty: 'sedang',
        hint: 'Kota ini adalah ibu kota tertinggi di Afrika.'
    },
    {
        question: 'Apa ibu kota Ghana?',
        options: ['Accra', 'Kumasi', 'Sekondi-Takoradi', 'Tamale'],
        correctIndex: 0,
        explanation: 'Accra adalah ibu kota Ghana yang terletak di pesisir Teluk Guinea dan merupakan pusat pemerintahan.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di pesisir Atlantik.'
    },
    {
        question: 'Apa ibu kota Inggris?',
        options: ['London', 'Manchester', 'Birmingham', 'Liverpool'],
        correctIndex: 0,
        explanation: 'London adalah ibu kota Inggris dan Britania Raya yang merupakan pusat keuangan dan budaya global.',
        difficulty: 'sedang',
        hint: 'Kota ini dilewati oleh Sungai Thames.'
    },
    {
        question: 'Apa ibu kota Prancis?',
        options: ['Paris', 'Lyon', 'Marseille', 'Toulouse'],
        correctIndex: 0,
        explanation: 'Paris adalah ibu kota Prancis yang dikenal sebagai "Kota Cahaya" dan merupakan pusat mode serta seni dunia.',
        difficulty: 'sedang',
        hint: 'Kota ini memiliki Menara Eiffel.'
    },
    {
        question: 'Apa ibu kota Jerman?',
        options: ['Berlin', 'München', 'Hamburg', 'Frankfurt'],
        correctIndex: 0,
        explanation: 'Berlin adalah ibu kota Jerman yang merupakan pusat pemerintahan dan memiliki sejarah yang kaya.',
        difficulty: 'sedang',
        hint: 'Kota ini pernah terbagi menjadi Berlin Timur dan Barat.'
    },
    {
        question: 'Apa ibu kota Italia?',
        options: ['Roma', 'Milano', 'Napoli', 'Turin'],
        correctIndex: 0,
        explanation: 'Roma adalah ibu kota Italia yang dikenal sebagai "Kota Abadi" dan merupakan pusat Kekaisaran Romawi kuno.',
        difficulty: 'sedang',
        hint: 'Kota ini memiliki Colosseum yang terkenal.'
    },
    {
        question: 'Apa ibu kota Spanyol?',
        options: ['Madrid', 'Barcelona', 'Valencia', 'Seville'],
        correctIndex: 0,
        explanation: 'Madrid adalah ibu kota Spanyol yang terletak di pusat negara dan merupakan pusat pemerintahan serta budaya.',
        difficulty: 'sedang',
        hint: 'Kota ini memiliki Istana Kerajaan Madrid.'
    },
    {
        question: 'Apa ibu kota Portugal?',
        options: ['Lisbon', 'Porto', 'Braga', 'Coimbra'],
        correctIndex: 0,
        explanation: 'Lisbon adalah ibu kota Portugal yang terletak di pesisir Atlantik dan merupakan salah satu kota tertua di Eropa.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di tepi Sungai Tagus.'
    },
    {
        question: 'Apa ibu kota Belanda?',
        options: ['Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht'],
        correctIndex: 0,
        explanation: 'Amsterdam adalah ibu kota Belanda yang terkenal dengan kanal-kanalnya dan merupakan pusat keuangan.',
        difficulty: 'sedang',
        hint: 'Kota ini memiliki banyak kanal dan jembatan.'
    },
    {
        question: 'Apa ibu kota Belgia?',
        options: ['Brussels', 'Antwerp', 'Ghent', 'Bruges'],
        correctIndex: 0,
        explanation: 'Brussels adalah ibu kota Belgia dan juga merupakan pusat administrasi Uni Eropa.',
        difficulty: 'sedang',
        hint: 'Kota ini adalah ibu kota Uni Eropa.'
    },
    {
        question: 'Apa ibu kota Swiss?',
        options: ['Bern', 'Zürich', 'Geneva', 'Basel'],
        correctIndex: 0,
        explanation: 'Bern adalah ibu kota Swiss yang terletak di tepi Sungai Aare dan merupakan pusat pemerintahan federal.',
        difficulty: 'sedang',
        hint: 'Kota ini memiliki rumah-rumah tua dengan gaya abad pertengahan.'
    },
    {
        question: 'Apa ibu kota Austria?',
        options: ['Wina', 'Salzburg', 'Innsbruck', 'Graz'],
        correctIndex: 0,
        explanation: 'Wina adalah ibu kota Austria yang dikenal dengan musik klasiknya dan merupakan bekas pusat Kekaisaran Austria.',
        difficulty: 'sedang',
        hint: 'Kota ini adalah kota musik klasik dunia.'
    },
    {
        question: 'Apa ibu kota Yunani?',
        options: ['Athena', 'Thessaloniki', 'Patras', 'Heraklion'],
        correctIndex: 0,
        explanation: 'Athena adalah ibu kota Yunani yang merupakan pusat peradaban kuno dan tempat lahirnya demokrasi.',
        difficulty: 'sedang',
        hint: 'Kota ini memiliki Parthenon di Acropolis.'
    },
    {
        question: 'Apa ibu kota Rusia?',
        options: ['Moskow', 'Saint Petersburg', 'Novosibirsk', 'Kazan'],
        correctIndex: 0,
        explanation: 'Moskow adalah ibu kota Rusia yang merupakan kota terbesar di Eropa dan pusat pemerintahan serta ekonomi.',
        difficulty: 'sedang',
        hint: 'Kota ini memiliki Kremlin dan Lapangan Merah.'
    },
    {
        question: 'Apa ibu kota Amerika Serikat?',
        options: ['Washington DC', 'New York', 'Los Angeles', 'Chicago'],
        correctIndex: 0,
        explanation: 'Washington DC adalah ibu kota Amerika Serikat yang merupakan pusat pemerintahan federal dan memiliki Gedung Putih.',
        difficulty: 'sedang',
        hint: 'Kota ini dinamai dari presiden pertama AS.'
    },
    {
        question: 'Apa ibu kota Kanada?',
        options: ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'],
        correctIndex: 0,
        explanation: 'Ottawa adalah ibu kota Kanada yang terletak di provinsi Ontario dan merupakan pusat pemerintahan federal.',
        difficulty: 'sedang',
        hint: 'Kota ini terletak di antara Toronto dan Montreal.'
    }
];


// ============================================
// KATEGORI 6: PROVINSI INDONESIA (50 Soal)
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
// EXPOSE KE GLOBAL
// ============================================
window.questionsByCategory = {
    'pengetahuan-umum': createCategoryQuestions(pengetahuanUmumQuestions, 'Pengetahuan Umum'),
    'matematika': createCategoryQuestions(matematikaQuestions, 'Matematika'),
    'agama-islam': createCategoryQuestions(agamaIslamQuestions, 'Agama Islam'),
    'nama-bendera': createCategoryQuestions(namaBenderaQuestions, 'Nama Bendera Dunia'),
    'negara-ibukota': createCategoryQuestions(negaraIbukotaQuestions, 'Negara dan Ibu Kota'),
    'provinsi-indonesia': createCategoryQuestions(provinsiIndonesiaQuestions, 'Provinsi dan Ibu Kota Indonesia'),
    'sejarah-indonesia': createCategoryQuestions(sejarahIndonesiaQuestions, 'Sejarah Indonesia'),
    'sejarah-dunia': createCategoryQuestions(sejarahDuniaQuestions, 'Sejarah Dunia')
};

// Hitung total soal
window.totalQuestions = 0;
for (const category in window.questionsByCategory) {
    window.totalQuestions += window.questionsByCategory[category].length;
}

console.log('✅ ZaxQuiz Loaded!');
console.log(`📚 ${Object.keys(window.questionsByCategory).length} kategori`);
console.log(`📝 ${window.totalQuestions} total soal`);
