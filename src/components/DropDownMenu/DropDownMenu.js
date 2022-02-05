import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';
import { ModalContext } from '../../context/Modal';

import './styles.css';

export const DropDownMenu = () => {
	const { state, handlerUser } = useContext(ModalContext);
	const { userState } = useContext(AuthContext);

	const handlerMenu = () => {
		if (!!state.modal) handlerUser();
	};

	const DropDownItem = ({ children, href }) => {
		return (
			<Link to={`/${href}`}>
				<a href={`/${href}`} className="menu_item">
					{children}
				</a>
			</Link>
		);
	};

	if (!!userState.userData) {
		return (
			<>
				<div className="bg_menu" onClick={handlerMenu}>
					<div className={!!state.modal ? 'dropdown user_active' : 'dropdown'}>
						<DropDownItem href={'user'}>Perfil</DropDownItem>
					</div>
				</div>
			</>
		);
	}

	return (
		<div className="bg_menu" onClick={handlerMenu}>
			<div className={!!state.modal ? 'dropdown user_active' : 'dropdown'}>
				<DropDownItem href={'signin'}>Iniciar sesion</DropDownItem>
				<DropDownItem href={'signup'}>Registrarse</DropDownItem>
			</div>
		</div>
	);
};
