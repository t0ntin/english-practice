export const pastFlags = {
  currentStory: 0,
  currentSentence: null,

}


export let pastStories = [
  {
    title: "El parque y la ardilla",
    sentences: [
      {
        done: false,
        toPractice: false,
        spanish: "Ayer fui al parque",
        correct: "Yesterday, I went to the park",
        translations: [
          "Yesterday, I went to the park",
          "Yesterday, I go to the park",
          "Yesterday, I did go to the park"
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "porque queria que mi perro hiciera ejercicio.",
        correct: "because I wanted my dog to get exercise.",
        translations: [
          "because I wanted my dog to get exercise.",
          "because I want my dog to get exercise.",
          "because I did want my dog to get exercise."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "No habia mucha gente allí.",
        correct: "There were not many people there.",
        translations: [
          "There were not many people there.",
          "There are not many people there.",
          "There was not many people there.",
          "There is not many people there."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Caminábamos por un camino",
        correct: "We were walking along a path",
        translations: [
          "We were walking along a path",
          "We walk along a path",
          "We did walk along a path",
          "We was walking along a path"
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "cuando vimos un pájaro rojo.",
        correct: "when we saw a red bird.",
        translations: [
          "when we saw a red bird.",
          "when we see a red bird.",
          "when we did see a red bird.",
          "when we did saw a red bird.",
          "when we were seeing a red bird."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "El pájaro voló hacia un árbol.",
        correct: "The bird flew toward a tree.",
        translations: [
          "The bird flew toward a tree.",
          "The bird fly toward a tree.",
          "The bird did fly toward a tree.",
          "The bird was flying toward a tree."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Mi perro ladró y corrió detrás de él.",
        correct: "My dog barked and ran after it.",
        translations: [
          "My dog barked and ran after it.",
          "My dog bark and run after it.",
          "My dog did bark and ran after it."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Yo grité su nombre y él regresó rápidamente.",
        correct: "I shouted his name and he quickly returned.",
        translations: [
          "I shouted his name and he quickly returned.",
          "I shout his name and he quickly returns.",
          "I did shout his name and he quickly returned."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Después, nos sentamos en un banco.",
        correct: "Afterward, we sat down on a bench.",
        translations: [
          "Afterward, we sat down on a bench.",
          "Afterward, we sit down on a bench.",
          "Afterward, we did sit down on a bench."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Comí un sándwich y mi perro bebió agua.",
        correct: "I ate a sandwich and my dog drank water.",
        translations: [
          "I ate a sandwich and my dog drank water.",
          "I eat a sandwich and my dog drink water.",
          "I did eat a sandwich and my dog drank water."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "De repente, una ardilla loca saltó sobre mi cabeza",
        correct: "Suddenly, a crazy squirrel jumped onto my head",
        translations: [
          "Suddenly, a crazy squirrel jumped onto my head",
          "Suddenly, a crazy squirrel jump onto my head",
          "Suddenly, a crazy squirrel did jump onto my head"
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "y me robó el sándwich.",
        correct: "and stole my sandwich.",
        translations: [
          "and stole my sandwich.",
          "and steal my sandwich.",
          "and rob my sandwich.",
          "and did steal my sandwich."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "La ardilla corrió por el árbol",
        correct: "The squirrel ran up the tree",
        translations: [
          "The squirrel ran up the tree",
          "The squirrel run up the tree",
          "The squirrel did run up the tree"
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "y tiró el sándwich a un hombre que dormía en el pasto.",
        correct: "and threw the sandwich at a man who was sleeping on the grass.",
        translations: [
          "and threw the sandwich at a man who was sleeping on the grass.",
          "and throw the sandwich at a man who sleeps on the grass.",
          "and did throw the sandwich at a man who slept on the grass."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "El hombre gritó y se levantó.",
        correct: "The man shouted and stood up.",
        translations: [
          "The man shouted and stood up.",
          "The man shout and stand up.",
          "The man did shout and stood up."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Mi perro ladró y la ardilla chilló.",
        correct: "My dog barked and the squirrel squeaked.",
        translations: [
          "My dog barked and the squirrel squeaked.",
          "My dog bark and the squirrel squeaks.",
          "My dog did bark and the squirrel squeaked."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Yo me reí mucho y el hombre también se rió.",
        correct: "I laughed a lot and the man also laughed.",
        translations: [
          "I laughed a lot and the man also laughed.",
          "I laugh a lot and the man also laughs.",
          "I did laugh a lot and the man also laughed."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Después, el hombre me dijo que le diera el sandwich a mi perro.",
        correct: "Then, the man told me to give the sandwich to my dog.",
        translations: [
          "Then, the man told me to give the sandwich to my dog.",
          "Then, the man tell me to give the sandwich to my dog.",
          "Then, the man did tell me to give the sandwich to my dog."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "El sol brilló todo el día",
        correct: "The sun shone all day",
        translations: [
          "The sun shone all day",
          "The sun shine all day",
          "The sun did shine all day"
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "y nosotros disfrutamos mucho el paseo.",
        correct: "and we enjoyed the walk a lot.",
        translations: [
          "and we enjoyed the walk a lot.",
          "and we enjoy a lot the walk.",
          "and we did enjoy a lot the walk."
        ]
      }
    ]
  },
  {
    title: "El desastre de la lavadora",
    sentences: [
      {
        done: false,
        toPractice: false,
        spanish: "La semana pasada, Juan decidió lavar la ropa.",
        correct: "Last week, Juan decided to do the laundry.",
        translations: [
          "Last week, Juan decided to do the laundry.",
          "The week, Juan decided to do the laundry.",
          "The last week, Juan decide to do the laundry.",
          "The last week, Juan did decide to do the laundry."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Fue al baño.",
        correct: "He went to the bathroom.",
        translations: [
          "He went to the bathroom.",
          "He go to the bathroom.",
          "He did go to the bathroom."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Metió todo en la máquina.",
        correct: "He put everything in the machine.",
        translations: [
          "He put everything in the machine.",
          "He putted everything in the machine.",
          "He did put everything in the machine."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Le echó demasiado detergente.",
        correct: "He added too much detergent.",
        translations: [
          "He added too much detergent.",
          "He add too much detergent.",
          "He did add too much detergent."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Poco después, la lavadora empezó a vibrar.",
        correct: "Shortly after, the washing machine started to vibrate.",
        translations: [
          "Shortly after, the washing machine started to vibrate.",
          "Shortly after, the washing machine start to vibrate.",
          "Shortly after, the washing machine did start to vibrate."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Hacía un ruido muy raro.",
        correct: "It was making a very strange noise.",
        translations: [
          "It was making a very strange noise.",
          "It make a very strange noise.",
          "It was make a very strange noise.",
          "It was making a noise very strange."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Juan corrió al baño.",
        correct: "Juan ran to the bathroom.",
        translations: [
          "Juan ran to the bathroom.",
          "Juan run to the bathroom.",
          "Juan did run to the bathroom."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Vio que había montañas de burbujas.",
        correct: "He saw that there were mountains of bubbles.",
        translations: [
          "He saw that there were mountains of bubbles.",
          "He see that there are mountains of bubbles.",
          "He did see that there are mountains of bubbles."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Había tanta espuma",
        correct: "There was so much foam",
        translations: [
          "There was so much foam",
          "There is so much foam",
          "There were so much foam",
          "It have so much foam",
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "que cubría casi todo el suelo.",
        correct: "that it covered almost the whole floor.",
        translations: [
          "that it covered almost the whole floor.",
          "that it cover almost the whole floor.",
          "that it did cover almost the whole floor."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "El perro de Juan corrió al baño",
        correct: "Juan's dog ran to the bathroom",
        translations: [
          "Juan's dog ran to the bathroom",
          "The dog Juan run to the bathroom",
          "Juan's dog run to the bathroom",
          "Juan's dog did run to the bathroom"
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "porque quería ver qué pasaba.",
        correct: "because he wanted to see what was happening.",
        translations: [
          "because he wanted to see what was happening.",
          "because he want to see what is happening.",
          "because he did want to see what is happening."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Juan lo oyó ladrar como loco",
        correct: "Juan heard him bark like crazy",
        translations: [
          "Juan heard him bark like crazy",
          "Juan hear him to bark like crazy",
          "Juan did hear him to bark like crazy"
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "mientras el gato intentaba caminar entre la espuma.",
        correct: "while the cat tried to walk through the foam.",
        translations: [
          "while the cat tried to walk through the foam.",
          "while the cat try to walk through the foam.",
          "while the cat did try to walk through the foam."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Los animales quedaron cubiertos de jabón.",
        correct: "The animals ended up covered in soap.",
        translations: [
          "The animals ended up covered in soap.",
          "The animals end up covered in soap.",
          "The animals did end up covered in soap."
        ]
      },
      {
        done: false,
        toPractice: false,
        spanish: "Juan pasó tres horas limpiando el desastre.",
        correct: "Juan spent three hours cleaning the mess.",
        translations: [
          "Juan spent three hours cleaning the mess.",
          "Juan spend three hours cleaning the mess.",
          "Juan did spend three hours cleaning the mess."
        ]
      }
    ]
  }
];
