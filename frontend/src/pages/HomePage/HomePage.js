// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import CreateItem from '../../components/CreateItem/CreateItem';
// import DisplayItems from '../../components/DisplayItems/DisplayItems';
// import useAuth from "../../hooks/useAuth";


// const HomePage = () => {

//   const [items, setItems] = useState([]);
//   const [ token] = useAuth();
//   const [newItem, setItem] = useState([]);
  
//   useEffect(() => {
//     getAllItems();
//     createItem();
//   }, [])



// async function getAllItems(){
//   let response = await axios.get(`http://127.0.0.1:8000/api/pantry/`,{
//     headers: {
//       Authorization: 'Bearer' + token
//     }
//   });
//    setItems(response.data)
// }
  

// async function createItem(newItem){
//   let response = await axios.post('http://127.0.0.1:8000/api/pantry/', newItem,{ 
//     headers: {
//     Authorization: 'Bearer' + token
//       }
//   });
  
//   if(response.status===201){
//     await getAllItems();
//     };

  
  
// return (
//     <div className='page-container'>
//       <div><DisplayItems displayItems = {items}/></div> 
//        <div className='content-wrap'><CreateItem addNewItem={createItem}/></div>
      
//     </div>
//     );
//   };
// }


// export default HomePage;

import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import DisplayItems from "../../components/DisplayItems/DisplayItems";
import CreateItem from "../../components/CreateItem/CreateItem";
import axios from "axios";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems();
    
  }, [])

  async function getAllItems(){
    let response = await axios.get(`http://127.0.0.1:8000/api/pantry/`,{
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
    setItems(response.data)  
  }

  async function addNewItem(newItem){
    let response = await axios.post(`http://127.0.0.1:8000/api/pantry/`,{
    headers: {
      Authorization: 'Bearer ' + token
    }
  }); 
  if(response.status === 200){
    await getAllItems();
  }
  }

  return (
    <div className='page-container'>
      <div><DisplayItems displayItems = {items}/></div>
      <div className='content-wrap'><CreateItem addNewItem = {addNewItem}/></div>

      
    </div>
  );
}
  

export default HomePage;
