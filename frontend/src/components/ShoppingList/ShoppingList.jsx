import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
// import { Link, useNavigate } from 'react-router-dom'
 
import {Table} from 'reactstrap';
 
import { Link, useNavigate } from 'react-router-dom'
import AddtoList from '../CreateItem/AddtoList';

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



const navigate = useNavigate();
const [show, setShow] = useState(false);

function toggleShow() {
    setShow(!show);
}




const[searchTerm, setSearchTerm] = useState('');

const[quantity, tquantity] = useState()





const[item_name, setName] = useState()




 const updatecartproduct = async (id, quantity) => {
        axios.post('http://127.0.0.1:8000/api/shoppinglist/updatecartproduct/'
        ,{ "id": id, "quantity":quantity }, 
        
        {
          headers: {
              'Content-Type': 'application/json',
               
              Authorization: 'token ' + localStorage.getItem('access'),
              
              'X-CSRFToken': csrftoken
          },      
      })      
      .then((response) => {
        console.log('response',response.data)
        navigate('/shopping-list')

      })
      console.log(localStorage.getItem('access'))
      .catch((error) => {
        alert('error',error.response)
        console.log('----Errors---------',error)


      })

   
 
 }
 

const delatefullcard = async (id) => {
        axios.post('http://127.0.0.1:8000/api/shoppinglist/delatefullcart/'
        ,{ "id": id }, 
        
        {
          headers: {
              'Content-Type': 'application/json',
               
              Authorization: 'token ' + localStorage.getItem('access'),
              
              'X-CSRFToken': csrftoken
          },      
      })      
      .then((response) => {
        console.log('response',response.data)
        
        navigate('/shopping-list')
      })

      console.log(localStorage.getItem('access'))
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
                <h2 className = 'library-title'>Shopping List</h2>
            </div>
       
        </div>

       
    

         <Table striped bordered hover variant="dark">
        <thead align="center">
          
            <tr className = 'header-row'>
                <th>Item ID</th>
                <th>Quantity</th>
                
                <th>Total</th>

                
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
                    <td> {item.quantity}</td>
                    
                    <td>{item.total}</td> 

                
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

                       
                        {/* <AddtoList 
                        listItem={listItem}
                        lshow={lshow}
                        pk={item.id}
                        listtoggleShow={listtoggleShow}
                    /> */}
                <td>
                                            {/* <button onClick={() => editcartproduct(item.id)} className="btn btn-info">-</button> */}
                                             <AddtoList 
                                               newItem={updatecartproduct}
                                                show={show}
                                                
                                                toggleShow={toggleShow}
                                            /> 
                                            <button onClick={() => delatefullcard(item.id)} className="btn btn-danger mx-2">Delete</button>
                                        </td>
                   

                    
                </tr>
            )
            })}
        </tbody>
 <tfoot>
                            <tr>
                                <th colSpan="4" className="text-right" >Total</th>
                                <th>Comming soon</th>
                                <th>
                                    {/* <Link to="#" className="btn btn-success" >OrderNow</Link> */}
                                </th>
                            </tr>
                        </tfoot>

        </Table>
    </div>
    );
     
}

export default ShoppingList;