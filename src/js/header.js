document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;

    // Header scroll effect
    if (header) {
        let lastScroll = 0;
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            lastScroll = currentScroll;
        }, { passive: true });
    }
    
    if (!menuToggle || !mainNav) {
        console.warn('Menu toggle or navigation not found');
        return;
    }
    
    function closeMenu() {
        if (menuToggle && mainNav) {
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
            body.classList.remove('menu-open');
        }
    }
    
    function openMenu() {
        if (menuToggle && mainNav) {
            menuToggle.classList.add('active');
            menuToggle.setAttribute('aria-expanded', 'true');
            mainNav.classList.add('active');
            body.classList.add('menu-open');
        }
    }
    
    function toggleMenu() {
        const isOpen = mainNav.classList.contains('active');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    document.addEventListener('click', function(event) {
        const isMenuOpen = mainNav.classList.contains('active');
        
        if (isMenuOpen && 
            !event.target.closest('.main-nav') && 
            !event.target.closest('.mobile-menu-toggle')) {
            closeMenu();
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
            const isMenuOpen = mainNav.classList.contains('active');
            if (isMenuOpen) {
                closeMenu();
            }
        }
    });
    
    const hasSubmenuLinks = document.querySelectorAll('.has-submenu > a');
    hasSubmenuLinks.forEach(function(link) {
        const parentLi = link.parentElement;
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                
                const isOpen = parentLi.classList.contains('submenu-open');
                link.setAttribute('aria-expanded', !isOpen);
                parentLi.classList.toggle('submenu-open');
            }
        });
        
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                if (window.innerWidth > 992) {
                    const isOpen = parentLi.classList.contains('submenu-open');
                    link.setAttribute('aria-expanded', !isOpen);
                    parentLi.classList.toggle('submenu-open');
                    e.preventDefault();
                }
            }
        });
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            closeMenu();
            
            const openSubmenus = document.querySelectorAll('.submenu-open');
            openSubmenus.forEach(function(item) {
                item.classList.remove('submenu-open');
                const link = item.querySelector('a');
                if (link) {
                    link.setAttribute('aria-expanded', 'false');
                }
            });
        }
    });
});
