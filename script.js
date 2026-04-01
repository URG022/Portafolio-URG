// === HEADER SCROLL ===
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
});

// === MOBILE MENU ===
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('active');
});

// Close on link click
navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('active');
    });
});

// Mobile nav open style
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-links.open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: var(--nav-h);
            left: 0; right: 0;
            background: rgba(10,10,15,0.97);
            backdrop-filter: blur(20px);
            padding: 24px;
            gap: 24px;
            border-bottom: 1px solid var(--border);
            z-index: 99;
        }
        .menu-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .menu-toggle.active span:nth-child(2) { opacity: 0; }
        .menu-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
    }
`;
document.head.appendChild(style);

// === ANIMATE ON SCROLL ===
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || (i * 100);
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, parseInt(delay));
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
    el.dataset.delay = i * 120;
    observer.observe(el);
});

// === CONTACT FORM ===
// Esperar a que EmailJS esté disponible
function initializeContactForm() {
    if (typeof emailjs !== 'undefined') {
        // Si EmailJS está cargado
        emailjs.init({
            publicKey: 'r_0Zl36Aw7VLnV_zQ'
        });
        setupEmailJSForm();
    } else {
        // Si EmailJS no cargó, usar fallback
        setupFallbackForm();
    }
}

function setupEmailJSForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        const original = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = 'Enviando... <i class="fas fa-spinner fa-spin"></i>';

        try {
            const templateParams = {
                to_email: 'ulisesriveraguillen519@gmail.com',
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                subject: document.getElementById('subject').value || 'Sin asunto',
                message: document.getElementById('message').value,
                reply_to: document.getElementById('email').value
            };

            const response = await emailjs.send('service_y68jk6d', 'template_4nh5o9c', templateParams);
            
            if (response.status === 200) {
                btn.innerHTML = '¡Mensaje enviado! <i class="fas fa-check"></i>';
                btn.style.background = '#22c55e';
                contactForm.reset();

                setTimeout(() => {
                    btn.innerHTML = original;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            }
        } catch (error) {
            console.error('Error EmailJS:', error);
            btn.innerHTML = 'Error. Intenta de nuevo <i class="fas fa-exclamation"></i>';
            btn.style.background = '#ef4444';
            btn.disabled = false;
            
            setTimeout(() => {
                btn.innerHTML = original;
                btn.style.background = '';
            }, 3000);
        }
    });
}

function setupFallbackForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        const original = btn.innerHTML;
        
        btn.innerHTML = '¡Mensaje guardado! <i class="fas fa-check"></i>';
        btn.style.background = '#22c55e';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = original;
            btn.style.background = '';
            btn.disabled = false;
            contactForm.reset();
        }, 3000);
    });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeContactForm);
} else {
    initializeContactForm();
}

// === ACTIVE NAV LINK ON SCROLL ===
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navItems.forEach(a => a.classList.remove('active'));
            const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
            active?.classList.add('active');
        }
    });
}, { threshold: 0.5 });

sections.forEach(s => navObserver.observe(s));

// Active nav style
const navStyle = document.createElement('style');
navStyle.textContent = `.nav-links a.active { color: var(--text) !important; } .nav-links a.active::after { width: 100% !important; }`;
document.head.appendChild(navStyle);

const trackWrappers = document.querySelectorAll('.skills-track-wrapper');
if (trackWrappers.length) {
    const trackObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                trackObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
 
    trackWrappers.forEach(wrapper => trackObserver.observe(wrapper));
}
 
// === EFECTO 3D TILT EN SKILL CARDS ===
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotX = ((y - cy) / cy) * -8;
        const rotY = ((x - cx) / cx) * 8;
        card.querySelector('.skill-card-inner').style.transform =
            `translateY(-8px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
 
    card.addEventListener('mouseleave', () => {
        card.querySelector('.skill-card-inner').style.transform = '';
    });
});

