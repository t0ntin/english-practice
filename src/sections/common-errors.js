import { makeElement, showNotification, transitionContent, toggleLinkStyles } from "../components/reusableUI.js"
import { sentences, saveToLocalStorage } from "./practice.js";
import { flags, suggestions, advice, conjugation, objectPlusInf, toHave, modals} from "../components/data/grammar-data.js";
import { renderWordOrder } from "./word-order.js";
import { renderRegVerbs } from "./reg-verbs.js";
import { renderSWords } from "./s-words.js";
import { renderPlurals } from "./plurals.js";
import {renderQuestions} from "./questions.js"
import { renderPast } from "./past.js";
import { renderDoDoes } from "./do-does.js";
import { renderToBe } from "./to-be.js";

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

};

export const renderErrorsPage = () => {
  // mainSection.innerHTML = '';
  mainSection2.innerHTML = '';
  const asideEl = makeElement('aside', 'aside', mainSection2);
    const asideNavEl = makeElement('nav', 'aside-nav', asideEl);
    const ulEl = makeElement('ul', 'ul-element', asideNavEl);
      const liEl = makeElement('li', 'grammar-li', ulEl); 
      const grammarButton = makeElement('button', 'grammar-button', liEl, 'Grammar', handleGrammarClick);
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

        const subLiEl10 = makeElement('li', 'modals-li', ulEl2);
          const questionsButton = makeElement('button', 'questions-button', subLiEl10, 'Questions', handleQuestionsClick);
        const subLiEl11 = makeElement('li', 'past-li', ulEl2);
          const pastButton = makeElement('button', 'past-button', subLiEl11, 'The Past', handlePastClick);
        const subLiEl12 = makeElement('li', 'do-does-li', ulEl2);
          const doDoesButton = makeElement('button', 'do-does-button', subLiEl12, 'Do-Does', handleDoDoesClick);

      const liEl2 = makeElement('li', 'pronunciation-li', ulEl); 
      const pronunciationButton = makeElement('button', 'pronunciation-button', liEl2, 'Pronunciation', handlePronunciationClick);
        const ulEl3 = makeElement('ul', 'pronunciation-ul', liEl2);
          const subLiEl7 = makeElement('li', 'reg-verbs-li', ulEl3);
          const regVerbsButton = makeElement('button', 'reg-verbs-button', subLiEl7, 'Reg. verbs', handleRegVerbsClick);
          const subLiEl8 = makeElement('li', 's-words-li', ulEl3);
          const sWordsButton = makeElement('button', 's-words-button', subLiEl8, 'S-words', handleSWordsClick);
          const subLiEl9 = makeElement('li', 'plurals-li', ulEl3);
          const pluralsButton = makeElement('button', 'plurals-button', subLiEl9, 'Plurals', handlePluralsClick);

      const liEl3 = makeElement('li', 'word-order-li', ulEl); 
      const wordOrderButton = makeElement('button', 'word-order-button', liEl3, 'Word order', handleWordOrderClick);
        const ulEl4 = makeElement('ul', 'word-order-ul', liEl3);
          const subLiEl13 = makeElement('li', 'svo-li', ulEl4);
          const svoButton = makeElement('button', 'svo-button', subLiEl13, 'S.V.O', handleSvoClick);

      const liEl4 = makeElement('li', 'basic-li', ulEl); 
      const basicButton = makeElement('button', 'basic-button', liEl4, 'Basic', handleBasicClick);
        const ulEl5 = makeElement('ul', 'basic-ul', liEl4);
          const subLiEl14 = makeElement('li', 'to-be-li', ulEl5);
          const toBeButton = makeElement('button', 'to-be-button', subLiEl14, 'To Be', handleToBeClick);


      // const liEl4 = makeElement('li', 'word-order-li', ulEl); 
      // const basicEl = makeElement('button', 'basic-button', liEl3, 'Basic', handleWordOrderClick);
  const mainEl = document.querySelector('.main')
  const contentSection = makeElement('section', 'content-section', mainSection2);
  let menuButton = document.querySelector('.menu-button');
  if (!menuButton) {
    menuButton = makeElement('button', 'menu-button', mainSection2, '----', handleMenuButtonClick);
  }
}

