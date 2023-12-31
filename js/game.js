var temp = document.querySelector('.time');
var words = document.querySelector(".words");
var timerDiv = document.querySelector(".time");
var scoreDiv = document.querySelector(".score");
var points = 0;
var spans;
var typed;
var seconds = 60;
var spark   = new Audio("../sounds/explosion-small.mp3");
var bgmusic = new Audio("../sounds/bg-music.mp3");

var timer = null;
var laser = document.querySelector('.laser');

 	function countdown() {
 		points = 0;
 		timer = setInterval(function(){
    		seconds--;
    		temp.innerHTML = seconds;
    		if (seconds === 0) {
    			//alert("El tiempo ha terminado! Palabras por minuto " + points);
    			//scoreDiv.innerHTML = "0";
          words.classList.add('message')
    			words.innerHTML = "<strong>" + $username + "!</strong><br>El tiempo ha terminado! <br> Palabras por minuto: <strong>" + points + "</strong>";
    			clearInterval(timer);
    			seconds = 60;
    			timerDiv.innerHTML = "0";
    		}
 		}, 1000);
  	}

  	function random() {
      // alert(list.length)
  		words.innerHTML = "";
  		var random = Math.floor(Math.random() * (153 - 0 + 1)) + 0;
  		var wordArray = list[random].split("");
  		for (var i = 0; i < wordArray.length; i++) { //building the words with spans around the letters
  			var span = document.createElement("span");
  			span.classList.add("span");
  			span.innerHTML = wordArray[i];
  			words.appendChild(span);
  		}
  		spans = document.querySelectorAll(".span");
  	}

  	function typing(e) {
  			typed = String.fromCharCode(e.which);
  			for (var i = 0; i < spans.length; i++) {
  				if (spans[i].innerHTML === typed) { // if typed letter is the one from the word
  					if (spans[i].classList.contains("bg")) { // if it already has class with the bacground color then check the next one
  						continue;
  					} else if (spans[i].classList.contains("bg") === false && spans[i-1] === undefined || spans[i-1].classList.contains("bg") !== false ) { // if it dont have class, if it is not first letter or if the letter before it dont have class (this is done to avoid marking the letters who are not in order for being checked, for example if you have two "A"s so to avoid marking both of them if the first one is at the index 0 and second at index 5 for example)
  						spans[i].classList.add("bg");
              laser.classList.add('shoot');
              setTimeout(() => {
                laser.classList.remove('shoot');
              }, 250);
  						break;
  					}
  				}
  			}
  			var checker = 0;
  			for (var j = 0; j < spans.length; j++) { //checking if all the letters are typed
  				if (spans[j].className === "span bg") {
  					checker++;
  				}
  				if (checker === spans.length) { // if so, animate the words with animate.css class
            spark.pause();
					  spark.currentTime = 0;
            spark.play();
  					words.classList.add("animated");
  					words.classList.add("fadeOut");
  					points++; // increment the points
  					scoreDiv.innerHTML = points; //add points to the points div
  					document.removeEventListener("keydown", typing, false);
  					setTimeout(function(){
  						words.className = "words"; // restart the classes
  						random(); // give another word
  						document.addEventListener("keydown", typing, false);
  					}, 400);
  				}

  			}
  	}

  	document.addEventListener("keydown", typing, false);