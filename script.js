// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Función para navegación suave
    inicializarNavegacionSuave();
    
    // Función para efectos de scroll en el header
    inicializarEfectosScroll();
    
    // Función para pausar la animación de herramientas al hacer hover
    inicializarEfectosHerramientas();
});

/**
 * Inicializa la navegación suave para los enlaces internos
 * Permite un scroll suave cuando se hace clic en los enlaces del menú
 */
function inicializarNavegacionSuave() {
    // Seleccionar todos los enlaces que comienzan con #
    const enlacesInternos = document.querySelectorAll('a[href^="#"]');
    
    // Agregar evento de clic a cada enlace
    enlacesInternos.forEach(enlace => {
        enlace.addEventListener('click', function(evento) {
            // Prevenir el comportamiento por defecto del enlace
            evento.preventDefault();
            
            // Obtener el elemento objetivo del enlace
            const elementoObjetivo = document.querySelector(this.getAttribute('href'));
            
            // Si el elemento existe, hacer scroll suave hacia él
            if (elementoObjetivo) {
                elementoObjetivo.scrollIntoView({
                    behavior: 'smooth', // Scroll suave
                    block: 'start'      // Alinear al inicio del elemento
                });
            }
        });
    });
}

/**
 * Inicializa los efectos de scroll en el header
 * Cambia la opacidad del header según la posición del scroll
 */
function inicializarEfectosScroll() {
    // Agregar evento de scroll a la ventana
    window.addEventListener('scroll', function() {
        // Obtener el elemento header
        const header = document.querySelector('header');
        
        // Si el scroll es mayor a 100px, cambiar la opacidad del header
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.1)';
        }
    });
}

/**
 * Inicializa los efectos interactivos para la sección de herramientas
 * Permite pausar la animación al hacer hover sobre las herramientas
 */
function inicializarEfectosHerramientas() {
    // Obtener elementos del DOM
    const contenedorHerramientas = document.querySelector('.tools-scroll');
    const contenedorHerramientasWrapper = document.querySelector('.tools-container');
    
    // Verificar que los elementos existen antes de agregar eventos
    if (contenedorHerramientas && contenedorHerramientasWrapper) {
        
        // Evento cuando el mouse entra en el contenedor
        contenedorHerramientasWrapper.addEventListener('mouseenter', function() {
            // Pausar la animación
            contenedorHerramientas.style.animationPlayState = 'paused';
        });
        
        // Evento cuando el mouse sale del contenedor
        contenedorHerramientasWrapper.addEventListener('mouseleave', function() {
            // Reanudar la animación
            contenedorHerramientas.style.animationPlayState = 'running';
        });
    }
}

/**
 * Función para agregar efectos de aparición a elementos cuando entran en el viewport
 * (Función opcional que puedes usar para animaciones adicionales)
 */
function inicializarAnimacionesScroll() {
    // Crear un observador de intersección
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            // Si el elemento está visible en el viewport
            if (entrada.isIntersecting) {
                // Agregar clase para animación
                entrada.target.classList.add('animacion-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger cuando 10% del elemento es visible
    });
    
    // Observar elementos que queremos animar
    const elementosAnimables = document.querySelectorAll('.project-card, .about-text');
    elementosAnimables.forEach(elemento => {
        observador.observe(elemento);
    });
}

/**
 * Función para manejar el menú móvil (hamburguesa)
 * (Función opcional para dispositivos móviles)
 */
function inicializarMenuMovil() {
    const botonMenu = document.querySelector('.menu-toggle');
    const menuNavegacion = document.querySelector('.nav-links');
    
    if (botonMenu && menuNavegacion) {
        botonMenu.addEventListener('click', function() {
            // Alternar la clase 'activo' en el menú
            menuNavegacion.classList.toggle('activo');
            
            // Alternar el ícono del botón (hamburguesa a X)
            this.classList.toggle('activo');
        });
    }
}

/**
 * Función para validar formularios de contacto
 * (Función opcional para formularios)
 */
function inicializarValidacionFormularios() {
    const formularios = document.querySelectorAll('form');
    
    formularios.forEach(formulario => {
        formulario.addEventListener('submit', function(evento) {
            // Prevenir envío por defecto
            evento.preventDefault();
            
            // Aquí puedes agregar tu lógica de validación
            console.log('Formulario enviado:', this);
            
            // Ejemplo de validación básica
            const campos = this.querySelectorAll('input[required], textarea[required]');
            let formularioValido = true;
            
            campos.forEach(campo => {
                if (!campo.value.trim()) {
                    formularioValido = false;
                    campo.classList.add('error');
                } else {
                    campo.classList.remove('error');
                }
            });
            
            if (formularioValido) {
                // Enviar formulario
                alert('¡Mensaje enviado con éxito!');
                this.reset();
            } else {
                alert('Por favor, completa todos los campos requeridos.');
            }
        });
    });
}

