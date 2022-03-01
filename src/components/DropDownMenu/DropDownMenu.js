import { useContext, memo } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/Auth';
import { ModalContext } from '../../context/Modal';
import Logout from '../Logout/Logout';

import './styles.css';

export const DropDownMenu = memo(() => {
	const { state, handlerUser } = useContext(ModalContext);
	const { userState } = useContext(AuthContext);

	const handlerMenu = () => {
		if (!!state.modalUser) handlerUser();
	};

	const DropDownItem = ({ children, href }) => {
		return (
			<Link to={`/${href}`} className="menu_item">
				{children}
			</Link>
		);
	};

	if (userState.userData?.JWT) {
		return (
			<>
				<div
					className={!!state.modalUser ? 'dropdown user_active' : 'dropdown'}
				>
					<DropDownItem href={'MyProfile'}>Perfil</DropDownItem>
					<DropDownItem href={'MyOrders'}>Mis compras</DropDownItem>
					<DropDownItem href={''}>
						<Logout />
					</DropDownItem>
				</div>
			</>
		);
	}

	return (
		// <div className="bg_menu" onClick={handlerMenu}>
		<div className={!!state.modalUser ? 'dropdown user_active' : 'dropdown'}>
			<DropDownItem href={'signIn'}>Iniciar sesion</DropDownItem>
			<DropDownItem href={'signUp'}>Registrarse</DropDownItem>
		</div>
		// </div>
	);
});
