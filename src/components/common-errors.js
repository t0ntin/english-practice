import { makeElement } from "../components/createElements.js"
import { sentences, saveToLocalStorage } from "../sections/translations.js";
import { flags, suggestions, advice, conjugation, objectPlusInf, toHave, modals } from "./errors.js";

// =============
// TO DO 
// ============
// ADD QUESTIONS TO PRACTICE SENTENCES 
//  - use of 'the' (next year, last year)
// - in the same apartment that I live now.
// - modals with 'to'
// SET EXPRESSIONS:
//  -We are in the work. We are in the home.
// Pronunciation:
//  - -ed sound
//  - -es sound
//  - an especial
// =======================

// =============


const mainSection = document.querySelector('.main-section');
const mainSection2 = document.querySelector('.main-section-2');

export function linkToCommonErrors() {
  const commonErrorsLink = document.querySelector('.common-errors-link');
  commonErrorsLink.addEventListener('click', (event) => {
      event.preventDefault();     
      renderErrorsPage();    
      if (flags.lastSelectedTopic !== null) {
        const topic = flags.lastSelectedTopic;
        renderTopic(topic)
      } else {
        renderTopic(suggestions);         
      }
    });
}


const renderErrorsPage = () => {
  mainSection.innerHTML = '';
  mainSection2.innerHTML = '';
  const asideEl = makeElement('aside', 'aside', mainSection2);
    const asideNavEl = makeElement('nav', 'aside-nav', asideEl);
    const commonErrorsH2 = makeElement('h2', 'error-types-h2', asideNavEl, 'Error Types:');
    const ulEl = makeElement('ul', 'ul-element', asideNavEl);
      const liEl = makeElement('li', 'grammar-li', ulEl); 
      const grammarButton = makeElement('button', 'grammar-button', liEl, 'Grammar');
        const ulEl2 = makeElement('ul', 'grammar-ul', liEl);

        const subLiEl = makeElement('li', 'suggest-recommend-li', ulEl2);
          const suggestButton = makeElement('button', 'suggestions-button', subLiEl, 'Suggestions', handleSuggestClick);
          
        const subLiEl2 = makeElement('li', 'advice-li', ulEl2);
          const adviceButton = makeElement('button', 'advice-button', subLiEl2, 'Advice', handleAdviceClick);

        const subLiEl3 = makeElement('li', 'conjugation-li', ulEl2);
          const conjugationButton = makeElement('button', 'conjugation-button', subLiEl3, 'Conjugation', handleConjugationClick);

        const subLiEl4 = makeElement('li', 'objectplusinf-li', ulEl2);
          const objectPlusInfButton = makeElement('button', 'objectplusinf-button', subLiEl4, 'Object + inf.', handleObjectPlusInfClick);

        const subLiEl5 = makeElement('li', 'objectplusinf-li', ulEl2);
          const toHaveButton = makeElement('button', 'to-have-button', subLiEl5, 'To have', handleToHaveClick);

        const subLiEl6 = makeElement('li', 'modals-li', ulEl2);
          const modalsButton = makeElement('button', 'modals-button', subLiEl6, 'Modals', handleModalsClick);

      const liEl2 = makeElement('li', 'pronunciation-li', ulEl); 
      const pronunciationButton = makeElement('button', 'pronunciation-button', liEl2, 'Pronunciation');
      const liEl3 = makeElement('li', 'word-order-li', ulEl); 
      const wordOrderButton = makeElement('button', 'word-order-button', liEl3, 'Word order');
     
  const contentSection = makeElement('section', 'content-section', mainSection2);
}


const renderTopic = (topicObj) => {
  const contentSection = document.querySelector('.content-section');
  contentSection.innerHTML = '';
  transitionContent(contentSection);

  const titleEl = makeElement('h2', 'title', contentSection, topicObj.title);
  
  const incorrectEl = makeElement('div', 'incorrect-div', contentSection);
    const incorrectTitle = makeElement('h3', 'incorrect-title', incorrectEl, 'Incorrect');
    topicObj.incorrect.forEach(item =>  {
      const incorrectSentenceEl = makeElement('p', 'incorrect-sentence', incorrectEl, item);
      makeElement('span', 'incorrect-x', incorrectSentenceEl, '❌');

    });

  const correctEl = makeElement('div', 'correct-div', contentSection);
    const correctTitle = makeElement('h3', 'correct-title', correctEl, 'Correct');
    topicObj.correct.forEach(sentence =>  {
     const correctsentenceEl = makeElement('p', 'correct-sentence', correctEl, sentence);
      makeElement('span', 'correct-check-mark', correctsentenceEl, '☑️');
    });
  
    if (topicObj.note) {
      const noteEl1 = makeElement('span', 'note-element-1', correctEl, 'Note:');
      const noteEl2 = makeElement('span', 'note-element-2', correctEl, `${topicObj.note}`);
    }

  const practiceEl = makeElement('div', 'practice-div', contentSection);
    const practiceTitleEl = makeElement('h3', 'practice-title-h3', practiceEl, 'Practice');
    const practiceUl = makeElement('ul', 'practice-ul', practiceEl);
    topicObj.practice.forEach(practiceSentence => {
      const practiceLi = makeElement('li', 'practice-sentence-li', practiceUl);
      const bulletEl = makeElement('span', 'practice-bullet', practiceLi, '◉');
      makeElement('div', 'practice-sentence-div', practiceLi, practiceSentence.english);
      
      makeElement('button', 'add-to-practice-button', practiceLi, 'Add to practice', () => handleAddToPracticeClick(practiceSentence));
    });

}

const handleSuggestClick = (event) => {
  renderTopic(suggestions);
  changeColor(event);
  flags.lastSelectedTopic = suggestions;
  flags.lastSelectedElement = event.target;

}

const handleAdviceClick = (event) => {
  renderTopic(advice);
  changeColor(event);
  flags.lastSelectedTopic = advice;
  flags.lastSelectedElement = event.target;
}

const handleConjugationClick = (event) => {
  renderTopic(conjugation);
  changeColor(event);
  flags.lastSelectedTopic = conjugation;
  flags.lastSelectedElement = event.target;
}

const handleObjectPlusInfClick = (event) => {
  renderTopic(objectPlusInf);
  changeColor(event);
  flags.lastSelectedTopic = objectPlusInf;
  flags.lastSelectedElement = event.target;
}

const handleToHaveClick = (event) => {
  renderTopic(toHave);
  changeColor(event);
  flags.lastSelectedTopic = toHave;
  flags.lastSelectedElement = event.target;
}

const handleModalsClick = (event) => {
  renderTopic(modals);
  changeColor(event);
  flags.lastSelectedTopic = modals;
  flags.lastSelectedElement = event.target;
}

const changeColor = (event) => {
  if (flags.lastSelectedElement) {
    flags.lastSelectedElement.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

const handleAddToPracticeClick = (practiceSentence) => {
  const newSentenceObj = {sentence: practiceSentence.english, translation: practiceSentence.spanish, isArchived: false};
  sentences.push(newSentenceObj);
  saveToLocalStorage();
  showNotification();
}

const showNotification = () => {
  const popUpEl = makeElement('div', 'popup-div', mainSection2);
  popUpEl.innerText = "Sentence added."
  popUpEl.classList.toggle('active')
  setTimeout(() => {
    popUpEl.classList.toggle('active');
  }, 2000);
}

const transitionContent = (contentSection) => {
  contentSection.classList.add('scale-down');
  contentSection.classList.remove('scale-up');
  setTimeout(() => {
    contentSection.classList.add('scale-up');
    contentSection.classList.remove('scale-down');
  }, 200);
}