/**
 * Función para agregar efectos de parallax
 * (Función opcional para efectos visuales avanzados)
 */
function inicializarParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const elementosParallax = document.querySelectorAll('.parallax');
        
        elementosParallax.forEach(elemento => {
            const velocidad = elemento.dataset.velocidad || 0.5;
            const yPos = -(scrolled * velocidad);
            elemento.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Exportar funciones para uso externo (opcional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        inicializarNavegacionSuave,
        inicializarEfectosScroll,
        inicializarEfectosHerramientas,
        inicializarAnimacionesScroll,
        inicializarMenuMovil,
        inicializarValidacionFormularios,
        inicializarParallax
    };
}

// Función para activar animaciones al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right, .animate-scale');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Función para suavizar el scroll de navegación
function smoothScroll() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Función para agregar efectos de parallax sutil
function parallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-section, .about-section, .projects-section');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Función para animar contadores (si los agregas en el futuro)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 segundos
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Función para agregar efectos de hover mejorados
function enhancedHoverEffects() {
    // Efecto de partículas en las tarjetas de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efecto de brillo en los botones
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 25px var(--turquesa)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 2px 8px rgba(47,255,215,0.08)';
        });
    });
}

// Función para agregar animación de typing al título principal
function typingAnimation() {
    const title = document.querySelector('.hero-text h1');
    if (title) {
        title.classList.add('typing-animation');
    }
}

// Función para agregar animación de flotación a elementos
function addFloatAnimation() {
    const elements = document.querySelectorAll('.photo-border, .social-links a');
    elements.forEach(element => {
        element.classList.add('float-animation');
    });
}

// Función para agregar animación de pulso a elementos importantes
function addPulseAnimation() {
    const elements = document.querySelectorAll('.btn-primary, .logo');
    elements.forEach(element => {
        element.classList.add('pulse-animation');
    });
}

// Función para mejorar la experiencia de carga
function loadingExperience() {
    // Ocultar el contenido hasta que se cargue
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });
}

// Función para agregar efectos de sonido (opcional, solo visual)
function addSoundEffects() {
    const interactiveElements = document.querySelectorAll('.btn, .nav-links a, .project-links a, .social-links a');
    
    interactiveElements.forEach(element => {
        element.addEventListener('click', function() {
            // Efecto visual de "click"
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Función para agregar animación de scroll progress
function scrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--turquesa), #1ad1b0);
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Función para agregar animación de entrada a las secciones
function sectionEntranceAnimation() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s ease-out';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200); // Delay escalonado
                }
            });
        }, {
            threshold: 0.1
        });
        
        observer.observe(section);
    });
}

// Función para agregar efectos de partículas en el fondo (opcional)
function addParticleEffect() {
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    document.body.appendChild(particleContainer);
    
    // Crear partículas
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--turquesa);
            border-radius: 50%;
            opacity: 0.3;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        particleContainer.appendChild(particle);
    }
}

// Función principal que inicializa todas las animaciones
function initAnimations() {
    // Esperar a que el DOM esté completamente cargado
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimations);
        return;
    }
    
    // Inicializar todas las funciones de animación
    animateOnScroll();
    smoothScroll();
    enhancedHoverEffects();
    typingAnimation();
    addFloatAnimation();
    addPulseAnimation();
    loadingExperience();
    addSoundEffects();
    scrollProgress();
    sectionEntranceAnimation();
    
    // Comentar la siguiente línea si no quieres el efecto de partículas
    // addParticleEffect();
    
    // Comentar la siguiente línea si no quieres el efecto parallax
    // parallaxEffect();
}

// Inicializar animaciones cuando se carga la página
initAnimations();

// Función para agregar clases de animación a elementos específicos
function addAnimationClasses() {
    // Agregar clases de animación a elementos existentes
    const aboutText = document.querySelector('.about-text');
    const profileImage = document.querySelector('.profile-image');
    const projectCards = document.querySelectorAll('.project-card');
    const contactContent = document.querySelector('.contact-content');
    
    if (aboutText) aboutText.classList.add('animate-left');
    if (profileImage) profileImage.classList.add('animate-right');
    if (contactContent) contactContent.classList.add('animate-scale');
    
    projectCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.style.animationDelay = `${index * 0.2}s`;
    });
}

// Ejecutar después de que se cargue todo
window.addEventListener('load', addAnimationClasses);

// Función para agregar efecto de cursor personalizado (opcional)
function customCursor() {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: var(--turquesa);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10001;
        opacity: 0.7;
        transition: transform 0.1s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Efecto al hacer hover en elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .tool-item');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
        });
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// Descomentar la siguiente línea si quieres el cursor personalizado
// customCursor();
