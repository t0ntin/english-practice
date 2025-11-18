import { makeElement, makeInputEl } from "../components/createElements.js"
import { validSentences, hints } from "../components/valid-sentences.js";

const mainEl = document.querySelector('.main');
let mainSection = document.querySelector('.main-section');
const subjectSectionEl = document.querySelector('.subject-section')
const verbSectionEl = document.querySelector('.verb-section')
const objectSectionEl = document.querySelector('.object-section')
const newSentenceSectionEl = document.querySelector('.new-sentence-section')
const chosenSentEl = document.querySelector('.chosen-sentence-container')
let englishContainerEl = document.querySelector('.english-container');
const allSentenceContainer = document.querySelector('.all-sentence-container');
// const userInputEl = makeElement('input', 'user-subject', subjectSectionEl);
const optionButtonsCont = document.querySelector('.option-buttons-container');
const dialogBoxEl = document.querySelector('.dialog-box');
const overlayEl = document.querySelector('.overlay');

// userInputEl.setAttribute('placeholder', 'Add yours...');
let userInputValue;

// For draggable cover:
let isDragging = false;
let offsetX, offsetY;

const subjects = ['Mi mamá', 'Mis padres', 'El carro',  'Aprender un idioma', 'El sistema de transporte público'];

const verbs = ['tiene(n)', 'hace(n)', 'cuesta(n)', 'abre(n)', 'reduce(n)'];

const objects = ['comida en navidad', 'la tarea', 'una casa grande', 'puertas', 'la congestión', 'mucho dinero'];

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
    englishContainerEl.innerHTML = '';
  
}

const subjectEls = document.querySelectorAll('.subject');
console.log(subjectEls.length)

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

function handlePartOfSpeechClick(event, className, section, appendToEl,) {
  if (!event.target.classList.contains(className)) return;
  if (section.clicked === true) return;
  section.clicked = true;
  event.target.remove();
  appendToEl.append(event.target);
  keepCount();
}



subjectSectionEl.addEventListener('click', event => {
  handlePartOfSpeechClick(event, 'subject', subjectSectionEl, chosenSentEl)
  // keepCount();
});

verbSectionEl.addEventListener('click', event => {
  handlePartOfSpeechClick(event, 'verb', verbSectionEl, chosenSentEl)
  // keepCount();

});

objectSectionEl.addEventListener('click', event => {
  handlePartOfSpeechClick(event, 'object', objectSectionEl, chosenSentEl)
  // keepCount();
});


optionButtonsCont.addEventListener('click', handleResetClick);

function handleResetClick(event) {
  if (event.target.classList.contains('reset-button')) {
    subjectSectionEl.innerHTML = '';
    verbSectionEl.innerHTML = '';
    objectSectionEl.innerHTML = '';
    const spanishSentContainers = document.querySelectorAll('.spanish-sentence-container');
    if (spanishSentContainers) {
      spanishSentContainers.forEach(container => {
        container.remove();
      })
    }
    optionButtonsCont.innerHTML = '';
    chosenSentEl.innerHTML = '';
    subjectSectionEl.clicked = false;
    verbSectionEl.clicked = false;
    objectSectionEl.clicked = false;
    mainSection.classList.remove('hidden');
    render();
  }
}

overlayEl.addEventListener('click', handleOverlayClick);

function keepCount() {
  let count = chosenSentEl.children.length;
  if ( count === 3) {
    const resetButton = document.querySelector('.continue-button');
    if (!resetButton) {
      const continueButton = makeElement('button', 'continue-button', optionButtonsCont, 'Continue');
      continueButton.addEventListener('click', handleContinueClick)
    }
  }
  count = 0;
}

