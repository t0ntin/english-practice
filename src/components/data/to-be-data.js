

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
        statement: "You are Colombian", 
        question: "Are you Colombian?",
        chunks: [
          {text: "you ", role: 'subject-2'},
          {text: "are", role: 'verb-2'},
          {text: "Colombian", role: 'adjective-2'},

        ]
      },
    ]
  },
};