import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import { schema } from './schema';
import { AuthContext } from '../../context/Auth';
import { getAuthStorage } from '../../utils/auth';

const Login = () => {
	const { userState, authenticate } = useContext(AuthContext);
	const history = useHistory();

	//check logged
	useEffect(() => {
		const authStorage = getAuthStorage();
		if (!!authStorage) {
			history.push('/');
		}
	}, [history, userState]);

	//create object
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const submitLogin = async (data) => {
		await authenticate(`${process.env.REACT_APP_BACK_ENPOINT_LOG}`, data);
	};

	if (!!userState.userData & userState.userData?.JWT) {
		history.push('/home');
	}

	return (
		<>
			<div className="form_box">
				<section className="form_ctn_box">
					<div className="form_title_box">
						<h2 className="form_title">Iniciar Sesion</h2>
					</div>
					<div className="form_body">
						<form className="login_form" onSubmit={handleSubmit(submitLogin)}>
							<input
								{...register('email')}
								type="email"
								name="email"
								placeholder="email"
							/>
							<span className="errors_text">{errors.email?.message}</span>
							<input
								{...register('password')}
								type="password"
								name="password"
								placeholder="password"
							/>
							<span className="errors_text">{errors.password?.message}</span>
							<button type="submit" className="btn_secondary btn_form">
								Ingresa
							</button>
						</form>
					</div>
				</section>
			</div>
		</>
	);
};

export default Login;
