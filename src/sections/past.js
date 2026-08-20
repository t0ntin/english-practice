import { pastFlags} from "../components/data/past-data.js"
import { makeElement, showNotification, speak, transitionContent } from "../components/reusableUI.js";
import { saveToLocalStorage, sentences } from "./practice.js";
import { pastStories as importedPastStories } from '../components/data/past-data.js'

let pastStories = [...importedPastStories];
const localStoragePastStories = localStorage.getItem('pastStories');

if (localStoragePastStories) {
  pastStories = JSON.parse(localStoragePastStories);
}

export const renderPast = () => {
  const contentSection = document.querySelector('.content-section');
    transitionContent(contentSection, 'scale-up', 'scale-down');
  const storyWrapper = makeElement('div', 'story-wrapper', contentSection);
  const currentStory = pastStories[pastFlags.currentStory];
  const titleEl = makeElement('h2', 'story-title', contentSection, currentStory.title);
  const suggestionEl = makeElement('div', 'suggestion-div', contentSection);
    const practiceEl = makeElement('h2', 'practice-h2', suggestionEl, 'Practice')
    currentStory.sentences.forEach((sentence, index ) => {
      const sentenceEl = makeElement('div', 'sentence-div', storyWrapper, sentence.spanish);
      sentenceEl.dataset.id = index;
      if (sentence.done === true) {
        sentenceEl.classList.add('show-check');
      } 
      
      if (sentence.toPractice === true) {
        const suggestionWrapper = makeElement('div', 'suggestion-wrapper', suggestionEl);
        const suggestion = makeElement('span', 'suggestion', suggestionWrapper, sentence.spanish);
        suggestion.english = sentence.correct;
        const addToPracticeButton = makeElement('button', 'add-to-practice-button', suggestionWrapper, 'Add to practice', handleAddToPracticeClick);
        sentenceEl.classList.add('show-x');
      }
      const popupEl = makeElement('div', 'popup-div-2', sentenceEl);
      popupEl.addEventListener('mouseleave', handlePopupElMouseleave);
      popupEl.classList.add('invisible');
      if (sentence.done === false) {
        sentenceEl.addEventListener('mouseenter', handleSentenceMouseenter);
      }
      sentenceEl.addEventListener('mouseleave', handleSentenceMouseleave);
    });

  shuffleTranslations();
  const storyControlsWrapper = makeElement('div', 'next-story-div', contentSection);
    const previousStoryButton = makeElement('button', 'previous-story-button', storyControlsWrapper, '⬅️ \u00A0Previous Story', handlePreviousStoryButtonClick);
    const nextStoryButton = makeElement('button', 'next-story-button', storyControlsWrapper, 'Next Story \u00A0 ➡️', handleNextStoryButtonClick);
}

const handleSentenceMouseenter = (event) => {
  if (event.target.matches('.sentence-div')) {
    pastFlags.currentSentence = event.target.dataset.id;
    const popupEl = event.target.querySelector('.popup-div-2');
    popupEl.innerHTML = '';
    const currentSentence = pastStories[pastFlags.currentStory].sentences[pastFlags.currentSentence];
    currentSentence.translations.forEach(translation => {
        const choicesEl = makeElement('div', 'choices-div', popupEl, translation);
        choicesEl.addEventListener('click', handleChoiceClick);
    });     
    popupEl.classList.remove('invisible');
  }
}

const handleSentenceMouseleave = (event) => {
  const rect = event.target.getBoundingClientRect();
  if (event.clientY < rect.top) {
    return; 
  }

  if (event.target.matches('.sentence-div')) {
    const popupEl = event.target.querySelector('.popup-div-2');
    popupEl.classList.add('invisible');
  }
}

const handlePopupElMouseleave = (event) => {
  if (event.target.matches('.popup-div-2')) {
    event.target.classList.add('invisible');
  }
}

const handleChoiceClick = (event) => {
  const contentSection = document.querySelector('.content-section');
  const sentenceEl = event.target.closest('.sentence-div');
  const chosenTranslation = event.target.innerText;
  const correct = pastStories[pastFlags.currentStory].sentences[pastFlags.currentSentence].correct;
  const currentSentence = pastStories[pastFlags.currentStory].sentences[pastFlags.currentSentence];
  if (chosenTranslation === correct) {
    const popupEl = event.target.closest('.popup-div-2');
    popupEl.classList.add('invisible');
    const sentenceEl = event.target.closest('.sentence-div');
    sentenceEl.classList.remove('show-x');
    sentenceEl.classList.add('show-check');
    showNotification('Correct! 🎉 🥳', contentSection, 70, 85);
    speak(correct);
    currentSentence.done = true;
    if (currentSentence.toPractice === true){
      currentSentence.toPractice = false;
    }
    sentenceEl.removeEventListener('mouseenter', handleSentenceMouseenter);
    savePastStoriesToLocalStorage();
  } else {
    sentenceEl.classList.add('show-x');
    showNotification('Try again...', contentSection, 70, 85);
    addToPracticeSuggestions();
    currentSentence.toPractice = true;
    savePastStoriesToLocalStorage();
  }
}

const addToPracticeSuggestions = () => {
  const suggestionEl = document.querySelector('.suggestion-div');
  if (suggestionEl.added) return;
  const suggestionWrapper = makeElement('div', 'suggestion-wrapper', suggestionEl);
  const spanishSentence = pastStories[pastFlags.currentStory].sentences[pastFlags.currentSentence].spanish;
  const suggestion = makeElement('span', 'suggestion', suggestionWrapper, spanishSentence);
  const addToPracticeButton = makeElement('button', 'add-to-practice-button', suggestionWrapper, 'Add to practice', handleAddToPracticeClick);
  suggestionEl.added = true;
}

const handleAddToPracticeClick = (event) => {
  const englishSentence = event.target.previousElementSibling.english;
  const spanishSentence = event.target.previousElementSibling.innerText;
  const obj = {sentence: englishSentence, translation: spanishSentence, isArchived: false};
  sentences.push(obj);
  saveToLocalStorage();
}

const handlePreviousStoryButtonClick = () => {
  const contentSection = document.querySelector('.content-section');
  if (pastFlags.currentStory === 0) {
    return;
  }
  contentSection.innerHTML = '';
  pastFlags.currentStory--;
  renderPast();
}

const handleNextStoryButtonClick = () => {
  const contentSection = document.querySelector('.content-section');
  if (pastFlags.currentStory === pastStories.length-1){
    return;
  }
  contentSection.innerHTML = '';
  pastFlags.currentStory++;
  renderPast();
}

const shuffleTranslations = () => {
  pastStories[pastFlags.currentStory].sentences.forEach(item => {
    item.translations.sort(() => Math.random() - 0.5);
  });
} 

const savePastStoriesToLocalStorage = () => {
  localStorage.setItem('pastStories', JSON.stringify(pastStories));
};

// console.log(localStorage.getItem('pastStories'));