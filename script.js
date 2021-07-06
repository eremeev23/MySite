function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
};

let homeBtn = document.querySelector('#main-btn');
let projetcBtn = document.querySelector('#project-btn');
let contactBtn = document.querySelector('#contacts-btn');

let mainSection = document.querySelector('#main');
let projectSection = document.querySelector('#projects');
let contactsSection = document.querySelector('#contacts');

homeBtn.addEventListener('click', () => {scrollTo(mainSection)});
projetcBtn.addEventListener('click', () => {scrollTo(projectSection)});
contactBtn.addEventListener('click', () => {scrollTo(contactsSection)});
