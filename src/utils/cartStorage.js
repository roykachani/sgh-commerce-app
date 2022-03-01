export const setCartStorage = (obj) => {
	window.localStorage.setItem('shgCart', JSON.stringify(obj));
};
//get cart de local storage
export const getCartStorage = () => {
	return JSON.parse(window.localStorage.getItem('shgCart'));
};
//limpia localStorage
export const removeCartStorage = () => {
	window.localStorage.removeItem('shgCart');
};
