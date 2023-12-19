import * as yup from 'yup'

export const resetPasswordValidation = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Senha precisa ter no mínimo 8 caracteres')
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
      'A senha deve ter no mínimo um caracter especial e uma letra maiúscula.',
    ),
  password_confirmation: yup
    .string()
    .test(
      'is-valid-confirmation',
      'Senhas não coincidem',
      (value, context) => value === context.parent.newPassword,
    ),
  old_password: yup.string(),
})
