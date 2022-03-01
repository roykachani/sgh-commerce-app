import { memo, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/Auth';
import { CartContext } from '../../context/Cart';
import { ModalContext } from '../../context/Modal';
import { currencyFormat } from '../../utils/currencyConvert';
import ProductsCart from '../ProductsCart/ProductsCart';

import './styles.css';

export const DropDownCart = memo(() => {
	const { cartState } = useContext(CartContext);
	const { state, handlerCart } = useContext(ModalContext);
	const { userState } = useContext(AuthContext);

	const { cartProducts } = cartState;

	const handlerMenu = () => {
		if (!!state.modalCart) handlerCart();
	};

	const total = useMemo(
		() => cartProducts.reduce((total, p) => total + p.price * p.addQuantity, 0),
		[cartProducts]
	);
	const newPrice = () => {
		return currencyFormat(total);
	};

	return (
		<div
			className={
				!!state.modalCart ? 'dropdown_cart cart_active' : 'dropdown_cart'
			}
		>
			<div className="container_cart_menu">
				<div className="title_cnt_cart_menu">
					<h3 className="title_cart_menu">CARRITO DE COMPRAS</h3>
				</div>
				<div className="hr_cartbox">
					<div className="hr hr_cart"></div>
				</div>
				<div className="subtitles_cartbox">
					<div className="subtitles_cart">
						<h5 className="subtitle_cart subt_cart_product">Producto</h5>
						<h5 className="subtitle_cart">Talle</h5>
						<h5 className="subtitle_cart">Cant.</h5>
						<h5 className="subtitle_cart">SubTotal</h5>
					</div>
				</div>
				<div className="box_cnt_cart_menu">
					<div className="cnt_items_cart_menu">
						<ProductsCart />
					</div>
					<div className="subtitles_cartbox">
						<div className="subtitles_cart total_cart">
							<div>
								<h4 className="subtitle_cart">Total</h4>
							</div>
							<div>
								<h4 className="subtitle_cart">ARS{newPrice()}</h4>
							</div>
						</div>
					</div>
					<div className="hr_cartbox">
						<div className="hr hr_cart"></div>
					</div>
					<div className="cnt_adress_cart_menu">
						<h3>Metodo de envio</h3>
						<div className="box_adress_cart_menu">
							<input type="checkbox" name="privado" />
							<input type="checkbox" name="retiro" />
							<div className="btn_center_box">
								<Link
									className="btn_secondary checkout_cart"
									to="/cvn/checkout/cart"
								>
									CHECKOUT
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
