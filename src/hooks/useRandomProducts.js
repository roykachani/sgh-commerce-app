export const useGetRandoms = () => {
	const checkNotRepeat = (current, validNumbers) => {
		return validNumbers.includes(current);
	};
	let numbLength;

	const getRandom = () => {
		return Math.floor(Math.random() * numbLength);
	};
	const randomProducts = (products, condition, length) => {
		const { data } = products;
		const newarray = data.filter((p) => p.condition === condition);
		const randomArrayProducts = [];
		numbLength = newarray.length;

		while (randomArrayProducts.length < length) {
			const randomIndex = getRandom();
			if (!checkNotRepeat(newarray[randomIndex], randomArrayProducts))
				randomArrayProducts.push(newarray[randomIndex]);
		}
		return randomArrayProducts;
	};
	return [randomProducts];
};
