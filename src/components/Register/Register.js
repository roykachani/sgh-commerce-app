import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import { schema } from './schema';
import { getAuthStorage } from '../../utils/auth';
import { AuthContext } from '../../context/Auth';

const Register = () => {
	const { userState, authenticate, exit } = useContext(AuthContext);
	const history = useHistory();

	//check logged
	useEffect(() => {
		if (!!getAuthStorage()) history.push('/home');
	}, [history, userState]);

	//create object
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const submitRegister = async (data) => {
		await authenticate(`${process.env.REACT_APP_BACK_ENDPIONT_REGIST}`, data);
	};
	console.log(userState);

	if (!!userState.userData & (userState.userData?.status === 201)) {
		setTimeout(() => {
			history.push('/accounteCreate');
			exit();
		}, 400);
	}

	return (
		<>
			<div className="form_box register">
				<section className="form_ctn_box">
					<div className="form_title_box">
						<h2 className="form_title">Registrate</h2>
					</div>
					<div className="form_body">
						<form
							className="login_form"
							onSubmit={handleSubmit(submitRegister)}
						>
							<input
								{...register('email')}
								type="email"
								name="email"
								placeholder="email"
							/>
							{errors.email?.message && (
								<span className="errors_text">{errors.email?.message}</span>
							)}
							{userState.userData?.status === 400 && (
								<span className="errors_text">
									{userState.userData.message}
								</span>
							)}
							<input
								{...register('password')}
								type="password"
								name="password"
								placeholder="password"
							/>
							{errors.password?.message && (
								<span className="errors_text">{errors.password?.message}</span>
							)}
							<input
								{...register('displayname')}
								type="text"
								name="displayname"
								placeholder="usuario"
							/>
							{errors.displayname?.message && (
								<span className="errors_text">
									{errors.displayname?.message}
								</span>
							)}
							<input
								{...register('name')}
								type="text"
								name="name"
								placeholder="nombre"
							/>
							{errors.name?.message && (
								<span className="errors_text">{errors.name?.message}</span>
							)}
							<input
								{...register('lastname')}
								type="text"
								name="lastname"
								placeholder="apellido"
							/>
							{errors.lastname?.message && (
								<span className="errors_text">{errors.lastname?.message}</span>
							)}{' '}
							<button type="submit" className="btn_secondary btn_form">
								Registrarse
							</button>
						</form>
					</div>
				</section>
			</div>
		</>
	);
};

export default Register;
