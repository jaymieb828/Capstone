import React, { useState } from 'react';

const CreateItem = (props) => {

    const[itemName, setName] = useState('');
    const[itemQuantity, setQuantity] = useState('');
    const[itemExp, setExp] = useState('');
    const[itemCategory, setCategory] = useState('');
    const[itemAddToList, setAddToList] = useState('');
    const[itemComments, setComments] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newItem ={
            'Item': itemName,
            'Quantity': itemQuantity,
            'Expiration': itemExp,
            'Category': itemCategory,
            'Add To Shopping List': itemAddToList,
            'Comments': itemComments
        }

        props.addNewItem(newItem);

        setName('');
        setQuantity('');
        setExp('');
        setCategory('');
        setAddToList('');
        setComments('');
    }

    return(
        <div>
        <h2 className='addItem'>Add Item</h2>
        <div className='create-container'>
            <form onSubmit = {handleSubmit}>
                <div className='form-contain'>
                    <div>
                        <label className='form-label' htmlFor = 'Item'>Item Name:</label>
                        <input type = 'text' id = 'Item' placeholder = 'Item Name' value={itemName} onChange={(event) => setName(event.target.value)}/> 
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Quantity'>Quantity:</label>
                        <input type = 'text' id = 'Quantity' placeholder = 'Quantity Value' value = {itemQuantity} onChange={(event) => setQuantity(event.target.value)}/>
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Expiration'>Expiration:</label>
                        <input type = 'text' id = 'Expiration' placeholder = 'Expiration Date' value={itemExp} onChange={(event) => setExp(event.target.value)}/> 
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Category'>Category:</label>
                        <input type = 'date' id = 'Category' placeholder = 'Category' value = {itemCategory} onChange={(event) => setCategory(event.target.value)}/>
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
                        <button type = 'submit' className='add-button'>Add New Item</button> 
                    </div>
                </div>  
            </form>
        </div>
    </div>
    );
}

export default CreateItem;