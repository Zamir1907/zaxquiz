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
// TAMBAHKAN KE GLOBAL QUESTIONS
// ============================================

// Tambahkan kategori Negara dan Ibu Kota ke questionsByCategory
window.questionsByCategory['negara-ibukota'] = createCategoryQuestions(negaraIbukotaQuestions, 'Negara dan Ibu Kota');

// Update total soal
window.totalQuestions = 0;
for (const category in window.questionsByCategory) {
    window.totalQuestions += window.questionsByCategory[category].length;
}

console.log(`✅ Kategori "Negara dan Ibu Kota" ditambahkan! (${negaraIbukotaQuestions.length} soal)`);
console.log(`📚 Total soal sekarang: ${window.totalQuestions}`);
console.log(`📂 ${Object.keys(window.questionsByCategory).length} kategori tersedia`);