import React, { useEffect } from 'react'; 
import Typography from '@mui/material/Typography';


const AboutPage = () => {
  useEffect(() => {
  }, [])
  
  return ( 
    <div className='m-5'>
    <div className='m-5'> 
      <Typography className='m-5 p-5' sx={{boxShadow:3}} align='justify'>
        About My Pantry 
        <br></br>
        <br></br>
        My Pantry is a Capstone project built by Jaymie Batoon for devCodeCamp's full stack coding bootcamp course. This app has been designed with a Django backend, React front end, MySql Database and styled with Material UI.
        <br></br>
        <br></br>
        About Jaymie
        <br></br>
        <br></br>

      </Typography>
    </div>
    </div>
  );
}

export default AboutPage;