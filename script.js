document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MANEJO INTELIGENTE DE PREGUNTAS (FAQ)
    // Esto hace que solo haya una pregunta abierta a la vez
    const detalles = document.querySelectorAll('details');
    
    detalles.forEach((item) => {
        item.addEventListener('click', () => {
            detalles.forEach((el) => {
                if (el !== item) {
                    el.removeAttribute('open');
                }
            });
        });
    });

    // 2. EFECTO REVELAR AL BAJAR (SCROLL REVEAL)
    // Hace que las secciones y las líneas rojas aparezcan con elegancia
    const secciones = document.querySelectorAll('section, .linea-roja, .gallery-item');
    
    const mostrarSeccion = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    };

    const observer = new IntersectionObserver(mostrarSeccion, {
        root: null,
        threshold: 0.1 // Se activa cuando se ve el 10% de la sección
    });

    secciones.forEach(sec => {
        // Estilo inicial antes de aparecer
        sec.style.opacity = "0";
        sec.style.transform = "translateY(30px)";
        sec.style.transition = "all 0.8s ease-out";
        observer.observe(sec);
    });

    // 3. PROTECCIÓN BÁSICA DE IMÁGENES
    // Evita el menú contextual (click derecho) en las fotos del portafolio
    const imagenesPortafolio = document.querySelectorAll('.gallery-item img');
    imagenesPortafolio.forEach(img => {
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    });

    console.log("🔥 Edwin Sánchez Art: Sistema de portafolio activo.");
});
