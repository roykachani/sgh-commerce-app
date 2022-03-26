import { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../../context/Auth';
import { CartContext } from '../../context/Cart';
import { useTotalCart } from '../../hooks/useTotalcart';
import { currencyFormat } from '../../utils/currencyConvert';

import SecureIcon from '../Icons/payment/SecuredIcon';
import ItemCart from '../ItemCart/ItemCart';

const PaymentsCheckout = () => {
	const { userState, exit } = useContext(AuthContext);
	const { cartState, addPayMethod } = useContext(CartContext);
	const { cartProducts, totalCart } = cartState;

	const [subTotalPrice, totalPrice, totalShipping] = useTotalCart();

	const history = useHistory();

	const handlePayment = () => {
		const obj = {
			products: totalCart.products,
		};
		const config = { Authorization: userState.userData.JWT };

		addPayMethod(obj, config);
	}; //crear  objeto con products /adress/userdata

	useEffect(() => {
		if (cartState.paymentMethod?.status === 401) {
			exit();
			return history.push('/signin');
		} else if (cartState.paymentMethod?.status === 200) {
			console.log(cartState.paymentMethod.urlSandbox);
			window.location.assign(cartState.paymentMethod.initPoint);
		}
	}, [cartState.paymentMethod, exit, history]);

	return (
		<>
			<div className="data_form_container">
				<div className="extra_box">
					<div className="back_products_box">
						<Link to="/" className="back_products">
							◄ CONTINUAR COMPRANDO
						</Link>
					</div>
					<div className="secure_payment_box">
						<div className="icon_secured_box">
							<span className="leyend_secure">Site 100% secure</span>
							<SecureIcon />
						</div>
						<span className="bottom_leyend">SSL secured Web Site</span>
					</div>
				</div>
				<div className="checkout_box_title">
					<div className="title_checkout_box">
						<h1 className="title_checkout">REVISA Y CONFIRMA TU PEDIDO</h1>
					</div>
					<div className="title_help_box">
						<Link className="help_link" to={'/FAQs'}>
							FAQ
						</Link>
						<span className="help_link slash">|</span>
						<Link className="help_link" to={'/contacto'}>
							Contactanos
						</Link>
					</div>
				</div>
				<div className="checkout_box_display">
					<div className="total_shipping_checkout_box">
						{((cartState.totalCart.freeShipping === false) | true) &
							(cartState.totalCart.shipping === 'private') && (
							<span className="shipping_price_description">
								METODO DE ENVIO SELECCIONADO: ENVIO PRIVADO - Entrega en 48hs
								hábiles{' '}
								{cartState.totalCart.freeShipping === true
									? 'GRATIS'
									: 'por $400'}
							</span>
						)}
						{cartState.totalCart.shipping === 'store' && (
							<span className="shipping_price_description">
								METODO DE ENVIO SELECCIONADO: RETIRA EN SUCURSAL - Entrega en
								48hs hábiles - GRATIS
							</span>
						)}
					</div>
				</div>
				<div className="checkout_cnt_items">
					<div className="checkout_box_subtitles_items">
						<div className="gorup_left">
							<h5 className="subtitle_checkout checkout_size_art">ARTICULO</h5>
							<h5 className="subtitle_checkout checkout_size_description">
								DESCRIPCION
							</h5>
						</div>
						<div className="gorup_right">
							<h5 className="subtitle_checkout">CANTIDAD</h5>
							<h5 className="subtitle_checkout">PRECIO</h5>
							<h5 className="subtitle_checkout">SUBTOTAL</h5>
						</div>
					</div>
					<div className="checkout_box_items">
						<div className="cnt_items_checkout_menu">
							{!!cartProducts.length ? (
								cartProducts.map((p, index) => (
									<ItemCart key={Math.random()} _index={index} {...p} />
								))
							) : (
								<div className="no_products">VACIO</div>
							)}
						</div>
					</div>
				</div>
				<div className="data_form_box total_price_payment">
					<div className="checkout_total_box total_price">
						<div className="subt_box_checkout">
							<h4>SUBTOTAL</h4>
							<h4>ARS {subTotalPrice()}</h4>
						</div>
						<div className="ship_box_checkout">
							<h4>ENVIO</h4>
							<h4>ARS {currencyFormat(totalShipping())}</h4>
						</div>
						<div className="total_box_checkout">
							<h2>TOTAL</h2>
							<h2>ARS {totalPrice()}</h2>
						</div>
					</div>
				</div>
				<div className="payment_box_buttons">
					<div className="checkout_box_button payment_back_btn">
						<Link
							to="/cvn/checkout/cart"
							className="btn_secondary btn_payment_back btn_bottom"
						>
							VOLVER AL CHECKOUT
						</Link>
					</div>
					<div className="checkout_box_button">
						<button
							onClick={handlePayment}
							type="submit"
							className="btn_primary btn_procedd_checkout btn_bottom"
						>
							PAGAR
						</button>
					</div>
				</div>
				<div className="secure_payment_box secure_bottom">
					<div className="icon_secured_box">
						<span className="leyend_secure">Site 100% secure</span>
						<SecureIcon />
					</div>
					<span>SSL secured Web Site</span>
				</div>
			</div>
		</>
	);
};

export default PaymentsCheckout;
