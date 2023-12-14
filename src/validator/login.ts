import * as yup from 'yup'

export type LoginForm = {
  email: string
  password: string
}

export const loginFormValidation = yup.object().shape({
  email: yup
    .string()
    .typeError('Campo obrigatório!')
    .required('Campo obrigatório!')
    .email('Email inválido!')
    .test('crmEmail', 'Domínio inválido!', (value) => {
      return value.includes('@crm.com')
    }),
  password: yup
    .string()
    .typeError('Campo obrigatório!')
    .required('Campo obrigatório!')
    .min(8, 'A senha deve ter no mínimo 8 caracteres'),
})
