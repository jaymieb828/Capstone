// import React, { useState, useEffect, useContext } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import axios from 'axios';
// import CircularProgress from '@mui/material/CircularProgress';



// export default function AddItem(props) {


//   var categories = [
//     // 'Veg',
//     // 'Dairy',
//     // 'Fruits',
//     // 'Meats',
//     // 'Dry Goods',
//     // 'Spices/oils/sauces',
//   ]

//   const [item, setItem] = useState('');
//   const [expiration, setExpiratin] = useState(new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate());
//   const [category, setCategory] = useState('');
//   const [categoryList, setCategoryList] = useState([]);
  

//   const [comments, setComments] = useState('');
//   const [productId, setProductId] = useState('');
//   const [upc, setUpc] = useState('');
  

//   const [price, setPrice] = useState(0);
//   const [show, setShow] = useState(props.show);
//   const [krogerProducts, setkrogerProducts] = useState([]);
//   const [krogerQuery, setkrogerQuery] = useState('');
//   const [loading, setLoading] = useState(false);


  


//   useEffect(() => {
//     console.log(krogerQuery)
//     var requiredProducts = krogerProducts.filter(record => { return record.description.toLowerCase().includes(krogerQuery.toLowerCase()) })
//     console.log("requiredProducts = ", requiredProducts)

//     setUpc('')
//     setProductId('')
//     // setPrice('')
//     setCategoryList([])
//     setItem('')
//     setCategory('')


//     var matchedProducts = krogerProducts.filter(record => { return record.description.toLowerCase()==krogerQuery.toLowerCase() })
//     if (matchedProducts.length>0){
//       // Populate other parameters
//       setUpc(matchedProducts[0].upc)
//       setProductId(matchedProducts[0].productId)
//       setItem(krogerQuery)
//       setPrice(parseFloat(matchedProducts[0].items[0].price.regular))

//       console.log("-> price = ",matchedProducts[0].items[0].price.regular)

//       setCategoryList(matchedProducts[0].categories)
//       setCategory(matchedProducts[0].categories[0])
//     }

//     const delayDebounceFn = setTimeout(() => {
//       if (requiredProducts.length==0 && krogerQuery.length>=3){
//           // Send Axios request here
//           setLoading(true)
//           onKrogerProductQueryChange(krogerQuery) 
//       }
//     }, 1000)
//     return () => clearTimeout(delayDebounceFn)
//   }, [krogerQuery])


//   const handleClickOpen = () => {
//     setShow(true);
//   };


//   function handleSubmit() { 
//     if (!item.trim()) {
//       alert("Item name invalid")
//       return
//     }
//     if ((price).toString().trim().length==0) {
//       alert("price invalid")
//       return
//     }
//     if (!expiration.toString().trim()) {
//       alert("expiration invalid")
//       return
//     }
//     if (!comments.trim()) {
//       alert("please enter a comment.") //disable
//       return
//     }
//     var matchedProducts = krogerProducts.filter(record => { return record.description.toLowerCase()==krogerQuery.toLowerCase() })
//     if (matchedProducts.length==0){
//       alert("Please select Item/Product from suggestions list")
//       return 
//     }

 
//     setItem('');
//     setPrice(''); 
//     setComments('');
//     setCategory('');
 
//     props.newItem(
//       productId,upc,item,  price, expiration, comments, category
//     );



//   }

//   async function onKrogerProductQueryChange(newValue) {
//     console.log("Calling Kroger API")
//     var requiredProducts = krogerProducts.filter(record => { return record.description.toLowerCase().includes(newValue.toLowerCase()) })



//     var data = {
//       "filter.term": newValue,
//       "filter.locationId": "02600845",
//       "filter.product_id": null,
//       "filter.brand": null,
//       "filter.fulfillment": "csp",
//     };
//     var config = {
//       method: 'get',
//       url: `http://127.0.0.1:8000/api/kroger/fetchProducts?filter_term=${newValue}`,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       data: data
//     };
//     axios(config)
//       .then(function (response) {
//         setkrogerProducts(response.data.products);
//         console.log(response.data.products);
//         setLoading(false)

//       })
//       .catch(function (error) {
//         console.log(error);
//       });

//   }
//   const [inputValue, setInputValue] = React.useState('');

//   return (

//     <Box component="form"  >
//       <Dialog open={props.show} onClose={props.toggleShow}>
//         <DialogTitle>Add New Item</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//           </DialogContentText>

//           <Autocomplete 
//             // loading
//             options={krogerProducts}
//             getOptionLabel={(option) => option.description || ""}
//             defaultValue={[krogerProducts[0]] || ""}
//             // onChange={onKrogerProductQueryChange(event, newInputValue)}
//             onInputChange={(event, newValue) => {
//               // setInputValue(newValue)
//               setkrogerQuery(newValue)

//               // onKrogerProductQueryChange(event, newValue);
//             }}

//             renderInput={params => (
//               <TextField
//                 {...params}
//                 // variant="standard"
//                 label="Seach Item"
//                 id='item'
//                 placeholder="Favorites"
//                 margin="normal"
//                 fullWidth
//                 onChange={(e) => { setItem(e.target.value); }}

//                 InputProps={{
//                   ...params.InputProps,
//                   endAdornment: (
//                       <>
//                           {loading ? <CircularProgress color="inherit" size={20} /> : null}
//                           {params.InputProps.endAdornment}
//                       </>
//                   )
//               }}
//               />
//             )}
//           />




//           {/* <TextField
//             margin="dense"
//             id="quantity"
//             label="Quantity"
//             type="number"
//             fullWidth
//             required
//             value={quantity}
//             onChange={(e) => { setQuantity(e.target.value); }}
//           /> */}
//           <TextField
//             margin="dense"
//             id="price"
//             label="Price"
//             type="number"
//             required
//             value={price}
//             disabled
//             // onChange={(e) => { setPrice(e.target.value); }}
//             fullWidth
//           />
//           <TextField
//             id="expiration"
//             label="Expiration"
//             type="date"
//             onChange={(e) => { setExpiratin(e.target.value); }}
//             fullWidth
//             defaultValue={expiration} 
//             sx={{ mt: 1 }}
//             InputLabelProps={{
//               shrink: true,
//             }}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             type="text"
//             name="commments"
//             autoComplete=""
//             label='Comments'
//             value={comments}
//             onChange={(e) => { setComments(e.target.value); }}
//           />
//           <Select
//             // disabled
//             sx={{ mt: 1 }}
//             labelId="demo-simple-select-label"
//             id="category"
//             fullWidth
//             value={category}
//             label="Category"
//             onChange={(e) => { setCategory(e.target.value); }}
//           >
//             {categoryList.map((val, index) => {
//               return <MenuItem value={val}>{val}</MenuItem>
//             })}
//           </Select>

//         </DialogContent>
//         <DialogActions>
//           <Button type="submit" onClick={props.toggleShow}>Cancel</Button>
//           <Button onClick={() => handleSubmit()}>Add New Item</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   )


// }



