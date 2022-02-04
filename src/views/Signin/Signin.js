import React from 'react';
import Login from '../../components/Login/Login';
import Footer from '../../components/Footer/Footer';

import './styles.css';

const Signin = () => {
	return (
		<>
			<main className="main_container">
				<section className="form_main_container">
					<Login />
				</section>
				<Footer />
			</main>
		</>
	);
};

export default Signin;
