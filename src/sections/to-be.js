import { toBeData, toBeFlags } from "../components/data/to-be-data.js";
import { makeElement, showNotification, shuffleArray, speak, transitionContent } from "../components/reusableUI.js";

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

    const wrapper3c = makeElement('div', 'wrapper-3-c', thirdSectionWrapper);
      const translateTitleEl3 = makeElement('h2', 'translate-title-h2', wrapper3c, toBeData.translate3.title);
      const translateInstructionsEl3 = makeElement('p', 'translate-instructions-p', wrapper3c, toBeData.translate3.instructions);
      const transWrapper3 = makeElement('div', 'trans-div-3', wrapper3c);
        renderButtons(transWrapper3, 'english', 'practice-pronoun-button', toBeData.verbToBe.pairs, handleVerbToBeButtonClick);
      const transWrapper4 = makeElement('div', 'trans-div-4', wrapper3c);
        renderButtons(transWrapper4, 'spanish', 'practice-pronoun-button', toBeData.verbToBe.pairs, handleVerbToBeButtonClick2);

    const wrapper3d = makeElement('div', 'wrapper-3-d', thirdSectionWrapper);
      const translateTitleEl4 = makeElement('h2', 'translate-title-h2', wrapper3d, toBeData.translate4.title);
      const translateInstructionsEl4 = makeElement('p', 'translate-instructions-p', wrapper3d, toBeData.translate4.instructions);
      const transWrapper5 = makeElement('div', 'trans-div-5', wrapper3d);
        renderButtons(transWrapper5, 'spanish', 'practice-pronoun-button', toBeData.verbToBe.pairs, handleVerbToBeButtonClick3);
      const transWrapper6 = makeElement('div', 'trans-div-6', wrapper3d);
        renderButtons(transWrapper6, 'english', 'practice-pronoun-button', toBeData.verbToBe.pairs,  handleVerbToBeButtonClick4);

    const wrapper3e = makeElement('div', 'wrapper-3-e', thirdSectionWrapper);
      const translateTitleEl5 = makeElement('h2', 'translate-title-h2', wrapper3e, toBeData.translate5.title);
      const translateInstructionsEl5 = makeElement('p', 'translate-instructions-p', wrapper3e, toBeData.translate5.instructions);
      const transWrapper7 = makeElement('div', 'trans-div-7', wrapper3e);
        const instructionsEl2 = makeElement('span', 'instructions-span', transWrapper7, 'Traduzca: ')
        const engToSpanButton = makeElement('button', 'eng-to-span-button', transWrapper7, 'Ing➔Esp', handleEngToSpanButtonClick);
        const spanToEngButton = makeElement('button', 'span-to-eng-button', transWrapper7, 'Esp➔Ing', handleSpanToEngButtonClick);
      const transWrapper8 = makeElement('div', 'trans-div-8', transWrapper7);
        const transWrapper9 = makeElement('div', 'trans-div-9', transWrapper8);
        const transWrapper10 = makeElement('div', 'trans-div-10', transWrapper8);
        renderButtons(transWrapper9, 'english', 'practice-sentence-button', toBeData.translate5.sentences, handleEngToSpanSentenceButtonClick);

    const wrapper3f = makeElement('div', 'wrapper-3-f', thirdSectionWrapper);
      const translateTitleEl6 = makeElement('h2', 'translate-title-h2', wrapper3f, toBeData.translate6.title);
      const translateInstructionsEl6 = makeElement('p', 'translate-instructions-p', wrapper3f, toBeData.translate6.instructions);
      const transWrapper11 = makeElement('div', 'trans-div-11', wrapper3f);
      const transWrapper12 = makeElement('div', 'trans-div-12', wrapper3f);
      renderSpans(transWrapper11, transWrapper12)
      const transWrapper13 = makeElement('div', 'trans-div-13', wrapper3f);
      const checkQuestionButton = makeElement('button', 'check-question-button', transWrapper13, 'Revisar', handleCheckQuestionButton);
      const nextQuestionButton = makeElement('button', 'next-question-button', transWrapper13, 'Siguiente', handleNextQuestionButtonClick);

  createPopupAndOverlay();
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

