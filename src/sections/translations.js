import { makeElement } from "../components/createElements";
import { makeInputEl } from "../components/createElements";

const mainSection = document.querySelector('.main-section');
const containerForInputEls = makeElement('div', 'container-for-top-controls', mainSection);
const sentencesContainerOne = makeElement('div', 'sentences-container-one', mainSection)

export function linkToTranslations() {
  const translationsLink = document.querySelector('.translations-link');
  translationsLink.addEventListener('click', (event) => {
    event.preventDefault();     
    renderInputEls(); 
    if (sentencesContainerOne.children.length >0) {
      return;
    }
      sentences.forEach(sentence => {
        if (sentence.isArchived === false){
          renderSentences(sentence);

        }
      });           
  });
}



const sentences = [
  {  
    sentence: "My test sentence", 
    translation: "Mi oracion de prueba",
    isArchived: false,
  },
  {
    sentence: "My test sentence 2", 
    translation: "Mi oracion de prueba 2",
    isArchived: false,
  }
];



const renderInputEls = () => {
  containerForInputEls.innerHTML = '';

    const singleEnglishSentenceEl =  makeInputEl('input', 'single-english-sentence-input-element', containerForInputEls, 'Enter an English sentence...');

    const arrow =  makeElement('span', 'arrow', containerForInputEls, '➡');

    const singleSpanishTranslationEl =  makeInputEl('input', 'single-spanish-translation-input-element', containerForInputEls, 'Enter the Spanish translation...');

    const addSentenceButton =  makeElement('button', 'add-sentece-button', containerForInputEls, 'Add');

    addSentenceButton.addEventListener('click', handleAddClick);

    const shuffleSentencesButton =  makeElement('button', 'shuffle-sentences-button', containerForInputEls, 'Shuffle');

    const showArchiveButton =  makeElement('button', 'show-archive-button', containerForInputEls, 'Show Archive');

      showArchiveButton.addEventListener('click', handleShowArchive);

    const showActiveButton =  makeElement('button', 'show-active-button', containerForInputEls, 'Show Active');

      showActiveButton.addEventListener('click', handleShowActive);

}

const handleAddClick = () => {
  const singleEnglishSentenceEl = document.querySelector('.single-english-sentence-input-element');

  const singleSpanishTranslationEl = document.querySelector('.single-spanish-translation-input-element');

  const newSentenceObj = {sentence: singleEnglishSentenceEl.value, translation: singleSpanishTranslationEl.value, isArchived: false};

  sentences.push(newSentenceObj);
  renderSentences(newSentenceObj); 

  console.log(sentences);

}

const handleShowArchive = () => {
  sentencesContainerOne.innerHTML = '';
  sentences.forEach(sentence => {
    if (sentence.isArchived) {
      renderSentences(sentence);
    }
  })
};

const handleShowActive = () => {
  sentencesContainerOne.innerHTML = '';
  sentences.forEach(sentence => {
    if (!sentence.isArchived) {
      renderSentences(sentence);
    }
  })
}

const renderSentences = (sentence) => {
  // sentencesContainerOne.innerHTML = '';
  // const sentencesContainerOne = makeElement('div', 'sentences-container-one', mainSection)
  const containerOne =  makeElement('div', 'container-one', sentencesContainerOne);
  const englishSentenceEl = makeElement('input', 'single-english-sentence-input-element', containerOne);
  // englishSentenceEl.value = sentence.sentence;

  const spanishSentenceEl = makeElement('input', 'single-spanish-sentence-input-element', containerOne);  
  spanishSentenceEl.value = sentence.translation;

  const showHideOne = makeElement('button', 'show-hide-one-button', containerOne, 'Show/Hide');

  let translationIsVisible = false;

  showHideOne.addEventListener('click', () => {
    translationIsVisible = !translationIsVisible;
    if (translationIsVisible) {
      englishSentenceEl.value = sentence.sentence;
    } else {
      englishSentenceEl.value = "";
      console.log(englishSentenceEl.value);
    }
  });
  
  const snoozeOne5min = makeElement('button', 'snooze-button-5min', containerOne, 'Snooze 5 min.');

  snoozeOne5min.addEventListener('click', () => {
    containerOne.classList.toggle('invisible');
    setTimeout(() => {
    containerOne.classList.toggle('invisible');
    }, 1000);
  });

  const archiveButton = makeElement('button', 'archive-button', containerOne, 'Archive');
  
  archiveButton.addEventListener('click', () => {
    sentence.isArchived = !sentence.isArchived;
    sentencesContainerOne.innerHTML = '';
    sentences.forEach(sentence => {
      if (sentence.isArchived === false) {

        renderSentences(sentence);
      }
    })
  });
  
  const speakButton = makeElement('button', 'speak-button', containerOne, 'Speak');

    speakButton.addEventListener('click', () => {
      console.log(sentence.sentence);
      const utterance = new SpeechSynthesisUtterance(sentence.sentence);
      const voice = speechSynthesis.getVoices().find(
        v => v.name === "English (America)+Michael"
      );    
      utterance.voice = voice;
      speechSynthesis.speak(utterance); 
    });
    console.log(sentences);
}



