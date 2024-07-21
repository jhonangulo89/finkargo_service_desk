import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { TextField, Button, Typography, Box, Grid, Stack } from '@mui/material'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { postAuth } from '../../services/auth'
import theme from '../../theme/theme'

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
    <Box
      sx={{
        height: '100%',
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        backgroundImage:
          'url(https://static-cse.canva.com/_next/static/assets/wave_w2881xh801_98aaf3a37b4d733bdb3bc7754c25ad3608c520c5ebb9b1079f2d0c2f78b07ab8.png)',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start'
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing={2}
          sx={{
            marginTop: 8,
            backgroundColor: theme.palette.background.paper,
            borderRadius: 2,
            paddingX: 4,
            paddingY: 8,
            width: { xs: '320px', sm: '360px', md: '400px', lg: '420px' }
          }}
        >
          <Grid item>
            <Typography variant="h4" component="h1" gutterBottom>
              Login
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              label="Correo"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('email', { required: 'Email is required' })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Contraseña"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('password', { required: 'Password is required' })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Ingresar
            </Button>
          </Grid>
        </Stack>
      </form>
    </Box>
  )
}

export default Login
