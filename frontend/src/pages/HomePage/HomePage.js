import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import DisplayItems from "../../components/DisplayItems/DisplayItems";
import axios from "axios";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [items, setAllItems] = useState([]);

  useEffect(() => {
    getAllItems();
    
  }, [])

  async function getAllItems(){
    let response = await axios.get(`http://127.0.0.1:8000/api/pantry/`,{
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
    setAllItems(response.data)
    
  }


  return (
    <div className='page-container'>
      <div><DisplayItems displayItems = {items}/></div> 

      
    </div>
  );
}
  

export default HomePage;


