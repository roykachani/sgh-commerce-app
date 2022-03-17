import { useMemo, useContext, useEffect } from 'react';

import { CartContext } from '../context/Cart';
import { currencyFormat } from '../utils/currencyConvert';

export const useTotalCart = () => {
	const { cartState, totalCart } = useContext(CartContext);

	const { cartProducts } = cartState;

	const shippingPrice = 400;
	const freeShippingPrice = 8500;

	const subTotal = useMemo(
		() => cartProducts.reduce((total, p) => total + p.price * p.addQuantity, 0),
		[cartProducts]
	);
	const subTotalPrice = () => {
		return currencyFormat(subTotal);
	};

	const totalShipping = () => {
		if (cartState.totalCart?.freeShipping === true) {
			if (cartState.totalCart?.shipping === 'private') return 0;
			else if (cartState.totalCart?.shipping === 'store') return 0;
		} else if (cartState.totalCart?.freeShipping === false) {
			if (cartState.totalCart?.shipping === 'private') return shippingPrice;
			else if (cartState.totalCart?.shipping === 'store') return 0;
		}
	};

	const totalPrice = () => {
		return currencyFormat(subTotal + totalShipping());
	};

	const itemsQauntity = useMemo(
		() => cartProducts.reduce((totalItems, p) => totalItems + p.addQuantity, 0),
		[cartProducts]
	);

	const shippinFreePrice = () => {
		const free = freeShippingPrice - subTotal;

		if (subTotal < freeShippingPrice) {
			return `TE FALTAN ${currencyFormat(free)} PARA OBTENER EL ENVIO GRATIS`;
		} else if (subTotal >= freeShippingPrice) {
			return `TENES ENVIO GRATIS`;
		}
	};

	// const newProducts = [];
	const objProductPay = () => {
		const newArray = [];
		cartProducts.map((p) => {
			const obj = {
				id: p.id,
				title: p.title,
				price: p.price,
				quantity: p.addQuantity,
				sizes: { size: p.size, stock: p.addQuantity },
			};
			newArray.push(obj);
		});
		return newArray;
	};
	useEffect(() => {
		const obj = {
			...cartState.totalCart,
			freeShipping: subTotal >= freeShippingPrice ? true : false,
			subTotal,
			items: itemsQauntity,
			message: shippinFreePrice(),
			total: subTotal + totalShipping(),
			products: objProductPay(),
		};
		totalCart(obj);
	}, [itemsQauntity, subTotal, cartState.totalCart?.shipping]);

	return [subTotalPrice, totalPrice, totalShipping, objProductPay];
};
