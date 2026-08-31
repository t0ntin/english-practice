import { toBeData } from "../components/data/to-be-data.js";
import { makeElement, showNotification, shuffleArray, speak } from "../components/reusableUI.js";

export const renderToBe = () => {
  const contentSection = document.querySelector('.content-section');
  contentSection.innerHTML = '';
  const firstSectionWrapper = makeElement('div', 'first-section-div', contentSection);

  // firstSectionWrapper.innerHTML = 
  //   renderTable(toBeData.subjectPronouns) +
  //   renderTable(toBeData.verbToBe) +
  //   renderTable(toBeData.contractions);

  const pronounButtons = document.querySelectorAll('.pronoun-button');
  pronounButtons.forEach(button => {
    button.addEventListener('click', handlePronounButtonClick)
  });

  const secondSectionWrapper = makeElement('div', 'second-section-div', contentSection);
    const listenTitleEl = makeElement('h2', 'listen-title-h2', secondSectionWrapper, toBeData.listen.title);
    const instructionsEl = makeElement('p', 'instructions-p', secondSectionWrapper, toBeData.listen.instructions);

  const thirdSectionWrapper = makeElement('div', 'third-section-div', contentSection);
    const wrapper3a = makeElement('div', 'wrapper-3-a', thirdSectionWrapper);
      const translateTitleEl = makeElement('h2', 'translate-title-h2', wrapper3a, toBeData.translate.title);
      const translateInstructionsEl = makeElement('p', 'translate-instructions-p', wrapper3a, toBeData.translate.instructions);
      const transWrapper1 = makeElement('div', 'trans-div-1', wrapper3a);
      renderButtons(transWrapper1, 'english', 'practice-pronoun-button', toBeData.subjectPronouns.pairs, handlePracticePronounButtonClick);

    const wrapper3b = makeElement('div', 'wrapper-3-b', thirdSectionWrapper);
      const translateTitleEl2 = makeElement('h2', 'translate-title-h2', wrapper3b, toBeData.translate2.title);
      const translateInstructionsEl2 = makeElement('p', 'translate-instructions-p', wrapper3b, toBeData.translate2.instructions);
      const transWrapper2 = makeElement('div', 'trans-div-2', wrapper3b);
      renderButtons(transWrapper2, 'spanish', 'practice-pronoun-button', toBeData.subjectPronouns.pairs, handlePracticePronounButtonClick2);

    const wrapper4b = makeElement('div', 'wrapper-3-c', thirdSectionWrapper);
      const translateTitleEl3 = makeElement('h2', 'translate-title-h2', wrapper4b, toBeData.translate3.title);
      const translateInstructionsEl3 = makeElement('p', 'translate-instructions-p', wrapper4b, toBeData.translate3.instructions);
      const transWrapper3 = makeElement('div', 'trans-div-3', wrapper4b);
        renderButtons(transWrapper3, 'english', 'practice-pronoun-button', toBeData.verbToBe.pairs, handleVerbToBeButtonClick);
      const transWrapper4 = makeElement('div', 'trans-div-4', wrapper4b);
        renderButtons(transWrapper4, 'spanish', 'practice-pronoun-button', toBeData.verbToBe.pairs, handleVerbToBeButtonClick2);

    const wrapper5b = makeElement('div', 'wrapper-3-d', thirdSectionWrapper);
      const translateTitleEl4 = makeElement('h2', 'translate-title-h2', wrapper5b, toBeData.translate4.title);
      const translateInstructionsEl4 = makeElement('p', 'translate-instructions-p', wrapper5b, toBeData.translate4.instructions);
      const transWrapper5 = makeElement('div', 'trans-div-5', wrapper5b);
        renderButtons(transWrapper5, 'spanish', 'practice-pronoun-button', toBeData.verbToBe.pairs, handleVerbToBeButtonClick3);
      const transWrapper6 = makeElement('div', 'trans-div-6', wrapper5b);
        renderButtons(transWrapper6, 'english', 'practice-pronoun-button', toBeData.verbToBe.pairs,  handleVerbToBeButtonClick4);

    const wrapper6b = makeElement('div', 'wrapper-3-e', thirdSectionWrapper);
      const translateTitleEl5 = makeElement('h2', 'translate-title-h2', wrapper6b, toBeData.translate5.title);
      const translateInstructionsEl5 = makeElement('p', 'translate-instructions-p', wrapper6b, toBeData.translate5.instructions);
      const transWrapper7 = makeElement('div', 'trans-div-7', wrapper6b);
        const instructionsEl2 = makeElement('span', 'instructions-span', transWrapper7, 'Traduzca: ')
        const engToSpanButton = makeElement('button', 'eng-to-span-button', transWrapper7, 'Ing➔Esp', handleEngToSpanButtonClick);
        const spanToEngButton = makeElement('button', 'span-to-eng-button', transWrapper7, 'Esp➔Ing', handleSpanToEngButtonClick);
      const transWrapper8 = makeElement('div', 'trans-div-8', transWrapper7);
        const transWrapper9 = makeElement('div', 'trans-div-9', transWrapper8);
        const transWrapper10 = makeElement('div', 'trans-div-10', transWrapper8);
    
      // renderButtons(transWrapper7, )
  const choicePopupEl = makeElement('div', 'choice-popup-div', document.body); 
  const clearOverlay = makeElement('div', 'clear-overlay', document.body, '', handleClearOverlayClick); 
}

