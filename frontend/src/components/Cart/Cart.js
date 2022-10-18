import axios from 'axios';
import React from 'react'
import { Link, Navigate } from 'react-router-dom';
 
 

const Cart = (props) => {


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





  
    const tokenget = window.localStorage.getItem('token')
    console.log(tokenget)
    const navigate = Navigate()



    const updatecartproduct = async (id) => {
        axios.post('http://127.0.0.1:8000/api/shoppinglist/addtocart/'
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
        
      })
      console.log(localStorage.getItem('access'))
      .catch((error) => {
        alert('error',error.response)
        console.log('----Errors---------',error)


      })

   
 

}
 
    const editcartproduct = async (id) => {
        axios.post('http://127.0.0.1:8000/api/shoppinglist/addtocart/'
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
        
      })
      console.log(localStorage.getItem('access'))
      .catch((error) => {
        alert('error',error.response)
        console.log('----Errors---------',error)


      })

   
 

}
 


    const deletecartproduct = async (id) => {
       axios.post('http://127.0.0.1:8000/api/shoppinglist/addtocart/'
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
        
      })
      console.log(localStorage.getItem('access'))
      .catch((error) => {
        alert('error',error.response)
        console.log('----Errors---------',error)


      })

   
 

}
 


    const deletefullcart = async (id) => {
        axios.post('http://127.0.0.1:8000/api/shoppinglist/addtocart/'
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
        
      })
      console.log(localStorage.getItem('access'))
      .catch((error) => {
        alert('error',error.response)
        console.log('----Errors---------',error)


      })

   
 

}
 


    
    return (
        <div className="container p-3">
             <br></br>
                 <div className = 'search_filter'>
                <label className = 'search-label'> Item Search:</label>
                <input type = 'text' className = 'custom-input' placeholder = 'Enter Item' onChange={(event) => setSearchTerm(event.target.value)}/>
            </div>
            {


                cart_productt_length !== 0 ?
                    <table className="table table-striped">
                        <thead>
                            <th>SN</th>
                            <th>Product</th>
                            <th>Rate</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {
                                cartproductf_uncomplit?.cartproduct.map((data, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{data.product[0].title}</td>
                                        <td>{data.price}</td>
                                        <td>{data.quantity}</td>
                                        <td>{data.subtotal}</td>
                                        <td>
                                            <button onClick={() => editcartproduct(data.id)} className="btn btn-info">-</button>
                                            <button onClick={() => deletecartproduct(data.id)} className="btn btn-danger mx-1">X</button>
                                            <button onClick={() => updatecartproduct(data.id)} className="btn btn-success">+</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan="4" className="text-right" >Total</th>
                                <th>{cartproductf_uncomplit?.total}</th>
                                <th>
                                    <Link to="#" className="btn btn-success" >OrderNow</Link>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                    :
                    (
                        <div>
                            <h1>There is no Cart Go home and add some Product</h1>
                        </div>
                    )
            }
            <div className="row">
                <div className="col">
                    <Link to="#" className="btn btn-warning" >Old Orders</Link>
                </div>
                {
                    cart_productt_length !== 0 &&
                    <>
                        <div className="col">
                            <Link onClick={() => deletefullcart( )} className="btn btn-danger" >Delete Cart</Link>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Cart
