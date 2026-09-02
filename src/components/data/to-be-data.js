

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
    instructions: "Cree oraciones cortas, escúchelas, tradúzcalas, dígalas, agréguelas a la seccion de práctica.",
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
  
};

export const toBeFlags = {
  currentQuestion: 0,

}