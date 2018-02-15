


var game = require ('./game.js');
var inquirer = require('inquirer');

//Invite player to play hangman, give them category, and show the number of spaces in the word
// Game header
console.log('-----------------------------------------------------------------------------');
console.log('                     Welcome to Cars Hangman                                 ')
console.log('----------------------------------------------------------------------------');
console.log('                        Guess the Car Maker                                 ');

console.log('');
console.log('');


//Fetches a random word from the game.js file.
startGame();

function startGame(){
	
	var word = game.getWord();

// console logs number of spaces in the random word.
	word.display();

// run getUserGuess
	getUserGuess(word);
}
//Prompts the user for each guess and keeps track of the user's remaining guesses
// getUserGuess function.
function getUserGuess(word){
//Take letter input
	inquirer.prompt([{
					 name: "letter",
					 message: "Enter a letter: ",
					 validate : function(input){
					 		return /[a-z]/.test(input.trim().toLowerCase());
						}
					}])

	.then(function(guess){
// calls the method which does the processing after checking if the letter is in the word 
//and retart game
//compare input to generated word
		word.letterInWord(guess.letter.toLowerCase());
		word.display();
//Win, lose, continue game.
		if( !word.guessed){
			if(word.guessesRemaining > 0){
				getUserGuess(word);
			}else{
				
				console.log("\n"+"                   Sorry. You ran out of guesses !\n\n");
				startGame();
			}
			
		}else if(word.guessed){
		
			console.log("\n"+"                   Nice Job ! You got it !\n\n");
			startGame();
		}
	});
}

