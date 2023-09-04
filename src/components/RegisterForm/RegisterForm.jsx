import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';

import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Textfield from 'components/FormUI/Textfield';
import Button from 'components/FormUI/Button';
import { register } from 'components/redux/auth/operations';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" component={RouterLink} to="/">
        Phonebook Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const INITIAL_FORM_STATE = { email: '', password: '', name: '' };
const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('Required'),
  password: Yup.string().min(8).required('Required'),
  name: Yup.string().min(2).max(50).required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Registration page</title>
      </Helmet>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 1 }}>
            Sign up
          </Typography>

          <Formik
            initialValues={INITIAL_FORM_STATE}
            validationSchema={FORM_VALIDATION}
            onSubmit={values => {
              dispatch(register(values));
            }}
          >
            {({ isValid, dirty }) => (
              <Form>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Textfield
                      name="name"
                      label="Username"
                      margin="normal"
                      autoComplete="name"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="email"
                      label="Email Address"
                      margin="normal"
                      autoComplete="email"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="password"
                      label="Password"
                      margin="normal"
                      autoComplete="current-password"
                      type="password"
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ mt: 3, mb: 2 }}>
                    <Button disabled={!dirty || !isValid}>Register</Button>
                  </Grid>

                  <Grid container>
                    <Grid item xs></Grid>
                    <Grid item>
                      <Link component={RouterLink} to="/login" variant="body2">
                        {'Already have an account? Sign in'}
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  );
};
