/*document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.surfaces-slider');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');

    const scrollAmount = 400; // Cantidad de píxeles que se moverá el slider por cada clic

    // Mover hacia la izquierda
    leftArrow.addEventListener('click', () => {
        slider.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // Mover hacia la derecha
    rightArrow.addEventListener('click', () => {
        slider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});*/

/*
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.surfaces-slider');
    const slides = slider.querySelectorAll('.surface');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');

    const slideWidth = 300; // Ancho de cada elemento
    const visibleSlides = 3; // Número de elementos visibles al mismo tiempo
    const scrollAmount = slideWidth * visibleSlides; // Desplazamiento para tres elementos
    let currentIndex = 0;
    const totalSlides = slides.length;

    // Clonar el primer y el último slide para crear el efecto de bucle
    const firstSlideClone = slides[0].cloneNode(true);
    const lastSlideClone = slides[totalSlides - 1].cloneNode(true);

    slider.appendChild(firstSlideClone);
    slider.insertBefore(lastSlideClone, slides[0]);

    // Función para mover la galería
    const moveSlider = (direction) => {
        if (direction === 'right') {
            currentIndex += visibleSlides;
            if (currentIndex >= totalSlides) {
                slider.scrollTo({ left: 0, behavior: 'auto' }); // Vuelve al principio sin animación
                currentIndex = 0;
            } else {
                slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        } else if (direction === 'left') {
            currentIndex -= visibleSlides;
            if (currentIndex < 0) {
                slider.scrollTo({ left: slideWidth * (totalSlides - visibleSlides), behavior: 'auto' }); // Salta al final
                currentIndex = totalSlides - visibleSlides;
            } else {
                slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        }
    };

    // Mover hacia la izquierda
    leftArrow.addEventListener('click', () => moveSlider('left'));

    // Mover hacia la derecha
    rightArrow.addEventListener('click', () => moveSlider('right'));
});
*/

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.surfaces-slider');
    const slides = slider.querySelectorAll('.surface');
    
    const slideWidth = 250; // Ancho de cada elemento
    const visibleSlides = 6; // Número de elementos visibles al mismo tiempo
    const scrollAmount = slideWidth * visibleSlides; // Desplazamiento para 6 elementos
    let currentIndex = 0;
    const totalSlides = slides.length;

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

    // Desplazamiento automático cada 3 segundos
    const intervalTime = 3000; // Tiempo entre desplazamientos
    setInterval(moveSlider, intervalTime);
});



