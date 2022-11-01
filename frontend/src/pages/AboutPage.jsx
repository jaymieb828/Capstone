import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import useAuth from '../hooks/useAuth';
import Typography from '@mui/material/Typography';
import ShoppingList from '../components/ShoppingList/ShoppingList';

const AboutPage = () => {
  useEffect(() => {
  }, [])
  
  return ( 
    <div className='m-5'>
    <div className='m-5'> 
      <Typography className='m-5 p-5' sx={{boxShadow:3}} align='justify'>
        About Page 
        <br></br>
        <br></br>
        My Pantry is a Capstone project built by Jaymie Batoon for devCodeCamp's full stack coding bootcamp course. This app has been designed with a Django backend, React front end, MySql Database and styled with Material UI/CSS
      </Typography>
    </div>
    </div>
  );
}

export default AboutPage;