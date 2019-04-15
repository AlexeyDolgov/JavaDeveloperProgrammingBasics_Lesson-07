function getCleanText(str) {
	let arr = str.split('');
	let arrClean = [];

	for (let i = 0; i < arr.length; i++) {
		if (isNaN(parseInt(arr[i]))) {
			arrClean[i] = arr[i];
		}
	}

	strClean = arrClean.join('');
	return strClean;
}

console.log(getCleanText("Hello123 wo45rl7d"));