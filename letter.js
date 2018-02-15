
// Constructor for letter objects
function Letter(l){

//A string value to store the underlying character for the letter 
this.name = l;
// when the user guesses a letter correctly, it turns the guessed should be set to true.
//A boolean value that stores whether that letter has been guessed yet
this.guessed = false;

}

// this method is used to controls display mode of name property, whether it should show or stay hidden
//A function that returns the underlying character if the letter has been guessed, 
//or a placeholder (like an underscore) if the letter has not been guessed
Letter.prototype.display = function(){
		if(this.guessed === false){
			// hide the name
			return '-';
		}else{
			return this.name;
		}
	}

module.exports = Letter;

   /* Contains a constructor, Letter. This constructor should be able to either display an underlying character
 or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.
 That means the constructor should define:







A function that takes a character as an argument and checks it against the underlying character,
updating the stored boolean value to true if it was guessed correctly



*/