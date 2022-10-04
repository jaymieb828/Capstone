import React, { useState } from 'react';
import Axios from 'axios';
 
import { Link, useNavigate } from 'react-router-dom'

 

const DisplayItems = (props) => {
    
    const [dispatch] = useState()

    const[searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()
    const profile = 1

    const addtocart = async (id) => {
        profile !== null ? (
            await Axios({
                method: 'post',
                url: '127.0.0.1:8000/api/shoppinglist/addtocart/',
                headers: {
                    Authorization: `token ${window.localStorage.getItem('token')}`
                },
                data: { "id": id }
            }).then(response => {
                console.log(response);
                dispatch({
                    type: "ADD_RELOADPAGE_DATA",
                    reloadpage: response
                })
            })
        ) : (
                navigate("/login")
            )

    }



    return (
        <div className = 'display-container'>
        <div className = 'table-title'>
            <div className = 'library-contain'>
                <h2 className = 'library-title'>Pantry List</h2>
            </div>
            <div className = 'search_filter'>
                <label className = 'search-label'> Item Search:</label>
                <input type = 'text' className = 'custom-input' placeholder = 'Enter Item' onChange={(event) => setSearchTerm(event.target.value)}/>
            </div>
        </div>

        <table className = 'item-table table'>
        <thead>
            <tr className = 'header-row'>
                <th>Item</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Expiration</th>
                <th>Add to List</th>
                <th>Comments</th>
                <th>Action</th>

            </tr>
        </thead>
        <tbody>
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
                    <td>{item.expiration}</td> 
                    <td>{item.add_to_list}</td> 
                    <td>{item.comments}</td>
                    <td>  <a onClick={() => addtocart(item.id)} class="btn btn-primary">Add to Cart</a>
</td>

                    
                </tr>
            )
            })}
        </tbody>
        </table>
    </div>
    );
}

export default DisplayItems;