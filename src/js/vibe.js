const cracks = [
    {
      "cracking": "Hann tekr sverthit Gram ok leggr i methal theira bert. ",
      "cracker": "Unknown",
      "language": "other"
    },
    {
      "cracking": "There is a moon in the sky, it is called the moon.",
      "cracker": "B52s",
      "language": "English"
    },
    {
      "cracking": "Reading maketh a full man; conference a ready man; and writing an exact man.",
      "cracker": "Frances Bacon",
      "language": "English"
    },
    {
      "cracking": "Selbst im Gähnen der Frommen ist unverkennbar die Andacht.",
      "cracker": "Jens Baggesen",
      "language": "German"
    },
    {
      "cracking": "Bela Lugosi\u2019s dead.",
      "cracker": "Bauhaus",
      "language": "English"
    },
    {
      "cracking": "One must think with the learned and speak with the vulgar.",
      "cracker": "George Berkeley",
      "language": "English"
    },
    {
      "cracking": "Eine große Wahrheit ist eine Wahrheit, dessen Gegenteil auch eine große Wahrheit ist.",
      "cracker": "Niels Bohr",
      "language": "German"
    },
    {
      "cracking": "Die Satire ist nicht weniger konventionell als ein Gespräch unter Brautleuten...Ihre Methode besteht darin, Sophismen einzuschmuggeln; ihr einziges Gesetz ist die simultane Erfindung zusammengewürfelter Argumente.",
      "cracker": "Jorge Luis Borges",
      "language": "German"
    },
    {
      "cracking": "There but for the grace of God go I.",
      "cracker": "John Bradford",
      "language": "English"
    },
    {
      "cracking": "The day broke grey and dull.",
      "cracker": "W. Somerset Maugham",
      "language": "English"
    },
    {
      "cracking": "Die Wörter »Onkel Toms Hütte« teilen uns möglicherweise nicht alle Einzelheiten der Geschichte mit.",
      "cracker": "J.L. Borges; Bioy Casares",
      "language": "German"
    },
    {
      "cracking": "It is a riddle wrapped in a mystery inside an enigma.",
      "cracker": "Winston S. Churchill",
      "language": "English"
    },
    {
      "cracking": "It would be hard to say whether music caused the death of human speech or whether it came to fill an already widening void.",
      "cracker": "Quentin Crisp",
      "language": "English"
    },
    {
      "cracking": "Und dann geh ich nochmal mit ihr um die Krumme Lanke herum.",
      "cracker": "Insterburg & Co.",
      "language": "German"
    },
    {
      "cracking": "Old Plato saw both Mind and Matter; Thomas Hobbes, naught but the latter. Now poor Tom\u2019s Soul doth fry in Hell:\u201A Shrugs GOD,\u2019Tis immaterial.",
      "cracker": "Ebenezer Cooke",
      "language": "English"
    },
    {
      "cracking": "I\u2019m alooking I\u2019m acooking, I me find me somebody. Shoot him down, he ain\u2019t no good.",
      "cracker": "Kevin Coyne",
      "language": "English"
    },
    {
      "cracking": "I talk to myself in private to prepare me for the pain.",
      "cracker": "Godley & Creme",
      "language": "English"
    },
    {
      "cracking": "Der einzige Unterschied zwischen mir und einem Verrückten ist der, daß ich nicht verrückt bin. ",
      "cracker": "Salvador Dali",
      "language": "German"
    },
    {
      "cracking": "Ich will mir nicht den Anschein geben, als sei ich für die Schwierigkeiten meiner Lage unempfänglich.",
      "cracker": "Benjamin Disraeli",
      "language": "German"
    },
    {
      "cracking": "\u2019t is all in pieces, all coherence gone. ",
      "cracker": "John Donne",
      "language": "English"
    },
    {
      "cracking": "Buhuhu, warum habe ich mich vom Glanz des Reichtums blenden lassen?",
      "cracker": "Donald Duck",
      "language": "German"
    },
    {
      "cracking": "George is innocent.",
      "cracker": "Patrick Fitzgerald",
      "language": "English"
    },
    {
      "cracking": "Woke up this morning, desparation a.m., the things I\u2019ve been doing, I won\u2019t do them again.",
      "cracker": "Gang of Four",
      "language": "English"
    },
    {
      "cracking": "And I feel like a beetle on its back and there is no way for me to get up.",
      "cracker": "Gang of Four",
      "language": "English"
    },
    {
      "cracking": "Love will get you like a case of anthrax and that\u2019s one thing I don\u2019t want to catch.",
      "cracker": "Gang of Four",
      "language": "English"
    },
    {
      "cracking": "Life is not always as simple as mathematics, Abraham!",
      "cracker": "Mrs. Abraham Fraenkel",
      "language": "English"
    },
    {
      "cracking": "Don\u2019t panic.",
      "cracker": "Douglas Adams",
      "language": "English"
    },
    {
      "cracking": "Neid: \u201EDir, o Verleumdung, ist keiner zu schlecht, Ich folge dem Edlen.\u201C Verleumdung: \u201EAber du stirbst mit ihm! Wen ich verleumd, überleb ich!\u201D ",
      "cracker": "Gerhard Anton von Halem",
      "language": "German"
    },
    {
      "cracking": "A lot of weather we have been having lately. ",
      "cracker": "Oliver Hardy",
      "language": "English"
    },
    {
      "cracking": "This is no time for levity.",
      "cracker": "Oliver Hardy",
      "language": "English"
    },
    {
      "cracking": "You vampire, you wrecker of man\u2019s happiness.",
      "cracker": "Oliver Hardy",
      "language": "English"
    },
    {
      "cracking": "Compassion is a virtue but I don\u2019t have the time.",
      "cracker": "Talking Heads",
      "language": "English"
    }];
    

    let rnd = Math.floor(Math.random() * Math.floor(cracks.length))
    console.log(rnd);
    let crack = cracks[rnd].cracking;
    let cracker = cracks[rnd].cracker;
    console.log(cracker);



  const vibes = [
    "...and you are awesome!",
    "...have a wonderful day!",
    "...and you've got this!",
    "and so is this puppy! 🐶"
  ];

   // choose a random good vibe
  var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

  // display a good vibe
  //document.querySelector(".vibe").append(vibe);
  document.querySelector(".vibe").append(crack);
