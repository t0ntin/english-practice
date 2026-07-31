export const errors = [
  {
    title: "Suggest and recommend",
    incorrect: ['I suggest you the sushi.', 'I suggest you to eat sushi.', 'I suggest to find a new job.', 'What do you suggest me?'],
    correct: ['I suggest the sushi.', 'I suggest eating sushi.', 'I suggest (that) you eat the sushi.', 'What do you suggest?'],
    practice: [
      {
        english: "Mary suggests ordering chicken.",
        spanish: 'Mary sugiere ordenar pollo.'
      },
      {
        english: "Mary suggests ordering chicken, but she doesn't suggest ordering fish.",
        spanish: 'Mary sugiere ordenar pollo, pero no sugiere ordenar pescado.'
      },
      {
        english: "Mary suggested ordering chicken, but she didn't suggest ordering fish.",
        spanish: 'Mary sugirió ordenar pollo, pero no sugiriò ordenar pescado.'
      },
      {
        english: "What do you recommend?",
        spanish: '¿Qué me recomienda?'
      },
    ],
    note: 'Recommend works the same way.'
  },
    {
    title: "Advice",
    incorrect: ['Can you give me an advice?', 'Can you give me some advices?', 'Let me give you an advice.'],
    correct: ['Can you give me advice?', 'Can you give me some advice?', 'Let me give you a piece of advice.'],
    practice: [
      {
        english: "Can you give me some advice?",
        spanish: '¿Me puedes dar algunos consejos?'
      },
      {
        english: "Let me give you a piece of advice.",
        spanish: 'Déjame darte un consejo.'
      },
    ],
    note: 'Advice is like furniture and homework: we don\'t count it.'
  },
    {
    title: "Conjugation",
    incorrect: ['It make me happy.', 'Kim leave at two.', 'Kim don\'t leave at four'],
    correct: ['Me hace feliz.', 'Kim se va a las dos.', 'Kim no se va a las cuatro.'],
    practice: [
      {
        english: "Kim leaves at two. She doesn't leave at four.",
        spanish: 'Kim se va a las dos. Ella no se va a las cuatro.'
      },
      {
        english: "Mike likes the phone that takes good pictures.",
        spanish: 'A Mike le gusta el teléfono que toma buenas fotos.'
      },
      {
        english: "When she travels, she doesn take her dog.",
        spanish: 'Cuando ella viaja, no lleva su perro.'
      },
      {
        english: "A robot that cleans and cooks also takes the kids to school.",
        spanish: 'Un robot que limpia y cocina tambien lleva a los niños al colegio.'
      },
      {
        english: "Tofu? That's for someone who only eats vegetables.",
        spanish: '¿Tofu? Eso es para alguien que solo come vegetales.'
      },
      {
        english: "Does she want a car that uses gas or that doesn't use gas?",
        spanish: '¿Ella quiere un carro que usa gasolina o que no usa gasolina?.'
      },
    ],
    note: ''
  },
    {
    title: "Object + inf.",
    incorrect: ['I want that you call me.', 'I told you that call me.', 'I asked you that you don\'t call me', 'I want that she call the doctor.'],
    correct: ['I want you to call me.', 'I told you to call me.', 'I asked you not to call me.', 'I want her to call the doctor.'],
    practice: [
      {
        english: "I want you to be happy.",
        spanish: 'Quiero que seas feliz.'
      },
      {
        english: "She wants you to exercise.",
        spanish: 'Ella quiere que hagas ejercicio.'
      },
      {
        english: "Mike expects us to work.",
        spanish: 'Mike espera que nosotros trabajemos.'
      },
      {
        english: "He tells me to help him, but he doesn want me to give him the answers.",
        spanish: 'Él me dice que lo ayude, pero no quiere que le dé las respuestas.'
      },
      {
        english: "Andrea wants them to meet Mike, but she doesn't want Sally to find out.",
        spanish: 'Andrea quiere que ellos conozcan a Mike, pero no quiere que Sally se entere.'
      },
      {
        english: "Did you tell me to cook or did you tell them to cook?",
        spanish: '¿Me dijiste a mí que cocinara o les dijiste a ellos que cocinaran?'
      },
    ],
    note: ''
  },
      {
    title: "To have",
    incorrect: ['The computer have a problem', 'The computer hasn\'t a problem', 'I don\'t have started.'],
    correct: ['The computer has a problem', 'The computer doesn\'t have a problem', 'I haven\'t started.'  ],
    practice: [
      {
        english: "Mike doesn't have a car because he hasn't bought one.",
        spanish: "Mike no tiene carro porque no ha comprado uno."
      },
      {
        english: "I have tried it twice, but he hasn't tried it yet.",
        spanish: "Yo lo he probado dos veces, pero el no lo ha probado aun."
      },
      {
        english: "We don't have soap and we haven't bought any toothpaste, either.",
        spanish: 'No tenemos jabón y no hemos comprado pasta de dientes tampoco.'
      },
      {
        english: "Doesn't John have a car?",
        spanish: '¿John no tine carro?'
      },
      {
        english: "Hasn't John bought a car yet?",
        spanish: '¿John no ha comprado carro aun?'
      },
      {
        english: "Why hasn't he finished? What else does he have to do?",
        spanish: '¿Por qué él no ha terminado? ¿Qué más tiene que hacer?'
      },
    ],
    note: "\"The computer hasn't a problem.\"  is valid in British English."
  },
      {
    title: "Modals",
    incorrect: ['We must to go.'],
    correct: ['We must go.'  ],
    practice: [
      {
        english: "We must not let it bother us.",
        spanish: "No debemos dejar que nos moleste."
      },
      {
        english: "It may or may not be important",
        spanish: "Puede que sea importante y puede que no."
      },
      {
        english: "He can play the piano, but he can't play the guitar.",
        spanish: "Él puede tocar piano, pero no puede tocar guitarra."
      },
    ],
    note: "May, might, can, could, should work the same way."
  },
];

