function isRightTriangle(a, b, c) {
	if (a * a + b * b == c * c || a * a + c * c == b * b
			|| b * b + c * c == a * a)
		return "This is right triangle"
	else
		return "This is not right triangle!"
}

console.log(isRightTriangle(3, 4, 5));