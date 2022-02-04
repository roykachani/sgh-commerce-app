import * as yup from 'yup';

export const schema = yup.object().shape({
	email: yup
		.string()
		.email('email valido requerido')
		.required('email requerido'),
	password: yup
		.string()
		.required('password requerida')
		.min(4, 'minimo 4 caracteres'),
});
