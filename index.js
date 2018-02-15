/*The file containing the logic for the course of the game, which depends on Word.js and:


Randomly selects a word and uses the Word constructor to store it
Prompts the user for each guess and keeps track of the user's remaining guesses


Letter.js should not require any other files.
Word.js should only require Letter.js
*/

//Generate word to be provided by and stored in word.js
//Sets up the array of words that can be guessed. 

//Sets up a function that chooses the word and returns it back. Exports is used so that this function is accessible within other JS files. 

//exports.chooseWord = function(){
//	var randNum = Math.floor((Math.random()*words.length)+1);
//	return words[randNum];}

//Invite player to play hangman, give them category, and show the number of spaces in the word

//Take letter input

//compare input to generated word

//if good add letter to a progress array of dashes and letters guessed correct

//else subtract from the number of guesses and return to letter input page

//promt to guess again

//when guesses out or word complete

//Print "you won"

//Print "you lost"


var game = require ('./game.js');
var inquirer = require('inquirer');

// Game header
console.log('**************************************************************************');
console.log('                     Welcome to Cars Hangman                        ')
console.log('**************************************************************************');
console.log('                            Guess the Car Maker                            ');

console.log('');
console.log('');


//get a random word to guess to start the game


startGame();

function startGame(){
	
	var word = game.getWord();

	// console logs word
	word.display();

	// get userGuess
	getUserGuess(word);
}

// get the user guess
function getUserGuess(word){

	inquirer.prompt([{
					 name: "letter",
					 message: "Enter a letter: ",
					 validate : function(input){
					 		return /[a-z]/.test(input.trim().toLowerCase());
						}
					}])

	.then(function(guess){
		// calls the method which does the processing after checking if the letter is in the word
		word.letterInWord(guess.letter.toLowerCase());
		word.display();

		if( !word.guessed){
			if(word.guessesRemaining > 0){
				getUserGuess(word);
			}else{
				
				console.log("\n"+"                   Oops ! You ran out of your guesses !\n\n");
				startGame();
			}
			
		}else if(word.guessed){
		
			console.log("\n"+"                   Congratulations ! You have guessed it !\n\n");
			startGame();
		}
	});
}

