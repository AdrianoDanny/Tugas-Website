// Data Anime
const animeData = [
    {
        id: 1,
        title: "Demon Slayer",
        genre: ["Action", "Demons", "Shounen"],
        rating: 4.9,
        image: "images/anime1.jpg",
        description: "Tanjiro Kamado, seorang anak baik yang berjualan arang, menemukan keluarganya dibantai oleh iblis. Yang lebih buruk, adik perempuannya Nezuko, satu-satunya yang selamat, telah berubah menjadi iblis."
    },
    {
        id: 2,
        title: "Attack on Titan",
        genre: ["Action", "Shounen", "Fantasy"],
        rating: 4.8,
        image: "images/anime2.jpg",
        description: "Setelah kampung halamannya hancur dan ibunya terbunuh, Eren Jaeger muda bersumpah untuk membersihkan bumi dari Titan humanoid raksasa yang telah membawa umat manusia ke ambang kepunahan."
    },
    {
        id: 3,
        title: "Jujutsu Kaisen",
        genre: ["Action", "Fantasy", "Shounen"],
        rating: 4.7,
        image: "images/anime3.jpg",
        description: "Yuji Itadori, seorang remaja baik hati, bergabung dengan Klub Okultisme sekolahnya untuk bersenang-senang, tetapi menemukan bahwa anggotanya adalah penyihir sungguhan yang bisa memanipulasi energi antara makhluk untuk penggunaan mereka sendiri."
    },
    {
        id: 4,
        title: "My Hero Academia",
        genre: ["Action", "School", "Shounen"],
        rating: 4.6,
        image: "images/anime4.jpg",
        description: "Di dunia di mana orang dengan kekuatan super (dikenal sebagai Quirks) adalah hal biasa, Izuku Midoriya bermimpi menjadi pahlawan meskipun dilahirkan tanpa kekuatan apa pun."
    },
    {
        id: 5,
        title: "Bleach",
        genre: ["Shounen", "Super Power", "Supernatural"],
        rating: 4.8,
        image: "images/anime5.jpg",
        description: "Ichigo kurosaki, seorang pelajar SMA berambut jingga, yang terpaksa menjadi shinigami (dewa kematian versi jepang)pengganti, setelah menyelamatkan Rukia Kuchiki seorang shinigami yang sedang bertugas di dunia manusia untuk mengalahkan roh jahat Hollow."
    },
    {
        id: 6,
        title: "Sword Art Online",
        genre: ["Action", "Shounen", "Romance"],
        rating: 4.3,
        image: "images/anime6.jpg",
        description: "Di masa depan dekat, sebuah Game Online RPG Multipemain Masif Realitas Virtual (VRMMORPG) bernama Sword Art Online telah dirilis di mana pemain mengontrol avatar mereka dengan tubuh mereka menggunakan teknologi bernama Nerve Gear."
    },
    {
        id: 7,
        title: "One Piece",
        genre: ["Action", "Pirate", "Fantasy"],
        rating: 4.9,
        image: "images/anime7.jpg",
        description: "Mengikuti petualangan Monkey D. Luffy dan kru bajak lautnya untuk menemukan harta karun terbesar yang pernah ditinggalkan oleh Bajak Laut legendaris, Gold Roger."
    },
    {
        id: 8,
        title: "Naruto",
        genre: ["Ninja", "Fantasy", "Shounen"],
        rating: 4.9,
        image: "images/anime8.jpg",
        description: "menceritakan kisah seorang ninja muda, Naruto Uzumaki, yang hidup di Desa Konoha. Naruto memiliki kekuatan besar dalam dirinya, yaitu Kyuubi (Rubah Ekor Sembilan), yang disegel di dalam tubuhnya sejak lahir. Namun, kekuatan ini juga membuatnya dijauhi oleh orang-orang di desanya."
    }
];

// Elemen DOM
const animeContainer = document.getElementById('anime-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// Menampilkan Anime
function tampilkanAnime(animes) {
    animeContainer.innerHTML = '';
    
    animes.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.classList.add('anime-card');
        
        animeCard.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}" class="anime-img">
            <div class="anime-info">
                <h3 class="anime-title">${anime.title}</h3>
                <div>
                    ${anime.genre.map(genre => `<span class="anime-genre">${genre}</span>`).join('')}
                </div>
                <div class="anime-rating">
                    ${'★'.repeat(Math.floor(anime.rating))}${'☆'.repeat(5 - Math.floor(anime.rating))}
                </div>
                <p class="anime-desc">${anime.description}</p>
                <button class="btn">Lihat Detail</button>
            </div>
        `;
        
        animeContainer.appendChild(animeCard);
    });
}

// Filter Anime berdasarkan Genre
function filterAnime(e) {
    const filter = e.target.dataset.filter;
    
    // Perbarui tombol aktif
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    let animeTersaring;
    if (filter === 'semua') {
        animeTersaring = animeData;
    } else {
        animeTersaring = animeData.filter(anime => anime.genre.includes(filter));
    }
    
    tampilkanAnime(animeTersaring);
}

// Cari Anime
function cariAnime() {
    const kataKunci = searchInput.value.toLowerCase();
    
    const animeDicari = animeData.filter(anime => 
        anime.title.toLowerCase().includes(kataKunci) ||
        anime.genre.some(g => g.includes(kataKunci)) ||
        anime.description.toLowerCase().includes(kataKunci)
    );
    
    tampilkanAnime(animeDicari);
}

// Event Listeners
filterButtons.forEach(button => {
    button.addEventListener('click', filterAnime);
});

searchBtn.addEventListener('click', cariAnime);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        cariAnime();
    }
});

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
    tampilkanAnime(animeData);
    
    // Scroll halus untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});