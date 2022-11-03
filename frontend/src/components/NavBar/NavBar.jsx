import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext"; 
import { useContext } from "react";
import  {makeStyles} from "@material-ui/core";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = [
  // 'Products', 'Pricing', 'Blog'
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white", 
      marginRight: theme.spacing(2),
      "&:hover": {
        color: "white", 
      },
    },
  }));

  const classes = useStyles();

  const { logoutUser, user } = useContext(AuthContext); 
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography 
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}

              
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> 

            <Typography>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            </Typography>
            <Typography>
            <Link to="/pantry"  className={classes.link}>
              Pantry
            </Link>
            </Typography>  
           <Typography>
            <Link to="/shopping-list"  className={classes.link}>
              Shopping List
            </Link>
            </Typography>
            <Typography>
            <Link to="/about"  className={classes.link}>
              About
            </Link>
            </Typography>
            <Typography>
            <Link to="/recipes"  className={classes.link}>
              Recipes
            </Link>
            </Typography>

          </Box>

          <Box sx={{ flexGrow: 0 }}>

          {user ? (
            <Button variant="contained" sx={{backgroundColor:'#212121'}} onClick={logoutUser}>Logout</Button>
 

          ) : (
            <Typography>
              <Link to='/login' className={classes.link}>
              Login
              </Link>
            </Typography>
          )}
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
