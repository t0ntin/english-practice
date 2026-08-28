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
}

const renderButtons = (element, language, obj, clickHandler) => {
  shuffleArray(obj.pairs);
  obj.pairs.forEach(pair => {
    const practicePronounButton = makeElement('button', 'practice-pronoun-button', element, pair[language], clickHandler);
    practicePronounButton.chosenObject = pair;
    // practicePronounButton.language = language;
  })
}

const handlePronounButtonClick = (event) => {
  speak(event.target.textContent);
}



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
      console.log('testing');
      popupPronounButtons.pronounClicked = event.target; 
      popupPronounButtons.translation = pair.spanish; 
      popupPronounButtons.choicePopupEl = choicePopupEl2;
  });
}

const handlePopupPronounButtonClick = (event) => {
  const thirdSectionWrapper = document.querySelector('.third-section-div');
  const choicePopupEl = event.target.choicePopupEl;
  console.log(choicePopupEl);
  if (event.target.pronounClicked.textContent === event.target.translation) {
    console.log('testing');
    showNotification('Correct!', thirdSectionWrapper, 50, 50);
    choicePopupEl.classList.toggle('hidden');
    event.target.pronounClicked.style.backgroundColor = 'red';
  } else {
    showNotification('Try again!', thirdSectionWrapper, 50, 50);
  }
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
