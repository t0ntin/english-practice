export const validSentences = {

  'Mi mamá tiene la tarea': {
    baseSentence: 'Mi mamá tiene la tarea',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom has the homework',
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'has', role: 'verb' },
          { text: 'the homework', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom have the homework?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'tiene', role: 'verb' },
          { text: 'la tarea?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'the homework?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't have the homework",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tiene', role: 'verb' },
          { text: 'la tarea.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'the homework.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has the homework?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'la tarea?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'the homework?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá tiene una casa grande': {
    baseSentence: 'Mi mamá tiene una casa grande',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom has a big house',
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'has', role: 'verb' },
          { text: 'a big house', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom have a big house?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'tiene', role: 'verb' },
          { text: 'una casa grande?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'a big house?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't have a big house",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tiene', role: 'verb' },
          { text: 'una casa grande.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'a big house.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has a big house?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'una casa grande?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'a big house?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá tiene puertas': {
    baseSentence: 'Mi mamá tiene puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom has doors',
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'has', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom have doors?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'tiene', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't have doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tiene', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has doors?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá tiene congestión': {
    baseSentence: 'Mi mamá tiene congestión',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom has congestion',
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'has', role: 'verb' },
          { text: 'congestion', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom have congestion?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'tiene', role: 'verb' },
          { text: 'congestión?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't have congestion",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tiene', role: 'verb' },
          { text: 'congestión.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'congestion.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has congestion?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'congestión?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá tiene mucho dinero': {
    baseSentence: 'Mi mamá tiene mucho dinero',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom has a lot of money',
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'has', role: 'verb' },
          { text: 'a lot of money', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom have a lot of money?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'tiene', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't have a lot of money",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tiene', role: 'verb' },
          { text: 'mucho dinero.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'a lot of money.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has a lot of money?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá hace comida en navidad': {
    baseSentence: 'Mi mamá hace comida en navidad',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom makes food at Christmas',
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'makes', role: 'verb' },
          { text: 'food at Christmas', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom make food at Christmas?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'hace', role: 'verb' },
          { text: 'comida en navidad?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'food at Christmas?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't make food at Christmas",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hace', role: 'verb' },
          { text: 'comida en navidad.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'make', role: 'verb' },
          { text: 'food at Christmas.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom make?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'make?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who makes food at Christmas?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'comida en navidad?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'makes', role: 'verb' },
          { text: 'food at Christmas?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá hace la tarea': {
    baseSentence: 'Mi mamá hace la tarea',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom does the homework',
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'does', role: 'verb' },
          { text: 'the homework', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom do the homework?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'hace', role: 'verb' },
          { text: 'la tarea?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'do', role: 'verb' },
          { text: 'the homework?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't do the homework",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hace', role: 'verb' },
          { text: 'la tarea.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'do', role: 'verb' },
          { text: 'the homework.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom do?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'do?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who does the homework?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'la tarea?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'does', role: 'verb' },
          { text: 'the homework?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá hace puertas': {
    baseSentence: 'Mi mamá hace puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom makes doors',
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'makes', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom make doors?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'hace', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't make doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hace', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'make', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom make?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'make?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who makes doors?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'makes', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá hace mucho dinero': {
    baseSentence: 'Mi mamá hace mucho dinero',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom makes a lot of money',
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'makes', role: 'verb' },
          { text: 'a lot of money', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom make a lot of money?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'hace', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't make a lot of money",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hace', role: 'verb' },
          { text: 'mucho dinero.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'make', role: 'verb' },
          { text: 'a lot of money.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom make?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'make?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who makes a lot of money?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'makes', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá abre puertas': {
    baseSentence: 'Mi mamá abre puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom opens doors',
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'opens', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom open doors?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'open', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't open doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'open', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom open?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'abre', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'open?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who opens doors?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'opens', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },
  'Mi mamá reduce la congestión': {
    baseSentence: 'Mi mamá reduce la congestión',
    phrases: [
      {
        key: 'translation',
        complete: 'My mom reduces congestion',
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'reduces', role: 'verb' },
          { text: 'congestion', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does my mom reduce congestion?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my mom doesn't reduce congestion",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does my mom reduce?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'reduce', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'reduce?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who reduces congestion?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'reduces', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
    ],
  },

  // === MIS PADRES (Subject: plural) ===

  'Mis padres tienen comida en navidad': {
    baseSentence: 'Mis padres tienen comida en navidad',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents have food at Christmas',
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'food at Christmas', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents have food at Christmas?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'tienen', role: 'verb' },
          { text: 'comida en navidad?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'food at Christmas?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't have food at Christmas",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tienen', role: 'verb' },
          { text: 'comida en navidad.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'food at Christmas.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tienen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has food at Christmas?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'comida en navidad?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'food at Christmas?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres tienen la tarea': {
    baseSentence: 'Mis padres tienen la tarea',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents have the homework',
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'the homework', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents have the homework?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'tienen', role: 'verb' },
          { text: 'la tarea?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'the homework?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't have the homework",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tienen', role: 'verb' },
          { text: 'la tarea.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'the homework.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tienen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has the homework?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'la tarea?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'the homework?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres tienen una casa grande': {
    baseSentence: 'Mis padres tienen una casa grande',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents have a big house',
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'a big house', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents have a big house?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'tienen', role: 'verb' },
          { text: 'una casa grande?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'a big house?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't have a big house",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tienen', role: 'verb' },
          { text: 'una casa grande.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'a big house.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tienen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has a big house?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'una casa grande?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'a big house?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres tienen puertas': {
    baseSentence: 'Mis padres tienen puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents have doors',
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents have doors?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'tienen', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't have doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tienen', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tienen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has doors?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres tienen congestión': {
    baseSentence: 'Mis padres tienen congestión',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents have congestion',
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'congestion', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents have congestion?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'tienen', role: 'verb' },
          { text: 'congestión?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't have congestion",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tienen', role: 'verb' },
          { text: 'congestión.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'congestion.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tienen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has congestion?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'congestión?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres tienen mucho dinero': {
    baseSentence: 'Mis padres tienen mucho dinero',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents have a lot of money',
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'a lot of money', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents have a lot of money?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'tienen', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't have a lot of money",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tienen', role: 'verb' },
          { text: 'mucho dinero.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'a lot of money.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tienen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who has a lot of money?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres hacen comida en navidad': {
    baseSentence: 'Mis padres hacen comida en navidad',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents make food at Christmas',
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'food at Christmas', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents make food at Christmas?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'hacen', role: 'verb' },
          { text: 'comida en navidad?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'food at Christmas?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't make food at Christmas",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hacen', role: 'verb' },
          { text: 'comida en navidad.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'make', role: 'verb' },
          { text: 'food at Christmas.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents make?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hacen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'make?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who makes food at Christmas?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'comida en navidad?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'makes', role: 'verb' },
          { text: 'food at Christmas?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres hacen la tarea': {
    baseSentence: 'Mis padres hacen la tarea',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents do the homework',
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'do', role: 'verb' },
          { text: 'the homework', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents do the homework?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'hacen', role: 'verb' },
          { text: 'la tarea?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'do', role: 'verb' },
          { text: 'the homework?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't do the homework",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hacen', role: 'verb' },
          { text: 'la tarea.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'do', role: 'verb' },
          { text: 'the homework.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents do?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hacen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'do?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who does the homework?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'la tarea?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'does', role: 'verb' },
          { text: 'the homework?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres hacen una casa grande': {
    baseSentence: 'Mis padres hacen una casa grande',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents make a big house',
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'a big house', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents make a big house?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'hacen', role: 'verb' },
          { text: 'una casa grande?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'a big house?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't make a big house",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hacen', role: 'verb' },
          { text: 'una casa grande.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'make', role: 'verb' },
          { text: 'a big house.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents make?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hacen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'make?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who makes a big house?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'una casa grande?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'makes', role: 'verb' },
          { text: 'a big house?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres hacen puertas': {
    baseSentence: 'Mis padres hacen puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents make doors',
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents make doors?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'hacen', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't make doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hacen', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'make', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents make?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hacen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'make?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who makes doors?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'makes', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres hacen mucho dinero': {
    baseSentence: 'Mis padres hacen mucho dinero',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents make a lot of money',
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'a lot of money', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents make a lot of money?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'hacen', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'make', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't make a lot of money",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'hacen', role: 'verb' },
          { text: 'mucho dinero.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'make', role: 'verb' },
          { text: 'a lot of money.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents make?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'hacen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'make?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who makes a lot of money?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'hace', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'makes', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres abren puertas': {
    baseSentence: 'Mis padres abren puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents open doors',
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'open', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents open doors?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'abren', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'open', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't open doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'abren', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'open', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents open?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'abren', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'open?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who opens doors?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'opens', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },
  'Mis padres reducen la congestión': {
    baseSentence: 'Mis padres reducen la congestión',
    phrases: [
      {
        key: 'translation',
        complete: 'My parents reduce congestion',
        english: [
          { text: 'My parents', role: 'subject' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Do my parents reduce congestion?',
        spanish: [
          { text: '¿Mis padres', role: 'subject' },
          { text: 'reducen', role: 'verb' },
          { text: 'la congestión?', role: 'object' },
        ],
        english: [
          { text: 'Do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, my parents don't reduce congestion",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mis padres', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'reducen', role: 'verb' },
          { text: 'la congestión.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my parents', role: 'subject' },
          { text: "don't", role: 'verb-negation' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What do my parents reduce?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'reducen', role: 'verb' },
          { text: 'mis padres?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'do', role: 'auxiliary' },
          { text: 'my parents', role: 'subject' },
          { text: 'reduce?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'Who reduces congestion?',
        spanish: [
          { text: '¿Quién', role: 'wh-word' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión?', role: 'object' },
        ],
        english: [
          { text: 'Who', role: 'wh-word' },
          { text: 'reduces', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
    ],
  },

  // === CARRO, IDIOMA, SISTEMA (Subject: singular/inanimate) ===

  'El carro tiene puertas': {
    baseSentence: 'El carro tiene puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'The car has doors',
        english: [
          { text: 'The car', role: 'subject' },
          { text: 'has', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does the car have doors?',
        spanish: [
          { text: '¿El carro', role: 'subject' },
          { text: 'tiene', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'the car', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, the car doesn't have doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'el carro', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tiene', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'the car', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'have', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does the car have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'el carro?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'the car', role: 'subject' },
          { text: 'have?', role: 'verb' },
        ],
      },
      // Note: wh-subject uses 'What' for inanimate subjects
      {
        key: 'wh-subject',
        complete: 'What has doors?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'has', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },
  'El carro cuesta mucho dinero': {
    baseSentence: 'El carro cuesta mucho dinero',
    phrases: [
      {
        key: 'translation',
        complete: 'The car costs a lot of money',
        english: [
          { text: 'The car', role: 'subject' },
          { text: 'costs', role: 'verb' },
          { text: 'a lot of money', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does the car cost a lot of money?',
        spanish: [
          { text: '¿El carro', role: 'subject' },
          { text: 'cuesta', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'the car', role: 'subject' },
          { text: 'cost', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, the car doesn't cost a lot of money",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'el carro', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'cuesta', role: 'verb' },
          { text: 'mucho dinero.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'the car', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'cost', role: 'verb' },
          { text: 'a lot of money.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does the car cost?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'cuesta', role: 'verb' },
          { text: 'el carro?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'the car', role: 'subject' },
          { text: 'cost?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'What costs a lot of money?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'cuesta', role: 'verb' },
          { text: 'mucho dinero?', role: 'object' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'costs', role: 'verb' },
          { text: 'a lot of money?', role: 'object' },
        ],
      },
    ],
  },
  'El carro reduce la congestión': {
    baseSentence: 'El carro reduce la congestión',
    phrases: [
      {
        key: 'translation',
        complete: 'The car reduces congestion',
        english: [
          { text: 'The car', role: 'subject' },
          { text: 'reduces', role: 'verb' },
          { text: 'congestion', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does the car reduce congestion?',
        spanish: [
          { text: '¿El carro', role: 'subject' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'the car', role: 'subject' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, the car doesn't reduce congestion",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'el carro', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'the car', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does the car reduce?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'reduce', role: 'verb' },
          { text: 'el carro?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'the car', role: 'subject' },
          { text: 'reduce?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'What reduces congestion?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión?', role: 'object' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'reduces', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
    ],
  },
  'Aprender un idioma abre puertas': {
    baseSentence: 'Aprender un idioma abre puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'Learning a language opens doors',
        english: [
          { text: 'Learning a language', role: 'subject' },
          { text: 'opens', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does learning a language open doors?',
        spanish: [
          { text: '¿Aprender un idioma', role: 'subject' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'learning a language', role: 'subject' },
          { text: 'open', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, learning a language doesn't open doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'aprender un idioma', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'learning a language', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'open', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does learning a language open?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'abre', role: 'verb' },
          { text: 'aprender un idioma?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'learning a language', role: 'subject' },
          { text: 'open?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'What opens doors?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'opens', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },
  'El sistema de transporte público abre puertas': {
    baseSentence: 'El sistema de transporte público abre puertas',
    phrases: [
      {
        key: 'translation',
        complete: 'The public transportation system opens doors',
        english: [
          { text: 'The public transportation system', role: 'subject' },
          { text: 'opens', role: 'verb' },
          { text: 'doors', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does the public transportation system open doors?',
        spanish: [
          { text: '¿El sistema de transporte público', role: 'subject' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'the public transportation system', role: 'subject' },
          { text: 'open', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete: "No, the public transportation system doesn't open doors",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'el sistema de transporte público', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'the public transportation system', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'open', role: 'verb' },
          { text: 'doors.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does the public transportation system open?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'abre', role: 'verb' },
          { text: 'el sistema de transporte público?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'the public transportation system', role: 'subject' },
          { text: 'open?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'What opens doors?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'abre', role: 'verb' },
          { text: 'puertas?', role: 'object' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'opens', role: 'verb' },
          { text: 'doors?', role: 'object' },
        ],
      },
    ],
  },
  'El sistema de transporte público reduce la congestión': {
    baseSentence: 'El sistema de transporte público reduce la congestión',
    phrases: [
      {
        key: 'translation',
        complete: 'The public transportation system reduces congestion',
        english: [
          { text: 'The public transportation system', role: 'subject' },
          { text: 'reduces', role: 'verb' },
          { text: 'congestion', role: 'object' },
        ],
      },
      {
        key: 'interrogative',
        complete: 'Does the public transportation system reduce congestion?',
        spanish: [
          { text: '¿El sistema de transporte público', role: 'subject' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión?', role: 'object' },
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'the public transportation system', role: 'subject' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
      {
        key: 'negation',
        complete:
          "No, the public transportation system doesn't reduce congestion",
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'el sistema de transporte público', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión.', role: 'object' },
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'the public transportation system', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' },
          { text: 'reduce', role: 'verb' },
          { text: 'congestion.', role: 'object' },
        ],
      },
      {
        key: 'wh-object',
        complete: 'What does the public transportation system reduce?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'reduce', role: 'verb' },
          { text: 'el sistema de transporte público?', role: 'subject' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'the public transportation system', role: 'subject' },
          { text: 'reduce?', role: 'verb' },
        ],
      },
      {
        key: 'wh-subject',
        complete: 'What reduces congestion?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'reduce', role: 'verb' },
          { text: 'la congestión?', role: 'object' },
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'reduces', role: 'verb' },
          { text: 'congestion?', role: 'object' },
        ],
      },
    ],
  },
};

// export const validSentences = {
//   "Mi mamá tiene la tarea": {
//     phrases: [
//       {
//         key: 'translation', // ¿Mi mamá tiene su tarea?
//         complete: 'My mom has the homework',
//         english: [
//           { text: 'My mom', role: 'subject' },
//           { text: 'has', role: 'verb' },
//           { text: 'the homework', role: 'object' }
//         ]
//       },
//       {
//         key: 'interrogative', // ¿Mi mamá tiene su tarea?
//         complete: 'Does my mom have the homework?',
//         spanish: [
//           { text: '¿Mi mamá', role: 'subject' },
//           { text: 'tiene', role: 'verb' },
//           { text: 'la tarea?', role: 'object' }
//         ],
//         english: [
//           { text: 'Does', role: 'auxiliary' },
//           { text: 'my mom', role: 'subject' },
//           { text: 'have', role: 'verb' },
//           { text: 'the homework?', role: 'object' }
//         ]
//       },
//       {
//         key: 'negation', // No, mi mamá no tiene su tarea
//         complete: 'No, my mom doesn\'t have the homework',
//         spanish: [
//           { text: 'No,', role: 'negation' },
//           { text: 'mi mamá', role: 'subject' },
//           { text: 'no', role: 'negation' },
//           { text: 'tiene', role: 'verb' },
//           { text: 'la tarea.', role: 'object' }
//         ],
//         english: [
//           { text: 'No,', role: 'negation' },
//           { text: 'my mom', role: 'subject' },
//           { text: "doesn't", role: 'verb-negation' }, // Combining doesn't for simplicity
//           { text: 'have', role: 'verb' },
//           { text: 'the homework.', role: 'object' }
//         ]
//       },
//       {
//         key: 'wh-object', // ¿Qué tiene mi mamá?
//         complete: 'What does my mom have?',
//         spanish: [
//           { text: '¿Qué', role: 'wh-word' },
//           { text: 'tiene', role: 'verb' },
//           { text: 'mi mamá?', role: 'subject' }
//         ],
//         english: [
//           { text: 'What', role: 'wh-word' },
//           { text: 'does', role: 'auxiliary' },
//           { text: 'my mom', role: 'subject' },
//           { text: 'have?', role: 'verb' }
//         ]
//       },
//       {
//         key: 'wh-subject', // ¿Quién tiene la tarea?
//         complete: 'Who has the homework',
//         spanish: [
//           { text: '¿Quién', role: 'wh-word' }, // 'Quién' replaces the subject
//           { text: 'tiene', role: 'verb' },
//           { text: 'la tarea?', role: 'object' }
//         ],
//         english: [
//           { text: 'Who', role: 'wh-word' }, // 'Who' replaces the subject
//           { text: 'has', role: 'verb' },
//           { text: 'the homework?', role: 'object' }
//         ]
//       }
//     ]
//   }
// };

// export const validSentences = {
//   'Mi mamá tiene su tarea': {
//     english: 'My mom has her homework',
//     questions: {
//       spanish: [
//         '¿Mi mamá tiene su tarea?',
//         'No, mi mamá no tiene su tarea',
//         '¿Que tiene mi mamá?',
//         '¿Quien tiene la tarea?'
//       ],
//       english: [
//         'Does my mom have her homework?',
//         'No, my mom doesn\'t have her homework',
//         'What does my mom have?',
//         'Who has the homework?'
//       ],

//     }
//   }
//   // Continue for all sentences...
// };

// export const validSentences = {
//   'Mi mamá tiene su tarea': {
//     spanish: 'Mi mama tiene su tarea', //don't need this one.
//     english: 'My mom has her homework',
//     questions: {
//       spanish: [
//         '¿Mi mamá tiene su tarea?',
//         'No, mi mamá no tiene su tarea',
//         '¿Que tiene mi mamá?',
//         '¿Quien tiene la tarea?'
//       ],
//       english: [
//         'Does my mom have her homework?',
//         'No, my mom doesn\'t have her homework',
//         'What does my mom have?',
//         'Who has the homework?'
//       ],

//     }
//   }
//   // Continue for all sentences...
// };

// export const validSentences = {
//   'Mi mama tiene su tarea': [
//     '¿Mi mama tiene su tarea?',
//     'No, mi mama no tiene su tarea',
//     '¿Que tiene mi mama?',
//     '¿Quien tiene la tarea?'
//   ],
//   'Mi mama tiene una casa grande': [
//     '¿Mi mama tiene una casa grande?',
//     'No, mi mama no tiene una casa grande',
//     '¿Que tiene mi mama?',
//     '¿Quien tiene una casa grande?'
//   ],
//   'Mi mama tiene puertas': [
//     '¿Mi mama tiene puertas?',
//     'No, mi mama no tiene puertas',
//     '¿Que tiene mi mama?',
//     '¿Quien tiene puertas?'
//   ],
//   'Mi mama tiene congestion': [
//     '¿Mi mama tiene congestion?',
//     'No, mi mama no tiene congestion',
//     '¿Que tiene mi mama?',
//     '¿Quien tiene congestion?'
//   ],
//   'Mi mama tiene mucho dinero': [
//     '¿Mi mama tiene mucho dinero?',
//     'No, mi mama no tiene mucho dinero',
//     '¿Que tiene mi mama?',
//     '¿Quien tiene mucho dinero?'
//   ],
//   'Mi mama hace comida en navidad': [
//     '¿Mi mama hace comida en navidad?',
//     'No, mi mama no hace comida en navidad',
//     '¿Que hace mi mama?',
//     '¿Quien hace comida en navidad?'
//   ],
//   'Mi mama hace una casa grande': [
//     '¿Mi mama hace una casa grande?',
//     'No, mi mama no hace una casa grande',
//     '¿Que hace mi mama?',
//     '¿Quien hace una casa grande?'
//   ],
//   'Mi mama hace su tarea': [
//     '¿Mi mama hace su tarea?',
//     'No, mi mama no hace su tarea',
//     '¿Que hace mi mama?',
//     '¿Quien hace la tarea?'
//   ],
//   'Mi mama hace puertas': [
//     '¿Mi mama hace puertas?',
//     'No, mi mama no hace puertas',
//     '¿Que hace mi mama?',
//     '¿Quien hace puertas?'
//   ],
//   'Mi mama hace mucho dinero': [
//     '¿Mi mama hace mucho dinero?',
//     'No, mi mama no hace mucho dinero',
//     '¿Que hace mi mama?',
//     '¿Quien hace mucho dinero?'
//   ],
//   'Mi mama abre puertas': [
//     '¿Mi mama abre puertas?',
//     'No, mi mama no abre puertas',
//     '¿Que abre mi mama?',
//     '¿Quien abre puertas?'
//   ],
//   'Mi mama reduce la congestion': [
//     '¿Mi mama reduce la congestion?',
//     'No, mi mama no reduce la congestion',
//     '¿Que reduce mi mama?',
//     '¿Quien reduce la congestion?'
//   ],
//   'Mis padres tienen comida en navidad': [
//     '¿Mis padres tienen comida en navidad?',
//     'No, mis padres no tienen comida en navidad',
//     '¿Que tienen mis padres?',
//     '¿Quien tiene comida en navidad?'
//   ],
//   'Mis padres tienen su tarea': [
//     '¿Mis padres tienen su tarea?',
//     'No, mis padres no tienen su tarea',
//     '¿Que tienen mis padres?',
//     '¿Quien tiene la tarea?'
//   ],
//   'Mis padres tienen una casa grande': [
//     '¿Mis padres tienen una casa grande?',
//     'No, mis padres no tienen una casa grande',
//     '¿Que tienen mis padres?',
//     '¿Quien tiene una casa grande?'
//   ],
//   'Mis padres tienen puertas': [
//     '¿Mis padres tienen puertas?',
//     'No, mis padres no tienen puertas',
//     '¿Que tienen mis padres?',
//     '¿Quien tiene puertas?'
//   ],
//   'Mis padres tienen congestion': [
//     '¿Mis padres tienen congestion?',
//     'No, mis padres no tienen congestion',
//     '¿Que tienen mis padres?',
//     '¿Quien tiene congestion?'
//   ],
//   'Mis padres tienen mucho dinero': [
//     '¿Mis padres tienen mucho dinero?',
//     'No, mis padres no tienen mucho dinero',
//     '¿Que tienen mis padres?',
//     '¿Quien tiene mucho dinero?'
//   ],
//   'Mis padres hacen comida en navidad': [
//     '¿Mis padres hacen comida en navidad?',
//     'No, mis padres no hacen comida en navidad',
//     '¿Que hacen mis padres?',
//     '¿Quien hace comida en navidad?'
//   ],
//   'Mis padres hacen su tarea': [
//     '¿Mis padres hacen su tarea?',
//     'No, mis padres no hacen su tarea',
//     '¿Que hacen mis padres?',
//     '¿Quien hace la tarea?'
//   ],
//   'Mis padres hacen una casa grande': [
//     '¿Mis padres hacen una casa grande?',
//     'No, mis padres no hacen una casa grande',
//     '¿Que hacen mis padres?',
//     '¿Quien hace una casa grande?'
//   ],
//   'Mis padres hacen puertas': [
//     '¿Mis padres hacen puertas?',
//     'No, mis padres no hacen puertas',
//     '¿Que hacen mis padres?',
//     '¿Quien hace puertas?'
//   ],
//   'Mis padres hacen mucho dinero': [
//     '¿Mis padres hacen mucho dinero?',
//     'No, mis padres no hacen mucho dinero',
//     '¿Que hacen mis padres?',
//     '¿Quien hace mucho dinero?'
//   ],
//   'Mis padres abren puertas': [
//     '¿Mis padres abren puertas?',
//     'No, mis padres no abren puertas',
//     '¿Que abren mis padres?',
//     '¿Quien abre puertas?'
//   ],
//   'Mis padres reducen la congestion': [
//     '¿Mis padres reducen la congestion?',
//     'No, mis padres no reducen la congestion',
//     '¿Que reducen mis padres?',
//     '¿Quien reduce la congestion?'
//   ],
//   'El carro tiene puertas': [
//     '¿El carro tiene puertas?',
//     'No, el carro no tiene puertas',
//     '¿Que tiene el carro?',
//     '¿Quien tiene puertas?'
//   ],
//   'El carro cuesta mucho dinero': [
//     '¿El carro cuesta mucho dinero?',
//     'No, el carro no cuesta mucho dinero',
//     '¿Que cuesta el carro?',
//     '¿Quien cuesta mucho dinero?'
//   ],
//   'El carro reduce la congestion': [
//     '¿El carro reduce la congestion?',
//     'No, el carro no reduce la congestion',
//     '¿Que reduce el carro?',
//     '¿Quien reduce la congestion?'
//   ],
//   'Aprender un idioma abre puertas': [
//     '¿Aprender un idioma abre puertas?',
//     'No, aprender un idioma no abre puertas',
//     '¿Que abre aprender un idioma?',
//     '¿Quien abre puertas?'
//   ],
//   'El sistema de transporte publico abre puertas': [
//     '¿El sistema de transporte publico abre puertas?',
//     'No, el sistema de transporte publico no abre puertas',
//     '¿Que abre el sistema de transporte publico?',
//     '¿Quien abre puertas?'
//   ],
//   'El sistema de transporte publico reduce la congestion': [
//     '¿El sistema de transporte publico reduce la congestion?',
//     'No, el sistema de transporte publico no reduce la congestion',
//     '¿Que reduce el sistema de transporte publico?',
//     '¿Quien reduce la congestion?'
//   ]
// };
