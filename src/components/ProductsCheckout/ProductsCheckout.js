import { useContext, useState } from 'react';

import { CartContext } from '../../context/Cart';
import ItemCart from '../ItemCart/ItemCart';

const ProductsCheckout = () => {
	const [classCheckout, setClassCheckout] = useState(true);
	const { cartState, removeItem } = useContext(CartContext);
	const { cartProducts } = cartState;

	const deleteItem = (_indexId) => {
		const newArrItem = cartProducts.filter((_, index) => index != _indexId);
		removeItem(newArrItem);
	};

	return (
		<div className="cnt_items_checkout_menu">
			{!!cartProducts.length ? (
				cartProducts.map((p, index) => (
					<ItemCart
						key={Math.random()}
						deleteItem={deleteItem}
						_index={index}
						classCheckout={classCheckout}
						{...p}
					/>
				))
			) : (
				<div className="no_products">VACIO</div>
			)}
		</div>
	);
};

export default ProductsCheckout;
