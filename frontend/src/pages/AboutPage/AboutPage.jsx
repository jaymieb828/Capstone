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
        <h4>Jaymie is a veteran who served in the US Navy for 8 years. He is currently working as a Equipment Engineering Technician 
          in semiconductor manufacturing. He is hoping to retain a Junior Software Engineering position upon completion of this bootcamp.
          Jaymie lives in Connecticut with his wife and two children.
        </h4>



      </Typography>
    </div>
    </div>
  );
}

export default AboutPage;