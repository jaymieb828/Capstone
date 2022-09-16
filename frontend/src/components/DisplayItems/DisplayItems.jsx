import React, { useState } from 'react';

const DisplayItems = (props) => {
    
    const[searchTerm, setSearchTerm] = useState('');

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
                <th>Expiration</th>
                <th>Category</th>
                <th>Add to List</th>
                <th>Comments</th>
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
                    <td>{item.expiration}</td> 
                    <td>{item.category_id}</td> 
                    <td>{item.add_to_list}</td> 
                    <td>{item.comments}</td>
                </tr>
            )
            })}
        </tbody>
        </table>
    </div>
    );
}

export default DisplayItems;