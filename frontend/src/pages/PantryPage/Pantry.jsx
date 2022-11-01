import React, { useEffect, useState } from 'react';
import { decode as base64_decode, encode as base64_encode } from 'base-64';

import axios from 'axios';
import CreateItem from '../../components/CreateItem/CreateItem';
import DisplayItems from '../../components/DisplayItems/DisplayItems';
import useAuth from "../../hooks/useAuth";

const PantryPage = () => {

  const [items, setItems] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    getAllItems();
    // generateKrogerAccessToken();
  }, [])



  async function getAllItems() {
    let response = await axios.get(`http://127.0.0.1:8000/api/pantry/`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      });
    setItems(response.data)
  }






  async function getAllCat() {
    let response = await axios.get(`http://127.0.0.1:8000/api/pantry/`,
      {
        headers: {
          "Content-Type": "application/json",
          'Authorization': "Bearer " + token
        }

      });
    setItems(response.data)
  }


  return (
    <div className='page-container'>
      <div><DisplayItems setItems={setItems} displayItems={items} /></div>
    </div>
  );
}

export default PantryPage;