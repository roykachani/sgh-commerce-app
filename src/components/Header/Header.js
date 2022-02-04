import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { DropDownMenu } from '../DropDownMenu/DropDownMenu';
import { ModalContext } from '../../context/Modal';
import BagIcon from '../Icons/BagIcon';
import LogoW from '../../assets/logo_w.png';
import UserIcon from '../Icons/UserIcon';

import './styles.css';

export default function Header() {
	const [scroll, setScroll] = useState(false);

	const { state, handlerUser } = useContext(ModalContext);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.scrollY > 50);
		});
	}, []);

	const handlerMenu = () => {
		handlerUser();
	};

	return (
		<>
			<div className={scroll ? 'header_container active' : 'header_container'}>
				{!!state.modal && <DropDownMenu />}
				<div className="nav_items">
					<div className="nav_box1">
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
							<div className="nav_cart">
								<BagIcon />
							</div>
							{/* <div className="btn_secondary nav_login">Registar/Ingresar</div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
