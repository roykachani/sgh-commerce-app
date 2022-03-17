import { useEffect, useContext } from 'react';

import { CartContext } from '../context/Cart';
import { ProductsContext } from '../context/Products';
import { useCheckoutItem } from './useCheckoutItem';

export const useCheckPurchase = () => {
	const { state } = useContext(ProductsContext);
	const { cartState } = useContext(CartContext);
	const { cartProducts } = cartState;
	const [checkCartItem] = useCheckoutItem();

	/*chequeo stock de la orden con un llamado a base de datos previo al pago*/
	const check = () => {
		const outStock = [];

		const find = cartProducts.forEach((el) => {
			const checking = state.products.data
				.find((item) => item._id === el.id)
				.sizes.filter((s) => {
					if (
						(el.size == Object.keys(s)) &
						(el.addQuantity > Object.values(s))
					) {
						const [value] = Object.values(s);
						const obj = {
							...el,
							addQuantity: value,
							stock: 0,
						};
						outStock.push(obj);
						checkCartItem(obj);
					}
				});
		});
		return outStock;
	};
	return [check];
};
