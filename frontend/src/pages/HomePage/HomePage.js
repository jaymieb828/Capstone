import React, { useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import { Typography } from '@mui/material';

const HomePage = () => {
 
  const [user] = useAuth();
 
  
  useEffect(() => {
  }, [])

  
return (

  <div className='m-5'>
  <div className='m-5'> 
    <Typography className='m-5 p-5' sx={{boxShadow:3}} align='center'>
      
      <br></br>
      {user && <h4>Hello, {user.username}</h4>}
      <br></br>
      Welcome to My Pantry. Please click on the Pantry tab above to begin adding items.
    </Typography>
  </div>
  </div>
);
}

export default HomePage;