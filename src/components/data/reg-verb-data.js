export const regVerbFlags = {
  currentVerb: 0,
  currentVerbGroup: "common",
}

export const regVerbData = [
  {
    mainVerbs1: ['Wanted', 'Needed'],
    mainVerbs2: ['Grabbed', 'Laughed', 'Plugged', 'Worked', 'Called', 'Seemed', 'Cleaned', 'Stopped', 'Offered', 'Passed', 'Lived', 'Fixed', 'Buzzed', 'Washed'],
  },
  {
  commonVerbs: [ 
    "Talked","Begged", "Provided", "Pushed", "Waited", "Pulled", "Jogged", "Mixed", "Stabbed", "Asked", "Kissed", "Loved", "Rained","Jumped", "Answered", "Opened", "Realized", "Coughed", "Added", "Finished", "Started", "Filled", "Relaxed", "Robbed", "Looked", "Raced", "Moved",
    "Dropped", "Remembered", "Turned", "Dreamed", "Disturbed","Hugged", "Recognized", "Stuffed", "Typed", "Helped", "Considered", "Learned", "Hummed", "Emphasized", "Puffed", "Hoped", "Delivered", "Listened", "Rammed", "Organized", "Sounded","Snuffed", "Created", "Walked","Calmed", "Authorized", "Mailed", "Spilled", "Killed", "Danced", "Placed", "Promised", "Saved", "Improved", "Dragged", "Served", "Boxed", "Taxed", "Flexed", "Brushed", "Crashed", "Wished", "Scrubbed", "Zipped", "Liked", "Rested", "Zoomed", "Snagged", "Bored", "Reminded", "Absorbed","Toughed", "Included",
  ],

  uncommonVerbs: [
    "Jolted", "Roughed", "Zigzagged", "Ducked", "Padded","Dwelled", "Charmed", "Yearned", "Clipped", "Whispered", "Hissed", "Weaved", "Waxed", "Quizzed", "Bashed", "Tilted", "Dubbed", "Scuffed", "Tugged", "Snacked", "Yielded", "Firmed", "Glistened", "Stripped", "Barred", "Noticed", "Carved", "Maxed", "Fizzed", "Swooshed",  "Gutted", "Blabbed", "Buffed", "Mugged", "Peeked", "Chilled", "Harmed", "Summoned", "Gripped", "Blurred", "Dismissed", "Starved", "Faxed", "Jazzed", "Mushed", "Nodded", "Knitted", "Bobbed", "Muffed", "Shrugged", "Licked", "Thrilled", "Warmed", "Shunned", "Snapped", "Cluttered", "Welded", "Produced", "Observed", "Fluxed", "Whizzed", "Demolished", "Wedded", "Netted", "Curbed", "Huffed", "Clogged", "Shacked", "Puzzled", "Stormed", "Scorned", "Tapped", "Fluttered", "Reduced",  "Reserved", "Plexed", "Sympathized", "Abolished",  "Glided", "Dabbed"
  ]
  }
];
//hook, peeked, licked, 
export const allVerbs = {
  Grabbed: ["Stabbed", "Robbed", "Absorbed", "Disturbed", "Scrubbed", "Dabbed", "Dubbed", "Blabbed", "Bobbed", "Curbed"],
  Laughed: ["Coughed", "Stuffed", "Puffed", "Snuffed", "Toughed", "Roughed", "Scuffed", "Buffed", "Muffed", "Huffed"],
  Plugged: ["Begged", "Jogged", "Hugged", "Dragged", "Snagged", "Zigzagged", "Tugged", "Mugged", "Shrugged", "Clogged"],
  Worked: ["Asked", "Looked", "Walked", "Talked", "Liked", "Ducked", "Snacked", "Peeked", "Licked", "Shacked"],
  Called: ["Pulled", "Filled", "Mailed", "Spilled", "Killed", "Dwelled", "Yielded", "Chilled", "Thrilled", "Puzzled"],
  Seemed: ["Zoomed", "Dreamed", "Hummed", "Rammed", "Calmed", "Charmed", "Firmed", "Harmed", "Warmed", "Stormed"],
  Cleaned: ["Opened", "Turned", "Learned", "Listened", "Rained", "Yearned", "Glistened", "Summoned", "Shunned", "Scorned"],
  Stopped: ["Jumped", "Dropped", "Helped", "Hoped", "Typed", "Clipped", "Stripped", "Gripped", "Snapped", "Tapped"],
  Offered: ["Answered", "Remembered", "Considered", "Delivered", "Bored", "Whispered", "Barred", "Blurred", "Cluttered", "Fluttered"],
  Passed: ["Kissed", "Raced", "Danced", "Placed", "Promised", "Hissed", "Noticed", "Dismissed", "Produced", "Reduced"],
  Lived: ["Loved", "Moved", "Saved", "Improved", "Served", "Weaved", "Carved", "Starved", "Observed", "Reserved"],
  Fixed: ["Mixed", "Relaxed", "Boxed", "Taxed", "Flexed", "Waxed", "Maxed", "Faxed", "Fluxed", "Plexed"],
  Buzzed: ["Realized", "Recognized", "Emphasized", "Organized", "Authorized", "Quizzed", "Fizzed", "Jazzed", "Whizzed", "Sympathized"],
  Washed: ["Pushed", "Finished", "Brushed", "Crashed", "Wished", "Bashed", "Swooshed", "Mushed", "Demolished", "Abolished"],
  Wanted: ["Waited", "Started", "Created", "Rested", "Expected", "Jolted", "Tilted", "Gutted", "Knitted", "Netted"],
  Needed: ["Provided", "Reminded", "Included", "Sounded", "Added", "Nodded", "Wedded", "Padded", "Glided", "Welded"]
};