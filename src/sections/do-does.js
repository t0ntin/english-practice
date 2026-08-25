import { makeElement, makeInputEl, toggleLinkStyles } from "../components/reusableUI.js"
import { validSentences, hints } from "../components/data/do-does-data.js";
import { flags } from "../components/data/grammar-data.js";

const mainEl = document.querySelector('.main');

const mainSection = document.querySelector('.main-section');
const mainSection2 = document.querySelector('.main-section-2');

const dialogBoxEl = makeElement('div', 'dialog-box', mainEl)
const overlayEl = makeElement('div', 'overlay', mainEl)

// For draggable cover:
let isDragging = false;
let offsetX, offsetY;

const subjects = ['Mi mamá', 'Mis padres', 'El carro',  'Aprender un idioma', 'El sistema de transporte público'];

const verbs = ['tiene(n)', 'hace(n)', 'cuesta(n)', 'abre(n)', 'reduce(n)'];

const objects = ['la tarea', 'comida en navidad',  'una casa grande', 'puertas', 'la congestión', 'mucho dinero'];

export function renderDoDoes() {
  const contentSection = document.querySelector('.content-section');
  contentSection.innerHTML = '';
  flags.currentSection = "Common Errors"
  toggleLinkStyles();
  const sectionOne = makeElement('div', 'section-one', contentSection);
  const subjectSectionEl = makeElement('div', 'subject-section', sectionOne)
  const verbSectionEl = makeElement('div', 'verb-section', sectionOne)
  const objectSectionEl = makeElement('div', 'object-section', sectionOne)

  const allSentenceContainer = makeElement('section', 'all-sentence-container', contentSection)

  const chosenSentEl = makeElement('div', 'chosen-sentence-container', contentSection)

  const optionButtonsCont = makeElement('div', 'option-buttons-container', contentSection)

  const resetButton = makeElement('button', 'reset-button', optionButtonsCont, 'Reset');

  const typeModeBtn = makeElement('button', 'type-mode-button', optionButtonsCont, 'Type it in')
  typeModeBtn.disabled = true;

  const coverAnswersButton = makeElement('button', 'cover-answers-button', optionButtonsCont, 'Cover answers')
  coverAnswersButton.disabled = true;
  coverAnswersButton.addEventListener('click', handleCoverAnsClick);

  const showHintsButton = makeElement('button', 'show-hints-button', optionButtonsCont, 'Show hints')
  showHintsButton.disabled = true;
  
  subjects.forEach(subject  => {
    makeElement('div', 'subject', subjectSectionEl, subject)});
  verbs.forEach(verb  => {
    makeElement('div', 'verb', verbSectionEl, verb)});
  objects.forEach(object  => {
    makeElement('div', 'object', objectSectionEl, object)});

  optionButtonsCont.addEventListener('click', handleResetClick);

  showHintsButton.addEventListener('click', handleShowHints);

  addMainSectionEventListeners(subjectSectionEl, verbSectionEl, objectSectionEl, chosenSentEl);
}

const subjectEls = document.querySelectorAll('.subject');

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


function addMainSectionEventListeners(subjectSectionEl, verbSectionEl, objectSectionEl, chosenSentEl) {

  subjectSectionEl.addEventListener('click', event => {
    handlePartOfSpeechClick(event, 'subject', subjectSectionEl, chosenSentEl)
  });
  
  verbSectionEl.addEventListener('click', event => {
    handlePartOfSpeechClick(event, 'verb', verbSectionEl, chosenSentEl)
  
  });
  
  objectSectionEl.addEventListener('click', event => {
    handlePartOfSpeechClick(event, 'object', objectSectionEl, chosenSentEl)
  });
}

function handleResetClick(event) {
  if (event.target.classList.contains('reset-button')) {
    renderDoDoes();
  }
}

function keepCount() {
  const chosenSentEl = document.querySelector('.chosen-sentence-container')
  let count = chosenSentEl.children.length;
  if ( count === 3) {
    setTimeout(() => {
      pickSentence()
    }, 800);
  }
  count = 0;
}

