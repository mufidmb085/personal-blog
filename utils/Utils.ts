export function getTimeGreeting(): string {
	const hours = new Date().getHours();

	if (hours >= 6 && hours < 12) {
		return "Good morning";
	} else if (hours >= 12 && hours < 15) {
		return "Good afternoon";
	} else if (hours >= 15 && hours < 19) {
		return "Good evening";
	} else {
		return "Good night";
	}
}