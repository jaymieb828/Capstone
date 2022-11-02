import React, { useState } from 'react';
import axios from 'axios';

import useAuth from "../../hooks/useAuth";

import Api from './Api';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "XCSRF-TOKEN";

const CreateItem = (props) => {

    const[itemName, setName] = useState('');
    const[itemQuantity, setQuantity] = useState('');
    const[itemExp, setExp] = useState('');
    const[itemCategory, setCategory] = useState('');
    const[itemAddToList, setAddToList] = useState('');
    const[itemComments, setComments] = useState('');
    const [user, token] = useAuth();

    // function handleSubmit(event){
    //     event.preventDefault();
    //     let newItem ={
    //         'Item': itemName,
    //         'Quantity': itemQuantity,
    //         'Category': itemCategory,
    //         'Expiration': itemExp,
    //         'Add To Shopping List': itemAddToList,
    //         'Comments': itemComments
    //     }

    //     props.addNewItem(newItem);

    //     setName('');
    //     setQuantity('');
    //     setExp('');
    //     setCategory('');
    //     setAddToList('');
    //     setComments('');

    
 

    // }

    const [input, setInput] = useState({

            item: '',
            quantity: '',
            category:  '',
            expiration: '',
            add_to_list: '',
            comments: ''

    }
    )


    const handleSubmit = async(e) => {
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.withCredentials = true;
        
        e.preventDefault();
        await axios.post('http://127.0.0.1:8000/api/pantry/add-item/', 
        {
            'item': input.item,
            'quantity': input.quantity,
            'category':  input.category,
            'expiration': input.expiration,
            'add_to_list': input.add_to_list,
            'comments': input.comments 
        }, 
         {
          headers: {
            "Content-Type":"application/json",
            Authorization: "Bearer " + token
            },
        }
        
        )



    }
    

    
 


    return(
        <div align="center" className=''>
        <h2 className='addItem'>Add Item</h2>
        <div  className='create-container'>
            <form onSubmit={handleSubmit}>
                 
                <div className='form-contain'>
                    <div>
                        <label className='form-label' htmlFor = 'Item'>Item Name:</label>
                        <input type = 'text' id = 'Item' placeholder = 'Item Name' value={itemName} onChange={(e) => setInput({...input, [e.target.name]:e.target.value})}/> 
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Quantity'>Quantity:</label>
                        <input type = 'text' id = 'Quantity' placeholder = 'Quantity Value' value = {itemQuantity} onChange={(event) => setQuantity(event.target.value)}/>
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Category'>Category:</label>
                        <input type = 'text' id = 'Category' placeholder = 'Category' value = {itemCategory} onChange={(event) => setCategory(event.target.value)}/>
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Expiration'>Expiration:</label>
                        <input type = 'date' id = 'Expiration' placeholder = 'Expiration Date' value={itemExp} onChange={(event) => setExp(event.target.value)}/> 
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Add To List'>Add To Shopping List:</label>
                        <input type = 'text' id = 'Add to list' placeholder = 'Shoppping List' value = {itemAddToList} onChange={(event) => setAddToList(event.target.value)}/>
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Comments'>Comments:</label>
                        <input type = 'text' id = 'Comments' placeholder = 'Comments' value = {itemComments} onChange={(event) => setComments(event.target.value)}/>
                    </div>
                </div> 
                <div className='button-contain'> 
                    <div>
                        <button type = 'submit' className='add-button btn btn-primary'>Add New Item</button> 
                    </div>
                </div>  
            </form>
        </div>
    </div>
    );
}

export default CreateItem;