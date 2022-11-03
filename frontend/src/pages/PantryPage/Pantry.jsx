import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayItems from '../../components/DisplayItems/DisplayItems';
import useAuth from "../../hooks/useAuth";

const PantryPage = () => {

  const [items, setItems] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    getAllItems();
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