export const suggestions = errors[0];
export const advice = errors[1];
export const conjugation = errors[2];
export const objectPlusInf = errors[3];
export const toHave = errors[4];
export const modals = errors[5];

export const flags =  {
  lastSelectedTopic: null,
  lastSelectedElement:null,
  userAnswer:null,
  currentSentenceIndex: 0,
  currentGroupIndex: 0,
  chosenSentence: [],
}

export const wordOrderSentences = [
  [
    {
      words: [
        { text: 'John', color: 'red' },
        { text: 'plays', color: 'blue' },
        { text: 'in the park', color: 'rgb(227, 125, 0)' },
        { text: 'soccer', color: 'green' }
      ],
      correct: false
    },
    {
      words: [
        { text: '___', color: 'red' },
        { text: 'plays', color: 'blue' },
        { text: 'in the park', color: 'rgb(227, 125, 0)' },
        { text: 'soccer.', color: 'green' }
      ],
      correct: false
    },
    {
      words: [
        { text: 'In the park', color: 'rgb(227, 125, 0)' },
        { text: '___', color: 'red' },
        { text: 'plays', color: 'blue' },
        { text: 'soccer.', color: 'green' }
      ],
      correct: false
    },
    {
      words: [
        { text: 'John', color: 'red' },
        { text: 'plays', color: 'blue' },
        { text: 'soccer', color: 'green' },
        { text: 'in the park', color: 'rgb(227, 125, 0)' }
      ],
      correct: true
    },
    {
      words: [
        { text: 'In the park', color: 'rgb(227, 125, 0)' },
        { text: 'plays', color: 'blue' },
        { text: 'soccer', color: 'green' },
        { text: 'John.', color: 'red' }
      ],
      correct: false
    }
  ],
  [
    {
      words: [
        { text: 'Mike', color: 'red' },
        { text: 'plays', color: 'blue' },
        { text: 'tennis', color: 'green' },
        { text: 'with friends.', color: 'rgb(227, 125, 0)' }
      ],
      correct: true
    },
    {
      words: [
        { text: 'Mike', color: 'red' },
        { text: 'plays', color: 'blue' },
        { text: 'with friends.', color: 'rgb(227, 125, 0)' },
        { text: 'tennis', color: 'green' }
      ],
      correct: false
    },
    {
      words: [
        { text: '___', color: 'red' },
        { text: 'plays', color: 'blue' },
        { text: 'with friends.', color: 'rgb(227, 125, 0)' },
        { text: 'tennis.', color: 'green' }
      ],
      correct: false
    },
    {
      words: [
        { text: 'With friends,', color: 'rgb(227, 125, 0)' },
        { text: 'plays', color: 'blue' },
        { text: 'tennis', color: 'green' },
        { text: 'Mike.', color: 'red' }
      ],
      correct: false
    }
  ],
]

