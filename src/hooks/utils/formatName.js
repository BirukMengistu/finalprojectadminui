export const formatName = (user) => {
	if (!user) {
		return;
	}
	return `${user?.title[0].toUpperCase()}${`${user?.title.slice(
		1
	)} ${user?.lastName[0].toUpperCase()}`}${user?.surName.slice(1)}`;
};
export const initials = (user) => {
	if (!user) {
		return;
	}
	return `${user?.firstName.charAt(0)}${user?.surName.charAt(0)}`;
};
