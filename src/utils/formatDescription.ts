export const formatDescription = (description: string, wishedLength?: number) => {
	if(wishedLength === undefined) {
		if (description.length > 25) {
			return description.substring(0, 25) + "...";
		}
	}
	else return description.substring(0, wishedLength);
	return description;
};