function handleContinueClick(event) {
  if (event.target.classList.contains('continue-button')) {
    event.target.classList.add('hidden');
    if (chosenSentEl.children.length === 0) return;
    mainSection.classList.add('hidden');
    objectSectionEl.clicked = false;
  }
  const [sentenceIsvalid, cleanedSentence] = validateSentence();
  // validateSentence();
  // console.log(isValid);
  if (!sentenceIsvalid) {
    openDialogBox();
    dialogBoxEl.textContent = 'Invald sentence. Click reset and try again.'
  }

  validSentences[cleanedSentence].phrases.forEach(phraseObj => {
    const spanishSentContainer = makeElement('div', 'spanish-sentence-container', newSentenceSectionEl);
    const englishSentContainer = makeElement('div', 'english-sentence-container', englishContainerEl);

    phraseObj.spanish?.forEach(chunk => {
      makeElement('span', chunk.role, spanishSentContainer, chunk.text);
    });
    phraseObj.english.forEach(chunk => {
      makeElement('span', chunk.role, englishSentContainer, chunk.text);
    })
  });

  const cover = makeElement('div', 'cover', englishContainerEl);
  cover.addEventListener('mousedown', (e) => {
    isDragging = true;
    // offsetX = e.clientX - cover.offsetLeft;
    offsetY = e.clientY - cover.offsetTop;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    e.preventDefault(); 

    // cover.style.left = (e.clientX - offsetX) + 'px';
    cover.style.top = (e.clientY - offsetY) + 'px';
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  const typeModeBtn = makeElement('button', 'type-mode-button', optionButtonsCont, 'Type it in');
  typeModeBtn.addEventListener('click', (event) =>  handleTypeModeClick(event, cleanedSentence));
}


function handleTypeModeClick(event, cleanedSentence) { 
  if (event.target.matches('.type-mode-button')) {
    englishContainerEl.innerHTML = '';
    
    validSentences[cleanedSentence].phrases.forEach((phraseObj, id) => {
      const transInputEl = makeElement('div', 'trans-input-container', englishContainerEl)
      const input = makeInputEl('input', 'english-input', transInputEl, 'Translate here');
      
      input.dataset.id = id; 
      
      input.addEventListener('input', (event) => handleTypeInInput(event, phraseObj.complete));

      const showAnswerButton = makeElement('button', 'show-answer-button', transInputEl, 'Show');
      showAnswerButton.addEventListener('click', (event) => handleShowAnswerClick(event, phraseObj))
    });
  }
  const showHintButton = makeElement('button', 'show-hint-button', optionButtonsCont, 'Show hints');
  showHintButton.addEventListener('click', handleShowHints);
}

function handleShowHints(event) {
  if (event.target.classList.contains('show-hint-button')) {
    dialogBoxEl.innerHTML = '';
    openDialogBox();
    hints.forEach(hint => {
      const hintContainer = makeElement('div', 'hint-container', dialogBoxEl);
      Object.entries(hint).forEach(([key, value]) => {
        makeElement('span', 'hint-key', hintContainer, key);
        makeElement('span', 'hint-value', hintContainer, value);

      })

    })
  }
}

function handleShowAnswerClick(event, phraseObj) {
  dialogBoxEl.innerHTML = '';
  if (event.target.matches('.show-answer-button')){
    console.log('matches');
    openDialogBox();
    dialogBoxEl.textContent = phraseObj.complete;
  }
}

function handleTypeInInput(event, complete) {
  let translationInput = event.target.value;
  const normalizedTrans = normalizeString(translationInput)
  const normalizedCorrectAnswer = normalizeString(complete)
  console.log(normalizedCorrectAnswer);
  if (normalizedTrans === normalizedCorrectAnswer) {
    event.target.style.backgroundColor = 'darkgreen';
  }
}

function normalizeString(translation) {
  if (!translation) return '';
  let normalized = translation.toLowerCase().trim();
  normalized = normalized.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"]/g, "");
  return normalized;
}

function validateSentence() {
  let isValid = false;
  const sentence = [...chosenSentEl.children].map(child => child.textContent).join(' ');
  console.log(sentence);
  const pluralTest = /Mis padres\s+[A-Za-z]+/g;
  // const sentenceIsPlural = sentence.test(pluralTest);
  const extraLetters = /\(\w\)/g;
  const cleanedSentence = sentence.replace(extraLetters, '');
  const sentenceIsPlural = pluralTest.test(cleanedSentence);
  console.log(sentenceIsPlural);
  console.log(cleanedSentence);
  const test = cleanedSentence.match(pluralTest)
  console.log(test);
  if (cleanedSentence in validSentences ) {
    console.log('it is there.');
    isValid = true;
  }
  // currentSentence = cleanedSentence;
  // console.log(currentSentence);
  // for (const item of validSentences) {
    //   // console.log(item);
    //   if (item === cleanedSentence) {
      //     console.log(item);
      //     // console.log('match');
      //     return true;
      //   }
      // }
      return [isValid, cleanedSentence];

}

function openDialogBox() {
  dialogBoxEl.classList.toggle('visible');
  overlayEl.classList.toggle('overlay-visible');

}

function handleOverlayClick() {
    if (dialogBoxEl.classList.contains('visible')) {
  dialogBoxEl.classList.remove('visible');
  overlayEl.classList.remove('overlay-visible');
  }
}