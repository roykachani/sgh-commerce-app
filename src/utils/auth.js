//set token en local storage
export const setAuthStorage = (obj) => {
	window.localStorage.setItem('shgauth', JSON.stringify(obj));
};
//get token de local storage
export const getAuthStorage = () => {
	return JSON.parse(window.localStorage.getItem('shgauth'));
};
//limpia localStorage
export const removeAuthStorage = () => {
	window.localStorage.removeItem('shgauth');
	// window.localStorage.removeItem('userBlogData');
};
//set user data response del localstorage
// export const setRespStorage = (obj) => {
// 	// window.localStorage.setItem('userBlogData', JSON.stringify(obj));
// };

// //get user data response del localstorage
// export const getRespStorage = () => {
// 	// return JSON.parse(window.localStorage.getItem('userBlogData'));
// };
