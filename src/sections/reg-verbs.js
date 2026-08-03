import { makeElement, showNotification } from "../components/reusableUI.js";
import { regVerbData,regVerbFlags, allVerbs } from "../components/data/reg-verb-data.js";

export const renderRegVerbs = () => {
  const contentSection = document.querySelector('.content-section');
  const mainSection2 = document.querySelector('.main-section-2');
  const regVerbsTitleEl = makeElement('div', 'reg-verbs-title-div', contentSection, 'Pronunciation of regular verbs (-d, -ed)');
  const allVerbsWrapper = makeElement('div', 'all-verbs-wrapper', contentSection);

  const note1El = makeElement('div', 'note-1', allVerbsWrapper, 'We pronounce the "e".');
    const mainVerbsWrapper = makeElement('div', 'main-verbs-wrapper', allVerbsWrapper);
      const mainVerbs1 = makeElement('div', 'verb', mainVerbsWrapper, 'Wanted');
      const mainVerbs2 = makeElement('div', 'verb', mainVerbsWrapper, "Needed");
      const note2El = makeElement('div', 'note-2', mainVerbsWrapper, 'We don\'t pronounce the "e".');
    const otherVerbsWrapper = makeElement('div', 'other-verbs-wrapper', allVerbsWrapper);

      const grab = makeElement('div', 'verb', otherVerbsWrapper, 'Grabbed');
      const laugh = makeElement('div', 'verb', otherVerbsWrapper, 'Laughed');
      const plug = makeElement('div', 'verb', otherVerbsWrapper, 'Plugged');
      const work = makeElement('div', 'verb', otherVerbsWrapper, 'Worked');
      const call = makeElement('div', 'verb', otherVerbsWrapper, 'Called');
      const seem = makeElement('div', 'verb', otherVerbsWrapper, 'Seemed');
      const clean = makeElement('div', 'verb', otherVerbsWrapper, 'Cleaned');
      const stop = makeElement('div', 'verb', otherVerbsWrapper, 'Stopped');
      const offer = makeElement('div', 'verb', otherVerbsWrapper, 'Offered');
      const pass = makeElement('div', 'verb', otherVerbsWrapper, 'Passed');
      const live = makeElement('div', 'verb', otherVerbsWrapper, 'Lived');
      const fix = makeElement('div', 'verb', otherVerbsWrapper, 'Fixed');
      const buzz = makeElement('div', 'verb', otherVerbsWrapper, 'Buzzed');
      const wash = makeElement('div', 'verb', otherVerbsWrapper, 'Washed');

  const currentVerbWrapper = makeElement('div', 'current-verb-wrapper', contentSection);
    const currentVerbEl = makeElement('span', 'current-verb-span', currentVerbWrapper);

  const buttonWrapper = makeElement('div', 'button-wrapper', contentSection);
    const commonVerbsButton = makeElement('button', 'common-verbs-button', buttonWrapper, 'Show Common Verbs', handleShowCommonVerbsClick);
    const uncommonVerbsButton = makeElement('button', 'uncommon-verbs-button', buttonWrapper, 'Show Uncommon Verbs', handleShowUncommonVerbsClick);

  initialize();
}

const initialize = () => {
  const mainSection2 = document.querySelector('.main-section-2');
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
  console.log(allVerbsWrapper);

  if (!allVerbsWrapper.listenersAttached) {

    allVerbsWrapper.addEventListener('dragover', (event) => {
      event.preventDefault();
      if (event.target.classList.contains('verb')) {
        event.target.style.backgroundColor = 'red';
      }
    });

    allVerbsWrapper.addEventListener('dragleave', (event) => {
      if (event.target.classList.contains('verb')) {
        event.target.style.backgroundColor = '#07a14c';
      }
    });

    allVerbsWrapper.addEventListener('drop', (event) => {
      event.preventDefault();
      event.target.style.backgroundColor = '#07a14c';
      
      const data = event.dataTransfer.getData('text/plain');
      const draggedElement = document.getElementById(data);
      console.log(draggedElement.textContent);
      console.log(event.target.textContent);
      const isInArray = (element) => element === draggedElement.textContent;
      const found = allVerbs[event.target.textContent].some(isInArray)
      if (found) {
        showNotification('That\'s right!', mainSection2);
        regVerbFlags.currentVerb++;
      } else {
        showNotification('Try again.', mainSection2);
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

const handleShowCommonVerbsClick = () => {
  regVerbFlags.currentVerbGroup = 'common';
  initialize();
}

const handleShowUncommonVerbsClick = () => {
  regVerbFlags.currentVerbGroup = 'uncommon';
  initialize();
}
