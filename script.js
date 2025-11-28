// Toggle mobile menu
document.getElementById('mobile-menu-btn')?.addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Smooth scroll para todos los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación al hacer scroll (fade in)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar elementos con la clase fade-in-on-scroll
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
    fadeElements.forEach(el => observer.observe(el));
});

// Cambiar opacidad del navbar al hacer scroll
let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('shadow-xl');
    } else {
        navbar.classList.remove('shadow-xl');
    }
    
    lastScroll = currentScroll;
});

// Efecto de escritura para el título (opcional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
setTimeout(type, speed);
}
}
type();
}
// Scroll to top button (opcional - puedes agregarlo)
function createScrollToTopButton() {
const button = document.createElement('button');
button.innerHTML = '↑';
button.className = 'fixed bottom-8 right-8 bg-yellow-700 hover:bg-yellow-800 text-white w-12 h-12 rounded-full shadow-lg hidden transition transform hover:scale-110 z-50';
button.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
document.body.appendChild(button);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        button.classList.remove('hidden');
    } else {
        button.classList.add('hidden');
    }
});
}
// Inicializar scroll to top button
document.addEventListener('DOMContentLoaded', createScrollToTopButton);
// Añadir clase active al link de navegación actual
document.addEventListener('DOMContentLoaded', function() {
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});
});
