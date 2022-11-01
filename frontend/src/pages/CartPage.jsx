import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import useAuth from '../hooks/useAuth';


 

import ShoppingList from '../components/ShoppingList/ShoppingList';

const CartPage = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, token] = useAuth();
  
  useEffect(() => {
    getAllItems();
  }, [])


 useEffect(() => {
    getCart();
  }, [])

  async function getAllItems(){
    let response = await axios.get('http://127.0.0.1:8000/api/shoppinglist/',{
    headers: {
      "Content-Type":"application/json",
      Authorization: "Bearer " + token
    }
  });
    if (response.status === 200){
      // console.log("---", response.data);
    setItems(response.data)  


    }
    else{
      setItems(null) 
    }
  }
  


  async function getCart(){
    let response = await axios.get('http://127.0.0.1:8000/api/shoppinglist/cart/',{
    headers: {
      "Content-Type":"application/json",
      Authorization: "Bearer " + token
    }
  });
  if (response.status === 200){
        setCart(response.data)  

    }
    else{
      setCart(null) 
    }

  }
  

 

  return (
    <div className='page-container'>
      <div><ShoppingList 
      cartItems = {items} 
      setCart = {setCart}
      setItems = {setItems}
      cart = {cart}
      
      /></div> 
    </div>
  );
}

export default CartPage;