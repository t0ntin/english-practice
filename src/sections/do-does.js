import { makeElement } from "../components/createElements"

const mainEl = document.querySelector('.main');
let mainSection = document.querySelector('.main-section');
const subjectSectionEl = document.querySelector('.subject-section')
const verbSectionEl = document.querySelector('.verb-section')
const objectSectionEl = document.querySelector('.object-section')
const newSentenceSectionEl = document.querySelector('.new-sentence-section')
const userInputEl = makeElement('input', 'user-subject', subjectSectionEl);
const optionButtonsCont = document.querySelector('.option-buttons-container');

userInputEl.setAttribute('placeholder', 'Add yours...');
let userInputValue;

const subjects = ['Mi mamá', 'Mis padres', 'El carro',  'Aprender un idioma', 'El sistema de transporte público'];

const verbs = ['tiene(n)', 'hace(n)', 'cuesta(n)', 'abre(n)', 'reduce(n)'];

const objects = ['un vestido blanco', 'comida en navidad', 'su tarea', 'una casa grande', 'puertas', 'congestión'];

export function render() {
  subjects.forEach(subject  => {
    makeElement('div', 'subject', subjectSectionEl, subject)});
  verbs.forEach(verb  => {
    makeElement('div', 'verb', verbSectionEl, verb)});
  objects.forEach(object  => {
    makeElement('div', 'object', objectSectionEl, object)});
    const resetButton = document.querySelector('.reset-button');
    if (!resetButton) {
      const resetButton = makeElement('button', 'reset-button', optionButtonsCont, 'Reset');
    }
}

const subjectEls = document.querySelectorAll('.subject');
const verbEls = document.querySelectorAll('.verb');
const objectEls = document.querySelectorAll('.object');
userInputEl.addEventListener('input', (event) => {
  userInputValue = event.target.value;
  const subjectEl = document.querySelector('.user-defined-subject');
  if (!subjectEl) {
    subjectEl = makeElement('div', 'user-defined-subject', newSentenceSectionEl);

  }
  subjectEl.textContent = userInputValue;
});

subjectEls.forEach((subject, index) => {
  subject.dataset.id = index;
});

verbEls.forEach((verb, index) => {
  verb.dataset.id = index;
});

objectEls.forEach((object, index) => {
  object.dataset.id = index;
});

subjectSectionEl.addEventListener('click', event => {
  if (subjectSectionEl.clicked) return;
    subjectSectionEl.clicked = true;
  if (event.target.classList.contains('subject')) {
    event.target.remove();
    newSentenceSectionEl.append(event.target);
  }
});

verbSectionEl.addEventListener('click', event => {
    if (verbSectionEl.clicked) return;
    verbSectionEl.clicked = true;
  if (event.target.classList.contains('verb')) {
    event.target.remove();
    newSentenceSectionEl.append(event.target) 
  }
});

objectSectionEl.addEventListener('click', event => {
      if (objectSectionEl.clicked) return;
    objectSectionEl.clicked = true;
  if (event.target.classList.contains('object')) {
    event.target.remove();
    newSentenceSectionEl.append(event.target)
  }
});

optionButtonsCont.addEventListener('click', event => {
  if (event.target.classList.contains('reset-button')) {
    subjectSectionEl.innerHTML = '';
    verbSectionEl.innerHTML = '';
    objectSectionEl.innerHTML = '';
    newSentenceSectionEl.innerHTML = '';
    subjectSectionEl.clicked = false;
    verbSectionEl.clicked = false;
    objectSectionEl.clicked = false;
    render();
  }
});