import React, { useState } from 'react';



const DisplayItems = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    return (  
        <div className = 'display-container'>
        <div className='table-title'>
            <div className ='library-contain'>
                <h2 className='library-title'>Items List</h2>
            </div>
            <div className = 'search-filter'>
                <label className='search-label'>Item Search:</label>
                <input type='text' className='custom-input' placeholder='Enter Item Name or Item Category' onChange={(event) => setSearchTerm(event.target.value)}/>
            </div>
        </div>
        
        
        <table className='song-table table'>
        <thead>
            <tr className = 'header-row'>
                <th>Item</th>
                <th>Category</th>
                <th>Expiration</th>            
                <th>Add to Shopping List</th>
                <th>Comments</th>
                <th>Quantity</th>
                
            </tr>
        </thead>
        <tbody>
            {props.displayItems.filter((song) => {
                if (searchTerm === ""){
                    return item;
                }
                else if (item.item.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || item.expiration.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return song;
                }
            })
            .map((item, index) => { 
            return (
                <tr key= {index} className = 'display-rows'>
                    <td>{item.item}</td>
                    <td>{item.category}</td>
                    <td>{item.expiration}</td>
                    <td>{item.add_to_shopping_list}</td>
                    <td>{item.comments}</td>
                    <td>{item.quantity}</td>
                    
                    
                </tr>
            )
            })}
        </tbody>
        </table>
    </div>     
    );
}
 
export default DisplayItems;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
// import CreateSong from './Components/CreateSong/CreateSong';


// function App() {

//   const [items, setItems] = useState([]);
  
//   useEffect(() => {
//     getAllItems();
//   }, [])


//   async function getAllItems(){
//     let response = await axios.get('http://127.0.0.1:8000/api/pantry/');
//     setItems(response.data);
//   }

//   async function createItem(newSong){
//     let response = await axios.post('http://127.0.0.1:8000/api/pantry/', newItem);
//     if(response.status === 201){
//       await getAllItems();
//     }
//   } 

//   return (
//     <div className='page-container'>
//       <div><DisplayMusic displaySongs = {songs}/></div> 
//       <div className='content-wrap'><CreateSong addNewSong={createSong}/></div>
      
//     </div>
//   );
// }

// export default App;
