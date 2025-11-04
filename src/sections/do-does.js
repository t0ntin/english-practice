import { makeElement } from "../components/createElements"

const subjectSectionEl = document.querySelector('.subject-section')
const verbSectionEl = document.querySelector('.verb-section')
const objectSectionEl = document.querySelector('.object-section')
const newSentenceSectionEl = document.querySelector('.new-sentence-section')
const userInputEl = makeElement('input', 'user-subject', subjectSectionEl);

userInputEl.setAttribute('placeholder', 'Add yours...');
let userInputValue;

const subjects = ['Mi mamá', 'Mis padres', 'El carro',  'Aprender un idioma', 'El sistema de transporte público',];

const verbs = ['tiene(n)', 'hace(n)', 'cuesta(n)', 'abre(n)', 'reduce(n)'];

const objects = ['un vestido blanco', 'comida en navidad', 'su tarea', 'una casa grande', 'puertas', 'congestión'];

export function render() {
  subjects.forEach(subject  => {makeElement('div', 'subject', subjectSectionEl, subject)});
  verbs.forEach(verb  => {makeElement('div', 'verb', verbSectionEl, verb)});
  objects.forEach(object  => {makeElement('div', 'object', objectSectionEl, object)});
}

const subjectEls = document.querySelectorAll('.subject');
const verbEls = document.querySelectorAll('.verb');
const objectEls = document.querySelectorAll('.object');
userInputEl.addEventListener('input', (event) => {
  userInputValue = event.target.value;
  console.log(userInputValue);
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
  if (event.target.classList.contains('subject')) {
    event.target.remove();
    newSentenceSectionEl.append(event.target)
  }
});

verbSectionEl.addEventListener('click', event => {
  if (event.target.classList.contains('verb')) {
    event.target.remove();
    newSentenceSectionEl.append(event.target) 
  }
});

objectSectionEl.addEventListener('click', event => {
  if (event.target.classList.contains('object')) {
    event.target.remove();
    newSentenceSectionEl.append(event.target)
  }
});

