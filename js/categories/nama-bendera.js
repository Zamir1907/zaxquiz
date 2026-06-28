// ============================================
// KATEGORI 4: NAMA BENDERA DUNIA (50 Soal)
// ============================================

const namaBenderaQuestions = [
    {
        question: '🇮🇩 Bendera ini milik negara mana?',
        options: ['Indonesia', 'Malaysia', 'Singapura', 'Filipina'],
        correctIndex: 0,
        explanation: 'Bendera Indonesia terdiri dari dua warna: merah di atas dan putih di bawah, yang dikenal sebagai Sang Saka Merah Putih.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara kepulauan terbesar di dunia.'
    },
    {
        question: '🇺🇸 Bendera ini adalah bendera dari negara mana?',
        options: ['Amerika Serikat', 'Inggris', 'Kanada', 'Australia'],
        correctIndex: 0,
        explanation: 'Bendera Amerika Serikat memiliki 13 garis merah-putih dan 50 bintang putih di bidang biru, melambangkan 50 negara bagian.',
        difficulty: 'sedang',
        hint: 'Negara ini dikenal sebagai "Negeri Paman Sam".'
    },
    {
        question: '🇯🇵 Bendera ini milik negara mana?',
        options: ['Jepang', 'Korea Selatan', 'China', 'Taiwan'],
        correctIndex: 0,
        explanation: 'Bendera Jepang, yang disebut Hinomaru, memiliki lingkaran merah di tengah yang melambangkan matahari terbit.',
        difficulty: 'sedang',
        hint: 'Negara ini dikenal sebagai "Negeri Matahari Terbit".'
    },
    {
        question: '🇨🇳 Bendera ini adalah bendera dari negara mana?',
        options: ['China', 'Vietnam', 'Korea Utara', 'Taiwan'],
        correctIndex: 0,
        explanation: 'Bendera China memiliki latar merah dengan lima bintang kuning di sudut kiri atas, melambangkan persatuan di bawah kepemimpinan komunis.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki populasi terbesar di dunia.'
    },
    {
        question: '🇬🇧 Bendera ini milik negara mana?',
        options: ['Inggris', 'Amerika Serikat', 'Australia', 'Selandia Baru'],
        correctIndex: 0,
        explanation: 'Bendera Inggris, yang disebut Union Jack, menggabungkan salib dari tiga santo pelindung: St. George, St. Andrew, dan St. Patrick.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah bagian dari Britania Raya.'
    },
    {
        question: '🇫🇷 Bendera ini adalah bendera dari negara mana?',
        options: ['Prancis', 'Italia', 'Belanda', 'Rusia'],
        correctIndex: 0,
        explanation: 'Bendera Prancis, yang disebut Tricolore, memiliki tiga warna vertikal: biru, putih, dan merah yang melambangkan kebebasan, kesetaraan, dan persaudaraan.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan Menara Eiffel.'
    },
    {
        question: '🇩🇪 Bendera ini milik negara mana?',
        options: ['Jerman', 'Belgia', 'Austria', 'Swiss'],
        correctIndex: 0,
        explanation: 'Bendera Jerman memiliki tiga garis horizontal: hitam, merah, dan emas yang melambangkan persatuan dan kebebasan.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah salah satu negara terbesar di Eropa.'
    },
    {
        question: '🇮🇹 Bendera ini adalah bendera dari negara mana?',
        options: ['Italia', 'Prancis', 'Irlandia', 'Meksiko'],
        correctIndex: 0,
        explanation: 'Bendera Italia memiliki tiga warna vertikal: hijau, putih, dan merah yang melambangkan harapan, iman, dan cinta.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan bentuknya yang seperti sepatu bot.'
    },
    {
        question: '🇪🇸 Bendera ini milik negara mana?',
        options: ['Spanyol', 'Portugal', 'Andorra', 'Meksiko'],
        correctIndex: 0,
        explanation: 'Bendera Spanyol memiliki tiga garis horizontal: merah-kuning-merah dengan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan tomatina dan sepak bola.'
    },
    {
        question: '🇵🇹 Bendera ini adalah bendera dari negara mana?',
        options: ['Portugal', 'Spanyol', 'Brasil', 'Angola'],
        correctIndex: 0,
        explanation: 'Bendera Portugal memiliki dua warna: hijau dan merah dengan lambang negara di tengah yang melambangkan penjelajahan samudra.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di ujung barat Eropa.'
    },
    {
        question: '🇳🇱 Bendera ini milik negara mana?',
        options: ['Belanda', 'Prancis', 'Rusia', 'Luksemburg'],
        correctIndex: 0,
        explanation: 'Bendera Belanda memiliki tiga garis horizontal: merah, putih, dan biru yang merupakan salah satu bendera tertua di dunia.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan kincir angin dan bunga tulip.'
    },
    {
        question: '🇧🇪 Bendera ini adalah bendera dari negara mana?',
        options: ['Belgia', 'Jerman', 'Prancis', 'Belanda'],
        correctIndex: 0,
        explanation: 'Bendera Belgia memiliki tiga warna vertikal: hitam, kuning, dan merah yang melambangkan perjuangan kemerdekaan.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan cokelat dan wafel.'
    },
    {
        question: '🇨🇭 Bendera ini milik negara mana?',
        options: ['Swiss', 'Swedia', 'Norwegia', 'Finlandia'],
        correctIndex: 0,
        explanation: 'Bendera Swiss berbentuk persegi dengan latar merah dan salib putih di tengah, melambangkan netralitas dan perdamaian.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan gunung Alpen dan cokelat.'
    },
    {
        question: '🇦🇹 Bendera ini adalah bendera dari negara mana?',
        options: ['Austria', 'Jerman', 'Hungaria', 'Swiss'],
        correctIndex: 0,
        explanation: 'Bendera Austria memiliki tiga garis horizontal: merah-putih-merah yang melambangkan darah dan kedamaian.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan musik klasiknya.'
    },
    {
        question: '🇬🇷 Bendera ini milik negara mana?',
        options: ['Yunani', 'Siprus', 'Malta', 'Turki'],
        correctIndex: 0,
        explanation: 'Bendera Yunani memiliki sembilan garis biru-putih dan salib di sudut kiri atas, melambangkan kebebasan dan laut.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah tempat lahirnya demokrasi.'
    },
    {
        question: '🇹🇷 Bendera ini adalah bendera dari negara mana?',
        options: ['Turki', 'Mesir', 'Arab Saudi', 'Iran'],
        correctIndex: 0,
        explanation: 'Bendera Turki memiliki latar merah dengan bulan sabit dan bintang putih yang melambangkan Islam dan kemerdekaan.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di antara Eropa dan Asia.'
    },
    {
        question: '🇪🇬 Bendera ini milik negara mana?',
        options: ['Mesir', 'Libya', 'Sudan', 'Yordania'],
        correctIndex: 0,
        explanation: 'Bendera Mesir memiliki tiga garis horizontal: merah, putih, dan hitam dengan lambang elang di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan piramida dan Sungai Nil.'
    },
    {
        question: '🇸🇦 Bendera ini adalah bendera dari negara mana?',
        options: ['Arab Saudi', 'Uni Emirat Arab', 'Yaman', 'Oman'],
        correctIndex: 0,
        explanation: 'Bendera Arab Saudi memiliki latar hijau dengan tulisan syahadat dan pedang putih, melambangkan Islam dan keadilan.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah tempat kelahiran Islam.'
    },
    {
        question: '🇮🇷 Bendera ini milik negara mana?',
        options: ['Iran', 'Irak', 'Afghanistan', 'Pakistan'],
        correctIndex: 0,
        explanation: 'Bendera Iran memiliki tiga garis horizontal: hijau, putih, dan merah dengan lambang Allah di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini dulunya dikenal sebagai Persia.'
    },
    {
        question: '🇮🇳 Bendera ini adalah bendera dari negara mana?',
        options: ['India', 'Pakistan', 'Bangladesh', 'Sri Lanka'],
        correctIndex: 0,
        explanation: 'Bendera India memiliki tiga warna: saffron, putih, dan hijau dengan roda Ashoka di tengah melambangkan hukum dan dharma.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara demokrasi terbesar di dunia.'
    },
    {
        question: '🇵🇰 Bendera ini milik negara mana?',
        options: ['Pakistan', 'India', 'Bangladesh', 'Afghanistan'],
        correctIndex: 0,
        explanation: 'Bendera Pakistan memiliki latar hijau dengan bulan sabit dan bintang putih, melambangkan Islam dan kemajuan.',
        difficulty: 'sedang',
        hint: 'Negara ini merdeka dari India pada tahun 1947.'
    },
    {
        question: '🇧🇩 Bendera ini adalah bendera dari negara mana?',
        options: ['Bangladesh', 'Pakistan', 'India', 'Nepal'],
        correctIndex: 0,
        explanation: 'Bendera Bangladesh memiliki latar hijau dengan lingkaran merah yang melambangkan darah perjuangan kemerdekaan.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di delta sungai Ganges.'
    },
    {
        question: '🇯🇵 Bendera ini milik negara mana?',
        options: ['Jepang', 'Korea Selatan', 'Vietnam', 'Kamboja'],
        correctIndex: 0,
        explanation: 'Bendera Jepang adalah Hinomaru, yang berarti "lingkaran matahari", dengan warna merah dan putih.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara kepulauan di Asia Timur.'
    },
    {
        question: '🇰🇷 Bendera ini adalah bendera dari negara mana?',
        options: ['Korea Selatan', 'Korea Utara', 'Jepang', 'China'],
        correctIndex: 0,
        explanation: 'Bendera Korea Selatan, yang disebut Taegukgi, memiliki simbol yin-yang di tengah dengan trigram di setiap sudut.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan K-Pop dan Samsung.'
    },
    {
        question: '🇻🇳 Bendera ini milik negara mana?',
        options: ['Vietnam', 'Kamboja', 'Laos', 'Thailand'],
        correctIndex: 0,
        explanation: 'Bendera Vietnam memiliki latar merah dengan bintang kuning di tengah, melambangkan revolusi dan persatuan.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan Perang Vietnam.'
    },
    {
        question: '🇹🇭 Bendera ini adalah bendera dari negara mana?',
        options: ['Thailand', 'Laos', 'Kamboja', 'Malaysia'],
        correctIndex: 0,
        explanation: 'Bendera Thailand memiliki tiga warna: merah, putih, dan biru yang melambangkan tanah air, agama, dan raja.',
        difficulty: 'sedang',
        hint: 'Negara ini dulunya dikenal sebagai Siam.'
    },
    {
        question: '🇲🇾 Bendera ini milik negara mana?',
        options: ['Malaysia', 'Indonesia', 'Filipina', 'Singapura'],
        correctIndex: 0,
        explanation: 'Bendera Malaysia, yang disebut Jalur Gemilang, memiliki 14 garis merah-putih dan bulan sabit dengan bintang.',
        difficulty: 'sedang',
        hint: 'Negara ini terbagi menjadi dua bagian: Semenanjung dan Kalimantan.'
    },
    {
        question: '🇸🇬 Bendera ini adalah bendera dari negara mana?',
        options: ['Singapura', 'Malaysia', 'Indonesia', 'Filipina'],
        correctIndex: 0,
        explanation: 'Bendera Singapura memiliki dua warna: merah di atas dan putih di bawah dengan bulan sabit dan lima bintang.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah kota-negara di Asia Tenggara.'
    },
    {
        question: '🇵🇭 Bendera ini milik negara mana?',
        options: ['Filipina', 'Indonesia', 'Malaysia', 'Thailand'],
        correctIndex: 0,
        explanation: 'Bendera Filipina memiliki tiga warna: biru, merah, dan putih dengan matahari dan tiga bintang di segitiga putih.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki lebih dari 7.000 pulau.'
    },
    {
        question: '🇦🇺 Bendera ini adalah bendera dari negara mana?',
        options: ['Australia', 'Selandia Baru', 'Fiji', 'Papua Nugini'],
        correctIndex: 0,
        explanation: 'Bendera Australia memiliki latar biru dengan Union Jack di sudut dan bintang persemakmuran serta salib selatan.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah benua sekaligus negara.'
    },
    {
        question: '🇳🇿 Bendera ini milik negara mana?',
        options: ['Selandia Baru', 'Australia', 'Fiji', 'Kepulauan Cook'],
        correctIndex: 0,
        explanation: 'Bendera Selandia Baru memiliki latar biru dengan Union Jack dan empat bintang merah di sisi kanan.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan film Lord of the Rings.'
    },
    {
        question: '🇨🇦 Bendera ini adalah bendera dari negara mana?',
        options: ['Kanada', 'Amerika Serikat', 'Inggris', 'Australia'],
        correctIndex: 0,
        explanation: 'Bendera Kanada yang terkenal dengan daun maple merah di tengah dengan latar putih di antara dua garis merah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terbesar kedua di dunia.'
    },
    {
        question: '🇲🇽 Bendera ini milik negara mana?',
        options: ['Meksiko', 'Spanyol', 'Italia', 'Kolombia'],
        correctIndex: 0,
        explanation: 'Bendera Meksiko memiliki tiga warna vertikal: hijau, putih, dan merah dengan lambang elang di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan makanan pedasnya.'
    },
    {
        question: '🇧🇷 Bendera ini adalah bendera dari negara mana?',
        options: ['Brasil', 'Portugal', 'Kolombia', 'Argentina'],
        correctIndex: 0,
        explanation: 'Bendera Brasil memiliki latar hijau dengan berlian kuning dan lingkaran biru berisi bintang-bintang.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terbesar di Amerika Selatan.'
    },
    {
        question: '🇦🇷 Bendera ini milik negara mana?',
        options: ['Argentina', 'Uruguay', 'Chili', 'Peru'],
        correctIndex: 0,
        explanation: 'Bendera Argentina memiliki tiga garis horizontal: biru-putih-biru dengan matahari di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan danau dan gunung es di Patagonia.'
    },
    {
        question: '🇨🇱 Bendera ini adalah bendera dari negara mana?',
        options: ['Chili', 'Argentina', 'Peru', 'Bolivia'],
        correctIndex: 0,
        explanation: 'Bendera Chili memiliki dua warna: putih dan biru dengan bintang putih di sudut kiri, dan merah di bagian bawah.',
        difficulty: 'sedang',
        hint: 'Negara ini berbentuk seperti cabai.'
    },
    {
        question: '🇵🇪 Bendera ini milik negara mana?',
        options: ['Peru', 'Ekuador', 'Kolombia', 'Bolivia'],
        correctIndex: 0,
        explanation: 'Bendera Peru memiliki tiga garis vertikal: merah-putih-merah dengan lambang negara di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan Machu Picchu.'
    },
    {
        question: '🇨🇴 Bendera ini adalah bendera dari negara mana?',
        options: ['Kolombia', 'Ekuador', 'Venezuela', 'Panama'],
        correctIndex: 0,
        explanation: 'Bendera Kolombia memiliki tiga garis horizontal: kuning di atas (setengah), biru, dan merah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan kopi dan salsa.'
    },
    {
        question: '🇻🇪 Bendera ini milik negara mana?',
        options: ['Venezuela', 'Kolombia', 'Ekuador', 'Peru'],
        correctIndex: 0,
        explanation: 'Bendera Venezuela memiliki tiga garis horizontal: kuning, biru, dan merah dengan bintang-bintang di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki danau terbesar di Amerika Selatan.'
    },
    {
        question: '🇿🇦 Bendera ini adalah bendera dari negara mana?',
        options: ['Afrika Selatan', 'Namibia', 'Botswana', 'Zimbabwe'],
        correctIndex: 0,
        explanation: 'Bendera Afrika Selatan memiliki desain Y yang unik dengan enam warna yang melambangkan persatuan.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan Nelson Mandela.'
    },
    {
        question: '🇳🇬 Bendera ini milik negara mana?',
        options: ['Nigeria', 'Ghana', 'Pantai Gading', 'Kamerun'],
        correctIndex: 0,
        explanation: 'Bendera Nigeria memiliki tiga garis vertikal: hijau-putih-hijau yang melambangkan pertanian dan perdamaian.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terpadat di Afrika.'
    },
    {
        question: '🇰🇪 Bendera ini adalah bendera dari negara mana?',
        options: ['Kenya', 'Tanzania', 'Uganda', 'Etiopia'],
        correctIndex: 0,
        explanation: 'Bendera Kenya memiliki tiga warna: hitam, merah, dan hijau dengan perisai dan tombak tradisional.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan safari dan maraton.'
    },
    {
        question: '🇪🇹 Bendera ini milik negara mana?',
        options: ['Etiopia', 'Eritrea', 'Somali', 'Sudan'],
        correctIndex: 0,
        explanation: 'Bendera Etiopia memiliki tiga warna: hijau, kuning, dan merah dengan lambang di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah salah satu yang tertua di dunia.'
    },
    {
        question: '🇲🇦 Bendera ini adalah bendera dari negara mana?',
        options: ['Maroko', 'Aljazair', 'Tunisia', 'Libya'],
        correctIndex: 0,
        explanation: 'Bendera Maroko memiliki latar merah dengan bintang hijau di tengah yang disebut Bintang Sulaiman.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di ujung barat laut Afrika.'
    },
    {
        question: '🇩🇿 Bendera ini milik negara mana?',
        options: ['Aljazair', 'Maroko', 'Tunisia', 'Libya'],
        correctIndex: 0,
        explanation: 'Bendera Aljazair memiliki dua warna: hijau dan putih dengan bulan sabit dan bintang merah di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terbesar di Afrika.'
    },
    {
        question: '🇹🇳 Bendera ini adalah bendera dari negara mana?',
        options: ['Tunisia', 'Aljazair', 'Maroko', 'Libya'],
        correctIndex: 0,
        explanation: 'Bendera Tunisia memiliki latar merah dengan lingkaran putih dan bulan sabit serta bintang merah.',
        difficulty: 'sedang',
        hint: 'Negara ini terkenal dengan Puncak Es Krim Tunisia.'
    },
    {
        question: '🇱🇾 Bendera ini milik negara mana?',
        options: ['Libya', 'Mesir', 'Sudan', 'Tunisia'],
        correctIndex: 0,
        explanation: 'Bendera Libya memiliki tiga warna: merah, hitam, dan hijau dengan bulan sabit dan bintang di tengah.',
        difficulty: 'sedang',
        hint: 'Negara ini memiliki cadangan minyak terbesar di Afrika.'
    },
    {
        question: '🇸🇩 Bendera ini adalah bendera dari negara mana?',
        options: ['Sudan', 'Mesir', 'Etiopia', 'Yaman'],
        correctIndex: 0,
        explanation: 'Bendera Sudan memiliki tiga garis horizontal: merah, putih, dan hitam dengan segitiga hijau di sisi kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini adalah negara terbesar di Afrika.'
    },
    {
        question: '🇾🇪 Bendera ini milik negara mana?',
        options: ['Yaman', 'Oman', 'Uni Emirat Arab', 'Arab Saudi'],
        correctIndex: 0,
        explanation: 'Bendera Yaman memiliki tiga garis horizontal: merah, putih, dan hitam yang mewakili persatuan Arab.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di ujung selatan Jazirah Arab.'
    },
    {
        question: '🇦🇪 Bendera ini adalah bendera dari negara mana?',
        options: ['Uni Emirat Arab', 'Arab Saudi', 'Yaman', 'Oman'],
        correctIndex: 0,
        explanation: 'Bendera Uni Emirat Arab memiliki tiga warna: hijau, putih, dan hitam dengan garis merah vertikal di sisi kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini dikenal dengan gedung-gedung pencakar langitnya.'
    },
    {
        question: '🇴🇲 Bendera ini milik negara mana?',
        options: ['Oman', 'Yaman', 'Uni Emirat Arab', 'Arab Saudi'],
        correctIndex: 0,
        explanation: 'Bendera Oman memiliki tiga warna: putih, merah, dan hijau dengan lambang negara di sudut kiri.',
        difficulty: 'sedang',
        hint: 'Negara ini terletak di ujung timur Jazirah Arab.'
    }
];

// ============================================
// TAMBAHKAN KE GLOBAL QUESTIONS
// ============================================

// Tambahkan kategori Nama Bendera Dunia ke questionsByCategory
window.questionsByCategory['nama-bendera'] = createCategoryQuestions(namaBenderaQuestions, 'Nama Bendera Dunia');

// Update total soal
window.totalQuestions = 0;
for (const category in window.questionsByCategory) {
    window.totalQuestions += window.questionsByCategory[category].length;
}

console.log(`✅ Kategori "Nama Bendera Dunia" ditambahkan! (${namaBenderaQuestions.length} soal)`);
console.log(`📚 Total soal sekarang: ${window.totalQuestions}`);
console.log(`📂 ${Object.keys(window.questionsByCategory).length} kategori tersedia`);