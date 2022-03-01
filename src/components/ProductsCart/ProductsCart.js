import { useContext, useMemo } from 'react';
import { CartContext } from '../../context/Cart';
import { currencyFormat } from '../../utils/currencyConvert';
import ItemCart from '../ItemCart/ItemCart';

const ProductsCart = () => {
	const { cartState, removeItem } = useContext(CartContext);
	const { cartProducts } = cartState;

	const deleteItem = (_indexId) => {
		const newArrItem = cartProducts.filter((_, index) => index != _indexId);
		removeItem(newArrItem);
	};

	return (
		<div className="box_items_cart_menu">
			{!!cartProducts.length ? (
				cartProducts.map((p, index) => (
					<ItemCart
						key={Math.random()}
						deleteItem={deleteItem}
						_index={index}
						{...p}
					/>
				))
			) : (
				<div className="no_products">VACIO</div>
			)}
		</div>
	);
};

export default ProductsCart;
