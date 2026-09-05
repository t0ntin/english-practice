

export const toBeData = {
  subjectPronouns: {
    title: "Pronombres",
    pairs: [
      { english: "I", spanish: "Yo" },
      { english: "You", spanish: "Tú" },
      { english: "He", spanish: "Él" },
      { english: "She", spanish: "Ella" },
      { english: "It", spanish: "(No existe)" },
      { english: "We", spanish: "Nosotros" },
      { english: "They", spanish: "Ellos" },
    ]
  },
  
  verbToBe: {
    title: "'To Be' - Ser / Estar",
    pairs: [
      { english: "I am", spanish: "Yo soy / Yo estoy" },
      { english: "You are", spanish: "Tú eres / Tú estás" },
      { english: "He is", spanish: "Él es / Él está" },
      { english: "She is", spanish: "Ella es / Ella está" },
      { english: "It is", spanish: "Es / está" },
      { english: "We are", spanish: "Nosotros somos / estamos" },
      { english: "They are", spanish: "Ellos son / están" },
    ]
  },
  
  contractions: {
    title: "Contracciones",
    pairs: [
      { english: "I'm", spanish: "Yo soy / Yo estoy" },
      { english: "You're", spanish: "Tú eres / Tú estás" },
      { english: "He's", spanish: "Él es / Él está" },
      { english: "She's", spanish: "Ella es / Ella está" },
      { english: "It's", spanish: "Es / Está" },
      { english: "We're", spanish: "Nosotros somos / estamos" },
      { english: "They're", spanish: "Ellos son / Ellos están" },
    ]
  },

  listen: {
    title: "Escuche",
    instructions: 'Toque las palabras para oír la pronunciación.'
  },
  translate: {
    title: "Traduzca del inglés al español",
    instructions: "Toque el boton y escoja la traduccion correcta."
  },
  translate2: {
    title: "Traduzca del español al inglés",
    instructions: "Toque el boton y escoja la traduccion correcta."
  },
  translate3: {
    title: "Traduzca del inglés al español",
    instructions: "Toque una palabra en el primer grupo y su traducción en el segundo grupo."
  },
  translate4: {
    title: "Traduzca del español al inglés",
    instructions: "Toque una palabra en el primer grupo y su traducción en el segundo grupo."
  },
  translate5: {
    title: "Oraciones",
    instructions: "Cree oraciones cortas, escúchelas, dígalas, tradúzcalas.",
    sentences: [
      {english: "I am John.", spanish: "Yo soy John."},
      {english: "She is a Doctor.", spanish: "Ella es doctora."},
      {english: "We are 30 years old.", spanish: "Tenemos 30 años."},
      {english: "He is happy.", spanish: "Él está feliz."},
      {english: "You are in the office.", spanish: "Tú estás en la oficina."},
      {english: "They are from Japan.", spanish: "Ellos son de Japón."},
      {english: "It is late.", spanish: "Es tarde."},
    ]
  },
  translate6: {
    title: "Preguntas",
    instructions: "Arrastre las palabras correctamente para hacer una pregunta.",
    sentences: [
            {
        statement: "It is late.",
        question: "is it late?",
        chunks: [
          {text: "It", role: "subject-2"},
          {text: "is", role: "verb-2"},
          {text: "late", role: "adjective-2"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "He is happy.",
        question: "is he happy?",
        chunks: [
          {text: "He", role: "subject-2"},
          {text: "is", role: "verb-2"},
          {text: "happy", role: "adjective-2"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "You are in the office.",
        question: "are you in the office?",
        chunks: [
          {text: "You", role: "subject-2"},
          {text: "are", role: "verb-2"},
          {text: "in the office", role: "prep-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "She is a doctor.",
        question: "is she a doctor?",
        chunks: [
          {text: "She", role: "subject-2"},
          {text: "is", role: "verb-2"},
          {text: "a doctor", role: "noun-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "They are from Japan.",
        question: "are they from japan?",
        chunks: [
          {text: "They", role: "subject-2"},
          {text: "are", role: "verb-2"},
          {text: "from Japan", role: "prep-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "I am John.",
        question: "am i john?",
        chunks: [
          {text: "I", role: "subject-2"},
          {text: "am", role: "verb-2"},
          {text: "John", role: "noun-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "We are 30 years old.",
        question: "are we 30 years old?",
        chunks: [
          {text: "We", role: "subject-2"},
          {text: "are", role: "verb-2"},
          {text: "30 years old", role: "adjective-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "You are Colombian.", 
        question: "are you colombian?",
        chunks: [
          {text: "you", role: 'subject-2'},
          {text: "are", role: 'verb-2'},
          {text: "Colombian", role: 'adjective-2'},
          {text: "?", role: 'question-mark'},
        ]
      },
      {
        statement: "I am in the office", 
        question: "am i in the office?",
        chunks: [
          {text: "I", role: 'subject-2'},
          {text: "am", role: 'verb-2'},
          {text: "in the office", role: 'prep-phrase'},
          {text: "?", role: 'question-mark'},

        ]
      },
      {
        statement: "John is sad.",
        question: "is john sad?",
        chunks: [
          {text: "John", role: "subject-2"},
          {text: "is", role: "verb-2"},
          {text: "sad", role: "adjective-2"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "It is important.",
        question: "is it important?",
        chunks: [
          {text: "It", role: "subject-2"},
          {text: "is", role: "verb-2"},
          {text: "important", role: "adjective-2"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "John and Lee are from Peru.",
        question: "are john and lee from peru?",
        chunks: [
          {text: "John and Lee", role: "subject-2"},
          {text: "are", role: "verb-2"},
          {text: "from Peru", role: "prep-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "Mary is a pilot.",
        question: "is mary a pilot?",
        chunks: [
          {text: "Mary", role: "subject-2"},
          {text: "is", role: "verb-2"},
          {text: "a pilot", role: "noun-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "They are at home.",
        question: "are they at home?",
        chunks: [
          {text: "They", role: "subject-2"},
          {text: "are", role: "verb-2"},
          {text: "at home", role: "prep-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },
      {
        statement: "He is 20 years old.",
        question: "is he 20 years old?",
        chunks: [
          {text: "He", role: "subject-2"},
          {text: "is", role: "verb-2"},
          {text: "20 years old", role: "adjective-phrase"},
          {text: "?", role: "question-mark"}
        ]
      },

    ]
  },
  translate7: {
    title: "Negaciones",
    instructions: "Toque los botones para escuchar las tres formas de negar.",
    negations: [
      {
        statement: "It is late.",
        negations: [
          { negation: "It is not late.", class: "negation-button" },
          { negation: "It's not late.", class: "negation-button" },
          { negation: "It isn't late.", class: "negation-button" }
        ]
      },
      {
        statement: "He is happy.",
        negations: [
          { negation: "He is not happy.", class: "negation-button" },
          { negation: "He's not happy.", class: "negation-button" },
          { negation: "He isn't happy.", class: "negation-button" }
        ]
      },
      {
        statement: "You are in the office.",
        negations: [
          { negation: "You are not in the office.", class: "negation-button" },
          { negation: "You're not in the office.", class: "negation-button" },
          { negation: "You aren't in the office.", class: "negation-button" }
        ]
      },
      {
        statement: "She is a doctor.",
        negations: [
          { negation: "She is not a doctor.", class: "negation-button" },
          { negation: "She's not a doctor.", class: "negation-button" },
          { negation: "She isn't a doctor.", class: "negation-button" }
        ]
      },
      {
        statement: "They are from Japan.",
        negations: [
          { negation: "They are not from Japan.", class: "negation-button" },
          { negation: "They're not from Japan.", class: "negation-button" },
          { negation: "They aren't from Japan.", class: "negation-button" }
        ]
      },
      {
        statement: "I am John.",
        negations: [
          { negation: "I am not John.", class: "negation-button" },
          { negation: "I'm not John.", class: "negation-button" }
        ]
      },
      {
        statement: "We are 30 years old.",
        negations: [
          { negation: "We are not 30 years old.", class: "negation-button" },
          { negation: "We're not 30 years old.", class: "negation-button" },
          { negation: "We aren't 30 years old.", class: "negation-button" }
        ]
      },
      {
        statement: "You are Colombian.",
        negations: [
          { negation: "You are not Colombian.", class: "negation-button" },
          { negation: "You're not Colombian.", class: "negation-button" },
          { negation: "You aren't Colombian.", class: "negation-button" }
        ]
      },
      {
        statement: "John is sad.",
        negations: [
          { negation: "John is not sad.", class: "negation-button" },
          { negation: "John's not sad.", class: "negation-button" },
          { negation: "John isn't sad.", class: "negation-button" }
        ]
      },
      {
        statement: "It is important.",
        negations: [
          { negation: "It is not important.", class: "negation-button" },
          { negation: "It's not important.", class: "negation-button" },
          { negation: "It isn't important.", class: "negation-button" }
        ]
      },
      {
        statement: "John and Lee are from Peru.",
        negations: [
          { negation: "John and Lee are not from Peru.", class: "negation-button" },
          { negation: "John and Lee're not from Peru.", class: "negation-button" },
          { negation: "John and Lee aren't from Peru.", class: "negation-button" }
        ]
      },
      {
        statement: "Mary is a pilot.",
        negations: [
          { negation: "Mary is not a pilot.", class: "negation-button" },
          { negation: "Mary's not a pilot.", class: "negation-button" },
          { negation: "Mary isn't a pilot.", class: "negation-button" }
        ]
      },
      {
        statement: "They are at home.",
        negations: [
          { negation: "They are not at home.", class: "negation-button" },
          { negation: "They're not at home.", class: "negation-button" },
          { negation: "They aren't at home.", class: "negation-button" }
        ]
      },
      {
        statement: "He is 20 years old.",
        negations: [
          { negation: "He is not 20 years old.", class: "negation-button" },
          { negation: "He's not 20 years old.", class: "negation-button" },
          { negation: "He isn't 20 years old.", class: "negation-button" }
        ]
      }
    ]
  }, 
  translate8: {
    title: "Más negaciones",
    instructions: "Toque las formas correctas de negar.",
    sentences: [
      {
        statement: "No es tarde.",
        correctPossibilities: 3,
        negations: [
          {negation: "It's not late.", correct: true},
          {negation: "It is not late.", correct: true},
          {negation: "It isn't late.", correct: true},
          {negation: "It's no late.", correct: false},
          {negation: "Is not late.", correct: false},
          {negation: "No is late.", correct: false},
          {negation: "No isn't late.", correct: false},
        ]
      },
      {
        statement: "Él está feliz.",
        correctPossibilities: 3,
        negations: [
          {negation: "He's not happy.", correct: true},
          {negation: "He is not happy.", correct: true},
          {negation: "He isn't happy.", correct: true},
          {negation: "He's no happy.", correct: false},
          {negation: "He not happy.", correct: false},
          {negation: "No is happy.", correct: false},
          {negation: "No isn't happy.", correct: false},
        ]
      },
      {
        statement: "Tú estás en la oficina.",
        correctPossibilities: 3,
        negations: [
          {negation: "You're not in the office.", correct: true},
          {negation: "You are not in the office.", correct: true},
          {negation: "You aren't in the office.", correct: true},
          {negation: "You're no in the office.", correct: false},
          {negation: "You not in the office.", correct: false},
          {negation: "No are in the office.", correct: false},
          {negation: "No aren't in the office.", correct: false},
        ]
      },
      {
        statement: "Ella es doctora.",
        correctPossibilities: 3,
        negations: [
          {negation: "She's not a doctor.", correct: true},
          {negation: "She is not a doctor.", correct: true},
          {negation: "She isn't a doctor.", correct: true},
          {negation: "She's no a doctor.", correct: false},
          {negation: "She not a doctor.", correct: false},
          {negation: "No is a doctor.", correct: false},
          {negation: "No isn't a doctor.", correct: false},
        ]
      },
      {
        statement: "Ellos son de Japón.",
        correctPossibilities: 3,
        negations: [
          {negation: "They're not from Japan.", correct: true},
          {negation: "They are not from Japan.", correct: true},
          {negation: "They aren't from Japan.", correct: true},
          {negation: "They're no from Japan.", correct: false},
          {negation: "They not from Japan.", correct: false},
          {negation: "No are from Japan.", correct: false},
          {negation: "No aren't from Japan.", correct: false},
        ]
      },
      {
        statement: "Yo soy John.",
        correctPossibilities: 2,
        negations: [
          {negation: "I'm not John.", correct: true},
          {negation: "I am not John.", correct: true},
          {negation: "I'm no John.", correct: false},
          {negation: "I not John.", correct: false},
          {negation: "No am John.", correct: false},
          {negation: "No I'm John.", correct: false},
        ]
      },
      {
        statement: "Nosotros tenemos 30 años.",
        correctPossibilities: 3,
        negations: [
          {negation: "We're not 30 years old.", correct: true},
          {negation: "We are not 30 years old.", correct: true},
          {negation: "We aren't 30 years old.", correct: true},
          {negation: "We're no 30 years old.", correct: false},
          {negation: "We not 30 years old.", correct: false},
          {negation: "No are 30 years old.", correct: false},
          {negation: "No aren't 30 years old.", correct: false},
        ]
      },
      {
        statement: "Tú eres colombiano.",
        correctPossibilities: 3,
        negations: [
          {negation: "You're not Colombian.", correct: true},
          {negation: "You are not Colombian.", correct: true},
          {negation: "You aren't Colombian.", correct: true},
          {negation: "You're no Colombian.", correct: false},
          {negation: "You not Colombian.", correct: false},
          {negation: "No are Colombian.", correct: false},
          {negation: "No aren't Colombian.", correct: false},
        ]
      },
      {
        statement: "John está triste.",
        correctPossibilities: 3,
        negations: [
          {negation: "John's not sad.", correct: true},
          {negation: "John is not sad.", correct: true},
          {negation: "John isn't sad.", correct: true},
          {negation: "John's no sad.", correct: false},
          {negation: "John not sad.", correct: false},
          {negation: "No is sad.", correct: false},
          {negation: "No isn't sad.", correct: false},
        ]
      },
      {
        statement: "Es importante.",
        correctPossibilities: 3,
        negations: [
          {negation: "It's not important.", correct: true},
          {negation: "It is not important.", correct: true},
          {negation: "It isn't important.", correct: true},
          {negation: "It's no important.", correct: false},
          {negation: "It not important.", correct: false},
          {negation: "No is important.", correct: false},
          {negation: "No isn't important.", correct: false},
        ]
      },
      {
        statement: "John y Lee son de Perú.",
        correctPossibilities: 3,
        negations: [
          {negation: "John and Lee're not from Peru.", correct: true},
          {negation: "John and Lee are not from Peru.", correct: true},
          {negation: "John and Lee aren't from Peru.", correct: true},
          {negation: "John and Lee're no from Peru.", correct: false},
          {negation: "John and Lee not from Peru.", correct: false},
          {negation: "No are from Peru.", correct: false},
          {negation: "No aren't from Peru.", correct: false},
        ]
      },
      {
        statement: "Mary es piloto.",
        correctPossibilities: 3,
        negations: [
          {negation: "Mary's not a pilot.", correct: true},
          {negation: "Mary is not a pilot.", correct: true},
          {negation: "Mary isn't a pilot.", correct: true},
          {negation: "Mary's no a pilot.", correct: false},
          {negation: "Mary not a pilot.", correct: false},
          {negation: "No is a pilot.", correct: false},
          {negation: "No isn't a pilot.", correct: false},
        ]
      },
      {
        statement: "Ellos están en casa.",
        correctPossibilities: 3,
        negations: [
          {negation: "They're not at home.", correct: true},
          {negation: "They are not at home.", correct: true},
          {negation: "They aren't at home.", correct: true},
          {negation: "They're no at home.", correct: false},
          {negation: "They not at home.", correct: false},
          {negation: "No are at home.", correct: false},
          {negation: "No aren't at home.", correct: false},
        ]
      },
      {
        statement: "Él tiene 20 años.",
        correctPossibilities: 3,
        negations: [
          {negation: "He's not 20 years old.", correct: true},
          {negation: "He is not 20 years old.", correct: true},
          {negation: "He isn't 20 years old.", correct: true},
          {negation: "He's no 20 years old.", correct: false},
          {negation: "He not 20 years old.", correct: false},
          {negation: "No is 20 years old.", correct: false},
          {negation: "No isn't 20 years old.", correct: false},
        ]
      }
    ]
  },
  
  
};

export const toBeFlags = {
  currentQuestion: 0,
  currentNegation: 0,
  currentNegation2: 0,
  correctPossibilities: 0,
  
}