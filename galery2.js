document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.surfaces-slider');
    const slides = slider.querySelectorAll('.surface');
    
    const slideWidth = 285; // Ancho de cada elemento
    const visibleSlides = 3; // Número de elementos visibles al mismo tiempo
    const scrollAmount = slideWidth * visibleSlides; // Desplazamiento para tres elementos
    let currentIndex = 0;
    const totalSlides = slides.length;

    // Clonar el primer y el último slide para crear el efecto de bucle
    const firstSlideClone = slides[0].cloneNode(true);
    const lastSlideClone = slides[totalSlides - 1].cloneNode(true);
    slider.appendChild(firstSlideClone);
    slider.insertBefore(lastSlideClone, slides[0]);

    // Función para mover la galería automáticamente
    const moveSlider = () => {
        currentIndex += visibleSlides;
        if (currentIndex >= totalSlides) {
            slider.scrollTo({ left: 0, behavior: 'auto' }); // Vuelve al principio sin animación
            currentIndex = 0;
        } else {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Iniciar deslizamiento automático cada 3 segundos
    const intervalTime = 3000; // Tiempo entre desplazamientos (en milisegundos)
    setInterval(moveSlider, intervalTime);
});
