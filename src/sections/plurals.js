import { makeElement, speak, transitionContent } from "../components/reusableUI.js";
import { pluralsData } from "../components/data/plurals-data.js";


export const renderPlurals = () => {
  const contentSection = document.querySelector('.content-section');
  transitionContent(contentSection, 'scale-up', 'scale-down');

  const titleEl = makeElement('h2', 'plurals-title', contentSection, 'Plurals');
  const topTextEl = makeElement('div', 'top-text-div', contentSection)
  topTextEl.innerHTML = `<h3>The problem:</h3><p>
  Given a word like <strong>garages</strong>.", students usually say "<strong>garage</strong>". Here's how you can fix that:
</p>
<h3> Practice</h3`;
  const listOl = makeElement('ol', 'steps-ol', contentSection);
  const listLi = makeElement('li', 'list-li', listOl);
    const listStepEl = makeElement('p', 'list-step', listLi, pluralsData[0].step);
    pluralsData[0].practiceContent.forEach(pair => {
      const pairButton = makeElement('button', 'pair-button', listLi, pair, handlePairButtonClick)
    })
  pluralsData.slice(1).forEach(element => {
    const listLi = makeElement('li', 'list-li', listOl);
    const listStepEl = makeElement('p', 'list-step', listLi, element.step);
    const practiceContentWrapper = makeElement('div', 'practice-content-div', listLi);
    const practiceContentEl = makeElement('p', 'practice-content-p', practiceContentWrapper, element.practiceContent);
    const speakButton = makeElement('button', 'speak-button', practiceContentWrapper, '📢 \u00A0 Play it', handleSpeakButtonClick);
  });
};

const handlePairButtonClick = (event) => {
  speak(event.target.textContent);
};

const handleSpeakButtonClick = (event) => {
  const practiceContentWrapper = event.target.closest('div');
  const practiceContentEl = practiceContentWrapper.querySelector('.practice-content-p');
  speak(practiceContentEl.textContent);
};