// const handleNewSentenceClick = () => {
//   renderNewSentenceEls();
// }

// const renderNewSentenceEls = (sentence) => {
//   const containerOne =  makeElement('div', 'container-one', mainSection);
//     const wrapper1A = makeElement('div', 'wrapper-1A', containerOne);

//       const newSentenceObj = {sentence: "", translation: ""};

//       const singleEnglishSentenceEl =  makeInputEl('input', 'single-english-sentence-input-element', wrapper1A, '', sentence.sentence);

//       singleEnglishSentenceEl.addEventListener('input', (event) => {
//         newSentenceObj.sentence = event.target.value;
//         console.log(sentences);
//       });

//       const arrow =  makeElement('span', 'arrow', wrapper1A, '➡');

//       const singleSpanishTranslationEl =  makeInputEl('input', 'single-spanish-translation-input-element', wrapper1A, '', sentence.translation);   
//       singleSpanishTranslationEl.addEventListener('input', (event) => {
//         newSentenceObj.translation = event.target.value;
//         console.log(sentences);
//       });

//       sentences.push(newSentenceObj); 






//       const wrapper1B = makeElement('div', 'single-sentence-first-row-wrapper', containerOne);
//         const showHideOne = makeElement('button', 'show-hide-one-button', wrapper1B, 'Show/Hide');
//         let translationIsVisible = true;
      
//         showHideOne.addEventListener('click', () => {
//           translationIsVisible = !translationIsVisible;
//               if (translationIsVisible) {
//         singleEnglishSentenceEl.value = sentence.sentence;
//     } else {
//         singleEnglishSentenceEl.value = "";
//         console.log(singleEnglishSentenceEl.value);
//     }
//           // singleEnglishSentenceEl.value = '';
//           // console.log(sentence);
//           // singleEnglishSentenceEl.value = translationIsVisible ? sentence.translation : '';
//         });







//       const wrapper1B2 = makeElement('div', 'wrapper-1B2', containerOne);
//         const snoozeEl = makeElement('span', 'snooze-text', wrapper1B2);
//         const snoozeButton5Min = makeElement('button', 'snooze-button-5min', wrapper1B2, '5 min.');
//         const snoozeButton24Hrs = makeElement('button', 'snooze-button-24Hrs', wrapper1B2, '24 h.');
//         const snoozeButton1Week = makeElement('button', 'snooze-button-1week', wrapper1B2, '1 week');
      
//       const wrapper1C = makeElement('div', 'wrapper-1C', containerOne);
//         const speakButton = makeElement('button', 'speak-button', wrapper1C, 'Speak');
//         const deleteButton1 = makeElement('button', 'delete-button1', wrapper1C, 'Delete');
// }

// const renderSentences = (sentence) => {

//   // Div element that contains single sentence controls.
//   const containerOne =  makeElement('div', 'container-one', mainSection);
//     // "Wrapper" is a div inside a main container. 
//     // "1" is the first section. 
//     // "A" is the line it's in.
//     const wrapper1A = makeElement('div', 'wrapper-1A', containerOne);



//       const singleEnglishSentenceEl =  makeInputEl('input', 'single-english-sentence-input-element', wrapper1A, '', sentence.sentence);


//       // const newSentenceObj = {sentence: "", translation: ""};


//       //   singleEnglishSentenceEl.addEventListener('input', (event) => {
//       //     newSentenceObj.sentence = event.target.value;
//       //     console.log(sentences);
//       //   })

//       const arrow =  makeElement('span', 'arrow', wrapper1A, '➡');

//       const singleSpanishTranslationEl =  makeInputEl('input', 'single-spanish-translation-input-element', wrapper1A, '', sentence.translation);
//       //   singleSpanishTranslationEl.addEventListener('input', (event) => {
//       //     // sentences.translation = event.target.value;
//       //     newSentenceObj.translation = event.target.value;
//       //     console.log(sentences);
//       //   });


//       // sentences.push(newSentenceObj);




      
      
//       const wrapper1B = makeElement('div', 'single-sentence-first-row-wrapper', containerOne);
//         const showHideOne = makeElement('button', 'show-hide-one-button', wrapper1B, 'Show/Hide');
      
//       const wrapper1B2 = makeElement('div', 'wrapper-1B2', containerOne);
//         const snoozeEl = makeElement('span', 'snooze-text', wrapper1B2);
//         const snoozeButton5Min = makeElement('button', 'snooze-button-5min', wrapper1B2, '5 min.');
//         const snoozeButton24Hrs = makeElement('button', 'snooze-button-24Hrs', wrapper1B2, '24 h.');
//         const snoozeButton1Week = makeElement('button', 'snooze-button-1week', wrapper1B2, '1 week');
      
//       const wrapper1C = makeElement('div', 'wrapper-1C', containerOne);
//         const speakButton = makeElement('button', 'speak-button', wrapper1C, 'Speak');
//         const deleteButton1 = makeElement('button', 'delete-button1', wrapper1C, 'Delete');
      
      


// }



