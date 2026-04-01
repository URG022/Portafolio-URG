# 🚀 Portafolio de Ulises Rivera Guillén

**Desarrollador de Software | Backend & Frontend | El Salvador**

Un portafolio digital moderno y profesional que presenta mis proyectos, habilidades y experiencia en desarrollo de software.

---

## 📋 Tabla de Contenidos

- [Características](#características)
- [Demostración](#demostración)
- [Stack Tecnológico](#stack-tecnológico)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contacto](#contacto)

---

## ✨ Características

✅ **Diseño Responsivo** - Adaptado para dispositivos móviles, tablets y desktop  
✅ **Animaciones Fluidas** - Transiciones suaves al hacer scroll  
✅ **Menú Móvil Dinámico** - Navegación hamburgesa con animación  
✅ **Formulario de Contacto** - Integración con EmailJS para envío de correos  
✅ **Tema Oscuro Editorial** - Estética moderna y professional  
✅ **Buscador de Habilidades** - Carrusel interactivo de tecnologías  
✅ **Galería de Proyectos** - Showcase de trabajos realizados  
✅ **SEO Optimizado** - Metadatos y estructura semántica  

---

## 🎨 Demostración

**Secciones principales:**

- **Hero Section** - Presentación con foto y estadísticas
- **Sobre Mí** - Background profesional y habilidades blandas
- **Tecnologías & Herramientas** - Carrousel de lenguajes, frameworks y tools
- **Proyectos** - Descripción de trabajos destacados
- **Contacto** - Formulario funcional de comunicación

---

## 🛠️ Stack Tecnológico

### Frontend
```
HTML5          - Estructura semántica
CSS3           - Estilos avanzados + Custom Properties
JavaScript     - Interactividad y animaciones
Font Awesome   - Iconografía
Google Fonts   - Tipografía (Syne + DM Sans)
```

### Backend del Formulario
```
EmailJS        - Servicio de envío de correos
```

### Herramientas de Desarrollo
- VS Code
- Git & GitHub
- Browser DevTools

---

## 📦 Instalación

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para CDNs)

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/URG022/Portafolio-URG.git
cd Portafolio-URG
```

2. **Abrir en el navegador**
```bash
# Opción 1: Abrir directamente
open index.html

# Opción 2: Usar Live Server (VS Code)
# Instalar extensión "Live Server"
# Click derecho en index.html → "Open with Live Server"
```

3. **Opcional: Usar un servidor local**
```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js (http-server)
npx http-server
```

---

## 🚀 Uso

### Estructura de Archivos
```
Portafolio-URG/
├── index.html          # Archivo principal HTML
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript
├── img/                # Carpeta de imágenes
│   └── URG2.jpg       # Foto de perfil
└── README.md          # Este archivo
```

### Modificar Contenido

#### **1. Cambiar Información Personal**
En `index.html`, busca estas secciones:

```html
<!-- Hero Section -->
<h1>Ulises Rivera<br><span>Guillén</span></h1>

<!-- About Section -->
<p>Soy estudiante de Ingeniería...</p>

<!-- Contact Info -->
<span>ulisesriveraguillen519@gmail.com</span>
```

#### **2. Agregar/Modificar Proyectos**
En la sección de `#projects`:
```html
<div class="project-card">
    <div class="project-image">
        <img src="./img/proyecto.jpg" alt="Nombre">
    </div>
    <div class="project-info">
        <h3>Nombre del Proyecto</h3>
        <p>Descripción...</p>
        <!-- Agregar más detalles -->
    </div>
</div>
```

#### **3. Actualizar Tecnologías**
En la sección `#tools`, duplica bloques de `skill-card`:
```html
<div class="skill-card" data-tip="Tu Tech">
    <div class="skill-card-inner">
        <!-- SVG del logo -->
        <span class="skill-name">Nombre</span>
        <span class="skill-level">Nivel</span>
    </div>
</div>
```

#### **4. Configurar Formulario de Contacto**
Por defecto usa un email simulado. Para recibir correos reales:

**Opción A: Usar Formspree**
```javascript
// En script.js, cambia la acción del formulario
<form action="https://formspree.io/f/TU_ID" method="POST">
```

**Opción B: Usar EmailJS**
```javascript
// Crea cuenta en emailjs.com
// Obtén: Service ID, Template ID, Public Key
emailjs.init('TU_PUBLIC_KEY');
emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', {
    from_name: nombre,
    from_email: email,
    message: mensaje
});
```

---

## 🎯 Características Técnicas

### JavaScript Incluido

**Header Scroll Detection**
```javascript
// Cambia estilo cuando scroll > 40px
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
});
```

**Menú Móvil Toggle**
```javascript
// Abre/cierra menú en dispositivos móviles
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
```

**Animación al Scroll (Intersection Observer)**
```javascript
// Elementos aparecen con animación cuando entran en vista
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});
```

**Formulario Dinámico**
```javascript
// Validación y feedback visual del formulario
contactForm.addEventListener('submit', async (e) => {
    // Envío y manejo de respuesta
});
```

### CSS Avanzado

- **CSS Variables** - Tema personalizable
- **Flexbox & Grid** - Layouts modernos
- **Media Queries** - Responsive design
- **Transiciones y Animaciones** - Efectos visuales suaves
- **Backdrop Filter** - Efectos de vidrio (glassmorphism)

---

## 📱 Responsive Design

| Dispositivo | Breakpoint | Comportamiento |
|-----------|-----------|---------------|
| Mobile | < 768px | Menú hamburguesa, stack vertical |
| Tablet | 768px - 1024px | Layout intermedio |
| Desktop | > 1024px | Navegación completa, grid |

---

## 🔗 Enlaces Útiles

- **GitHub:** https://github.com/URG022
- **LinkedIn:** https://www.linkedin.com/in/ulises-guillen-11380a261
- **Email:** ulisesriveraguillen519@gmail.com
- **Teléfono:** +503 6423 1490

---

## 📚 Recursos Usados

- [Font Awesome Icons](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

---

## 📄 Licencia

Este proyecto es de uso personal. Siéntete libre de usar como referencia o inspiración.

---

## 👨‍💻 Sobre el Autor

**Ulises Rivera Guillén**

Estudiante de 4to año en Ingeniería en Desarrollo de Software (ITCA-FEPADE).

**Especialidades:**
- Backend: C#, .NET, SQL Server
- Frontend: HTML5, CSS3, JavaScript
- Full Stack: React, Java
- Herramientas: Git, Docker, Visual Studio

**Estado:** Disponible para prácticas o posición Junior

---

## 🤝 Contribuciones

Si encuentras bugs o tienes sugerencias:
1. Abre un [Issue](https://github.com/URG022/Portafolio-URG/issues)
2. Haz un Fork y Pull Request con mejoras
3. Contacta directamente por email

---

## 📝 Changelog

### v1.0.0 (Inicial)
- ✅ Estructura HTML semántica
- ✅ Diseño responsive
- ✅ Animaciones en scroll
- ✅ Formulario de contacto
- ✅ Secciones: Hero, About, Skills, Projects, Contact

---

**Última actualización:** Abril 2026

---

<div align="center">

### Hecho con ❤️ por Ulises Rivera Guillén

⭐ Si te gusta, dale una estrella en GitHub ⭐

</div>
