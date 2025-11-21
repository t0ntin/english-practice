import { renderDoDoes } from "./sections/do-does.js";

// const mainEl = document.querySelector('.main');
// export let mainSection = makeElement('section', 'main-section', mainEl);

const doDoesLink = document.querySelector('.do-does-link');

doDoesLink.addEventListener('click', (event) => {
  event.preventDefault();     
  renderDoDoes();              
});