const renderSpans = (wrapper, wrapper2) => {
  wrapper.innerHTML = '';
  wrapper2.innerHTML = ''; 
  toBeData.translate6.sentences[toBeFlags.currentQuestion].chunks.forEach(chunk => {
    const chunkEl = makeElement('span', chunk.role, wrapper, chunk.text);
    chunkEl.draggable = true;
    chunkEl.id = chunk.text;
    const chunkSlot = makeElement('span', 'chunk-slot', wrapper2, '____')
  });
  addListeners();
}

const addListeners = () => {
  const wrapper3f = document.querySelector('.wrapper-3-f');
  const transWrapper11 = document.querySelector('.trans-div-11');
  const transWrapper12 = document.querySelector('.trans-div-12');
  [...transWrapper11.children].forEach(span => {
    span.addEventListener('dragstart', handleDragStart);
    span.addEventListener('dragend', handleDragEnd);
  });

  transWrapper12.addEventListener('dragleave', handleDragLeave);
  wrapper3f.addEventListener('dragover', handleDragOver);
  wrapper3f.addEventListener('drop', handleDrop);
}

const handleDragStart = (event) => {
  event.dataTransfer.setData('text/plain', event.target.id);
  event.target.style.opacity = '0.5';
};

const handleDragEnd = (event) => {
  event.target.style.opacity = 1;
};

const handleDragOver = (event) => {
  event.preventDefault();
  if (event.target.matches('.chunk-slot')) {
    event.target.style.backgroundColor = 'red';
  }  
};

const handleDragLeave = (event) => {
  event.preventDefault();
  if (event.target.classList.contains('chunk-slot')) {
    event.target.style.backgroundColor = 'transparent';
  }
};

const handleDrop = (event) => {
  const data = event.dataTransfer.getData('text/plain');
  const draggedElement = document.getElementById(data);
  const chunkSlot = event.target;
  if (!draggedElement) return;
  if (chunkSlot.matches('.chunk-slot')) {
    if (chunkSlot.children.length > 0) return;
    chunkSlot.style.backgroundColor = 'transparent';
    draggedElement.remove();
    if (chunkSlot.innerHTML === '____') {
      chunkSlot.innerHTML = '';
    }
    chunkSlot.append(draggedElement);
    return;
  }

  const transWrapper11 = event.target.closest('.trans-div-11');

  if (transWrapper11) {
    transWrapper11.append(draggedElement);
    return;
  }
};

const handlePronounButtonClick = (event) => {
  speak(event.target.textContent);

};

const createPopupAndOverlay = () => {
  let choicePopupEl = document.querySelector('.choice-poup-div');
  let clearOverlay = document.querySelector('.clear-overlay');
  if (!choicePopupEl) {
    choicePopupEl = makeElement('div', 'choice-popup-div', document.body); 
  }
  if (!clearOverlay) {
    clearOverlay = makeElement('div', 'clear-overlay', document.body, '', handleClearOverlayClick); 
  }
}

// Traduzca del inglés al español (first section)
const handlePracticePronounButtonClick = (event) => {
  assignButtonToOverlay(event);
  const transWrapper1 = document.querySelector('.trans-div-1');
  const choicePopupEl = document.querySelector('.choice-popup-div');
  event.target.style.backgroundColor = 'red';
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
  choicePopupEl.style.left = `${wrapperRect.left}px`;
  choicePopupEl.style.top = `${wrapperRect.top}px`;
  choicePopupEl.style.transform = 'translateY(-100%)';
  clearOverlay.classList.toggle('clear-overlay-active');
  choicePopupEl.classList.remove('hidden');
  choicePopupEl.innerHTML = '';
}

const assignButtonToOverlay = (event) => {
  const clearOverlay = document.querySelector('.clear-overlay');
  clearOverlay.clickedButton = event.target;
  clearOverlay.clickedButton.selected = true;
}

