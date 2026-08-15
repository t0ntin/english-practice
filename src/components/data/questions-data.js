export const questionsFlags = {
  currentSentence: 0,
  currentQuestion: 0,
}

export const questions = [
  {
    statement: {
      text: 'The doctor sees John in his office once a month',
      chunks: [
        { text: 'The doctor', role: 'subject-2' },
        { text: 'sees', role: 'verb-2' },
        { text: 'John', role: 'object-2' },
        { text: 'in his office', role: 'prep-phrase' },
        { text: 'once a month', role: 'frequency' },
      ],
    },

    questions: [
      {
        type: 'subject',
        partOfSpeech: 'The doctor',
        role: 'subject-2',
        instruction: 'Ask a question about ',
        text: 'Who sees John in his office once a month',
        hint: 'Who...',
        hint2: '¿Quién ve a John en su oficina una vez al mes?',
        chunks: [
          { text: 'Who', role: 'interrogative' },
          { text: 'sees', role: 'verb-2' },
          { text: 'John', role: 'object-2' },
          { text: 'in his office', role: 'prep-phrase' },
          { text: 'once a month?', role: 'frequency' },
        ],
      },

      {
        type: 'verb',
        partOfSpeech: 'sees',
        role: 'verb-2',
        instruction: 'Ask a question about ',
        text: 'What does the doctor do in his office once a month',
        hint: 'What...',
        hint2: '¿Qué hace el doctor en su oficina una vez al mes?',
        chunks: [
          { text: 'What', role: 'interrogative' },
          { text: 'does', role: 'aux' },
          { text: 'the doctor', role: 'subject-2' },
          { text: 'do', role: 'verb-2' },
          { text: 'in his office', role: 'prep-phrase' },
          { text: 'once a month', role: 'frequency' },
        ],
      },

      {
        type: 'object',
        partOfSpeech: 'John',
        role: 'object-2',
        instruction: 'Ask a question about ',
        text: 'Who does the doctor see in his office once a month',
        hint: 'Who...',
        hint2: '¿A quién ve el doctor en su oficina una vez al mes?',
        chunks: [
          { text: 'Who', role: 'interrogative' },
          { text: 'does', role: 'aux' },
          { text: 'the doctor', role: 'subject-2' },
          { text: 'see', role: 'verb-2' },
          { text: 'in his office', role: 'prep-phrase' },
          { text: 'once a month?', role: 'frequency' },
        ],
      },

      {
        type: 'place',
        partOfSpeech: 'in his office',
        role: 'prep-phrase',
        instruction: 'Ask a question about ',
        text: 'Where does the doctor see John once a month',
        hint: 'Where...',
        hint2: '¿Dónde ve el doctor a John una vez al mes?',
        chunks: [
          { text: 'Where', role: 'interrogative' },
          { text: 'does', role: 'aux' },
          { text: 'the doctor', role: 'subject-2' },
          { text: 'see', role: 'verb-2' },
          { text: 'John', role: 'object-2' },
          { text: 'once a month?', role: 'frequency' },
        ],
      },

      {
        type: 'frequency',
        partOfSpeech: 'once a month',
        role: 'frequency',
        instruction: 'Ask a question about ',
        text: 'How often does the doctor see John in his office',
        hint: 'How often...',
        hint2: '¿Cada cuánto ve el doctor a John en su oficina?',
        chunks: [
          { text: 'How often', role: 'interrogative' },
          { text: 'does', role: 'aux' },
          { text: 'the doctor', role: 'subject-2' },
          { text: 'see', role: 'verb-2' },
          { text: 'John', role: 'object-2' },
          { text: 'in his office?', role: 'prep-phrase' },
        ],
      },
      
    ],
  },
  {
  statement: {
    text: 'John makes dinner quickly for his family',
    chunks: [
      { text: 'John', role: 'subject-2' },
      { text: 'makes', role: 'verb-2' },
      { text: 'dinner', role: 'object-2' },
      { text: 'quickly', role: 'adverb' },
      { text: 'for his family', role: 'prep-phrase' },
    ],
  },

  questions: [
    {
      type: 'subject',
      partOfSpeech: 'John',
      role: 'subject-2',
      instruction: 'Ask a question about ',
      text: 'Who makes dinner quickly for his family',
      hint: 'Who...',
      hint2: '¿Quién prepara la cena rápidamente para su familia?',
      chunks: [
        { text: 'Who', role: 'interrogative' },
        { text: 'makes', role: 'verb-2' },
        { text: 'dinner', role: 'object-2' },
        { text: 'quickly', role: 'adverb' },
        { text: 'for his family?', role: 'prep-phrase' },
      ],
    },

    {
      type: 'verb',
      partOfSpeech: 'makes',
      role: 'verb-2',
      instruction: 'Ask a question about ',
      text: 'What does John do quickly for his family?',
      hint: 'What...',
      hint2: '¿Qué hace John rápidamente para su familia?',
      chunks: [
        { text: 'What', role: 'interrogative' },
        { text: 'does', role: 'aux' },
        { text: 'John', role: 'subject-2' },
        { text: 'do', role: 'verb-2' },
        { text: 'quickly', role: 'adverb' },
        { text: 'for his family?', role: 'prep-phrase' },
      ],
    },

    {
      type: 'object',
      partOfSpeech: 'dinner',
      role: 'object-2',
      instruction: 'Ask a question about ',
      text: 'What does John make quickly for his family?',
      hint: 'What...',
      hint2: '¿Qué prepara John rápidamente para su familia?',
      chunks: [
        { text: 'What', role: 'interrogative' },
        { text: 'does', role: 'aux' },
        { text: 'John', role: 'subject-2' },
        { text: 'make', role: 'verb-2' },
        { text: 'quickly', role: 'adverb' },
        { text: 'for his family?', role: 'prep-phrase' },
      ],
    },

    {
      type: 'manner',
      partOfSpeech: 'quickly',
      role: 'adverb',
      instruction: 'Ask a question about ',
      text: 'How does John make dinner for his family?',
      hint: 'How...',
      hint2: '¿Cómo prepara John la cena para su familia?',
      chunks: [
        { text: 'How', role: 'interrogative' },
        { text: 'does', role: 'aux' },
        { text: 'John', role: 'subject-2' },
        { text: 'make', role: 'verb-2' },
        { text: 'dinner', role: 'object-2' },
        { text: 'for his family?', role: 'prep-phrase' },
      ],
    },

    {
      type: 'purpose',
      partOfSpeech: 'for his family',
      role: 'prep-phrase',
      instruction: 'Ask a question about ',
      text: 'Who does John make dinner for quickly?',
      hint: 'Who...',
      hint2: '¿Para quién prepara John la cena rápidamente?',
      chunks: [
        { text: 'Who', role: 'interrogative' },
        { text: 'does', role: 'aux' },
        { text: 'John', role: 'subject-2' },
        { text: 'make', role: 'verb-2' },
        { text: 'dinner', role: 'object-2' },
        { text: 'quickly?', role: 'adverb' },
      ],
    },
  ],
},

];


