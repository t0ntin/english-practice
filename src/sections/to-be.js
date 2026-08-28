import { toBeData } from "../components/data/to-be-data.js";
import { makeElement, showNotification, shuffleArray, speak } from "../components/reusableUI.js";

export const renderToBe = () => {
  const contentSection = document.querySelector('.content-section');
  contentSection.innerHTML = '';
  const firstSectionWrapper = makeElement('div', 'first-section-div', contentSection);
  // const englishWrapper = makeElement('div', 'english-wrapper', firstSectionWrapper);


  // const spanishWrapper = makeElement('div', 'spanish-wrapper', firstSectionWrapper);
  // const englishSentences = tobeData[0].firstSection.english[0].sentences;
  // englishSentences.forEach(sentence => {
  //   if (sentence.class === 'english-subject-button') {
  //     const englishPronounEl = makeElement('button', sentence.class, englishWrapper, sentence.text, handlePronounSpanClick);
  //   }

  // });




  // tobeData[0].firstSection.spanish[0].sentences.forEach(sentence => {
  //   const spanishPronounEl = makeElement('span', sentence.class, spanishWrapper, sentence.text);
  // });
  // const contractionWrapper = makeElement('div', 'contraction-wrapper', firstSectionWrapper);
  //   const englishWrapper2 = makeElement('div', 'english-wrapper-2', contractionWrapper);
  //   const spanishWrapper2 = makeElement('div', 'spanish-wrapper-2', contractionWrapper);

  //   const contractionEl = makeElement('button', 'contraction', '???', contraction.text);


  // tobeData[0].firstSection.english[0].contractions.forEach(contraction => {
  //   const contractionEl = makeElement('button', contraction.class, englishWrapper, contraction.text, handlePronounSpanClick);
  // });

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
    renderEnglishButtons(thirdSectionWrapper, 'english');

    const translateTitleEl2 = makeElement('h2', 'translate-title-2-h2', thirdSectionWrapper, toBeData.translate2.title);
    const translateInstructionsEl2 = makeElement('p', 'translate-instructions-2-p', thirdSectionWrapper, toBeData.translate2.instructions);
    renderEnglishButtons(thirdSectionWrapper, 'spanish');


}

const renderEnglishButtons = (thirdSectionWrapper, language) => {
  shuffleArray(toBeData.subjectPronouns.pairs);
  toBeData.subjectPronouns.pairs.forEach(pair => {
    const practicePronounButton = makeElement('button', 'practice-pronoun-button', thirdSectionWrapper, pair[language], handlePracticePronounButtonClick);
    practicePronounButton.chosenObject = pair;
    practicePronounButton.language = language;
  })
}

const handlePronounButtonClick = (event) => {
  speak(event.target.textContent);
}

const handlePracticePronounButtonClick = (event) => {
  console.log(event.target.language);
  const thirdSectionWrapper = document.querySelector('.third-section-div');
  let choicePopupEl = document.querySelector('.choice-popup-div');
  if (! choicePopupEl) {
    choicePopupEl = makeElement('div', 'choice-popup-div', thirdSectionWrapper);
  }
  choicePopupEl.classList.remove('hidden');
  choicePopupEl.innerHTML = '';
  shuffleArray(toBeData.subjectPronouns.pairs);

  toBeData.subjectPronouns.pairs.forEach((pair, i) => {
    if (event.target.language === 'spanish') {
      const popupPronounButtons = makeElement('button', 'popup-pronoun-button', choicePopupEl, pair.english, handlePopupPronounButtonClick);
      popupPronounButtons.pronounClicked = event.target; 
      popupPronounButtons.translation = pair.spanish; 
    } else {
      const popupPronounButtons = makeElement('button', 'popup-pronoun-button', choicePopupEl, pair.spanish, handlePopupPronounButtonClick);
      popupPronounButtons.pronounClicked = event.target; 
      popupPronounButtons.translation = pair.english; 
    }

  });

  // speak(event.target.textContent);
}

const handlePopupPronounButtonClick = (event) => {
  const thirdSectionWrapper = document.querySelector('.third-section-div');
  const choicePopupEl = document.querySelector('.choice-popup-div');

  if (event.target.pronounClicked.textContent === event.target.translation) {
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
