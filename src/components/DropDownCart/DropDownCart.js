import {
	memo,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../context/Auth';
import { CartContext } from '../../context/Cart';
import { ModalContext } from '../../context/Modal';
import { useTotalCart } from '../../hooks/useTotalcart';
import { currencyFormat } from '../../utils/currencyConvert';
import ProductsCart from '../ProductsCart/ProductsCart';

import './styles.css';

export const DropDownCart = memo(() => {
	const { cartState, handlerMessages, totalCart } = useContext(CartContext);
	const { state, handlerCart } = useContext(ModalContext);
	const { userState } = useContext(AuthContext);
	const [hiddenclass, setHiddenclass] = useState(null);
	const [shipping, setShipping] = useState([
		{
			id: 1,
			name: 'private',
			title: 'ENVIO A DOMICILIO - Entrega Privada en 48hs',
			status: true,
		},
		{
			id: 2,
			name: 'store',
			title: 'RETIRO EN SUCURSAL - GRATIS',
			status: false,
		},
	]);
	const shippingPrice = 400;

	const [subTotalPrice, totalPrice] = useTotalCart();
	const history = useHistory();

	const { cartProducts } = cartState;

	const handleSelect = (id) => {
		setShipping(
			shipping.map((m) =>
				m.id === id ? { ...m, status: !m.status } : { ...m, status: false }
			)
		);
	};
	useEffect(() => {
		shipping.map((m) => {
			if (!!m.status) {
				const checkoutObj = {
					...cartState.totalCart,
					shipping: m.name,
				};
				totalCart(checkoutObj);
			}
		});
	}, [shipping]);

	const handlerMenu = useCallback(() => {
		if (!!state.modalCart) handlerCart();
	}, [state.modalCart, handlerCart]);

	useEffect(() => {
		if (!!hiddenclass) setTimeout(() => setHiddenclass(null), 3000);
	}, [hiddenclass]);

	const handleCheckout = useCallback(() => {
		if (cartProducts.length === 0) {
			handlerMessages('No hay productos en el carrito');

			return setHiddenclass(true);
		} else if (!userState.userData) {
			handlerMessages('Debes Iniciar Sesión o Regístrate');
			return setHiddenclass(true);
		} else {
			history.push('/cvn/checkout/cart');
			handlerMenu();
		}
	}, [userState, cartProducts.length, history, handlerMenu, handlerMessages]);

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
								<h4 className="subtitle_cart">SubTotal</h4>
							</div>
							<div>
								<h4 className="subtitle_cart">ARS{subTotalPrice()}</h4>
							</div>
						</div>
					</div>
					<div className="hr_cartbox">
						<div className="hr hr_cart"></div>
					</div>
					<div className="cnt_adress_cart_menu">
						<h3 className="title_cart_menu">Metodos de envio</h3>
						<div className="box_adress_cart_menu">
							{shipping.map((m) => {
								return (
									<div className="checkbox_shipping" key={m.id}>
										<span
											className="checkbox_leyend"
											onClick={() => handleSelect(m.id)}
										>
											{m.title}{' '}
											{m.id === 1 && (
												<span className="checkbox_leyend_price">
													por ${shippingPrice}
												</span>
											)}
										</span>
										<input
											className="checkbox_input"
											type="checkbox"
											name={m.name}
											value={m.name}
											checked={m.status}
											id={m.id}
											onChange={() => handleSelect(m.id)}
										/>
									</div>
								);
							})}
							<div className="subtitles_cart total_cart">
								<div>
									<h4 className="subtitle_cart">Total</h4>
								</div>
								<div>
									<h4 className="subtitle_cart">ARS{totalPrice()}</h4>
								</div>
							</div>
							<div className="btn_center_box">
								<button
									onClick={handleCheckout}
									type="button"
									className={
										!!userState.userData & (cartProducts.length >= 1)
											? 'btn_secondary checkout_cart'
											: 'btn_secondary checkout_cart btn_disabled'
									}
								>
									CHECKOUT
								</button>
								{!!cartState.messages && (
									<span
										className={
											!!hiddenclass
												? 'message_description_info_sp'
												: 'message_description_info_sp hidden_stock_msg'
										}
									>
										{cartState.messages}
									</span>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
