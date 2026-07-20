import { makeElement } from "../components/createElements";
import { makeInputEl } from "../components/createElements";

export function linkToTranslations() {
  const translationsLink = document.querySelector('.translations-link');
  translationsLink.addEventListener('click', (event) => {
      event.preventDefault();     
      renderTopButtons(); 
      if (sentences[0]) {
        sentences.forEach(sentence => {
          renderSentences(sentence)
        });           
      }
    });
}

const mainSection = document.querySelector('.main-section');

const sentences = [
  {  
    sentence: "My test sentence", 
    translation: "Mi oracion de prueba"
  },
  {
    sentence: "My test sentence 2", 
    translation: "Mi oracion de prueba 2",
  }
];

const renderTopButtons = () => {
  mainSection.innerHTML = '';
  const containerForTopButtons = makeElement('div', 'container-for-top-buttons', mainSection);

  const newSentenceButton =  makeElement('button', 'new-sentece-button', containerForTopButtons, 'New Sentence');

  const shuffleSentencesButton =  makeElement('button', 'shuffle-sentences-button', containerForTopButtons, 'Shuffle');

  newSentenceButton.addEventListener('click', handleNewSentenceClick);
}


const handleNewSentenceClick = (sentence) => {
  renderNewSentenceEls(sentence);
}

const renderNewSentenceEls = (sentence) => {
  const containerOne =  makeElement('div', 'container-one', mainSection);
    const wrapper1A = makeElement('div', 'wrapper-1A', containerOne);

      const newSentenceObj = {sentence: "", translation: ""};

      const singleEnglishSentenceEl =  makeInputEl('input', 'single-english-sentence-input-element', wrapper1A, '', sentence.sentence);

      singleEnglishSentenceEl.addEventListener('input', (event) => {
        newSentenceObj.sentence = event.target.value;
        console.log(sentences);
      });

      const arrow =  makeElement('span', 'arrow', wrapper1A, '➡');

      const singleSpanishTranslationEl =  makeInputEl('input', 'single-spanish-translation-input-element', wrapper1A, '', sentence.translation);   
      singleSpanishTranslationEl.addEventListener('input', (event) => {
        newSentenceObj.translation = event.target.value;
        console.log(sentences);
      });


      sentences.push(newSentenceObj); 

      const wrapper1B = makeElement('div', 'single-sentence-first-row-wrapper', containerOne);
        const showHideOne = makeElement('button', 'show-hide-one-button', wrapper1B, 'Show/Hide');
      
      const wrapper1B2 = makeElement('div', 'wrapper-1B2', containerOne);
        const snoozeEl = makeElement('span', 'snooze-text', wrapper1B2);
        const snoozeButton5Min = makeElement('button', 'snooze-button-5min', wrapper1B2, '5 min.');
        const snoozeButton24Hrs = makeElement('button', 'snooze-button-24Hrs', wrapper1B2, '24 h.');
        const snoozeButton1Week = makeElement('button', 'snooze-button-1week', wrapper1B2, '1 week');
      
      const wrapper1C = makeElement('div', 'wrapper-1C', containerOne);
        const speakButton = makeElement('button', 'speak-button', wrapper1C, 'Speak');
        const deleteButton1 = makeElement('button', 'delete-button1', wrapper1C, 'Delete');
}

export const renderSentences = (sentence) => {

  // Div element that contains single sentence controls.
  const containerOne =  makeElement('div', 'container-one', mainSection);
    // "Wrapper" is a div inside a main container. 
    // "1" is the first section. 
    // "A" is the line it's in.
    const wrapper1A = makeElement('div', 'wrapper-1A', containerOne);



      const singleEnglishSentenceEl =  makeInputEl('input', 'single-english-sentence-input-element', wrapper1A, '', sentence.sentence);


      // const newSentenceObj = {sentence: "", translation: ""};


      //   singleEnglishSentenceEl.addEventListener('input', (event) => {
      //     newSentenceObj.sentence = event.target.value;
      //     console.log(sentences);
      //   })

      const arrow =  makeElement('span', 'arrow', wrapper1A, '➡');

      const singleSpanishTranslationEl =  makeInputEl('input', 'single-spanish-translation-input-element', wrapper1A, '', sentence.translation);
      //   singleSpanishTranslationEl.addEventListener('input', (event) => {
      //     // sentences.translation = event.target.value;
      //     newSentenceObj.translation = event.target.value;
      //     console.log(sentences);
      //   });


      // sentences.push(newSentenceObj);




      
      
      const wrapper1B = makeElement('div', 'single-sentence-first-row-wrapper', containerOne);
        const showHideOne = makeElement('button', 'show-hide-one-button', wrapper1B, 'Show/Hide');
      
      const wrapper1B2 = makeElement('div', 'wrapper-1B2', containerOne);
        const snoozeEl = makeElement('span', 'snooze-text', wrapper1B2);
        const snoozeButton5Min = makeElement('button', 'snooze-button-5min', wrapper1B2, '5 min.');
        const snoozeButton24Hrs = makeElement('button', 'snooze-button-24Hrs', wrapper1B2, '24 h.');
        const snoozeButton1Week = makeElement('button', 'snooze-button-1week', wrapper1B2, '1 week');
      
      const wrapper1C = makeElement('div', 'wrapper-1C', containerOne);
        const speakButton = makeElement('button', 'speak-button', wrapper1C, 'Speak');
        const deleteButton1 = makeElement('button', 'delete-button1', wrapper1C, 'Delete');
      
      


}



// Have one function to render, and another one to make the new sentence inputs appear 
