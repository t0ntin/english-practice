import { flags } from "../components/data/grammar-data.js";
import { sWordsData } from "../components/data/s-words-data.js";
import { makeElement, speak, transitionContent, toggleLinkStyles } from "../components/reusableUI.js"


export const renderSWords = () => {
  flags.currentSection = "Common Errors"
  toggleLinkStyles();
  const contentSection = document.querySelector('.content-section');
  transitionContent(contentSection, 'scale-up', 'scale-down');
  
  const titleEl = makeElement('h2', 's-words-title', contentSection, 'S-Words');
  const topTextEl = makeElement('div', 'top-text-div', contentSection)
  topTextEl.innerHTML = `<h3>The problem:</h3><p>
  Given the sentence "He is <strong>a student</strong>.", students usually say "<strong>an estudent</strong>". Here's how you can fix that:
</p>
<h3> Practice</h3`;
  const listOl = makeElement('ol', 'steps-ol', contentSection);
  sWordsData.forEach(element => {
    const listLi = makeElement('li', 'list-li', listOl);
    const listStepEl = makeElement('p', 'list-step', listLi, element.step);
    const practiceContentWrapper = makeElement('div', 'practice-content-div', listLi);
    const practiceContentEl = makeElement('p', 'practice-content-p', practiceContentWrapper, element.practiceContent);
    const speakButton = makeElement('button', 'speak-button', practiceContentWrapper, '📢 \u00A0 Play it', handleSpeakButtonClick);
  });
}

const handleSpeakButtonClick = (event) => {
  const li = event.target.closest("li");
  const practiceContentEl = li.querySelector(".practice-content-p");
  speak(practiceContentEl.textContent);
}

