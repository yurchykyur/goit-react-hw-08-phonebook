import { useDispatch } from 'react-redux';
import { logIn } from 'components/redux/auth/operations';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Textfield from 'components/LoginForm/Textfield'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Yurchyk Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const INITIAL_FORM_STATE = { email: '', password: '' }
const FORM_VALIDATION =Yup.object().shape({ 
  email: Yup.string().email('Invalid email.').required('Required'), 
  password: Yup.string().required("Required")
})

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      logIn({
        email: data.get('email'),
      password: data.get('password'),
      }))
  };


  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     logIn({
  //       email: form.elements.email.value,
  //       password: form.elements.password.value,
  //     })
  //   );
  //   form.reset();
  // };

  return (

    <>
 <ThemeProvider theme={defaultTheme}>
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
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <FormControl error fullWidth required>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              type="email"
              autoFocus
              // helperText="Incorrect email"
            />
            {/* <FormHelperText id="email">Incorrect email</FormHelperText> */}
             </FormControl>


            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // disabled="true"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link href="/regisration" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>

    {/* --------------------------------------------------------------------------------- */}
    
    <div>
     <h1>Any place in your app!</h1>
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
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          
          <Formik
       initialValues={INITIAL_FORM_STATE}
       validationSchema={FORM_VALIDATION}
      
       onSubmit={(values) => {
        console.log(values)
         
       }}
     >
       {({ isSubmitting }) => (
         <Form>
          <Grid container spacing={3}>
        <Grid item xs={12} > 
          <Textfield 
          name="email" 
          label="Email Address"  
          />
          </Grid >
           {/* <Field type="email" name="email" /> */}
           {/* <ErrorMessage name="email" component="div" /> */}
           <Grid item xs={12} > 
          <Textfield 
          name="password" 
          label="Password"  
          />
          </Grid>

           <Field type="password" name="password" />
           {/* <ErrorMessage name="password" component="div" /> */}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
           </Grid>
         </Form>
       )}
     </Formik>
        </Box>
     </Container>

    
   </div>
    </>
  );
};

export default LoginForm;
