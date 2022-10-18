import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
import useAuth from '../hooks/useAuth';

import Cart from '../components/Cart/Cart';

import ShoppingList from '../components/ShoppingList/ShoppingList';

const CartPage = () => {

  const [items, setItems] = useState([]);
  const [user, token] = useAuth();
  
  useEffect(() => {
    getAllItems();
  }, [])



  async function getAllItems(){
    let response = await axios.get(`http://127.0.0.1:8000/api/shoppinglist/`,{
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
    setItems(response.data)  
  }
  


  return (
    <div className='page-container'>
      <div><ShoppingList cartItems = {items}/></div> 
    </div>
  );
}

export default CartPage;