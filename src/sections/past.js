import { pastFlags, pastSentences } from "../components/data/past-data.js"
import { makeElement, showNotification } from "../components/reusableUI.js";
import { saveToLocalStorage, sentences } from "./practice.js";

export const renderPast = () => {
  const contentSection = document.querySelector('.content-section');
  const storyWrapper = makeElement('div', 'story-wrapper', contentSection);
  pastSentences.forEach((sentence, index ) => {
     const sentenceEl = makeElement('div', 'sentence-div', storyWrapper, sentence.sentence.spanish);
     sentenceEl.dataset.id = index;
     sentenceEl.addEventListener('mouseenter', handleSentenceMouseenter);
     sentenceEl.addEventListener('mouseleave', handleSentenceMouseleave);
  });

  const suggestionEl = makeElement('div', 'suggestion-div', contentSection);


}

const handleSentenceMouseenter = (event) => {
  if (event.target.matches('.sentence-div')) {
    pastFlags.currentSentence = event.target.dataset.id;
    let popupEl = event.target.querySelector('.popup-div-2');
    if (!popupEl) {
      popupEl = makeElement('div', 'popup-div-2', event.target);
      const currentSentence = pastSentences[pastFlags.currentSentence].sentence;
      currentSentence.translations.forEach(translation => {
       const choicesEl = makeElement('div', 'choices-div', popupEl, translation);
        const checkButton = makeElement('button', 'check-button', popupEl, 'Check ✔️');
        // checkButton.translation = translation;
        // checkButton.sentenceId = event.target.dataset.id;
        checkButton.addEventListener('click', handleCheckButtonClick);
      });
    }
    popupEl.classList.remove('invisible');
  }
}

const handleSentenceMouseleave = (event) => {
  if (event.target.matches('.sentence-div')) {
    const popupEl = event.target.querySelector('.popup-div-2');
    popupEl.classList.add('invisible');

  }
}

const handleCheckButtonClick = (event) => {
  const contentSection = document.querySelector('.content-section');
  const checkButton = event.currentTarget;
  const choicesEl = checkButton.previousElementSibling;
  const chosenTranslation = choicesEl.innerText;
  const correct = pastSentences[pastFlags.currentSentence].sentence.correct;
  const suggestionEl = document.querySelector('.suggestion-div');
  if (chosenTranslation === correct) {
    showNotification('Correct! 🎉 🥳', contentSection, 70, 85);
  } else {
    showNotification('Try again...', contentSection, 70, 85);
      const suggestionWrapper = makeElement('div', 'suggestion-wrapper', suggestionEl)
      const suggestion = makeElement('span', 'suggestion', suggestionWrapper, correct);
      suggestion.spanish = pastSentences[pastFlags.currentSentence].sentence.spanish;
      const addToPracticeButton = makeElement('button', 'add-to-practice-button', suggestionWrapper, 'Add to practice', handleAddToPracticeClick);
  }
}

const handleAddToPracticeClick = (event) => {
  const spanishTranslation = event.target.previousElementSibling.spanish;
  const englishSentence = event.target.previousElementSibling.innerText;
  const obj = {sentence: englishSentence, translation: spanishTranslation, isArchived: false};
  sentences.push(obj);
  saveToLocalStorage();
}