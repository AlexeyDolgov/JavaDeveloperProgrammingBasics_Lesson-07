function dayTime(hour) {
	switch (true) {
		case (hour >= 0 && hour < 6):
			return "Night";
			break;
		case (hour >= 6 && hour < 11):
			return "Morning";
			break;
		case (hour >= 11 && hour < 16):
			return "Day";
			break;
		case (hour >= 16 && hour <= 23):
			return "Evening";
			break;
		default:
			return "Hour may be from 0 to 23!";
	}
}

console.log(dayTime(20));