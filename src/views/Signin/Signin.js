import React from 'react';
import Login from '../../components/Login/Login';

import './styles.css';

const Signin = () => {
	return (
		<>
			<main className="main_container">
				<section className="form_main_container">
					<Login />
				</section>
			</main>
		</>
	);
};

export default Signin;
