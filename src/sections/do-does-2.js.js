import { makeElement, makeInputEl } from "../components/createElements.js";

export function linkToDoDoes2() {
  const doDoes2Link = document.querySelector('.do-does-2-link');
  doDoes2Link.addEventListener('click', (event) => {
    event.preventDefault();     
    renderDoDoes2();              
  });
}

const mainSection = document.querySelector('.main-section');

function renderDoDoes2() {
  mainSection.innerHTML = '';
  const container = makeElement('div', 'container', mainSection, 'John come manzanas, pero no come bananas.');
  const input = makeInputEl('input', 'sentence-input', mainSection, 'try it');
  input.addEventListener('input', handleInput);
  const output = makeElement('div', 'output-element', mainSection,);
}

const spanish = ['John', 'come', 'manzanas,', 'pero', 'él','no', 'come', 'bananas.'];
const english = ['john', 'eats', 'apples', 'but', 'he', 'does', 'not', 'eat', 'bananas'];

function handleInput(e) {
  let userInput = e.target.value;
  const output = document.querySelector('.output-element')
  output.innerHTML = '';
  // const userWords = userInput.split(' ');


  userInput.split(' ').forEach((inputWord, i) => {
    if (i === userInput.length - 1 && !userInput.endsWith(' ')) return;

    let cleanedInput = inputWord.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"]/g, "").toLowerCase();
    if (cleanedInput === "doesnt") {
      cleanedInput = ["does", "not"];
    } else {
      cleanedInput = [cleanedInput];
    }
    console.log(cleanedInput);    
    if  (cleanedInput.includes(english[i].toLowerCase())) {
      makeElement('span', 'correct', output, inputWord );

      } else {
      makeElement('span', 'incorrect', output, inputWord);

      }
  })
}

