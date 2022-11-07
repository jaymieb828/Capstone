import * as React from 'react';
import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

 
const theme = createTheme();

export default function RegisterPage() {

  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
 

    const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              name="username" 
              value={formData.username} 
              onChange={handleInputChange}
              autoComplete=""
              label='Username'
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              name="email" 
              value={formData.email} 
              onChange={handleInputChange}
              autoComplete=""
              label='Email'
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              name="firstName" 
              label="First Name" 
              value={formData.firstName} 
              onChange={handleInputChange}
              autoComplete=""
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              name="lastName" 
              value={formData.lastName} 
              onChange={handleInputChange}
              autoComplete=""
              autoFocus
              label='Last Name'
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="password"
              name="password" 
              onChange={handleInputChange}
              value={formData.password} 
              autoComplete="current-password"
              label='Password'
            />
             
            <br/>
            <Button
              type="submit"
              fullWidth={true}
              variant="contained"
              sx={{ mt: 0, mb: 2,width:'100%' }}
            >
              Register Account
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item> 
                <Link to="/login" variant="body2">
                  {"Login"}
                </Link> 
              </Grid>
            </Grid>
          </Box>
        </Box>
        <br/>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}