// Traduzca del español al inglés (first section)
const handlePracticePronounButtonClick2 = (event) => {
  const transWrapper2 = document.querySelector('.trans-div-2');
  const choicePopupEl = document.querySelector('.choice-popup-div');
  assignButtonToOverlay(event);
  event.target.style.backgroundColor = 'red';
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
    event.target.pronounClicked.style.backgroundColor = 'white';
    event.target.pronounClicked.disabled = true;
    event.target.classList.add('correct');
  } else {
    showNotification('Try again!', thirdSectionWrapper, 20, 30);
  }
}

// Traduzca del inglés al español (second section)
const handleVerbToBeButtonClick = (event) => {
  const transWrapper4 = document.querySelector('.trans-div-4');
  event.target.style.backgroundColor = 'white';
  event.target.style.color = 'black';
  event.target.selected = true;
  const englishPronouns = event.target.closest('.trans-div-3').querySelectorAll('.practice-pronoun-button');
  toggleButtonState(englishPronouns);
  enableButtonIfNotDone([...transWrapper4.children]);
}

const handleVerbToBeButtonClick2 = (event) => {
  const transWrapper3 = document.querySelector('.trans-div-3');
  const transWrapper4 = document.querySelector('.trans-div-4');
  const tappedButton = [...transWrapper3.children].find(button => (button.selected === true));

  if (tappedButton.selected === true && tappedButton.textContent === event.target.translation) {
    event.target.style.backgroundColor = 'white'; //CHANGES SPANISH TRANSLATION BUTTON
    event.target.done = true;
    event.target.style.color = 'black';
    showNotification('Correct!', transWrapper3, 50, 50);
    tappedButton.selected = false;
    disableButtonIfDone([...transWrapper4.children]);
    toggleButtonState([...transWrapper3.children]);

  } else {
    event.target.style.backgroundColor = '';
    showNotification('Try again', transWrapper3, 50, 50);
  }
}

// Traduzca del español al inglés (second section)
const handleVerbToBeButtonClick3 = (event) => {
  const transWrapper6 = document.querySelector('.trans-div-6');
  const spanishPronouns = event.target.closest('.trans-div-5').querySelectorAll('.practice-pronoun-button');
  event.target.style.backgroundColor = 'white';
  event.target.style.color = 'black';
  event.target.selected = true;
  toggleButtonState(spanishPronouns);
  enableButtonIfNotDone([...transWrapper6.children]);

}

const handleVerbToBeButtonClick4 = (event) => {
  const transWrapper5 = document.querySelector('.trans-div-5');
  const transWrapper6 = document.querySelector('.trans-div-6');
  const spanishEls = transWrapper5.querySelectorAll('.practice-pronoun-button');
  const tappedButton = [...spanishEls].find(button => (button.selected === true));
  if (tappedButton.selected === true && tappedButton.textContent === event.target.translation) {
      event.target.style.backgroundColor = 'white';
      event.target.style.color = 'black';
      showNotification('Correct!', transWrapper5, 50, 50);
      tappedButton.selected = false;
      toggleButtonState(spanishEls);
      disableButtonIfDone([...transWrapper6.children]);
    } else {
      event.target.style.backgroundColor = '';
      showNotification('Try again', transWrapper5, 50, 50);
    }
}

// Oraciones
const handleEngToSpanButtonClick = () => {
  const transWrapper9 = document.querySelector('.trans-div-9');
  transWrapper9.innerHTML = '';
  renderButtons(transWrapper9, 'english', 'practice-sentence-button', toBeData.translate5.sentences, handleEngToSpanSentenceButtonClick);
}

const handleSpanToEngButtonClick = (event) => {
  const transWrapper9 = document.querySelector('.trans-div-9');
  transWrapper9.innerHTML = '';
  renderButtons(transWrapper9, 'spanish', 'practice-sentence-button',toBeData.translate5.sentences, handleSpanToEngSentenceButtonClick);
}

const handleEngToSpanSentenceButtonClick = (event) => {
  const clearOverlay = document.querySelector('.clear-overlay');
  const parent = event.target.parentElement;
  const choicePopupEl = document.querySelector('.choice-popup-div');
  choicePopupEl.selectedButton = event.target;
  handlePopupAndOverlayOnClick(parent, choicePopupEl)
  event.target.style.backgroundColor = 'white';
  event.target.style.color = 'black';
  event.target.selected = true;
  clearOverlay.clickedButton = event.target;
  renderButtons(choicePopupEl, 'spanish', 'popup-sentence-translation', toBeData.translate5.sentences, handlePopupSentenceTranslationButton);
}

