import { makeElement, showNotification } from "../components/reusableUI.js";
import { regVerbData,regVerbFlags, allVerbs } from "../components/data/reg-verb-data.js";

export const renderRegVerbs = () => {
  const contentSection = document.querySelector('.content-section');
  const mainSection2 = document.querySelector('.main-section-2');
  const regVerbsTitleEl = makeElement('h2', 'reg-verbs-title-h2', contentSection, 'Pronunciation of regular verbs (-d, -ed)');
  const allVerbsWrapper = makeElement('div', 'all-verbs-wrapper', contentSection);

  const mainVerbsWrapper = makeElement('div', 'main-verbs-wrapper', allVerbsWrapper);
  const note1El = makeElement('div', 'note-1', mainVerbsWrapper, 'We pronounce the "e":');
      const mainVerbs1 = makeElement('div', 'verb-div', mainVerbsWrapper, 'Wanted');
      const mainVerbs2 = makeElement('div', 'verb-div', mainVerbsWrapper, "Needed");
      const otherVerbsWrapper = makeElement('div', 'other-verbs-wrapper', allVerbsWrapper);
      const note2El = makeElement('div', 'note-2', otherVerbsWrapper, 'We don\'t pronounce the "e":');

      const grab = makeElement('div', 'verb-div', otherVerbsWrapper, 'Grabbed');
      const laugh = makeElement('div', 'verb-div', otherVerbsWrapper, 'Laughed');
      const plug = makeElement('div', 'verb-div', otherVerbsWrapper, 'Plugged');
      const work = makeElement('div', 'verb-div', otherVerbsWrapper, 'Worked');
      const call = makeElement('div', 'verb-div', otherVerbsWrapper, 'Called');
      const seem = makeElement('div', 'verb-div', otherVerbsWrapper, 'Seemed');
      const clean = makeElement('div', 'verb-div', otherVerbsWrapper, 'Cleaned');
      const stop = makeElement('div', 'verb-div', otherVerbsWrapper, 'Stopped');
      const offer = makeElement('div', 'verb-div', otherVerbsWrapper, 'Offered');
      const pass = makeElement('div', 'verb-div', otherVerbsWrapper, 'Passed');
      const live = makeElement('div', 'verb-div', otherVerbsWrapper, 'Lived');
      const fix = makeElement('div', 'verb-div', otherVerbsWrapper, 'Fixed');
      const buzz = makeElement('div', 'verb-div', otherVerbsWrapper, 'Buzzed');
      const wash = makeElement('div', 'verb-div', otherVerbsWrapper, 'Washed');

      
  const currentVerbWrapper = makeElement('div', 'current-verb-wrapper', contentSection);
    const instructionsEl = makeElement('div', 'instructions-div', currentVerbWrapper, 'Match the ending of this verb to the ending of one of a verb on the left. Focus on the last sound. Example: The last sound in talk is "k", so you would drag it into "Worked". You will see a list of common verbs. If you want uncommon verbs, hit the Show Uncommon Verbs button.');
    const currentVerbEl = makeElement('span', 'current-verb-span', currentVerbWrapper);
  const buttonWrapper = makeElement('div', 'button-wrapper-2', contentSection); //Had to add a 2 to this because of a conflict with another element in the app.
  const commonVerbsButton = makeElement('button', 'common-verbs-button', buttonWrapper, 'Show Common Verbs', handleShowCommonVerbsClick);
  const uncommonVerbsButton = makeElement('button', 'uncommon-verbs-button', buttonWrapper, 'Show Uncommon Verbs', handleShowUncommonVerbsClick);

  initialize();
}

const initialize = () => {
  // const mainSection2 = document.querySelector('.main-section-2');
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
        event.target.style.backgroundColor = 'rgba(254, 3, 3, 1)';
      }
    });

    allVerbsWrapper.addEventListener('dragleave', (event) => {
      if (event.target.classList.contains('verb-div')) {
        event.target.style.backgroundColor = 'rgb(161, 0, 0)';
      }
    });

    allVerbsWrapper.addEventListener('drop', (event) => {
      event.preventDefault();
      if (event.target.classList.contains('verb-div')) {
        event.target.style.backgroundColor = 'rgb(161, 0, 0)';
      }
      
      const data = event.dataTransfer.getData('text/plain');
      const draggedElement = document.getElementById(data);
      console.log(draggedElement.textContent);
      console.log(event.target.textContent);
      const isInArray = (element) => element === draggedElement.textContent;
      const found = allVerbs[event.target.textContent].some(isInArray)
      if (found) {
        showNotification('That\'s right!', document.body);
        regVerbFlags.currentVerb++;
        speakBothWords(event.target.textContent, draggedElement.textContent)
      } else {
        showNotification('Try again.', document.body);
      }
      switchVerbGroup(currentVerbEl);
    });
    allVerbsWrapper.listenersAttached = true;

  }
}

const switchVerbGroup = (currentVerbEl) => {
  if (regVerbFlags.currentVerbGroup === 'uncommon') {
    const currentVerb = regVerbData[1].uncommonVerbs[regVerbFlags.currentVerb];
    currentVerbEl.textContent = currentVerb;
  } else {
    const currentVerb = regVerbData[1].commonVerbs[regVerbFlags.currentVerb];
    currentVerbEl.textContent = currentVerb;
  }
}

const speakBothWords = (word1, word2) => {
  const utterance = new SpeechSynthesisUtterance(word1);
  speechSynthesis.speak(utterance); 

  const utterance2 = new SpeechSynthesisUtterance(word2);
  speechSynthesis.speak(utterance2); 
}

const handleShowCommonVerbsClick = () => {
  regVerbFlags.currentVerbGroup = 'common';
  initialize();
}

const handleShowUncommonVerbsClick = () => {
  regVerbFlags.currentVerbGroup = 'uncommon';
  initialize();
}


