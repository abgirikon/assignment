import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import testImage from '../../Assets/GirikonLogo.jpg'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { resetPassword } from "../../redux/actions/auth";
import { connect } from "react-redux";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
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

const ForgotPassword = ({ resetPassword}) => {
const navigate = useNavigate();
const defaultTheme = createTheme();
const [username, setUsername] = useState('');
const [error, setError] = useState('');

useEffect(() => {
  if (localStorage.getItem("token")) {
    navigate('/dashboard');
  } 
}, [localStorage.getItem("token")]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setError(''); 
  };
  
  const handleSubmit = (event) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(username)) {
      setError('Please enter a valid email address.');
      return;
    }

    let obj = {
      email: username
    }
    resetPassword(obj).then(() => {
      navigate('/signIn');
    })
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
          <img src={testImage} alt='img'
          style={{
            width : '150px',
            height: '50px',
            marginBottom: 15
          }}/>
         
          <Typography component="h6" variant="h6" style={{ color: 'grey', fontSize: '24px' }}>
           Forgot Password
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1, width:"100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              onChange={handleUsernameChange}
              autoFocus
              error={!!error}
              helperText={error}
            />
          </Box>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => handleSubmit()}
              sx={{ mt: 3, mb: 2 }}
            > 
             Send E-Mail
            </Button>
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

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  resetPassword
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