const handleSpanToEngSentenceButtonClick = (event) => {
  const clearOverlay = document.querySelector('.clear-overlay');
  const parent = event.target.parentElement;
  console.log(parent);
  const choicePopupEl = document.querySelector('.choice-popup-div');
  const sentenceButtons = parent.querySelectorAll('.practice-sentence-button');
  handlePopupAndOverlayOnClick(parent, choicePopupEl);
  clearOverlay.clickedButton = event.target;
  event.target.style.backgroundColor = 'white';
  event.target.style.color = 'black';
  event.target.selected = true;
  renderButtons(choicePopupEl, 'english', 'popup-sentence-translation', toBeData.translate5.sentences, handlePopupSentenceTranslationButton);
  // toggleButtonState(sentenceButtons);
}

const handlePopupSentenceTranslationButton = (event) => {
  const transWrapper9 = document.querySelector('.trans-div-9');
  const transWrapper9Els = transWrapper9.querySelectorAll('.practice-sentence-button');
  const allButtons = transWrapper9.querySelectorAll('.practice-sentence-button');
  const choicePopupEl = document.querySelector('.choice-popup-div');
  const clearOverlay = document.querySelector('.clear-overlay');
  const selectedButton = [...allButtons].find(button => button.selected);
  if (selectedButton.selected === true && event.target.textContent === selectedButton.translation) {
    selectedButton.selected = false;
    selectedButton.disabled = true;
    selectedButton.done = true;
    choicePopupEl.classList.toggle('hidden');
    clearOverlay.classList.toggle('clear-overlay-active');
  }

}

const handleClearOverlayClick = (event) => {
  const choicePopupEl = document.querySelector('.choice-popup-div')
  if (event.target.matches('.clear-overlay')) {
    console.log(event.target.clickedButton);
  if (!event.target.clickedButton.done) {
    event.target.clickedButton.style.color = 'black';
    event.target.clickedButton.style.backgroundColor = 'white';
  }
    if (event.target.clickedButton.selected === true) {
      event.target.clickedButton.style.backgroundColor = '';
      event.target.clickedButton.selected = false;
    }
    choicePopupEl.classList.add('hidden');
    event.target.classList.toggle('clear-overlay-active');
  }
}

const handleCheckQuestionButton = () => {
  console.log(toBeFlags.currentQuestion);
  const transWrapper12 = document.querySelector('.trans-div-12');
  let sentenceArray = [];
  let sentence = '';
  [...transWrapper12.children].forEach(span => {
    sentenceArray.push(span.textContent);
  })
  sentence = sentenceArray.join(' ').toLowerCase();
  sentence = sentence.replace(/\s\?/g, '?');
  const sentenceObj = toBeData.translate6.sentences[toBeFlags.currentQuestion];
  if (sentence === sentenceObj.question) {
    transWrapper12.classList.add('show-check');
    transWrapper12.classList.remove('show-x');

  } else {
    transWrapper12.classList.remove('show-check');
    transWrapper12.classList.remove('show-x');
    void transWrapper12.offsetWidth;
    transWrapper12.classList.add('show-x');
    console.log(sentence);
    console.log(sentenceObj.question);
  }

}

const handleNextQuestionButtonClick = () => {
  if (toBeFlags.currentQuestion >= toBeData.translate6.sentences.length -1) {
    return;
  }
  const transWrapper11 = document.querySelector('.trans-div-11');
  const transWrapper12 = document.querySelector('.trans-div-12');
  toBeFlags.currentQuestion++;
  renderSpans(transWrapper11, transWrapper12);
  transWrapper12.classList.remove('show-check');
  transWrapper12.classList.remove('show-x');

}

const disableButtonIfDone = (element) => {
 element.forEach(item => {
    item.disabled = true;
 })
}

const enableButtonIfNotDone = (element) => {
  element.forEach(item => {
    if (!item.done) {
      item.disabled = false;
    }
  })
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
