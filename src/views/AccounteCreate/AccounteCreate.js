import { useContext } from 'react';

import { ModalContext } from '../../context/Modal';
import Footer from '../../components/Footer/Footer';
import VerifyAccount from '../../components/VerifyAccount/VerifyAccount';

const AccounteCreate = () => {
	const { state, handlerUser, handlerCart } = useContext(ModalContext);
	const handlerMenu = () => {
		if (!!state.modalCart) handlerCart();
		if (!!state.modalUser) handlerUser();
	};

	return (
		<>
			<main onClick={handlerMenu} className="main_container">
				<section className="form_main_container">
					<VerifyAccount />
				</section>
				<Footer />
			</main>
		</>
	);
};

export default AccounteCreate;
