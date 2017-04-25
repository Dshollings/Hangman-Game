window.onload = function () {

  var words = ["princess leia", "luke skywalker", 
    "lando calrissian", "han solo", "chewbacca", 
    "darth vader", "boba fett", "jabba the hutt", 
    "obi wan kenobi", "emperor palpatine", "yoda", 
    "corellia", "hoth", "tatooine", "endor", 
    "cloud city", "dagobah", "alderaan", "ewok", 
    "wookiee", "tauntaun", "wampa", "sarlacc", 
    "x wing", "tie fighter", "millennium falcon", 
    "death star", "rebel alliance", "empire", 
    "empire strikes back", "a new hope", 
    "return of the jedi"];

  console.log("# of words= " + words.length)

  // alphabet
  var alph = ['a', 'b', 'c', 'd', 'e', 'f', 
  	'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 
  	'o', 'p', 'q', 'r', 's','t', 'u', 'v', 
  	'w', 'x', 'y', 'z', '-'];

  console.log("# of letters= " + alph.length)

  //variables
  var word;
  var guess;
  var guesses;
  var remaining;
  var showRemaining = document.getElementById("remaining");
  var correct;
  var space;
  var wins = 0;
  var showWins = document.getElementById("wins");
  var losses = 0;
  var showLosses = document.getElementById("losses");
  var audio;
  // var playCount = 0;
  var pointGuard;



  // create alphabet buttons
  var buttons = function () {
    buttonList = document.getElementById("keys")
    //creates ul for alphabet 
    letters = document.createElement("ul");
    // loop fills ul letters with alphabet
    for (var i = 0; i < alph.length; i++) {
      letters.id = "alph";
      //create button for current letter
      listLetter = document.createElement("li");
      listLetter.id = "letter";
      // defines listLetter with current letter
      listLetter.innerHTML = alph[i];
      //initiates function to respond to button clicks
      points();
      //adds ul letters to buttonList
      buttonList.appendChild(letters);
      //adds current letter to ul letters
      letters.appendChild(listLetter);
    }

  }
  //counters for hits and misses
  points = function () {
    // This happens when you click a button
    listLetter.onclick = function () {
      guess = (this.innerHTML);
      //changes button appearance on click
      this.setAttribute("class", "used")
      //disables button
      this.onclick = null;
      //loop checks guess against letters in word
      for (var i = 0; i < word.length; i++) {
        //hit scenario
        if (word[i] === guess) {
          //creates array of correct guesses
          guesses[i].innerHTML = guess;
          //adds a point
          correct++;
          endGame();
        }
      }
      //miss scenario
      var miss = (word.indexOf(guess));
      if (miss === -1) {
        remaining--;
        showRemaining.innerHTML = remaining;
        endGame();
      }   
    }
  }
  //fill in letters
  output = function (){
    tray = document.getElementById("tray");
    //
    correct = document.createElement("ul");
    //
    for (var i = 0; i <word.length; i++) {
      correct.setAttribute("id", "solution");
       guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      //space may need to be a dash
      //identifies spaces
      if (/\s/.test(word[i])) {
        guess.innerHTML = " ";
        space++;
      }
      else {
        //make this a FA Rebel glyph
        guess.innerHTML = "_";
      }
      //
      guesses.push(guess);
      tray.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  //endgame


  endGame = function () {
    if (remaining < 1) {
      showRemaining.innerHTML = "The Rebellion has been crushed";
      killKeys();
      // audio = new Audio("assets/audio/imperial_march.m4a");
      // song();
      //losecounter
      if (pointGuard = 0){
        showLosses.innerHTML = losses;
        showLosses();
        pointGuard++;
      }
    }
    for (var i = 0; i < guesses.length; i++) {
      if ((count + space) >= word.length){
        showRemaining.innerHTML = "You defeated the Empire!";
        killKeys();
        // audio = new Audio("assets/audio/swtheme.m4a");
        // song();
        //wincounter
        if (pointGuard = 0){
            wins++;
            showWins.innerHTML = wins;
            showWins();
            pointGuard++;
        }
      }
    }   
  }
  // song = function () {
  //   if (playCount = 0){
  //       audio.play();
  //       playCount++;
  //       }
  // }
  killKeys = function () {
    listLetter.onclick = null;
  }
  // Play
  play = function () {
    word = words[Math.floor(Math.random() * words.length)];
    word = word.replace(/\s/g, " ");
    console.log("The word is: " + word);
    guesses = [ ];
    remaining = 12;
    showRemaining.innerHTML = remaining;
    count = 0;
    space = 0;
    keys();
    output();
    endGame();
  }
  play();
  // Reset
  document.getElementById("reset").onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    letters = null;
    pointGuard = 0;
    play();
  }
}






}





















