import { makeElement, showNotification, transitionContent } from "../components/reusableUI.js";
import { wordOrderSentences } from "../components/data/word-order-data.js";
import { flags } from "../components/data/grammar-data.js";

const mainSection = document.querySelector('.main-section');
const mainSection2 = document.querySelector('.main-section-2');

export const renderWordOrder = () => {
  const contentSection = document.querySelector('.content-section');
  // contentSection.innerHTML = '';
  transitionContent(contentSection, 'scale-up', 'scale-down');
  const tableContainer = makeElement('div', 'table-container', contentSection);
  const tableWrapper1 = makeElement('div', 'table-wrapper-1', tableContainer);
  const personEl = makeElement('div', 'person-div', tableWrapper1, 'Person');
  const actionEl = makeElement('div', 'action-div', tableWrapper1, 'Action');
  const whatEl = makeElement('div', 'what-div', tableWrapper1, 'What');
  const otherInfoEl = makeElement('div', 'other-info-div', tableWrapper1, 'Other information');

  const tableWrapper2 = makeElement('div', 'table-wrapper-2', tableContainer);
  const personEl2 = makeElement('div', 'person-2-div', tableWrapper2);
  const actionEl2 = makeElement('div', 'action-2-div', tableWrapper2);
  const whatEl2 = makeElement('div', 'what-2-div', tableWrapper2);
  const otherInfoEl2 = makeElement('div', 'other-info-2-div', tableWrapper2);

  const buttonWrapper = makeElement('div', 'button-wrapper', contentSection, 'Is this sentence correct?');
  const yesButton = makeElement('button', 'yes-button', buttonWrapper, 'Yes', () => handleAnswer(true));
  const noButton = makeElement('button', 'no-button', buttonWrapper, 'No', () => handleAnswer(false));

  const counterWrapper = makeElement('div', 'counter-wrapper', contentSection);
  const scoreEl = makeElement('span', 'score-span', counterWrapper, 'Score: ')
  const rightAnswersEl = makeElement('span', 'right-answers-span', counterWrapper, '0');
  const slashEl = makeElement('span', 'slash-span', counterWrapper,'/');
  const totalItemsEl = makeElement('span', 'total-items', counterWrapper);
  showTotalOfSentences();
  showSentence();

}

export const showSentence = () => {
  const currentSentence = wordOrderSentences[flags.currentGroupIndex][flags.currentSentenceIndex].words;
  flags.chosenSentence = currentSentence;
  const tableWrapper2 = document.querySelector('.table-wrapper-2');
  const htmlCollection = tableWrapper2.children;
  const sentenceParts = [...htmlCollection];
  currentSentence.forEach((word, i) => {
    const color = word.color;
    setTimeout(() => {
      sentenceParts[i].textContent = word.text;
      sentenceParts[i].style.backgroundColor = color;
    }, 700);
    transitionText(sentenceParts[i]);
  });
}

const handleAnswer = (userAnswer) => {
  const answer = wordOrderSentences[flags.currentGroupIndex][flags.currentSentenceIndex].correct;
  if (userAnswer === true && answer === true || userAnswer === false && answer === false) {
    updateRightAnswersCounter();
    const contentSection = document.querySelector('.content-section');
    showNotification('Correct!', contentSection, 55, 40);
    if (flags.currentSentenceIndex === wordOrderSentences[flags.currentGroupIndex].length - 1) {
      goToNextGroup();
      
      if (flags.currentGroupIndex < wordOrderSentences.length) {
        showSentence();
      }
      return;
    }
    flags.currentSentenceIndex++;
    showSentence();
  };

  if (userAnswer === true && answer === false) {
    showNotification('That one is incorrect!', mainSection2);
        if (flags.currentSentenceIndex === wordOrderSentences[flags.currentGroupIndex].length - 1) {
      goToNextGroup();

      if (flags.currentGroupIndex < wordOrderSentences.length) {
        showSentence();
      }
      return;
    }
    flags.currentSentenceIndex++;
    showSentence();
  }

  if (userAnswer === false && answer === true) {
    showNotification('Oops! This one is the correct one.', mainSection2);
        if (flags.currentSentenceIndex === wordOrderSentences[flags.currentGroupIndex].length - 1) {
      goToNextGroup();

      if (flags.currentGroupIndex < wordOrderSentences.length) {
        showSentence();
      }
      return;
    }
    flags.currentSentenceIndex++;
    showSentence();

  }

}

function goToNextGroup() {
  flags.currentGroupIndex++;
  flags.currentSentenceIndex = 0;
  if (flags.currentGroupIndex >= wordOrderSentences.length) {
    showNotification('No more sentences.', mainSection2)
    return;
  }

}

const transitionText = (element) => {
element.style.transform = 'translate(50%)';
element.classList.add('text-slide');
setTimeout(() => {
  element.style.transform = 'translate(0)';
element.classList.remove('text-slide');
}, 500);
}

const showTotalOfSentences = () => {
  let numberOfSentences = 0;
  wordOrderSentences.forEach(sentence => {
    numberOfSentences += sentence.length;
  })
  const totalItemsEl = document.querySelector('.total-items');
  totalItemsEl.textContent = numberOfSentences;
}

const updateRightAnswersCounter = () => {
  const rightAnswersEl = document.querySelector('.right-answers-span');
  flags.correctAnswersCounter++;
  rightAnswersEl.textContent = flags.correctAnswersCounter;
}