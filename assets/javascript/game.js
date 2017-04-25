window.onload = function () {

  var words = ["princess-leia", "luke-skywalker", 
  	"lando-calrissian", "han-solo", "chewbacca", 
  	"darth-vader", "boba-fett", "jabba-the-hutt", 
  	"obi-wan-kenobi", "emperor-palpatine", "yoda", 
  	"corellia", "hoth", "tatooine", "endor", 
  	"cloud-city", "dagobah", "alderaan", "ewok", 
  	"wookiee", "tauntaun", "wampa", "sarlacc", 
  	"x-wing", "tie-fighter", "millennium-falcon", 
  	"death-star", "rebel-alliance", "empire", 
  	"empire-strikes-back", "a-new-hope", 
  	"return-of-the-jedi"];

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
  var remaining = 12;
  var correct = 0;
  var space;



  // create alphabet buttons
  var buttons = function () {
    buttonList = document.getElementById("buttons")
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

  points = function () {
    // This happens when you click a button
    listLetter.onclick = function () {
      guess = (this.innerHTML);
      //changes button appearance on click
      this.setAttribute("class", "active")
      //disables button
      this.onclick = null;
      //loop checks guess against letters in word
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          //creates array of correct guesses
          guesses[i].innerHTML = guess;
          //adds a point
          correct++;
        }
      var   
      }

    }

  }




}