/* ================================
   IMAGE MANAGER - ADRIANFLIX
   ================================ */

// Gerenciador de imagens para fallback quando API falha
document.addEventListener('DOMContentLoaded', function() {
    
    // Função para gerenciar imagens com fallback
    function setupImageFallback() {
        const images = document.querySelectorAll('.lista-filmes img');
        
        images.forEach((img, index) => {
            // Adiciona classe skeleton enquanto carrega
            img.classList.add('skeleton');
            
            // Configura eventos de erro e sucesso
            img.addEventListener('load', function() {
                this.classList.remove('skeleton');
                this.classList.remove('error');
                console.log('✅ Imagem carregada:', this.src);
            });
            
            img.addEventListener('error', function() {
                console.log('❌ Erro ao carregar imagem:', this.src);
                this.classList.remove('skeleton');
                this.classList.add('error');
                
                // Aplica imagem de demonstração
                const demoClass = `demo-image-${(index % 3) + 1}`;
                this.classList.add(demoClass);
                
                // Remove src para não tentar carregar novamente
                this.removeAttribute('src');
            });
            
            // Timeout para imagens que demoram muito
            setTimeout(() => {
                if (img.classList.contains('skeleton')) {
                    img.dispatchEvent(new Event('error'));
                }
            }, 10000); // 10 segundos timeout
        });
    }
    
    // Executa o setup
    setupImageFallback();
    
    // Observer para detectar novas imagens adicionadas dinamicamente
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) { // Element node
                    const newImages = node.querySelectorAll ? node.querySelectorAll('.lista-filmes img') : [];
                    if (newImages.length > 0) {
                        console.log('🔄 Novas imagens detectadas, aplicando fallback...');
                        setupImageFallback();
                    }
                }
            });
        });
    });
    
    // Observa mudanças no DOM
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Função para criar cards de exemplo quando não há filmes
    function createDemoCards() {
        const container = document.querySelector('.lista-filmes');
        if (!container) return;
        
        // Verifica se já existem filmes
        const existingCards = container.querySelectorAll('article');
        if (existingCards.length > 0) return;
        
        console.log('📽️ Criando cards de demonstração...');
        
        const demoMovies = [
            {
                title: 'Missão Impossível: Protocolo Fantasma',
                id: 'demo-1',
                description: 'Tom Cruise retorna como Ethan Hunt em uma missão que pode ser a mais perigosa de sua carreira.',
                class: 'demo-placeholder placeholder-action',
                rating: '8.4',
                features: ['4K', 'Dolby', 'Ação'],
                year: '2024'
            },
            {
                title: 'O Poderoso Chefão: Legado',
                id: 'demo-2', 
                description: 'A saga da família Corleone continua em uma nova geração de poder e traição.',
                class: 'demo-placeholder placeholder-drama',
                rating: '9.2',
                features: ['HD', 'Drama', 'Clássico'],
                year: '2024'
            },
            {
                title: 'Superbad: O Retorno',
                id: 'demo-3',
                description: 'A comédia mais hilária do ano está de volta com mais risos e situações embaraçosas.',
                class: 'demo-placeholder placeholder-comedy',
                rating: '7.8',
                features: ['HD', 'Comédia', 'Legendas'],
                year: '2024'
            },
            {
                title: 'Invocação do Mal: Nightmare',
                id: 'demo-4',
                description: 'Os investigadores paranormais Ed e Lorraine Warren enfrentam seu caso mais aterrorizante.',
                class: 'demo-placeholder placeholder-horror',
                rating: '8.1',
                features: ['4K', 'Terror', 'Suspense'],
                year: '2024'
            },
            {
                title: 'Blade Runner 2099',
                id: 'demo-5',
                description: 'O futuro nunca pareceu tão real. Uma nova era de androides e humanos em conflito.',
                class: 'demo-placeholder placeholder-scifi',
                rating: '8.9',
                features: ['4K', 'Sci-Fi', 'Dolby'],
                year: '2024'
            },
            {
                title: 'Como Eu Era Antes de Você: Sempre',
                id: 'demo-6',
                description: 'Uma história de amor que transcende o tempo e o espaço.',
                class: 'demo-placeholder placeholder-romance',
                rating: '7.5',
                features: ['HD', 'Romance', 'Drama'],
                year: '2024'
            }
        ];
        
        // Adiciona mensagem de demonstração
        const notice = document.createElement('div');
        notice.className = 'api-offline-notice';
        notice.innerHTML = `
            <h3>🎬 Modo Demonstração - AdrianFlix</h3>
            <p>A API está temporariamente indisponível. Aproveite nosso catálogo de demonstração!</p>
        `;
        container.parentNode.insertBefore(notice, container);
        
        demoMovies.forEach(movie => {
            const article = document.createElement('article');
            article.className = 'demo-card';
            article.innerHTML = `
                <strong class="status-novo">🆕 ${movie.title} (${movie.year})</strong>
                <div class="${movie.class}"></div>
                <div class="demo-info">
                    <h3 class="demo-title">${movie.title}</h3>
                    <p class="demo-description">${movie.description}</p>
                    <div class="rating rating-high">⭐ ${movie.rating}</div>
                    <div class="demo-features">
                        ${movie.features.map(feature => `<span class="demo-feature">${feature}</span>`).join('')}
                    </div>
                    <button class="demo-watch-btn" onclick="showMovieDetails('${movie.id}')">
                        ▶️ Assistir Agora
                    </button>
                </div>
            `;
            container.appendChild(article);
        });
    }
    
    // Cria cards de demonstração após um pequeno delay
    setTimeout(() => {
        createDemoCards();
    }, 2000);
    
    console.log('🎬 Image Manager inicializado com sucesso!');
});

