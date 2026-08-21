import { makeElement, showNotification, transitionContent, speak } from "../components/reusableUI.js";
import { regVerbData, allVerbs } from "../components/data/reg-verb-data.js";
import { regVerbFlags as importedRegVerbFlags } from "../components/data/reg-verb-data.js";

let regVerbFlags = {...importedRegVerbFlags};
const localStorageRegVerbData = localStorage.getItem('regVerbFlags')
if (localStorageRegVerbData) {
  regVerbFlags = JSON.parse(localStorageRegVerbData); 
}

export const renderRegVerbs = () => {
  const contentSection = document.querySelector('.content-section');
  transitionContent(contentSection, 'scale-up', 'scale-down');
  const mainSection2 = document.querySelector('.main-section-2');
  const regVerbsTitleEl = makeElement('h2', 'reg-verbs-title-h2', contentSection, 'Pronunciation of regular verbs (-d, -ed)');
  const allVerbsWrapper = makeElement('div', 'all-verbs-wrapper', contentSection);

  const mainVerbsWrapper = makeElement('div', 'main-verbs-wrapper', allVerbsWrapper);
  const note1El = makeElement('div', 'note-1', mainVerbsWrapper, 'Pronounce the "e":');
      const mainVerbs1 = makeElement('div', 'verb-div', mainVerbsWrapper, 'Wanted');
        underlineLastConsonant(mainVerbs1);
      const mainVerbs2 = makeElement('div', 'verb-div', mainVerbsWrapper, "Needed");
        underlineLastConsonant(mainVerbs2);
      const otherVerbsWrapper = makeElement('div', 'other-verbs-wrapper', allVerbsWrapper);
      const note2El = makeElement('div', 'note-2', otherVerbsWrapper, 'Don\'t pronounce the "e":');
        const verbs = [
          'Grabbed',
          'Laughed',
          'Plugged',
          'Worked',
          'Called',
          'Seemed',
          'Cleaned',
          'Stopped',
          'Offered',
          'Passed',
          'Lived',
          'Fixed',
          'Buzzed',
          'Washed',
          'Watched',
        ];
        verbs.forEach(verb => {
          const verbEl = makeElement('div', 'verb-div', otherVerbsWrapper, verb);
          underlineLastConsonant(verbEl);
        })
      
  const currentVerbWrapper = makeElement('div', 'current-verb-wrapper', contentSection);
    const currentVerbEl = makeElement('span', 'current-verb-span', currentVerbWrapper);
    const instructionsEl = makeElement('div', 'instructions-div', currentVerbWrapper, 'Match the ending of this verb to the ending of one of a verb on the left. Focus on the last sound. Example: The last sound in talk is "k", so you would drag it into "Worked". To practice with uncommon verbs, hit the Show Uncommon Verbs button.');
    const buttonWrapper = makeElement('div', 'button-wrapper-2', currentVerbWrapper); //Had to add a 2 to this because of a conflict with another element in the app.
      const commonVerbsButton = makeElement('button', 'common-verbs-button', buttonWrapper, 'Show Common Verbs', handleShowCommonVerbsClick);
      const uncommonVerbsButton = makeElement('button', 'uncommon-verbs-button', buttonWrapper, 'Show Uncommon Verbs', handleShowUncommonVerbsClick);
      const resetVerbsButton = makeElement('button', 'reset-verbs-button', buttonWrapper, 'Reset', handleResetVerbsClick);

  initialize();
}

