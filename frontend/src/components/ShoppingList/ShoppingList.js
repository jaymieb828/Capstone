import React, { useState } from 'react';
import Axios from 'axios';
 
import { Link, useNavigate } from 'react-router-dom'
 
import {Table} from 'reactstrap';
 


const ShoppingList = (props) => {
   


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

const[searchTerm, setSearchTerm] = useState('');
 

 

 
     
    return (
        
        <div align="center" className = 'display-container'>
            <br></br>
                 <div className = 'search_filter'>
                <label className = 'search-label'> Item Search:</label>
                <input type = 'text' className = 'custom-input' placeholder = 'Enter Item' onChange={(event) => setSearchTerm(event.target.value)}/>
            </div>
        <div className = 'table-title'>
            <div className = 'library-contain'>
                <h2 className = 'library-title'>Shopping List</h2>
            </div>
       
        </div>

       
    

        <Table striped bordered hover variant="dark">
        <thead align="center">
          
            <tr className = 'header-row'>
                <th>Item</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Price</th>

                <th>Expiration</th>
               
                <th>Comments</th>
                <th>Action</th>

            </tr>
        </thead>
        <tbody align="center">
            {props.cartItems.filter((item) => {
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
                 

                    </td>

                    
                </tr>
            )
            })}
        </tbody>
        </Table>
    </div>
    );
     
}

export default ShoppingList;