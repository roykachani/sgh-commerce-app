export const getRandoms = () => {
	const checkNotRepeat = (current, validNumbers) => {
		return validNumbers.includes(current);
	};
	let numbLength;

	const getRandom = () => {
		return Math.floor(Math.random() * numbLength);
	};
	const randomProducts = (products, condition, length) => {
		const newarray = products.data.filter((p) => p.condition === condition);
		const randomProducts = [];
		numbLength = newarray.length;

		while (randomProducts.length < length) {
			const randomIndex = getRandom();
			if (!checkNotRepeat(newarray[randomIndex], randomProducts))
				randomProducts.push(newarray[randomIndex]);
		}
		return randomProducts;
	};
	return [randomProducts];
};
