import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
} from '@mui/material';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { services } from 'services';

import Auth from '../Auth';

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

export default function Login() {
  // const navigate = useNavigate();
  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    services
      .login(values.email, values.password)
      .then((response) => {
        console.log(response.data);
        // navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err);
        setValues({ ...values, password: '' });
      });
  };

  // const handleRedirect = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   navigate('/dashboard');
  // };

  return (
    <Auth>
      <h2 className="text-center mb-2">Acessar conta</h2>
      <p className="text-center mb-3">
        Faça login com e-mail e senha para acessar o painel administrativo do Assistente
        Virtual do <span className="text-primary font-weight-bold">IC-UFBA</span>.
      </p>

      <form onSubmit={handleSubmit} action="#">
        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel htmlFor="email">E-mail</InputLabel>
          <OutlinedInput
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            label="E-mail"
          />
        </FormControl>

        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel htmlFor="password">Senha</InputLabel>
          <OutlinedInput
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Senha"
          />
        </FormControl>

        <div className="d-flex mb-3 justify-content-end">
          <Link href="/">Esqueceu sua senha?</Link>
        </div>

        <Button
          type="submit"
          variant="contained"
          className="mb-3"
          disableElevation
          fullWidth
        >
          Entrar
        </Button>
      </form>
    </Auth>
  );
}
