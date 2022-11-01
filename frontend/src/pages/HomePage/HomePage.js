import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import CreateItem from '../../components/CreateItem/CreateItem';
import DisplayItems from '../../components/DisplayItems/DisplayItems';
import useAuth from "../../hooks/useAuth";
import AuthContext from '../../context/AuthContext';

const HomePage = () => {
 
  const [items, setItems] = useState([]);
  const [user, token] = useAuth();
 
  
  useEffect(() => {
    getAllItems();
  }, [])



async function getAllItems(){
  let response = await axios.get(`http://127.0.0.1:8000/api/pantry/`,{
    headers: {
      "Content-Type":"application/json",
      Authorization: "Bearer " + token
    }
  });
   setItems(response.data)
}
  

// async function createItem(newItem){
//   let response = await axios.post('http://127.0.0.1:8000/api/pantry/', newItem,{ 
//     headers: {
//     Authorization: 'Bearer' + token
//       }
//   });
  
//   if(response.status===201){
//     await getAllItems();
//     };

  
  
return (
    <div className='page-container'>

      {user && <h4>Hello, {user.username}</h4>}

      {/* <div><DisplayItems displayItems = {items}/></div>  */}
       {/* <div className='content-wrap'><CreateItem addNewItem={createItem}/></div> */}
      
    </div>
    );
  };


export default HomePage;