const initialize = () => {
  const contentSection = document.querySelector('.content-section');
  const currentVerbEl = document.querySelector('.current-verb-span');
  
  currentVerbEl.setAttribute('draggable', 'true');
  currentVerbEl.setAttribute('id', 'current-verb');
  switchVerbGroup(currentVerbEl);

  if (!currentVerbEl.listenersAttached) {
    currentVerbEl.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', event.target.id);
      event.target.style.opacity = '0.5';
    });
    currentVerbEl.addEventListener('dragend', (event) => {
      event.target.style.opacity = 1;
    });
    currentVerbEl.listenersAttached = true;
  }
  
  const allVerbsWrapper = document.querySelector('.all-verbs-wrapper');

  if (!allVerbsWrapper.listenersAttached) {

    allVerbsWrapper.addEventListener('dragover', (event) => {
      event.preventDefault();
      if (event.target.classList.contains('verb-div')) {
        event.target.style.backgroundColor = '#007efcff';
      }
    });

    allVerbsWrapper.addEventListener('dragleave', (event) => {
      if (event.target.classList.contains('verb-div')) {
        event.target.style.backgroundColor = '#004489';
      }
    });

    allVerbsWrapper.addEventListener('drop', (event) => {
      event.preventDefault();
      if (event.target.classList.contains('verb-div')) {
        event.target.style.backgroundColor = '#004489';
      }
      
      const data = event.dataTransfer.getData('text/plain');
      const draggedElement = document.getElementById(data);
      transitionContent(currentVerbEl, 'scale-up', 'scale-down');
      const draggedElementText = draggedElement.innerText.replace(/\s+/g, '');
      const isInArray = (element) => element === draggedElementText;  
      const found = allVerbs[event.target.innerText].some(isInArray);
      console.log(found);
      if (found) {
        showNotification('That\'s right!', contentSection, 50, 63);
        if (regVerbFlags.currentVerbGroup === 'common') {
          regVerbFlags.currentVerbCommon++;
        } else {
          regVerbFlags.currentVerbUncommon++;
        }
        // regVerbFlags.currentVerb++;
        saveRegVerFlagsToLocalStorage();
        speak(event.target.textContent);
        speak(draggedElement.textContent);
      } else {
        showNotification('Try again.', contentSection, 50, 63);
      }
      switchVerbGroup(currentVerbEl);
    });
    allVerbsWrapper.listenersAttached = true;
  }
}

const switchVerbGroup = (currentVerbEl) => {
  if (regVerbFlags.currentVerbGroup === 'uncommon') {
    const currentVerb = regVerbData[1].uncommonVerbs[regVerbFlags.currentVerbUncommon];
    currentVerbEl.textContent = currentVerb;
      underlineLastConsonant(currentVerbEl);
  } else {
    const currentVerb = regVerbData[1].commonVerbs[regVerbFlags.currentVerbCommon];
    currentVerbEl.textContent = currentVerb;
      underlineLastConsonant(currentVerbEl);
    // console.log(currentVerb);
  }
}

const handleShowCommonVerbsClick = () => {
  regVerbFlags.currentVerbGroup = 'common';
  initialize();
}

const handleShowUncommonVerbsClick = () => {
  regVerbFlags.currentVerbGroup = 'uncommon';
  initialize();
}

const handleResetVerbsClick = () => {
  regVerbFlags.currentVerbCommon = 0;
  regVerbFlags.currentVerbUncommon = 0;
  saveRegVerFlagsToLocalStorage();
  initialize();
}

console.table(
    speechSynthesis.getVoices().map(v => ({
        name: v.name,
        lang: v.lang,
        default: v.default
    }))
);

const saveRegVerFlagsToLocalStorage = () => {
  localStorage.setItem('regVerbFlags', JSON.stringify(regVerbFlags));

}

const underlineLastConsonant = (verbEl) => {
  const verbELText = verbEl.textContent.trim();
  const thirdTolastChar = verbELText[verbELText.length -3];
  const fourthTolastChar = verbELText[verbELText.length -4];
  const beginning = verbELText.slice(0, verbELText.length -4);
  const beginningOfNormalVerb = verbELText.slice(0, verbELText.length -3);

  if ((thirdTolastChar === 'h' && fourthTolastChar === 's') || (thirdTolastChar === 'h' && fourthTolastChar === 'g') || (thirdTolastChar === 'h' && fourthTolastChar === 'c')) {
    console.log(verbELText,'sh or gh');
    verbEl.innerHTML = `
      ${beginning}<span class="underlined-consonants-span">${fourthTolastChar + thirdTolastChar}</span>ed
    `;
    return;
  }
  if (thirdTolastChar === fourthTolastChar) {
    console.log(verbELText,'double consonant');
    verbEl.innerHTML = `
      ${beginning}<span class="underlined-consonants-span">${fourthTolastChar + thirdTolastChar}</span>ed
    `;
  } else  if (thirdTolastChar !== fourthTolastChar) {
    console.log(verbELText,'normal');
    verbEl.innerHTML = `
      ${beginningOfNormalVerb}<span class="underlined-consonants-span">${thirdTolastChar}</span>ed
    `;
  }
}


// console.log(regVerbData[1].commonVerbs[regVerbFlags.currentVerb]);

// localStorage.removeItem('regVerbFlags');