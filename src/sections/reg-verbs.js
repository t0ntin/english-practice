import { makeElement } from "../components/reusableUI.js";
import { regVerbData } from "../components/data/reg-verb-data.js";

export const renderRegVerbs = () => {
  const contentSection = document.querySelector('.content-section');
  const regVerbsTitleEl = makeElement('div', 'reg-verbs-title-div', contentSection, 'Pronunciation of regular verbs (-d, -ed)');
  const allVerbsWrapper = makeElement('div', 'all-verbs-wrapper', contentSection);
    const mainVerbsWrapper = makeElement('div', 'main-verbs-wrapper', allVerbsWrapper);
      const mainVerbs1 = makeElement('div', 'main-verbs-1-div', mainVerbsWrapper, 'Want');
      const mainVerbs2 = makeElement('div', 'main-verbs-2-div', mainVerbsWrapper, "Need");
    const otherVerbsWrapper = makeElement('div', 'other-verbs-wrapper', allVerbsWrapper);
      const grab = makeElement('div', 'grab', otherVerbsWrapper, 'Grab');
      const laugh = makeElement('div', 'laugh', otherVerbsWrapper, 'Laugh');
      const plug = makeElement('div', 'plug', otherVerbsWrapper, 'Plug');
      const work = makeElement('div', 'work', otherVerbsWrapper, 'Work');
      const call = makeElement('div', 'call', otherVerbsWrapper, 'Call');
      const seem = makeElement('div', 'seem', otherVerbsWrapper, 'Seem');
      const clean = makeElement('div', 'clean', otherVerbsWrapper, 'Clean');
      const stop = makeElement('div', 'stop', otherVerbsWrapper, 'Stop');
      const offer = makeElement('div', 'offer', otherVerbsWrapper, 'Offer');
      const pass = makeElement('div', 'pass', otherVerbsWrapper, 'Pass');
      const live = makeElement('div', 'live', otherVerbsWrapper, 'Live');
      const fix = makeElement('div', 'fix', otherVerbsWrapper, 'Fix');
      const buzz = makeElement('div', 'buzz', otherVerbsWrapper, 'Buzz');
      const wash = makeElement('div', 'wash', otherVerbsWrapper, 'Wash');

  const currentWordWrapper = makeElement('div', 'current-word-wrapper', contentSection);
    
}