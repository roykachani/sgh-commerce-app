import { useContext } from 'react';
import { AuthContext } from '../../context/Auth';

const Logout = () => {
	const { exit } = useContext(AuthContext);

	const handlerLogOut = () => {
		exit();
	};
	return (
		<>
			<div onClick={handlerLogOut} className="menu_item">
				Salir
			</div>
		</>
	);
};

export default Logout;
