function numberInWords(num) {
	let numArray = [];
	numStr = String(num);

	if (num > 0 && num <= 9) {
		numArray[1] = numStr;
	} else if (num > 9 && num <= 99) {
		numArray = numStr.split('');
	} else
		return 'Number is not from 1 to 99. Type the correct number!'

	let i1 = parseInt(numArray[0]);
	let i2 = parseInt(numArray[1]);

	let words = {
		a1 : [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ],
		a10 : [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ],
		a20 : [ 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy',	'eighty', 'ninety' ]
	}

	numWords = [];

	if (isNaN(i1)) {
		numWords.push(words.a1[i2 - 1]);
	} else if (i1 == 1) {
		numWords.push(words.a10[i2]);
	} else if (i2 == 0) {
		numWords.push(words.a20[i1 - 2]);
	} else {
		numWords.push(words.a20[i1 - 2] + ' ' + words.a1[i2 - 1]);
	}

	let numberInWords = numWords.join('');
	return numberInWords;
}

console.log(numberInWords(58));