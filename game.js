//list of words to guess
var Word = require('./word.js');

module.exports.getWord = function (){


		var deck = ["bmw", "porsche", "ford", "chevy", "nissan", "mercedes", "infinity", "acura", "auid", "fiat", "honda", "jeep",
  "lincoln", "maserati", "pontiac", "volvo", "saab", "subaru", "toyota", "volkswagen" ];

		// picks a random word
		var randomWord = deck[Math.floor(Math.random() * deck.length)];

		
		// creates word object
		var word = new Word(randomWord);

		// return word object
		return word;
	

	
}