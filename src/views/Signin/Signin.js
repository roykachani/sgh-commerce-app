import React from 'react';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';

import './styles.css';

const Signin = () => {
	return (
		<>
			<main className="main_container">
				<Header />
				<section className="log_container">
					<Login />
				</section>
			</main>
		</>
	);
};

export default Signin;
