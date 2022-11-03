import React, { useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import { Typography } from '@mui/material';

const RecipePage = () => {
 
  const [user] = useAuth();
 
  
  useEffect(() => {
  }, [])

  
return (

  <div className='m-5'>
  <div className='m-5'> 
    <Typography className='m-5 p-5' sx={{boxShadow:3}} align='center'>
      
      Recipe page is currently being developed for future iteration of this app. Stay tuned!
      
    </Typography>
  </div>
  </div>
);
}

export default RecipePage;