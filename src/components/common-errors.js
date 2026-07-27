import { makeElement } from "../components/createElements.js"
import { sentences, saveToLocalStorage } from "../sections/translations.js";


// =============
// TO DO 
// ============
// ADD QUESTIONS TO PRACTICE SENTENCES 
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
    incorrect: ['I suggest you the sushi.', 'I suggest you to eat sushi.', 'I suggest to find a new job.'],
    correct: ['I suggest the sushi.', 'I suggest eating sushi.', 'I suggest (that) you eat the sushi.'],
    practice: [
      {
        english: "Mary suggests ordering chicken.",
        spanish: 'Mary sugiere ordenar pollo.'
      },
      {
        english: "Mary suggests ordering chicken, but she doesn't suggest ordering fish.",
        spanish: 'Mary sugiere ordenar pollo, pero no sugiere ordenar pescado.'
      },
      {
        english: "Mary suggested ordering chicken, but she didn't suggest ordering fish.",
        spanish: 'Mary sugiriò ordenar pollo, pero no sugiriò ordenar pescado.'
      },
    ],
    note: 'Recommend works the same way.'
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
      const incorrectSentenceEl = makeElement('p', 'incorrect-sentence', incorrectEl, item);
      makeElement('span', 'incorrect-x', incorrectSentenceEl, '❌');

    });

  const correctEl = makeElement('div', 'correct-div', contentSection);
    const correctTitle = makeElement('h3', 'correct-title', correctEl, 'Correct');
    topicObj.correct.forEach(sentence =>  {
     const correctsentenceEl = makeElement('p', 'correct-sentence', correctEl, sentence);
      makeElement('span', 'correct-x', correctsentenceEl, '☑️');
    });
  
    if (topicObj.note) {
      const noteEl = makeElement('p', 'note-element', correctEl, `Note: ${topicObj.note}`);
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
  renderTopic(suggestAndRecommend);
}

const handleAddToPractice = (practiceSentence) => {
   const newSentenceObj = {sentence: practiceSentence.english, translation: practiceSentence.spanish, isArchived: false};
   sentences.push(newSentenceObj);
  saveToLocalStorage();
  
}