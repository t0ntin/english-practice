import { questions, questionsFlags } from "../components/data/questions-data.js";
import { makeElement, makeInputEl, showNotification } from "../components/reusableUI.js";

export const  renderQuestions = () => {
  const contentSection = document.querySelector('.content-section');
  contentSection.innerHTML = '';
  const sentenceContainer = makeElement('div', 'sentence-container', contentSection);

  const currentSentence = questionsFlags.currentSentence;
  const currentQuestion = questions[currentSentence].questions[questionsFlags.currentQuestion];

  questions[currentSentence].statement.chunks.forEach(chunk => {
    const element = makeElement('span', chunk.role, sentenceContainer, chunk.text);
  });

  const outputEl = makeElement('div', 'output-div', contentSection);

  const instructionsEl = makeElement('p', 'instructions-p', outputEl, currentQuestion.instruction);

    const partOfSpeechEl = makeElement('span', currentQuestion.role, instructionsEl, currentQuestion.partOfSpeech);

  const inputEl = makeInputEl('sentence-input', contentSection, 'Type your question here...');

  // inputEl.addEventListener('input', handleInputElValue);
  const checkSencenceButton = makeElement('button', 'check-sentence-button', contentSection, 'Check', handleCheckSentenceClick);
  const previousButton = makeElement('button', 'previous-button', contentSection, 'Previous Sentence', handlePreviousButtonClick);
  const nextButton = makeElement('button', 'next-button', contentSection, 'Next Sentence', handleNextButtonClick);
}

const handleCheckSentenceClick = (event) => {
  const contentSection = document.querySelector('.content-section');
  const outputEl = document.querySelector('.output-div');
   if (outputEl.children.length > 1) return;
  
  const inputEl = document.querySelector('.sentence-input');
  const currentQuestion = questions[questionsFlags.currentSentence].questions[questionsFlags.currentQuestion];

  const cleanedInput = normalizeString(inputEl.value);
  console.log(cleanedInput);
  console.log(currentQuestion.text);
  // const answerIsCorrect = null;
  if (cleanedInput === currentQuestion.text.toLowerCase()) {
    currentQuestion.chunks.forEach((chunk, i) => {
      makeElement('span', chunk.role, outputEl, chunk.text);
    });

    makeElement('span', 'correct-response', outputEl, 'Correct! ☑️')
  } else {
    console.log('testing');
    showNotification('Try again', contentSection, 50, 50);
  }
}

const handlePreviousButtonClick = () => {
  if (questionsFlags.currentSentence === 0 && questionsFlags.currentQuestion === 0) return;
  if (questionsFlags.currentQuestion === 0 ) {
    questionsFlags.currentSentence--;
    questionsFlags.currentQuestion = questions[questionsFlags.currentSentence].questions.length-1;
    renderQuestions();
  } else {
    questionsFlags.currentQuestion--;
    renderQuestions();
  }
}

const handleNextButtonClick = (event) => {
  if (questionsFlags.currentQuestion === questions[questionsFlags.currentSentence].questions.length - 1) {

    if (questionsFlags.currentSentence === questions.length -1) return;

    questionsFlags.currentSentence++;
    console.log(questionsFlags.currentQuestion);
    questionsFlags.currentQuestion = 0;  
    renderQuestions();
  } else {
    questionsFlags.currentQuestion++;
    renderQuestions();
  }
}

function normalizeString(string) {
  if (!string) return '';
  let normalized = string.toLowerCase().trim();
  normalized = normalized.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"]/g, "");
  return normalized;
}
// console.log(questions[0].sentences[1].sentenceParts[0].text);

const myString = 'my sentence';
const test = myString.split(' ')[0];
// console.log(questions[0].subjectQuestion);