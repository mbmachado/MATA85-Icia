import './styles.scss';

import LoadingButton from '@mui/lab/LoadingButton';
import {
  Alert,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { services } from 'services';

import Auth from '..';

interface State {
  email: string;
}

export default function RequestPassword() {
  const [loading, setLoading] = React.useState(false);
  const [successAlert, setSuccessAlert] = React.useState(false);
  const [controlsError, setControlsError] = React.useState(false);
  const [values, setValues] = React.useState<State>({
    email: '',
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
      if (controlsError) setControlsError(false);
      if (successAlert) setSuccessAlert(false);
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = values.email;

    if (email) {
      setLoading(true);

      try {
        const response = await services.requestPassword(email);
        console.log(response);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
      setSuccessAlert(true);
    } else {
      setControlsError(true);
    }
  };

  return (
    <Auth>
      <form onSubmit={handleSubmit} action="#">
        {successAlert ? (
          <Alert severity="success">
            Se o e-mail <b>{values.email}</b> estiver cadastrado, você receberá intruções
            para recuperar sua senha.
          </Alert>
        ) : null}

        <FormControl
          variant="outlined"
          error={controlsError}
          fullWidth
          margin="normal"
          className="mb-4"
        >
          <InputLabel htmlFor="email">E-mail</InputLabel>
          <OutlinedInput
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            label="E-mail"
          />
          {controlsError ? (
            <FormHelperText id="e-mail-error-text">Campo obrigatório.</FormHelperText>
          ) : null}
        </FormControl>

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
      <Link to="/login">Fazer login</Link> em vez disso.
    </Auth>
  );
}
