var poem = "I'm beautiful in my way 'Cause God makes no mistakes I'm on the right track, baby I was born this way Don't hide yourself in regret Just love yourself, and you\'re set I'm on the right track, baby I was born this way!";

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 3;

function setTime() {
  var milliSeconds = prompt( "How fast do you think you can read?" );
  var timerInterval = setInterval( function() {
    timeEl.textContent = secondsLeft + " seconds left till game starts.";
    timeEl.style.textAlign = "center";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      showPoem( milliSeconds);
    }

    secondsLeft--;

  }, 1000);
}

function showPoem( milliSeconds ) {
  var poemArray = poem.split( " " );
  console.log( milliSeconds );
  timeEl.textContent = " ";
  var wordIndex = 0;
  var wordTag = document.createElement( "h1" );
  wordTag.style.textAlign = "center";
  document.body.appendChild( wordTag );
  var lgbt = [ "red", "orange", "yellow", "green", "blue", "indigo", "violet" ];

  var timerInterval = setInterval( function() {

    wordTag.textContent = poemArray[ wordIndex ];
    var uniqueColor = lgbt[ Math.floor( Math.random() * ( lgbt.length + 1 )) ];
    wordTag.style.color = uniqueColor;
    var uniqueColorII = lgbt[ Math.floor( Math.random() * ( lgbt.length + 1 )) ];
    while ( uniqueColorII == uniqueColor ) {
      uniqueColorII = lgbt[ Math.floor( Math.random() * ( lgbt.length + 1 )) ];
    }
    document.body.style.backgroundColor = uniqueColorII;

    wordIndex++;

    if( wordIndex >= poemArray.length ) {
      clearInterval(timerInterval);
    }

  }, milliSeconds);
}

setTime();