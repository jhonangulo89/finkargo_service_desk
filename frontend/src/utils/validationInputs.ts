import * as yup from 'yup'

const validationInputs = {
  email: yup.string().email('Correo no válido').required('Correo es requerido'),
  password: yup
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('Contraseña es requerida'),
  passswordRegister: yup
    .string()
    .required('Contraseña es requerida')
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .matches(
      /[a-z]/,
      'La contraseña debe contener al menos una letra minúscula'
    )
    .matches(
      /[A-Z]/,
      'La contraseña debe contener al menos una letra mayúscula'
    )
    .matches(/[0-9]/, 'La contraseña debe contener al menos un número')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'La contraseña debe contener al menos un carácter especial'
    )
}

export default validationInputs
