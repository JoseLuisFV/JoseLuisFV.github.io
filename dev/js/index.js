import { projects } from "./projects.js";

// Carousel logic

const mover = document.getElementById('CarouselViewport');
const anchoSlide = document.querySelector('.carousel__slide').clientWidth;

const buttonPrev = document.getElementById('BotonPrev');
const buttonNext = document.getElementById('BotonNext');

const toNext = () => {
  mover.scroll(mover.scrollLeft + anchoSlide, 0);
}

const toPrev = () => {
  mover.scroll(mover.scrollLeft - anchoSlide, 0);
}

buttonNext.addEventListener('click', () => {
    toNext();
});

buttonPrev.addEventListener('click', () => {
    toPrev();
})

const stackProjects = [];

projects.forEach((project, count = 2, stack = {}) => {
    console.log(project.title);
    if (count % 3 === 0) {
        console.log(`${count} / 3 no hay residuo`);
    } else {
        console.log(`${count} / 3 residuo = ${count % 3}`);
    }
})