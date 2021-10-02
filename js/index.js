import { projects } from "./projects.js";


let nodos = []

projects.forEach((project, count = 0) => {
    count += 1;
    console.log(count);
    const elementProject = addProject(project);
    nodos.push(elementProject);
    console.log(nodos);
    if (count % 3 == 0){
        
        console.log(count);
        const slide = addSlide(nodos);
        const viewPort = document.getElementById('CarouselViewport');
        viewPort.appendChild(slide);
        while(nodos.length){
            nodos.pop();
        }
    }
    
    
});

function addSlide(nodos) {
    const slide = document.createElement('li');
    slide.classList.add('carousel__slide');
    nodos.forEach(nodo => {
        slide.append(nodo)
    })
    console.log('Slide');
    return slide;
}

function addProject(project){
    const projectElement =  document.createElement('article');
    projectElement.classList.add('project');
    const fragmentProject = document.createDocumentFragment();

    const projectFront = document.createElement('figure');
    projectFront.classList.add('project--front')
    const img = document.createElement('img');
    img.src = project.img;
    projectFront.append(img);

    const projectBack = document.createElement('div');
    projectBack.classList.add('project--back');
    const projectBackFragment = document.createDocumentFragment();

    const title = document.createElement('h3');
    title.classList.add('project__title');
    title.textContent = project.title;
    const icons = addIcons(project.icons);
    const cas = addCallToActions(project.cas);

    projectBackFragment.append(title, icons, cas);
    projectBack.append(projectBackFragment);

    fragmentProject.append(projectFront, projectBack);
    projectElement.append(fragmentProject);

    console.log('Se hizo el projecto');
    return projectElement
}


function addIcons(icons) {
    const divIcons = document.createElement('div');
    divIcons.classList.add('project__icons');
    const fragmentIcons = document.createDocumentFragment();
    const keys = Object.keys(icons);

    keys.forEach(key => {
        const icon = document.createElement('div');
        icon.classList.add(`project__icon--${key}`);
        fragmentIcons.append(icon);
    });

    divIcons.append(fragmentIcons);
    return divIcons;
}


function addCallToActions(cas) {
    const divCas = document.createElement('div');
    divCas.classList.add('project__ca');
    const fragmentCas = document.createDocumentFragment();
    const keys = Object.keys(cas);

    keys.forEach(key => {
        const a = document.createElement('a');
        a.textContent = `Go to ${key}`
        a.target = '_blank';
        a.href = cas[key];
        fragmentCas.append(a);
    });

    divCas.append(fragmentCas);
    return divCas;
}

const mover = document.getElementById('CarouselViewport');
const carousel = document.querySelector('.carousel__slide');

const buttonPrev = document.getElementById('BotonPrev');
const buttonNext = document.getElementById('BotonNext');

const toNext = () => {
    const anchoSlide = carousel.clientWidth;
    mover.scroll(mover.scrollLeft + anchoSlide, 0);
}

const toPrev = () => {
    const anchoSlide = carousel.clientWidth
    mover.scroll(mover.scrollLeft - anchoSlide, 0);
}

buttonNext.addEventListener('click', () => {
    toNext();
});

buttonPrev.addEventListener('click', () => {
    toPrev();
})
