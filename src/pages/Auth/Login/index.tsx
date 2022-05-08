import './styles.scss';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Alert,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useAuthContext } from 'contexts/AuthContext/hook';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { services, setAuthOnLocalStorage } from 'services';

import Auth from '..';

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

export default function Login() {
  const navigate = useNavigate();
  const [errorAlert, setErrorAlert] = React.useState(false);
  const [controlsError, setControlsError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    showPassword: false,
  });
  const { storeUser, storeToken } = useAuthContext();

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
      setControlsError(false);
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

    if (!!values.email || !!values.email) {
      setLoading(true);

      services
        .login(values)
        .then((response) => response.data)
        .then((response) => {
          if (response.status === 'Success') {
            const user = response.data?.user;
            storeUser(user);
            storeToken(response.data?.token);
            setAuthOnLocalStorage(response.data);
            navigate('/dashboard');
          }
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setErrorAlert(true);
          setControlsError(true);
          setValues({ ...values, password: '' });
        });
    } else {
      setControlsError(true);
    }
  };

  return (
    <Auth>
      {errorAlert ? (
        <Alert severity="error">
          Seu e-mail ou senha não correspondem aos nossos registros.
        </Alert>
      ) : null}

      <form onSubmit={handleSubmit} action="#">
        <FormControl variant="outlined" error={controlsError} fullWidth margin="normal">
          <InputLabel htmlFor="email">E-mail</InputLabel>
          <OutlinedInput
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            label="E-mail"
          />
          {controlsError ? (
            <FormHelperText id="e-mail-error-text">
              {!values.email ? 'Campo obrigatório.' : 'E-mail ou senha incorreto.'}
            </FormHelperText>
          ) : null}
        </FormControl>

        <FormControl variant="outlined" error={controlsError} fullWidth margin="normal">
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
          {controlsError ? (
            <FormHelperText id="password-error-text">
              {!values.password ? 'Campo obrigatório.' : 'E-mail ou senha incorreto.'}
            </FormHelperText>
          ) : null}
        </FormControl>

        <div className="d-flex mb-3 justify-content-end">
          <Link to="/request-password" id="request-password__button">
            Esqueceu sua senha?
          </Link>
        </div>

        <LoadingButton
          id="submitt-button"
          type="submit"
          loading={loading}
          variant="contained"
          className="mb-3"
          disableElevation
          fullWidth
        >
          Entrar
        </LoadingButton>
      </form>
    </Auth>
  );
}