// Função para mostrar detalhes do filme (placeholder)
function showMovieDetails(movieId) {
    console.log('🎯 Clicou no filme:', movieId);
    
    // Cria um modal simples de demonstração
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        backdrop-filter: blur(10px);
    `;
    
    modal.innerHTML = `
        <div style="
            background: var(--netflix-dark-gray);
            border-radius: 15px;
            padding: 30px;
            max-width: 500px;
            text-align: center;
            border: 2px solid var(--netflix-red);
        ">
            <h2 style="color: var(--netflix-red); margin-bottom: 20px;">🎬 AdrianFlix</h2>
            <p style="color: var(--netflix-white); margin-bottom: 20px;">
                Esta é uma demonstração! Em breve teremos o player completo.
            </p>
            <div style="margin: 20px 0;">
                <span class="feature-icon feature-4k">📺 4K</span>
                <span class="feature-icon feature-dolby">🔊 Dolby</span>
                <span class="feature-icon feature-subtitle">💬 Legendas</span>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: var(--netflix-red);
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: bold;
                transition: all 0.3s;
            " onmouseover="this.style.background='var(--netflix-dark-red)'" 
               onmouseout="this.style.background='var(--netflix-red)'">
                ✨ Fechar
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Remove o modal ao clicar fora
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Função para verificar status da API
async function checkAPIStatus() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=e088c5860f1e45132604a74eb353e770');
        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
            console.log('✅ API funcionando! Filmes encontrados:', data.results.length);
            return true;
        } else {
            console.log('⚠️ API retornou dados vazios');
            return false;
        }
    } catch (error) {
        console.log('❌ Erro na API:', error.message);
        return false;
    }
}

// Verifica o status da API ao carregar
checkAPIStatus().then(isWorking => {
    if (!isWorking) {
        console.log('🔄 API indisponível, usando modo demonstração...');
        
        // Remove loading se existir
        const loadingElements = document.querySelectorAll('.loading');
        loadingElements.forEach(el => {
            el.style.display = 'none';
        });
    }
});