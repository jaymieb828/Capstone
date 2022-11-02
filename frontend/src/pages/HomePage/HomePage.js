
import useAuth from "../../hooks/useAuth";


const HomePage = () => {
 

  const [user] = useAuth();
 

  
return (
  <div className='page-container'>
     {user && <h4>Hello, {user.username}</h4>}    
     <h4> sah duh</h4>
  </div>
  );
};



export default HomePage;