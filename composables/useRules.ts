export const useRules = () => {
	return {
		name: /^(?!\s)[\p{L}.,' -]{1,60}(?<!\s)$/u,
		phone: /^[0-9]{2} [0-9]{4} [0-9]{4}$/,
		email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		location: /^[\p{L}a-zA-Z0-9 ]{1,100}$/u,
		number: /^\d{1,}$/,
		zipcode: /^\d{5}$/,
	};
};
