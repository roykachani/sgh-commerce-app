import { useContext } from 'react';

import { CartContext } from '../context/Cart';

export const useCheckoutItem = () => {
	const { cartState, addItem, handlerQuantity, handlerMessages } =
		useContext(CartContext);
	const { cartProducts } = cartState;

	const checkCartItem = (item) => {
		const { id, size, price, title, addQuantity, stock, photos } = item;
		let message = 'Producto añadido';

		const filterObj = (p) => {
			if ((p.id === id) & (p.size === size)) {
				return true;
			} else {
				return false;
			}
		};
		const filterItem = cartProducts.filter(filterObj);

		/*add product*/
		if (filterItem.length === 0) {
			const newItem = {
				...item,
				addQuantity: 1,
				stock: stock - addQuantity,
			};
			addItem(newItem);
			return handlerMessages(message);
		}

		/*add quantity of cart product*/
		if (filterItem.length === 1) {
			const newArrItem = [];
			cartProducts.map((p) => {
				if ((p.id === id) & (p.size === size) & (addQuantity > p.stock)) {
					message = 'No hay mas stock disponible';
					return handlerMessages(message);
				} else if (
					(p.id === id) &
					(p.size === size) &
					(addQuantity <= p.stock)
				) {
					const obj = {
						...p,
						addQuantity: p.addQuantity + addQuantity,
						stock: p.stock - addQuantity,
					};
					newArrItem.push(obj);
					return handlerMessages(message);
				} else {
					newArrItem.push(p);
					return handlerMessages(message);
				}
			});
			if (cartProducts.length === newArrItem.length) {
				handlerQuantity(newArrItem);
				return handlerMessages(message);
			}
		}
	};

	return [checkCartItem];
};
