import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

//Authentication Resolvers
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type LoginFormFields = z.infer<typeof loginSchema>

const useLoginForm = () => {
  return useForm<LoginFormFields>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })
}

const registerSchema = z
  .object({
    email: z.string().email(),
    username: z.string().min(3),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type RegisterFormFields = z.infer<typeof registerSchema>

const useRegisterForm = () => {
  return useForm<RegisterFormFields>({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(registerSchema),
  })
}

const forgotPasswordSchema = z.object({
  email: z.string().email(),
})

type ForgotPasswordFields = z.infer<typeof forgotPasswordSchema>

const useForgotPasswordForm = () => {
  return useForm<ForgotPasswordFields>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
  })
}

export { useForgotPasswordForm, useLoginForm, useRegisterForm }