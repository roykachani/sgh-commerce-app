import { useEffect, useState } from 'react';
import BagIcon from '../Icons/BagIcon';

import LogoW from '../../assets/logo_w.png';
import './styles.css';

export default function Header() {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.scrollY > 50);
		});
	}, []);

	return (
		<div className={scroll ? 'header_container active' : 'header_container'}>
			<div className="nav_items">
				<div className="nav_box1">
					<div className="nav_logo">
						<img src={LogoW} alt="CAVERN | Logo empresarial" />
					</div>
					<div className="nav_menu">
						<div className="nav_status">HOME</div>
						<div className="nav_status">PRODUCTOS</div>
						<div className="nav_status">CONTACTO</div>
					</div>
				</div>
				<div className="nav_box2">
					<div className="box_items">
						<div className="nav_cart">
							<BagIcon />
						</div>
						<div className="btn_secondary nav_login">Registar/Ingresar</div>
					</div>
				</div>
			</div>
		</div>
	);
}