export const renderTopic = (topicObj) => {
  const contentSection = document.querySelector('.content-section');
  flags.currentSection = "Common Errors"
  toggleLinkStyles();
  transitionContent(contentSection, 'scale-up', 'scale-down');

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

const handleGrammarClick = () => {
  const grammarUl = document.querySelector('.grammar-ul');
  grammarUl.classList.toggle('collapse');
}

const handleSuggestClick = (event) => {
  runClickHelper(event);
  renderTopic(suggestions);
}

const handleAdviceClick = (event) => {
  runClickHelper(event);
  renderTopic(advice);
}

const handleConjugationClick = (event) => {
  runClickHelper(event);
  renderTopic(conjugation);
}

const handleObjectPlusInfClick = (event) => {
  runClickHelper(event);
  renderTopic(objectPlusInf);
}

const handleToHaveClick = (event) => {
  runClickHelper(event);
  renderTopic(toHave);
}

const handleModalsClick = (event) => {
  runClickHelper(event);
  renderTopic(modals);
}

const handleWordOrderClick = (event) => {
  const ulEl4 = document.querySelector('.word-order-ul');
  ulEl4.classList.toggle('collapse');
}

const handleSvoClick = (event) => {
  runClickHelper(event);
  renderWordOrder();
}

const handlePronunciationClick = () => {
  const ulEl3 = document.querySelector('.pronunciation-ul');
  ulEl3.classList.toggle('collapse');
}

const handleRegVerbsClick = (event) => {
  runClickHelper(event);
  renderRegVerbs();
}

const handleSWordsClick = (event) => {
  runClickHelper(event);
  renderSWords();
}

const handlePluralsClick = (event) => {
  runClickHelper(event);
  renderPlurals();
}

const handleQuestionsClick = (event) => {
  runClickHelper(event);
  renderQuestions();
}

const handlePastClick = (event) => {
  runClickHelper(event);
  renderPast();
}

const handleDoDoesClick = (event) => {
  runClickHelper(event)
  renderDoDoes();
}

const handleBasicClick = (event) => {
  const ulEl5 = document.querySelector('.basic-ul');
  ulEl5.classList.toggle('collapse');
}

const handleToBeClick = (event) => {
  runClickHelper(event);
  renderToBe();
}

const runClickHelper = (event) => {
  const contentSection = document.querySelector('.content-section');
  contentSection.innerHTML = '';
  changeColor(event);
  flags.lastSelectedElement = event.target;
  hideAsideOnMobile();
}

const changeColor = (event) => {
  if (flags.lastSelectedElement) {
    flags.lastSelectedElement.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

const handleAddToPracticeClick = (practiceSentence) => {
  const contentSection = document.querySelector('.content-section');
  const newSentenceObj = {sentence: practiceSentence.english, translation: practiceSentence.spanish, isArchived: false};
  sentences.push(newSentenceObj);
  saveToLocalStorage();
  const message = 'Sentence added.';
  showNotification(message, contentSection, 45, 45);
}

const handleMenuButtonClick = () => {
  const asideEl = document.querySelector('.aside');
  asideEl.classList.toggle('active-aside');
  let overlay2El = document.querySelector('.overlay-2');
  if (!overlay2El) {
    overlay2El = makeElement('div', 'overlay-2', document.body, '', handleOverlay2Click);
  }
    overlay2El.classList.toggle('active-overlay-2');
}

const handleOverlay2Click = (event) => {
  const asideEl = document.querySelector('.aside');
  event.target.classList.toggle('active-overlay-2');
  asideEl.classList.toggle('active-aside');
}

const hideAsideOnMobile = () => {
  const asideEl = document.querySelector('.aside');
  const overlay2El = document.querySelector('.overlay-2');
  const userIsOnMobile = window.matchMedia('(max-width: 600px)').matches;
  if (userIsOnMobile) {
    asideEl.classList.toggle('active-aside');
    overlay2El.classList.toggle('active-overlay-2');
  }
}

// const toggleLinkStyles = () => {
//   const commonErrorsLink = document.querySelector('.common-errors-link');
//   const practiceLink = document.querySelector('.practice-link');
//   commonErrorsLink.classList.add('active-page');
//   practiceLink.classList.remove('active-page');
// }