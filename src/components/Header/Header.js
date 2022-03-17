import { useEffect, useState, useContext, memo, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { DropDownMenu } from '../DropDownMenu/DropDownMenu';
import { DropDownCart } from '../DropDownCart/DropDownCart';
import { ModalContext } from '../../context/Modal';
import BagIcon from '../Icons/BagIcon';
import LogoW from '../../assets/logo_w.png';
import UserIcon from '../Icons/UserIcon';

import './styles.css';
import { CartContext } from '../../context/Cart';

export default memo(function Header() {
	const [scroll, setScroll] = useState(false);

	const { state, handlerUser, handlerCart } = useContext(ModalContext);
	const { cartState } = useContext(CartContext);

	const toggleNav = useCallback(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.scrollY > 50);
		});
	}, []);

	useEffect(() => {
		toggleNav();
	}, [toggleNav]);

	const handlerMenu = useCallback(() => {
		handlerUser();
	}, [handlerUser]);
	const handlerCartMenu = useCallback(() => {
		handlerCart();
	}, [handlerCart]);

	const handlerCloseMenu = () => {
		if (!!state.modalCart) handlerCart();
		if (!!state.modalUser) handlerUser();
	};

	return (
		<>
			<div className={scroll ? 'header_container active' : 'header_container'}>
				<DropDownMenu />
				<DropDownCart />
				<div className="nav_items">
					<div className="nav_box1" onClick={handlerCloseMenu}>
						<Link to="/">
							<div className="nav_logo">
								<img src={LogoW} alt="CAVERN | Logo empresarial" />
							</div>
						</Link>
						<div className="nav_menu">
							<Link to="/home">
								<div className="nav_status">HOME</div>
							</Link>
							<Link to="/products">
								<div className="nav_status">PRODUCTOS</div>
							</Link>
							<Link to="/contact">
								<div className="nav_status">CONTACTO</div>
							</Link>
						</div>
					</div>
					<div className="nav_box2">
						<div className="box_items">
							<div className="nav_user" onClick={handlerMenu}>
								<UserIcon />
							</div>
							<div className="nav_cart counter_nav" onClick={handlerCartMenu}>
								<BagIcon />
								{cartState.totalCart?.items > 0 && (
									<div className="box_counter_items">
										{cartState.totalCart.items}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
});