const renderButtons = (element, language, className, obj, clickHandler) => {
  shuffleArray(obj);
  obj.forEach((pair, i) => {
    const practicePronounButton = makeElement('button', className, element, pair[language], clickHandler);
    practicePronounButton.chosenObject = pair;
    if (language === 'spanish') {
      practicePronounButton.translation = pair.english;
    } else {
      practicePronounButton.translation = pair.spanish;
    }
  });
};

const handlePronounButtonClick = (event) => {
  speak(event.target.textContent);
};

const handlePracticePronounButtonClick = (event) => {
  const transWrapper1 = document.querySelector('.trans-div-1');
  const choicePopupEl = document.querySelector('.choice-popup-div');
  handlePopupAndOverlayOnClick(transWrapper1, choicePopupEl);
  shuffleArray(toBeData.subjectPronouns.pairs);

  toBeData.subjectPronouns.pairs.forEach((pair, i) => {
      const popupPronounButtons = makeElement('button', 'popup-pronoun-button', choicePopupEl, pair.spanish, handlePopupPronounButtonClick);
      popupPronounButtons.pronounClicked = event.target; 
      popupPronounButtons.translation = pair.english; 
  });
}

const handlePopupAndOverlayOnClick = (wrapper, choicePopupEl) => {
  const clearOverlay = document.querySelector('.clear-overlay');
  const wrapperRect = wrapper.getBoundingClientRect();
  choicePopupEl.style.top = (wrapperRect.top -115) + 'px';
  choicePopupEl.style.left = wrapperRect.left + 'px';
  clearOverlay.classList.toggle('clear-overlay-active');
  clearOverlay.choicePopupEl = choicePopupEl;
  choicePopupEl.classList.remove('hidden');
  choicePopupEl.innerHTML = '';
}

const handlePracticePronounButtonClick2 = (event) => {
  const transWrapper2 = document.querySelector('.trans-div-2');
  const choicePopupEl = document.querySelector('.choice-popup-div');
  handlePopupAndOverlayOnClick(transWrapper2, choicePopupEl);
  shuffleArray(toBeData.subjectPronouns.pairs);

  toBeData.subjectPronouns.pairs.forEach((pair, i) => {
      const popupPronounButtons = makeElement('button', 'popup-pronoun-button', choicePopupEl, pair.english, handlePopupPronounButtonClick);
      popupPronounButtons.pronounClicked = event.target; 
      popupPronounButtons.translation = pair.spanish; 
  });
}

const handlePopupPronounButtonClick = (event) => {
  const thirdSectionWrapper = document.querySelector('.third-section-div');
  const clearOverlay = document.querySelector('.clear-overlay');
  const choicePopupEl = document.querySelector('.choice-popup-div');
  if (event.target.pronounClicked.textContent === event.target.translation) {
    showNotification('Correct!', thirdSectionWrapper, 20, 30);
    choicePopupEl.classList.toggle('hidden');
    clearOverlay.classList.toggle('clear-overlay-active')
    event.target.pronounClicked.style.backgroundColor = 'red';
    event.target.classList.add('correct');
  } else {
    showNotification('Try again!', thirdSectionWrapper, 20, 30);
  }
}

const handleVerbToBeButtonClick = (event) => {
  event.target.style.backgroundColor = 'red';
  event.target.selected = true;
  const englishPronouns = event.target.closest('.trans-div-3').querySelectorAll('.practice-pronoun-button');
  toggleButtonState(englishPronouns);
}

const handleVerbToBeButtonClick2 = (event) => {
  const transWrapper3 = document.querySelector('.trans-div-3');
  const tappedButton = [...transWrapper3.children].find(button => (button.selected === true));

  if (tappedButton.selected === true && tappedButton.textContent === event.target.translation) {
    event.target.style.backgroundColor = 'red';
    event.target.done = true;
    showNotification('Correct!', transWrapper3, 50, 50);
    tappedButton.selected = false;
    toggleButtonState([...transWrapper3.children]);
  } else {
    event.target.style.backgroundColor = 'none';
    showNotification('Try again', transWrapper3, 50, 50);
  }
}

const handleVerbToBeButtonClick3 = (event) => {
  const spanishPronouns = event.target.closest('.trans-div-5').querySelectorAll('.practice-pronoun-button');
  event.target.style.backgroundColor = 'red';
  event.target.selected = true;
  toggleButtonState(spanishPronouns);
}

