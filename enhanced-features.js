/* ================================
   ADRIANFLIX - ENHANCED FEATURES
   ================================ */

// Adiciona funcionalidades extras ao projeto
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Header com efeito de scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // 2. Loading enhancements
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(loading => {
        loading.classList.add('loading-advanced');
    });
    
    // 3. Adiciona efeito de partículas nos cards
    const articleCards = document.querySelectorAll('.lista-filmes article');
    articleCards.forEach(card => {
        card.classList.add('particle-effect');
        
        // Adiciona hover effect com delay
        card.addEventListener('mouseenter', () => {
            setTimeout(() => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
            }, 100);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
    
    // 4. Smooth scroll para links internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 5. Keyboard navigation enhancements
    document.body.classList.add('keyboard-navigation');
    
    // 6. Intersection Observer para animações
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observa todos os cards de filmes
        articleCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }
    
    // 7. Enhanced button effects
    const buttons = document.querySelectorAll('.area-buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // 8. Lazy loading para imagens
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => imageObserver.observe(img));
    }
    
    // 9. Performance monitoring
    if ('PerformanceObserver' in window) {
        const perfObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === 'paint') {
                    console.log(`${entry.name}: ${entry.startTime}ms`);
                }
            });
        });
        
        perfObserver.observe({ entryTypes: ['paint'] });
    }
    
    // 10. Service Worker registration para PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                    console.log('SW registered: ', registration);
                })
                .catch((registrationError) => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
    
    // 11. Theme detection e customização
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (e) => {
        // Mantém sempre tema escuro (Netflix style)
        document.documentElement.setAttribute('data-theme', 'dark');
    };
    
    mediaQuery.addListener(handleThemeChange);
    handleThemeChange(mediaQuery);
    
    // 12. Enhanced error handling
    window.addEventListener('error', (e) => {
        console.error('JavaScript Error:', e.error);
        // Aqui você pode adicionar logging para um serviço externo
    });
    
    // 13. Focus management para acessibilidade
    const focusableElements = document.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    
    // Gerencia foco com Tab
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-focused');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-focused');
    });
    
    // 14. Custom cursor para elementos interativos
    const interactiveElements = document.querySelectorAll('button, a, .lista-filmes article');
    interactiveElements.forEach(element => {
        element.style.cursor = 'pointer';
    });
    
    // 15. Console welcome message
    console.log(`
    🎬 AdrianFlix - Streaming Platform
    ════════════════════════════════════
    Bem-vindo ao código da AdrianFlix!
    
    ✨ Features implementadas:
    • Design Netflix-inspired
    • Animações suaves
    • Responsividade completa
    • PWA ready
    • Acessibilidade
    • Performance otimizada
    
    Desenvolvido com ❤️ por AdrianFlix
    ════════════════════════════════════
    `);
});

// CSS para ripple effect
const rippleStyles = `
.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(2);
        opacity: 0;
    }
}

.keyboard-focused *:focus {
    outline: 2px solid var(--netflix-red, #e50914);
    outline-offset: 2px;
}

.loaded {
    opacity: 1;
    transition: opacity 0.3s ease;
}

img:not(.loaded) {
    opacity: 0;
}
`;

// Adiciona os estilos ao head
const styleSheet = document.createElement('style');
styleSheet.textContent = rippleStyles;
document.head.appendChild(styleSheet);