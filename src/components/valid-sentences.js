export const validSentences = {
  "Mi mamá tiene su tarea": {
    baseSentence: "Mi mamá tiene su tarea",
    phrases: [
      {
        key: 'translation', // ¿Mi mamá tiene su tarea?
        complete: 'My mom has the homework',
        english: [
          { text: 'My mom', role: 'subject' },
          { text: 'has', role: 'verb' },
          { text: 'the homework', role: 'object' }
        ]
      },
      {
        key: 'interrogative', // ¿Mi mamá tiene su tarea?
        complete: 'Does my mom have the homework?',
        spanish: [
          { text: '¿Mi mamá', role: 'subject' },
          { text: 'tiene', role: 'verb' },
          { text: 'su tarea?', role: 'object' }
        ],
        english: [
          { text: 'Does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have', role: 'verb' },
          { text: 'the homework?', role: 'object' }
        ]
      },
      {
        key: 'negation', // No, mi mamá no tiene su tarea
        complete: 'No, my mom doesn\'t have the homework',
        spanish: [
          { text: 'No,', role: 'negation' },
          { text: 'mi mamá', role: 'subject' },
          { text: 'no', role: 'negation' },
          { text: 'tiene', role: 'verb' },
          { text: 'su tarea.', role: 'object' }
        ],
        english: [
          { text: 'No,', role: 'negation' },
          { text: 'my mom', role: 'subject' },
          { text: "doesn't", role: 'verb-negation' }, // Combining doesn't for simplicity
          { text: 'have', role: 'verb' },
          { text: 'her homework.', role: 'object' }
        ]
      },
      {
        key: 'wh-object', // ¿Qué tiene mi mamá?
        complete: 'What does my mom have?',
        spanish: [
          { text: '¿Qué', role: 'wh-word' },
          { text: 'tiene', role: 'verb' },
          { text: 'mi mamá?', role: 'subject' }
        ],
        english: [
          { text: 'What', role: 'wh-word' },
          { text: 'does', role: 'auxiliary' },
          { text: 'my mom', role: 'subject' },
          { text: 'have?', role: 'verb' }
        ]
      },
      {
        key: 'wh-subject', // ¿Quién tiene la tarea?
        complete: 'Who has the homework',
        spanish: [
          { text: '¿Quién', role: 'wh-word' }, // 'Quién' replaces the subject
          { text: 'tiene', role: 'verb' },
          { text: 'la tarea?', role: 'object' }
        ],
        english: [
          { text: 'Who', role: 'wh-word' }, // 'Who' replaces the subject
          { text: 'has', role: 'verb' },
          { text: 'the homework?', role: 'object' }
        ]
      }
    ]
  }
};




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


