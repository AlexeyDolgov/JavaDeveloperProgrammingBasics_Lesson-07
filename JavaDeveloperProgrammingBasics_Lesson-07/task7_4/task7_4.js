function getSumMultiply(min, max) {
	let sum = 0;
	let multiply = 1;

	for (let i = min; i <= max; i++) {
		if (i % 2 == 0) {
			sum = sum + i;
		} else {
			multiply = multiply * i;
		}
	}

	let SumMultiply = [ sum, multiply ];
	return SumMultiply;
}

console.log(getSumMultiply(2, 8));