function pickSentence() {
  const sectionOne = document.querySelector('.section-one')
  const chosenSentEl = document.querySelector('.chosen-sentence-container')
  sectionOne.classList.add('hidden');
  chosenSentEl.classList.add('hidden');
  const objectSectionEl = document.querySelector('.object-section');
  objectSectionEl.clicked = false;
  const [sentenceIsvalid, cleanedSentence] = validateSentence();

  if (!sentenceIsvalid) {
    openDialogBox();
    dialogBoxEl.textContent = 'Invald sentence. Click reset and try again.'
    return;
  }

  renderAllSentences(cleanedSentence);

  const englishSentContainer = document.querySelector('.english-sentence-container');
  const cover = makeElement('div', 'cover', englishSentContainer);
  cover.addEventListener('pointerdown', (e) => {
    isDragging = true;
    offsetY = e.clientY - cover.offsetTop;
  });

  document.addEventListener('pointermove', (e) => {
    if (!isDragging) return;

    e.preventDefault(); 

    cover.style.top = (e.clientY - offsetY) + 'px';
  });

  document.addEventListener('pointerup', () => {
    isDragging = false;
  });
  const typeModeBtn = document.querySelector('.type-mode-button');
  typeModeBtn.addEventListener('click', (event) =>  handleTypeModeClick(event, cleanedSentence));
    typeModeBtn.disabled = false;
}

const renderAllSentences = (cleanedSentence) => {
  const allSentenceContainer = document.querySelector('.all-sentence-container');
  allSentenceContainer.innerHTML = '';
  validSentences[cleanedSentence].phrases.forEach(phraseObj => {
    const dualSentenceContainer = makeElement('div', 'dual-sentence-caontainer', allSentenceContainer )
    const spanishSentContainer = makeElement('div', 'spanish-sentence-container', dualSentenceContainer);
    const englishSentContainer = makeElement('div', 'english-sentence-container', dualSentenceContainer);
    phraseObj.spanish?.forEach(chunk => {
      makeElement('span', chunk.role, spanishSentContainer, chunk.text);
    });
    phraseObj.english.forEach(chunk => {
      makeElement('span', chunk.role, englishSentContainer, chunk.text);
    })
  });
}

const renderSpanishSentencesAndInputEls = (cleanedSentence) => {
  const allSentenceContainer = document.querySelector('.all-sentence-container');
  allSentenceContainer.innerHTML = '';
  
  validSentences[cleanedSentence].phrases.forEach((phraseObj, id) => {
    const dualSentenceContainer = makeElement('div', 'dual-sentence-caontainer', allSentenceContainer )
    const spanishSentContainer = makeElement('div', 'spanish-sentence-container', dualSentenceContainer);
    const englishSentContainer = makeElement('div', 'english-sentence-container', dualSentenceContainer);
    
    phraseObj.spanish?.forEach(chunk => {
      makeElement('span', chunk.role, spanishSentContainer, chunk.text);
    });

    const input = makeInputEl('english-input', englishSentContainer, 'Translate here');
    
    input.dataset.id = id; 
    
    input.addEventListener('input', (event) => handleTypeInInput(event, phraseObj.complete));

    const showAnswerButton = makeElement('button', 'show-answer-button', englishSentContainer, 'Show');
    showAnswerButton.addEventListener('click', (event) => handleShowAnswerClick(event, phraseObj))
  });
  
}

function handleTypeModeClick(event, cleanedSentence) { 
  if (event.target.matches('.type-mode-button')) {
    renderSpanishSentencesAndInputEls(cleanedSentence);
  }
  const coverAnswersButton = document.querySelector('.cover-answers-button');
  const showHintsButton = document.querySelector('.show-hints-button');
  
  coverAnswersButton.disabled = false;
  showHintsButton.disabled = false; 
  event.target.disabled = true;
}

function handleCoverAnsClick(event) {
  if (event.target.matches('.cover-answers-button')){ 
    pickSentence();
  }
  event.target.disabled = false;
}

function handleShowHints(event) {
  console.log('testing');
  if (event.target.matches('.show-hints-button')) {
  console.log('testing2');

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
  const chosenSentEl = document.querySelector('.chosen-sentence-container')
  const sentence = [...chosenSentEl.children].map(child => child.textContent).join(' ');
  // console.log(sentence);
  const pluralTest = /Mis padres\s+[A-Za-z]+/g;
  // const sentenceIsPlural = sentence.test(pluralTest);
  const extraLetters = /\(\w\)/g;
  const cleanedSentence = sentence.replace(extraLetters, '');
  const sentenceIsPlural = pluralTest.test(cleanedSentence);
  // console.log(sentenceIsPlural);
  // console.log(cleanedSentence);
  const test = cleanedSentence.match(pluralTest)
  // console.log(test);
  if (cleanedSentence in validSentences ) {
    // console.log('it is there.');
    isValid = true;
  }

      return [isValid, cleanedSentence];
}

function openDialogBox() {
  dialogBoxEl.classList.toggle('visible');
  overlayEl.classList.toggle('overlay-visible');
}

overlayEl.addEventListener('click', handleOverlayClick);

function handleOverlayClick() {
    if (dialogBoxEl.classList.contains('visible')) {
  dialogBoxEl.classList.remove('visible');
  overlayEl.classList.remove('overlay-visible');
  }
}