import { pastSentences } from "../components/data/past-data.js"
import { makeElement } from "../components/reusableUI.js";

export const renderPast = () => {
  const contentSection = document.querySelector('.content-section');
  const storyWrapper = makeElement('div', 'story-wrapper', contentSection);
  pastSentences.forEach((sentence, index ) => {
     const sentenceEl = makeElement('div', 'sentence-div', storyWrapper, sentence.sentence.spanish);
     sentenceEl.dataset.id = index;
     sentenceEl.addEventListener('mouseenter', handleSentenceMouseenter);
     sentenceEl.addEventListener('mouseleave', handleSentenceMouseleave);
  });

}

// const handleSentenceMouseenter = (event) => {
//   if (event.target.matches('.sentence-div')){
//     const popupEl = makeElement('div', 'popup-div-2', event.target);
//     popupEl.classList.remove('invisible');
//     pastSentences[event.target.dataset.id].sentence.translations.forEach(translation => {
//       makeElement('div', 'choices-div', popupEl, translation);
//     })
//   }
// }
const handleSentenceMouseenter = (event) => {
  if (event.target.matches('.sentence-div')) {
    let popupEl = event.target.querySelector('.popup-div-2');

    if (!popupEl) {
      popupEl = makeElement('div', 'popup-div-2', event.target);

      pastSentences[event.target.dataset.id].sentence.translations.forEach(translation => {
        makeElement('div', 'choices-div', popupEl, translation);
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

console.log(pastSentences[0].sentence.translations);