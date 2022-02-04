export const currencyFormat = (number) => {
	const currency = new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency: 'ARS',
	}).format(number);

	return currency;
};
