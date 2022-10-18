import React, { useState } from 'react';
import Axios from 'axios';
 
import { Link, useNavigate } from 'react-router-dom'
 
import {Table} from 'reactstrap';
import NewItemModal from "./NewItemModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import CreateItem from '../CreateItem/CreateItem';
import AddItem from '../CreateItem/AddItem';
import { baseUrl } from '../../shared';
import AddtoList from '../CreateItem/AddtoList';



const DisplayItems = (props) => {
    const [show, setShow] = useState(false);
    const [lshow, lsetShow] = useState(false);



function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');




function toggleShow() {
    setShow(!show);
}



function listtoggleShow() {
    lsetShow(!lshow);
}

    const [user, token] = useAuth();

    const profile = 1;
    const [dispatch] = useState();
    const navigate = useNavigate();

    const addtocart = async (id) => {
    axios.post('http://127.0.0.1:8000/api/shoppinglist/addtocart/'
        ,{ "id": id }, 
        
        {
          headers: {
              'Content-Type': 'application/json',
               
              Authorization: 'Token ' + localStorage.getItem('token'),
              
              'X-CSRFToken': csrftoken
          },      
      })      
      .then((response) => {
        console.log('response',response.data)
        
      })
      console.log(localStorage.getItem('access'))
      .catch((error) => {
        alert('error',error.response)
        console.log('----Errors---------',error)


      })

   
 

}
 



    const[searchTerm, setSearchTerm] = useState('');
   function newItem(  item,
            quantity,
            price,
            add_to_list,
            expiration,
            comments,
            category,
            
              ) {

        const data = { item: item, quantity: quantity,price:price,add_to_list: add_to_list, expiration:expiration, comments:comments, category:category};
        const url = baseUrl + 'api/pantry/add-item/';


         

        axios.post(url
        ,JSON.stringify(data),

        
        {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+token,
              'X-CSRFToken': csrftoken
              
          },      
      })      
      .then((response) => {
        console.log('response',response.data)
        navigate('/pantry')

      })
      .catch((error) => {
        alert('error',error.response)
        console.log('----Errors---------',error)


      })
 
              }



    function listItem(list_item,list_quantity
            
              ) {

        const listdata = { item: list_item, quantity: list_quantity };
        console.log(listdata);
        const url = baseUrl + 'api/shoppinglist/';


        axios.post(url
        ,JSON.stringify(listdata),

        
        {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+token,
              'X-CSRFToken': csrftoken
              
          },      
      })      
      .then((response) => {
         
        navigate('/pantry')

      })
      .catch((error) => {
        alert('error',error.response)
        console.log('----Errors---------',error)


      })
              
              
   }


 

 
     
    return (
        
        <div align="center" className = 'display-container'>
            <br></br>
                 <div className = 'search_filter'>
                <label className = 'search-label'> Item Search:</label>
                <input type = 'text' className = 'custom-input' placeholder = 'Enter Item' onChange={(event) => setSearchTerm(event.target.value)}/>
            </div>
        <div className = 'table-title'>
            <div className = 'library-contain'>
                <h2 className = 'library-title'>Pantry List</h2>
            </div>
       
        </div>

       
   <AddItem 
                newItem={newItem}
                show={show}
                toggleShow={toggleShow}
                />

        <Table striped bordered hover variant="dark">
        <thead align="center">
          
            <tr className = 'header-row'>
                <th>Item</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Price</th>

                <th>Expiration</th>
                <th>Add to List</th>
                <th>Comments</th>
                <th>Action</th>

            </tr>
        </thead>
        <tbody align="center">
            {props.displayItems.filter((item) => {
                if (searchTerm === ""){
                    return item;
                }
                else if (item.item.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return item;
                }
            })
            .map((item, index) => { 
            return (
                <tr key= {index} className = 'display-rows'>
                    <td>{item.item}</td> 
                    <td>{item.quantity}</td>
                    <td>{item.category_id}</td> 
                    <td>{item.price}</td> 

                    <td>{item.expiration}</td> 
                    <td>{item.add_to_list}</td> 
                    <td>{item.comments}</td>
                    {/* <td align="center">
                  <NewItemModal
                    create={false}
                    item={item}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={item.pk}
                    resetState={this.props.resetState}
                  />
                    </td> */}

                    <td>   
                        {/* <AddtoList 
                        listItem={listItem}
                        lshow={lshow}
                        pk={item.id}
                        listtoggleShow={listtoggleShow}
                    /> */}
                <Link onClick={() => addtocart(item.id)} class="block m-2 bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 rounded ">Add to List</Link>

                    </td>

                    
                </tr>
            )
            })}
        </tbody>
        </Table>
    </div>
    );
     
}

export default DisplayItems;