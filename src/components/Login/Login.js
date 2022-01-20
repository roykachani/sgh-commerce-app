import { useContext, useEffect, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';

import { schema } from './schema';
import { AuthContext } from '../../context/Auth';
import { getAuthStorage } from '../../utils/auth';
import { usePost } from '../../hooks/usePost';
import { userReducer, inicialState } from '../../reducers/user';
import {
	POST_SUCCESS,
	POSTING,
	POST_ERROR,
} from '../../reducers/actions/common';

const Login = () => {
	const [userState, dispatch] = useReducer(userReducer, inicialState);

	const { authenticate } = useContext(AuthContext);

	const [post] = usePost();

	const history = useHistory();

	//check logged
	useEffect(() => {
		if (!!getAuthStorage()) history.push('/home');
	}, []);

	//create object
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const submitLogin = async (data) => {
		try {
			dispatch({ type: POSTING });
			console.log(data);
			const response = await post(
				`${process.env.REACT_APP_BACK_ENPOINT_LOG}`,
				data
			);
			console.log(response);
			dispatch({ type: POST_SUCCESS, payload: response.userData });
			authenticate(response);
			history.push('/home');
		} catch (e) {
			dispatch({ type: POST_ERROR });
			throw Error('error login');
		}
	};
	// if (!!userState) {
	// 	console.log(userState, 'estado en login');
	// }

	return (
		<>
			<div className="form_box">
				<section className="form_ctn_box">
					<div className="form_title_box">
						<h2 className="form_title">Ingresar</h2>
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
							<button type="submit" className="btn_form">
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
