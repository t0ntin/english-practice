import { makeElement, makeInputEl } from "../components/createElements"
import { validSentences } from "../components/valid-sentences";

const mainEl = document.querySelector('.main');
let mainSection = document.querySelector('.main-section');
const subjectSectionEl = document.querySelector('.subject-section')
const verbSectionEl = document.querySelector('.verb-section')
const objectSectionEl = document.querySelector('.object-section')
const newSentenceSectionEl = document.querySelector('.new-sentence-section')
// const userInputEl = makeElement('input', 'user-subject', subjectSectionEl);
const optionButtonsCont = document.querySelector('.option-buttons-container');
const dialogBoxEl = document.querySelector('.dialog-box');
const overlayEl = document.querySelector('.overlay');

// userInputEl.setAttribute('placeholder', 'Add yours...');
let userInputValue;

const subjects = ['Mi mamá', 'Mis padres', 'El carro',  'Aprender un idioma', 'El sistema de transporte público'];

const verbs = ['tiene(n)', 'hace(n)', 'cuesta(n)', 'abre(n)', 'reduce(n)'];

const objects = ['comida en navidad', 'su tarea', 'una casa grande', 'puertas', 'congestión', 'mucho dinero'];

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
  const userInputEl = makeInputEl('input', 'user-subject', subjectSectionEl, 'Add yours...');


  userInputEl.addEventListener('input', (event) => {
  userInputValue = event.target.value;
  let subjectEl = document.querySelector('.user-defined-subject');
    if (!subjectEl) {
      subjectEl = makeElement('div', 'user-defined-subject', newSentenceSectionEl);

    }
    subjectEl.textContent = userInputValue;
  });

}

const subjectEls = document.querySelectorAll('.subject');
console.log(subjectEls.length)

function enableClick(elements) {
  elements.forEach(subject => subject.clicked = false);
}
function disableClick(event, elements) {
  if (event.target.clicked === true) return;
  elements.forEach(subject => subject.clicked = true);
}
// enableClick(subjectEls);

const verbEls = document.querySelectorAll('.verb');
const objectEls = document.querySelectorAll('.object');

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
  if (!event.target.classList.contains('subject')) return;
  if (subjectSectionEl.clicked === true) return;
  subjectSectionEl.clicked = true;
  event.target.remove();
  newSentenceSectionEl.append(event.target);

  keepCount();

});

verbSectionEl.addEventListener('click', event => {
  if (!event.target.classList.contains('verb')) return;
  if (verbSectionEl.clicked === true) return;
  verbSectionEl.clicked = true;
  event.target.remove();
  newSentenceSectionEl.append(event.target);
  keepCount();

});

objectSectionEl.addEventListener('click', event => {
  if (!event.target.classList.contains('object')) return;
  if (objectSectionEl.clicked === true) return;
  objectSectionEl.clicked = true;
  event.target.remove();
  newSentenceSectionEl.append(event.target);
  keepCount();

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
    mainSection.classList.remove('hidden');
    render();
  }
});

overlayEl.addEventListener('click', handleOverlayClick);

function keepCount() {
  let count = newSentenceSectionEl.children.length;
  if ( count === 3) {
    const resetButton = document.querySelector('.continue-button');
    if (!resetButton) {
      const continueButton = makeElement('button', 'continue-button', optionButtonsCont, 'Continue');
      continueButton.addEventListener('click', handleContinueClick)
    }
  }
  console.log(count);
}

function handleContinueClick(event) {
  if (event.target.classList.contains('continue-button')) {
    mainSection.classList.add('hidden');
    objectSectionEl.clicked = false;
  }
  const sentenceIsvalid = validateSentence();
  if (!sentenceIsvalid) {
    openDialogBox();
    dialogBoxEl.textContent = 'Invald sentence. Click reset and try again.'
  }
}

function validateSentence() {
  const sentence = [...newSentenceSectionEl.children].map(child => child.textContent).join(' ');
  console.log(sentence);
  for (const item of validSentences) {
    // console.log(item);
    if (item === sentence) {
      // console.log(item);
      // console.log('match');
      return true;
    }
  }
  const extraLetters = /\(\w\)/g;
  const result = sentence.replace(extraLetters, '');
  console.log(result);
  return false
}

function openDialogBox() {
  dialogBoxEl.classList.toggle('visible');
  overlayEl.classList.toggle('overlay-visible');

}

function handleOverlayClick(event) {
    if (dialogBoxEl.classList.contains('visible')) {
  dialogBoxEl.classList.remove('visible');
  overlayEl.classList.remove('overlay-visible');
  }
}