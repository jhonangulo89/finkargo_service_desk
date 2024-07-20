import React from 'react'
import { useForm, SubmitHandler, get } from 'react-hook-form'
import { TextField, Button, Container, Typography, Box } from '@mui/material'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { postAuth } from '../../services/auth'

interface IFormInput {
  email: string
  password: string
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>()
  const { login } = useAuth()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    postAuth({ path: 'login', data }).then((response) => {
      if (response.status === 200) {
        login()
        navigate('/')
      }
    })
  }

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('email', { required: 'Email is required' })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register('password', { required: 'Password is required' })}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  )
}

export default Login
