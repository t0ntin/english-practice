import { makeElement } from "../components/createElements.js"
import { sentences, saveToLocalStorage } from "../sections/translations.js";
import { errors } from "./errors.js";

// =============
// TO DO 
// ============
// ADD QUESTIONS TO PRACTICE SENTENCES 
//  - use of 'the' (next year, last year)
// - in the same apartment that I live now.
// SET EXPRESSIONS:
//  -We are in the work. We are in the home.
// Pronunciation:
//  - -ed sound
//  - -es sound
//  - an especial
// make it so the buttons on the aside change color when they are pressed.
// =============


const mainSection = document.querySelector('.main-section');
const mainSection2 = document.querySelector('.main-section-2');


export function linkToCommonErrors() {
  const commonErrorsLink = document.querySelector('.common-errors-link');
  commonErrorsLink.addEventListener('click', (event) => {
      event.preventDefault();     
      renderErrorsPage();             
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

      const liEl2 = makeElement('li', 'pronunciation-li', ulEl); 
      const pronunciationButton = makeElement('button', 'pronunciation-button', liEl2, 'Pronunciation');
      const liEl3 = makeElement('li', 'word-order-li', ulEl); 
      const wordOrderButton = makeElement('button', 'word-order-button', liEl3, 'Word order');
     
  const contentSection = makeElement('section', 'content-section', mainSection2);

}


// Topics:
const suggestions = errors[0];
const advice = errors[1];
const conjugation = errors[2];
const objectPlusInf = errors[3];
const toHave = errors[4];


const renderTopic = (topicObj) => {
  const contentSection = document.querySelector('.content-section');
  contentSection.innerHTML = '';
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
      
      makeElement('button', 'add-to-practice-button', practiceLi, 'Add to practice', () => handleAddToPractice(practiceSentence));
    });

}

const handleSuggestClick = () => {
  renderTopic(suggestions);
}

const handleAdviceClick = () => {
  renderTopic(advice);
}

const handleConjugationClick = () => {
  renderTopic(conjugation);
}

const handleObjectPlusInfClick = () => {
  renderTopic(objectPlusInf);
}

const handleToHaveClick = () => {
  renderTopic(toHave);
}



const handleAddToPractice = (practiceSentence) => {
   const newSentenceObj = {sentence: practiceSentence.english, translation: practiceSentence.spanish, isArchived: false};
   sentences.push(newSentenceObj);
  saveToLocalStorage();
  
}