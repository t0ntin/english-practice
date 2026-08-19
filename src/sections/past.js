import { pastFlags} from "../components/data/past-data.js"
import { makeElement, showNotification, speak } from "../components/reusableUI.js";
import { saveToLocalStorage, sentences } from "./practice.js";
import { pastStories as importedPastStories } from '../components/data/past-data.js'

let pastStories = [...importedPastStories];
const localStoragePastStories = localStorage.getItem('pastStories');

if (localStoragePastStories) {
  pastStories = JSON.parse(localStoragePastStories);
}

export const renderPast = () => {
  const contentSection = document.querySelector('.content-section');
  const storyWrapper = makeElement('div', 'story-wrapper', contentSection);
  const currentStory = pastStories[pastFlags.currentStory];
  const titleEl = makeElement('h2', 'story-title', contentSection, currentStory.title);
  const suggestionEl = makeElement('div', 'suggestion-div', contentSection);
  const suggestionWrapper = makeElement('div', 'suggestion-wrapper', suggestionEl)
      currentStory.sentences.forEach((sentence, index ) => {
        const sentenceEl = makeElement('div', 'sentence-div', storyWrapper, sentence.spanish);
        sentenceEl.dataset.id = index;
        // console.log(currentStory.sentences[pastFlags.currentSentence]);
        if (sentence.done === true) {
          sentenceEl.classList.add('show-check');
        }
        if (sentence.toPractice === true) {
          const suggestion = makeElement('span', 'suggestion', suggestionWrapper, sentence.spanish);
          suggestion.english = sentence.correct;
          const addToPracticeButton = makeElement('button', 'add-to-practice-button', suggestionWrapper, 'Add to practice', handleAddToPracticeClick);

        }
        const popupEl = makeElement('div', 'popup-div-2', sentenceEl);
        popupEl.classList.add('invisible');
        sentenceEl.addEventListener('mouseenter', handleSentenceMouseenter);
        sentenceEl.addEventListener('mouseleave', handleSentenceMouseleave);
      });

  shuffleTranslations();
  const storyControlsWrapper = makeElement('div', 'next-story-div', contentSection);
    const previousStoryButton = makeElement('button', 'previous-story-button', storyControlsWrapper, 'Previous Story', handlePreviousStoryButtonClick);
    const nextStoryButton = makeElement('button', 'next-story-button', storyControlsWrapper, 'Next Story', handleNextStoryButtonClick);
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
  if (event.target.matches('.sentence-div')) {
    const popupEl = event.target.querySelector('.popup-div-2');
    popupEl.classList.add('invisible');
  }
}

const handleChoiceClick = (event) => {
  const contentSection = document.querySelector('.content-section');
  const chosenTranslation = event.target.innerText;
  const correct = pastStories[pastFlags.currentStory].sentences[pastFlags.currentSentence].correct;
  const currentSentence = pastStories[pastFlags.currentStory].sentences[pastFlags.currentSentence];
  if (chosenTranslation === correct) {
    const popupEl = event.target.closest('.popup-div-2');
    popupEl.classList.add('invisible');
    const sentenceEl = event.target.closest('.sentence-div');
    sentenceEl.classList.add('show-check')
    showNotification('Correct! 🎉 🥳', contentSection, 70, 85);
    speak(correct);
    currentSentence.done = true;
    savePastStoriesToLocalStorage();
  } else {
    showNotification('Try again...', contentSection, 70, 85);
    addToPracticeSuggestions();
    currentSentence.toPractice = true;
    savePastStoriesToLocalStorage();
  }
}

const addToPracticeSuggestions = () => {
  const suggestionEl = document.querySelector('.suggestion-div');
  const suggestionWrapper = makeElement('div', 'suggestion-wrapper', suggestionEl);
  const spanishSentence = pastStories[pastFlags.currentStory].sentences[pastFlags.currentSentence].spanish;
  const suggestion = makeElement('span', 'suggestion', suggestionWrapper, spanishSentence);
  // suggestion.english = pastStories[pastFlags.currentStory].sentences[pastFlags.currentSentence].correct;
  const addToPracticeButton = makeElement('button', 'add-to-practice-button', suggestionWrapper, 'Add to practice', handleAddToPracticeClick);
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