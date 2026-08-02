/* index.js - Scripts para a página inicial */
document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ============================================================
    // 1. BACK TO TOP BUTTON
    // ============================================================
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================================================
    // 2. HEADER SCROLL EFFECT
    // ============================================================
    const header = document.querySelector('header');

    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleHeaderScroll);

    // Verificar estado inicial
    handleHeaderScroll();

    // ============================================================
    // 3. CARD ANIMATION ON SCROLL (Intersection Observer)
    // ============================================================
    const cards = document.querySelectorAll('.card');

    if (cards.length > 0 && 'IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const cardObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        cards.forEach(function(card, index) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.5s ease ' + (index * 0.1) + 's, transform 0.5s ease ' + (index * 0.1) + 's';
            cardObserver.observe(card);
        });
    } else {
        // Fallback para navegadores antigos - mostrar todos os cards
        cards.forEach(function(card) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    }

    // ============================================================
    // 4. RESOURCE CARD CLICK FEEDBACK
    // ============================================================
    const resourceLinks = document.querySelectorAll('.resource-download');

    resourceLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Pequeno feedback visual ao clicar
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-download');
                icon.classList.add('fa-spinner', 'fa-spin');
                setTimeout(function() {
                    icon.classList.remove('fa-spinner', 'fa-spin');
                    icon.classList.add('fa-download');
                }, 600);
            }
        });
    });

    // ============================================================
    // 5. KEYBOARD SHORTCUTS
    // ============================================================
    document.addEventListener('keydown', function(e) {
        // Tecla 'H' ou 'Home' - voltar ao topo
        if (e.key === 'Home' || (e.key === 'h' && !e.ctrlKey && !e.metaKey && !e.altKey)) {
            // Verificar se não está dentro de um campo de input
            const tagName = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
            if (tagName !== 'input' && tagName !== 'textarea') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        }
    });

    // ============================================================
    // 6. CONSOLE WELCOME MESSAGE
    // ============================================================
    console.log('%c📚 Estudo TAS', 'font-size: 24px; font-weight: bold; color: #2196f3;');
    console.log('%cMaterial de apoio à formação para Tripulantes de Ambulância de Socorro', 'font-size: 14px; color: #555;');
    console.log('%c📄 6 manuais disponíveis | 66 capítulos no total', 'font-size: 13px; color: #888;');

    console.log('%c🔗 Links rápidos:', 'font-size: 13px; font-weight: bold; color: #1a1a2e;');
    console.log('  📖 Introdução à Emergência Pré-Hospitalar → IEM.html');
    console.log('  📖 Abordagem da Vítima → AV.html');
    console.log('  📖 Emergências Médicas → EM.html');
    console.log('  📖 Emergências Pediátricas → EP.html');
    console.log('  📖 Emergências de Trauma → ET.html');
    console.log('  📖 Emergências de Obstetrícia → EO.html');

    console.log('%c💡 Dica: Pressione a tecla "Home" para voltar ao topo da página.', 'font-size: 12px; color: #888;');
});