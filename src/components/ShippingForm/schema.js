import * as yup from 'yup';

export const schema = yup.object().shape({
	name: yup
		.string('Debes ingresar tu nombre')
		.required('Tu nombre es obligatorio'),
	lastname: yup
		.string('Debes ingresar tu apellido')
		.required('Tu apellido es obligatorio'),
	dni: yup
		.string('Debes ingresar tu DNI')
		.min(6, 'Tu DNI debe tener un minimo de 6 digitos')
		.required('Tu DNI es obligatorio'),
	telephone: yup
		.string('Debes ingresar un teléfono de contacto')
		.min(
			6,
			'Tu telefono debe tener un minimo de 6 digitos, no te olvides del codigo de área'
		)
		.required('Tu teléfono de contacto es obligatorio'),
	street: yup
		.string('Debes ingresar la calle de tu domicilio')
		.required('La calle de tu domicilio es obligatoria'),
	number: yup
		.string('Debe ser un numero')
		.min(1, 'Tu número de domicilio debe tener al menos 1 digito')
		.required('Tu número de domicilio es obligatorio'),
	floor: yup.string('Debes ingresar el número piso de tu domicilio'),
	apartment: yup.string('Debes ingresar el departamento de tu domicilio'),
	location: yup.string('Debes ingresar la localidad de tu domicilio'),
	postal: yup
		.string('Debes ingresar el código postal de tu domicilio')
		.min(1, 'El código postal de domicilio debe tener al menos 1 digito')
		.required(' el código postal de domicilio es obligatorio'),
	shippingstreet: yup
		.string('Debes ingresar la calle de tu domicilio')
		.required('La calle de tu domicilio es obligatoria'),
	shippingnumber: yup
		.string('Debes ingresar el número de tu domicilio')
		.min(1, 'Tu número de domicilio debe tener al menos 1 digito')
		.required('Tu número de domicilio es obligatorio'),
	shippingfloor: yup.string('Debes ingresar el número piso de tu domicilio'),
	shippingapartment: yup.string(
		'Debes ingresar el departamento de tu domicilio'
	),
	shippinglocation: yup.string('Debes ingresar la localidad de tu domicilio'),
	shippingpostal: yup
		.string('Debes ingresar el código postal de tu domicilio')
		.min(1, 'El código postal de domicilio debe tener al menos 1 digito')
		.required(' el código postal de domicilio es obligatorio'),
});
