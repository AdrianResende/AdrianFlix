class ModernUIController {
    constructor() {
        this.apiKey = 'e088c5860f1e45132604a74eb353e770';
        this.baseURL = 'https://api.themoviedb.org/3';
        this.imageBaseURL = 'https://image.tmdb.org/t/p/w500';
        this.backdropBaseURL = 'https://image.tmdb.org/t/p/original';
        this.categories = {
            trending: { title: '🔥 Em Alta', endpoint: '/trending/movie/week' },
            popular: { title: '⭐ Populares', endpoint: '/movie/popular' },
            topRated: { title: '🏆 Mais Votados', endpoint: '/movie/top_rated' },
            upcoming: { title: '🎬 Em Breve', endpoint: '/movie/upcoming' },
            action: { title: '💥 Ação', endpoint: '/discover/movie', params: '&with_genres=28' },
            comedy: { title: '😂 Comédia', endpoint: '/discover/movie', params: '&with_genres=35' },
            scifi: { title: '🚀 Ficção Científica', endpoint: '/discover/movie', params: '&with_genres=878' },
            horror: { title: '😱 Terror', endpoint: '/discover/movie', params: '&with_genres=27' }
        };
        this.currentHeroSlide = 0;
    }

    async init() {
        this.buildModernLayout();
        await this.loadHeroMovies();
        await this.loadAllCategories();
        this.setupCarousels();
        this.setupHeader();
        this.startHeroCarousel();
    }

    buildModernLayout() {
        const root = document.getElementById('root') || document.body;
        root.innerHTML = `
            <header class="modern-header">
                <div class="header-content">
                    <a href="#" class="logo"><span>🎬</span><span>ADRIANFLIX</span></a>
                    <nav>
                        <ul class="nav-menu">
                            <li><a href="#inicio">Início</a></li>
                            <li><a href="#filmes">Filmes</a></li>
                            <li><a href="#series">Séries</a></li>
                            <li><a href="#bombando">Bombando</a></li>
                            <li><a href="#minha-lista">Minha Lista</a></li>
                        </ul>
                    </nav>
                    <div class="header-actions">
                        <button class="search-btn" title="Buscar">🔍</button>
                        <button class="notifications-btn" title="Notificações">🔔</button>
                        <button class="profile-btn" title="Perfil">👤</button>
                    </div>
                </div>
            </header>
            <section class="hero-banner" id="hero-banner"></section>
            <div class="genre-pills">
                <button class="genre-pill active">Todos</button>
                <button class="genre-pill">Ação</button>
                <button class="genre-pill">Comédia</button>
                <button class="genre-pill">Drama</button>
                <button class="genre-pill">Terror</button>
                <button class="genre-pill">Ficção Científica</button>
                <button class="genre-pill">Romance</button>
                <button class="genre-pill">Animação</button>
            </div>
            <main id="movies-container"></main>
        `;
    }

    async loadHeroMovies() {
        try {
            const response = await fetch(`${this.baseURL}/trending/movie/week?api_key=${this.apiKey}&language=pt-BR`);
            const data = await response.json();
            const heroMovies = data.results.slice(0, 5);
            
            const heroContainer = document.getElementById('hero-banner');
            heroContainer.innerHTML = heroMovies.map((movie, index) => `
                <div class="hero-slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
                    <img src="${this.backdropBaseURL}${movie.backdrop_path || movie.poster_path}" 
                         alt="${movie.title}" class="hero-backdrop">
                    <div class="hero-content fade-in-up">
                        <h1 class="hero-title">${movie.title}</h1>
                        <p class="hero-description">${movie.overview || 'Sem descrição disponível.'}</p>
                        <div class="hero-buttons">
                            <button class="btn-play" onclick="playMovie(${movie.id})">▶️ Assistir</button>
                            <button class="btn-info" onclick="showMovieInfo(${movie.id})">ℹ️ Mais Informações</button>
                        </div>
                    </div>
                    <div class="hero-gradient"></div>
                </div>
            `).join('');
        } catch (error) {
            console.error('Erro ao carregar hero:', error);
        }
    }

    async loadAllCategories() {
        const container = document.getElementById('movies-container');
        
        for (const [key, category] of Object.entries(this.categories)) {
            try {
                const url = `${this.baseURL}${category.endpoint}?api_key=${this.apiKey}&language=pt-BR${category.params || ''}`;
                const response = await fetch(url);
                const data = await response.json();
                const movies = data.results.slice(0, 15);
                
                container.innerHTML += this.createMovieSection(category.title, movies, key);
            } catch (error) {
                console.error(`Erro ao carregar ${category.title}:`, error);
            }
        }
    }

    createMovieSection(title, movies, sectionId) {
        return `
            <section class="movies-section" id="${sectionId}">
                <div class="section-header">
                    <h2 class="section-title">${title}</h2>
                    <a href="#" class="see-all">Ver todos ›</a>
                </div>
                <div class="carousel-container">
                    <button class="carousel-btn prev" onclick="modernUI.scrollCarousel('${sectionId}', -1)">‹</button>
                    <div class="carousel-wrapper">
                        <div class="carousel-track">
                            ${movies.map(movie => this.createPosterCard(movie)).join('')}
                        </div>
                    </div>
                    <button class="carousel-btn next" onclick="modernUI.scrollCarousel('${sectionId}', 1)">›</button>
                </div>
            </section>
        `;
    }

    createPosterCard(movie) {
        const posterPath = movie.poster_path || movie.backdrop_path;
        const imageUrl = posterPath ? `${this.imageBaseURL}${posterPath}` : null;
        const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
        const year = movie.release_date ? new Date(movie.release_date).getFullYear() : '';
        
        return `
            <div class="poster-card" onclick="showMovieModal(${movie.id}, '${movie.title.replace(/'/g, "\\'")}')">
                <div class="poster-image-wrapper">
                    ${imageUrl ? 
                        `<img src="${imageUrl}" alt="${movie.title}" class="poster-img" loading="lazy"
                              onerror="this.src='https://via.placeholder.com/200x300/141414/e50914?text=${encodeURIComponent(movie.title)}'">` :
                        `<div class="poster-img" style="background: linear-gradient(135deg, #e50914 0%, #b20710 100%); display: flex; align-items: center; justify-content: center; font-size: 40px;">🎬</div>`
                    }
                    ${movie.vote_average >= 8.0 ? '<div class="quality-badge">4K</div>' : ''}
                    ${rating !== 'N/A' ? `<div class="rating-badge">⭐ ${rating}</div>` : ''}
                    <div class="poster-overlay">
                        <h3 class="poster-title">${movie.title}</h3>
                        <div class="poster-meta">
                            <span>${year}</span>
                            ${rating !== 'N/A' ? `<span>• ${rating}/10</span>` : ''}
                        </div>
                        <div class="poster-actions">
                            <button class="action-btn">▶️ Play</button>
                            <button class="action-btn">➕ Lista</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    scrollCarousel(sectionId, direction) {
        const section = document.getElementById(sectionId);
        const track = section.querySelector('.carousel-track');
        const cardWidth = 210;
        const visibleCards = Math.floor(section.offsetWidth / cardWidth);
        const scrollAmount = cardWidth * visibleCards * direction;
        
        const currentTransform = track.style.transform || 'translateX(0px)';
        const currentX = parseInt(currentTransform.match(/-?\d+/)?.[0] || 0);
        const newX = currentX + scrollAmount;
        
        const maxScroll = -(track.children.length * cardWidth - section.offsetWidth);
        const finalX = Math.max(maxScroll, Math.min(0, newX));
        
        track.style.transform = `translateX(${finalX}px)`;
    }

    setupCarousels() {
        document.querySelectorAll('.carousel-track').forEach(track => {
            let isDown = false;
            let startX, scrollLeft;

            track.addEventListener('mousedown', (e) => {
                isDown = true;
                track.style.cursor = 'grabbing';
                startX = e.pageX - track.offsetLeft;
                scrollLeft = track.scrollLeft;
            });

            track.addEventListener('mouseleave', () => {
                isDown = false;
                track.style.cursor = 'grab';
            });

            track.addEventListener('mouseup', () => {
                isDown = false;
                track.style.cursor = 'grab';
            });

            track.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - track.offsetLeft;
                const walk = (x - startX) * 2;
                track.scrollLeft = scrollLeft - walk;
            });
        });
    }

    setupHeader() {
        const header = document.querySelector('.modern-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    startHeroCarousel() {
        const slides = document.querySelectorAll('.hero-slide');
        setInterval(() => {
            slides[this.currentHeroSlide].classList.remove('active');
            this.currentHeroSlide = (this.currentHeroSlide + 1) % slides.length;
            slides[this.currentHeroSlide].classList.add('active');
        }, 5000);
    }
}

function showMovieModal(id, title) {
    alert(`🎬 ${title}\n\nModal completo em breve!`);
}

function playMovie(id) {
    alert('▶️ Player em breve!');
}

function showMovieInfo(id) {
    alert('ℹ️ Informações em breve!');
}

let modernUI;
document.addEventListener('DOMContentLoaded', () => {
    modernUI = new ModernUIController();
    modernUI.init();
});
