function totalCostCount(ticketPrice, numberOfFamilyMembers, discount) {
	let totalCost = ticketPrice * numberOfFamilyMembers	* ((100 - discount) / 100);
	return totalCost;
}

console.log(totalCostCount(5000, 3, 20));