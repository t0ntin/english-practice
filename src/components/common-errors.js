import { makeElement } from "../components/createElements.js"
import { sentences, saveToLocalStorage } from "../sections/translations.js";

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
    const asideNavEl = makeElement('aside', 'aside-nav', asideEl);
    const commonErrorsH2 = makeElement('h2', 'common-errors-h2', asideNavEl, 'Error Types:');
    const ulEl = makeElement('ul', 'ul-element', asideNavEl);
      const liEl = makeElement('li', 'grammar-li', ulEl); 
      const grammarButton = makeElement('button', 'grammar-button', liEl, 'Grammar');
        const ulEl2 = makeElement('ul', 'suggest-recommend-ul', liEl);
        const subLiEl = makeElement('li', 'suggest-recommend-li', ulEl2);
          const suggestButton = makeElement('button', 'suggest-button', subLiEl, 'Suggest / recommend', handleSuggestClick);
          
        const subLiEl2 = makeElement('li', 'advice-li', ulEl2);
          const adviceButton = makeElement('button', 'advice-button', subLiEl2, 'advice');
      const liEl2 = makeElement('li', 'pronunciation-li', ulEl); 
      const pronunciationButton = makeElement('button', 'pronunciation-button', liEl2, 'Pronunciation');
      const liEl3 = makeElement('li', 'word-order-li', ulEl); 
      const wordOrderButton = makeElement('button', 'word-order-button', liEl3, 'Word order');
     
  const contentSection = makeElement('section', 'content-section', mainSection2);

}


const errors =[
  {
  title: "Suggest and recommend",
  incorrect: ['sentence one goes here', 'sentence 2 goes here'],
  correct: ['sentence one goes here', 'sentence 2 goes here'],
  practice: [{english: "my english sentence",
              spanish: 'my spanish sentence'}
            ],

  }
];

// Topics:
const suggestAndRecommend = errors[0];


const renderTopic = (topicObj) => {
  const contentSection = document.querySelector('.content-section');
  const titleEl = makeElement('h2', 'title', contentSection, topicObj.title);
  
  const incorrectEl = makeElement('div', 'incorrect-div', contentSection);
    const incorrectTitle = makeElement('h3', 'incorrect-title', incorrectEl, 'Incorrect');
    topicObj.incorrect.forEach(item =>  {
      makeElement('p', 'incorrect-sentence', incorrectEl, item);

    });

  const correctEl = makeElement('div', 'correct-div', contentSection);
    const correctTitle = makeElement('h3', 'correct-title', incorrectEl, 'Correct');
    topicObj.correct.forEach(sentence =>  {
      makeElement('p', 'correct-sentence', correctEl, sentence);
    });
  const practiceEl = makeElement('div', 'practice-div', contentSection);
    const practiceTitleEl = makeElement('h3', 'practice-title-h3', practiceEl, 'Practice');
    topicObj.practice.forEach(practiceSentence => {
      makeElement('p', 'practice-sentence-p', practiceEl, practiceSentence.english);
      
      makeElement('button', 'add-to-practice-button', practiceEl, 'Add to practice', () => handleAddToPractice(practiceSentence));
      console.log(topicObj.practice);
    });

}

const handleSuggestClick = () => {
  renderTopic(suggestAndRecommend);
}

const handleAddToPractice = (practiceSentence) => {
  console.log(practiceSentence);

   const newSentenceObj = {sentence: practiceSentence.english, translation: practiceSentence.spanish, isArchived: false};
  console.log(newSentenceObj);
   sentences.push(newSentenceObj);
  saveToLocalStorage();
  
}
