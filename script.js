const carouselContainer = document.querySelector('.carousel-container');
const carouselControlsContainer = document.querySelector('.carousel-controls');
const carouselControls = ['previous', 'next'];
const carouselItems = document.querySelectorAll('.carousel-item');
let carouselArray = [...carouselItems];

function updateCarousel() {
    carouselArray.forEach(element => {
        element.classList.remove('carousel-item-1');
        element.classList.remove('carousel-item-2');
        element.classList.remove('carousel-item-3');
        element.classList.remove('carousel-item-4');
        element.classList.remove('carousel-item-5');
    });
    carouselArray.slice(0, 5).forEach((element, i) => {
        element.classList.add(`carousel-item-${i + 1}`);
    });
}

function setCurrentState(direction) {
    if (direction.className === 'carousel-controls-previous') {
        carouselArray.unshift(carouselArray.pop());
    } else {
        carouselArray.push(carouselArray.shift());
    }
    updateCarousel();
}

function setControls() {
    carouselControls.forEach(control => {
        const button = document.createElement('button');
        button.className = `carousel-controls-${control}`;
        button.innerText = control;
        carouselControlsContainer.appendChild(button);
    });
}

function useControl() {
    const triggers = [...carouselControlsContainer.childNodes];
    triggers.forEach(element => {
        element.addEventListener('click', e => {
            e.preventDefault();
            setCurrentState(element);
        });
    });
}

function initializeCarousel() {
    setControls();
    useControl();
}

initializeCarousel();
