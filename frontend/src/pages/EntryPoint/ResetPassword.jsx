import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import testImage from '../../Assets/GirikonLogo.jpg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { resetToken } from "../../redux/actions/auth";
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://girikon.ai/">
        Girikon AI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const ResetPassword = ({ resetToken, auth }) => {
  const navigate = useNavigate();
  const defaultTheme = createTheme();
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  let { token, email } = useParams();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate('/dashboard');
    }
  }, [localStorage.getItem("token")]);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validatePassword(password)) {
      setPasswordError('Password must contain at least one uppercase letter, one number, one special character, and be at least 8 characters long.');
      return;
    }
    let obj = {
      token: token,
      password: password
    };
    resetToken(obj).then(() => {
      navigate('/signIn');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      

      
     {/* <Container component="main"> */}
     <Grid container component="main" sx={{ height: '100vh', width:"100%", padding:'0 !important'}}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
         >
          <img src={testImage} alt="Logo" style={{ width: '150px', height: '50px', marginBottom: 15 }} />
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="email"
                autoComplete="email"
                value={email}
                disabled
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="New Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePasswordChange}
                autoFocus
                sx={{ width: '100%' }}
                error={!!passwordError}
                helperText={passwordError}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Reset Password
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Remembered your password? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
            </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </Grid>
        {/* <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            //backgroundImage: `url(${testImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[300] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        /> */}
        </Grid>
      {/* </Container> */}
      
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  resetToken
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
