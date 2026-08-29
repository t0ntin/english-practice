import { toBeData } from "../components/data/to-be-data.js";
import { makeElement, showNotification, shuffleArray, speak } from "../components/reusableUI.js";

export const renderToBe = () => {
  const contentSection = document.querySelector('.content-section');
  contentSection.innerHTML = '';
  const firstSectionWrapper = makeElement('div', 'first-section-div', contentSection);

  firstSectionWrapper.innerHTML = 
    renderTable(toBeData.subjectPronouns) +
    renderTable(toBeData.verbToBe) +
    renderTable(toBeData.contractions);

  const pronounButtons = document.querySelectorAll('.pronoun-button');
  pronounButtons.forEach(button => {
    button.addEventListener('click', handlePronounButtonClick)
  });

  const secondSectionWrapper = makeElement('div', 'second-section-div', contentSection);
    const listenTitleEl = makeElement('h2', 'listen-title-h2', secondSectionWrapper, toBeData.listen.title);
    const instructionsEl = makeElement('p', 'instructions-p', secondSectionWrapper, toBeData.listen.instructions);

  const thirdSectionWrapper = makeElement('div', 'third-section-div', contentSection);
    const translateTitleEl = makeElement('h2', 'translate-title-h2', thirdSectionWrapper, toBeData.translate.title);
    const translateInstructionsEl = makeElement('p', 'translate-instructions-p', thirdSectionWrapper, toBeData.translate.instructions);
    const transWrapper1 = makeElement('div', 'trans-div-1', thirdSectionWrapper);
    renderButtons(transWrapper1, 'english', toBeData.subjectPronouns, handlePracticePronounButtonClick);

    const translateTitleEl2 = makeElement('h2', 'translate-title-2-h2', thirdSectionWrapper, toBeData.translate2.title);
    const translateInstructionsEl2 = makeElement('p', 'translate-instructions-2-p', thirdSectionWrapper, toBeData.translate2.instructions);
    const transWrapper2 = makeElement('div', 'trans-div-2', thirdSectionWrapper);
    renderButtons(transWrapper2, 'spanish', toBeData.subjectPronouns, handlePracticePronounButtonClick2);

    const translateTitleEl3 = makeElement('h2', 'translate-title-3-h2', thirdSectionWrapper, toBeData.translate3.title);
    const translateInstructionsEl3 = makeElement('p', 'translate-instructions-3-p', thirdSectionWrapper, toBeData.translate3.instructions);
    const transWrapper3 = makeElement('div', 'trans-div-3', thirdSectionWrapper);
      renderButtons(transWrapper3, 'english', toBeData.verbToBe, handleVerbToBeButtonClick);
    const transWrapper4 = makeElement('div', 'trans-div-4', thirdSectionWrapper);
      renderButtons(transWrapper4, 'spanish', toBeData.verbToBe, handleVerbToBeButtonClick2);

    const translateTitleEl4 = makeElement('h2', 'translate-title-4-h2', thirdSectionWrapper, toBeData.translate4.title);
    const translateInstructionsEl4 = makeElement('p', 'translate-instructions-4-p', thirdSectionWrapper, toBeData.translate4.instructions);
    const transWrapper5 = makeElement('div', 'trans-div-5', thirdSectionWrapper);
      renderButtons(transWrapper5, 'spanish', toBeData.verbToBe, handleVerbToBeButtonClick3);
    const transWrapper6 = makeElement('div', 'trans-div-6', thirdSectionWrapper);
      renderButtons(transWrapper6, 'english', toBeData.verbToBe, handleVerbToBeButtonClick4);


    
}

const renderButtons = (element, language, obj, clickHandler) => {
  shuffleArray(obj.pairs);
  obj.pairs.forEach((pair, i) => {
    const practicePronounButton = makeElement('button', 'practice-pronoun-button', element, pair[language], clickHandler);
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
  const parent = event.target.parentElement;
  let choicePopupEl = document.querySelector('.choice-popup-div');
  if (!parent.contains(choicePopupEl)) {
    choicePopupEl = makeElement('div', 'choice-popup-div', parent);
  }
  choicePopupEl.classList.remove('hidden');
  choicePopupEl.innerHTML = '';
  shuffleArray(toBeData.subjectPronouns.pairs);

  toBeData.subjectPronouns.pairs.forEach((pair, i) => {
      const popupPronounButtons = makeElement('button', 'popup-pronoun-button', choicePopupEl, pair.spanish, handlePopupPronounButtonClick);
      console.log('testing');
      popupPronounButtons.pronounClicked = event.target; 
      popupPronounButtons.translation = pair.english; 
      popupPronounButtons.choicePopupEl = choicePopupEl;
  });
}

const handlePracticePronounButtonClick2 = (event) => {
    const parent = event.target.parentElement;
  let choicePopupEl2 = document.querySelector('.choice-popup-div-2');
  if (!parent.contains(choicePopupEl2)) {
    choicePopupEl2 = makeElement('div', 'choice-popup-div-2', parent);
  }
  choicePopupEl2.classList.remove('hidden');
  choicePopupEl2.innerHTML = '';
  shuffleArray(toBeData.subjectPronouns.pairs);

  toBeData.subjectPronouns.pairs.forEach((pair, i) => {
      const popupPronounButtons = makeElement('button', 'popup-pronoun-button', choicePopupEl2, pair.english, handlePopupPronounButtonClick);
      popupPronounButtons.pronounClicked = event.target; 
      popupPronounButtons.translation = pair.spanish; 
      popupPronounButtons.choicePopupEl = choicePopupEl2;
  });
}

const handlePopupPronounButtonClick = (event) => {
  const thirdSectionWrapper = document.querySelector('.third-section-div');
  const choicePopupEl = event.target.choicePopupEl;
  if (event.target.pronounClicked.textContent === event.target.translation) {
    showNotification('Correct!', thirdSectionWrapper, 50, 50);
    choicePopupEl.classList.toggle('hidden');
    event.target.pronounClicked.style.backgroundColor = 'red';
  } else {
    showNotification('Try again!', thirdSectionWrapper, 50, 50);
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
  const englishPronouns = transWrapper3.querySelectorAll('.practice-pronoun-button');
  const tappedButton = [...englishPronouns].find(button => (button.selected === true));

  if (tappedButton.selected === true && tappedButton.textContent === event.target.translation) {
    event.target.style.backgroundColor = 'red';
    showNotification('Correct!', transWrapper3, 50, 50);
    tappedButton.selected = false;
  toggleButtonState(englishPronouns);
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

const toggleButtonState = (element) => {
  element.forEach(item => {
    if (item.disabled === true) {
      item.disabled = false;
    } else if (item.disabled === false) {
      item.disabled = true;
    }
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