const handleVerbToBeButtonClick4 = (event) => {
  const transWrapper5 = document.querySelector('.trans-div-5');
  const spanishEls = transWrapper5.querySelectorAll('.practice-pronoun-button');
  const tappedButton = [...spanishEls].find(button => (button.selected === true));
  if (tappedButton.selected === true && tappedButton.textContent === event.target.translation) {
      event.target.style.backgroundColor = 'red';
      showNotification('Correct!', transWrapper5, 50, 50);
      tappedButton.selected = false;
      toggleButtonState(spanishEls);
    } else {
      event.target.style.backgroundColor = 'none';
      showNotification('Try again', transWrapper5, 50, 50);
    }
}

const handleEngToSpanButtonClick = () => {
  const transWrapper9 = document.querySelector('.trans-div-9');
  const transWrapper10 = document.querySelector('.trans-div-10');
  transWrapper9.innerHTML = '';
  transWrapper10.innerHTML = '';
  renderButtons(transWrapper9, 'english', 'practice-sentence-button', toBeData.translate5.sentences, handleEngToSpanSentenceButtonClick);
}

const handleSpanToEngButtonClick = (event) => {
  const transWrapper9 = document.querySelector('.trans-div-9');
  const transWrapper10 = document.querySelector('.trans-div-10');
  transWrapper9.innerHTML = '';
  transWrapper10.innerHTML = '';
  renderButtons(transWrapper9, 'spanish', 'practice-sentence-button',toBeData.translate5.sentences, handleSpanToEngSentenceButtonClick);
}

const handleEngToSpanSentenceButtonClick = (event) => {
  const parent = event.target.parentElement;
  const choicePopupEl = document.querySelector('.choice-popup-div');
  const sentenceButtons = parent.querySelectorAll('.practice-sentence-button');

  handlePopupAndOverlayOnClick(parent, choicePopupEl)
  event.target.style.backgroundColor = 'red';
  event.target.selected = true;
    renderButtons(choicePopupEl, 'spanish', 'popup-sentence-translation', toBeData.translate5.sentences, handlePopupSentenceTranslationButton);
  // }
  toggleButtonState(sentenceButtons);

}

const handleSpanToEngSentenceButtonClick = (event) => {
    const parent = event.target.parentElement;
  let choicePopupEl3 = document.querySelector('.choice-popup-div-3');
  if (!parent.contains(choicePopupEl3)) {
    choicePopupEl3 = makeElement('div', 'choice-popup-div-3', parent);
  }
  choicePopupEl3.classList.remove('hidden');
  event.target.style.backgroundColor = 'red';
  event.target.selected = true;
  if (choicePopupEl3.children.length === 0) {
    renderButtons(choicePopupEl3, 'english', 'popup-sentence-translation', toBeData.translate5.sentences, handlePopupSentenceTranslationButton);
  }
}

const handlePopupSentenceTranslationButton = (event) => {
  const transWrapper9 = document.querySelector('.trans-div-9');
  const transWrapper9Els = transWrapper9.querySelectorAll('.practice-sentence-button');
  const allButtons = transWrapper9.querySelectorAll('.practice-sentence-button');
  const choicePopupEl = document.querySelector('.choice-popup-div');
  const clearOverlay = document.querySelector('.clear-overlay');
  console.log(choicePopupEl);
  const selectedButton = [...allButtons].find(button => button.selected);
  console.log(selectedButton);
  if (selectedButton.selected === true && event.target.textContent === selectedButton.translation) {
    event.target.style.backgroundColor = 'red';
    selectedButton.selected = false;
    selectedButton.disabled = true;
    selectedButton.done = true;
    choicePopupEl.classList.toggle('hidden');
    clearOverlay.classList.toggle('clear-overlay-active');
    console.log('testing');
    toggleButtonState(transWrapper9Els);
  }

}

const handleClearOverlayClick = (event) => {
  if (event.target.matches('.clear-overlay')) {
    event.target.choicePopupEl.classList.add('hidden');
    event.target.classList.toggle('clear-overlay-active');
  }
}

const toggleButtonState = (element) => {
  element.forEach(item => {
    if (item.done || item.selected === false) {
      return;
    }
    item.disabled === true ? item.disabled = false : item.disabled = true;
  })
}

const renderTable = (tableData) => {
  let html = `<h2>${tableData.title}</h2>`;
  html += `<table border="1" cellpadding="8" style="border-collapse: collapse; margin-bottom: 20px; width: 100%;">`;
  html += `<thead><tr><th>English</th><th>Spanish</th></tr></thead>`;
  html += `<tbody>`;
  
  tableData.pairs.forEach((pair, index) => {
    html += `<tr>`;
    // English column as a button
    html += `<td>
      <button class="pronoun-button">
        ${pair.english}
      </button>
    </td>`;
    // Spanish column remains text
    html += `<td>${pair.spanish}</td>`;
    html += `</tr>`;
  });
  
  html += `</tbody></table>`;
  return html;
}
