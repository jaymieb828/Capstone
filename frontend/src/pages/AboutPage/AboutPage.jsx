import React, { useEffect } from 'react'; 
import Typography from '@mui/material/Typography';


const AboutPage = () => {
  useEffect(() => {
  }, [])
  
  return ( 
    <div className='m-5'>
    <div className='m-5'> 
      <Typography className='m-5 p-5' sx={{boxShadow:3}} align='center'>
        <h4>About My Pantry</h4>
        <br></br>
        <br></br>
        <h4> My Pantry is a Capstone project built by Jaymie Batoon for devCodeCamp's full stack coding bootcamp course. This app has been designed with a Django backend, React front end, MySql Database and styled with Material UI and CSS.</h4>
        <br></br>
        <br></br>
        <h4>About Jaymie</h4>
        <br></br>
        <br></br>
        <h4>Jaymie is a Disabled Veteran who served in the US Navy and has worked as a Field Service Engineer in Semiconductor Manufacturing for nearly two decades. He is currently enrolled with devCodeCamp's full stack flex program in the hopes of pivoting his tech career from hardware to software. Jaymie was born and raised in Honolulu, HI and is currently living in Southbury, CT with his wife, Audrey, and his two children, Addison and Jace.
        </h4>



      </Typography>
    </div>
    </div>
  );
}

export default AboutPage;