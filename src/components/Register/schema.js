import * as yup from 'yup';

export const schema = yup.object().shape({
	email: yup.string().email().required('email requerido'),
	password: yup
		.string()
		.required('password requerida')
		.min(4, 'minimo 4 caracteres'),
	displayname: yup.string().required('Nombre de usuario requerido'),
	name: yup.string().required('Nombre requerido'),
	lastname: yup.string().required('Apellido requerido'),
});
