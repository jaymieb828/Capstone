import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
  const [user, token] = useAuth();


  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }




  const [searchTerm, setSearchTerm] = useState('');

  const [quantity, tquantity] = useState()
  const [item_name, setName] = useState()



  const updatecartproduct = async (id, quantity) => {
    axios.post('http://127.0.0.1:8000/api/shoppinglist/updatecartproduct/'
      , { "id": id, "quantity": quantity },

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,


          'X-CSRFToken': csrftoken
        },
      })
      .then((response) => {
        console.log('response', response.data)
        navigate('/shopping-list')

      })


  }


  const delatefullcard = async (id) => {
    axios.post('http://127.0.0.1:8000/api/shoppinglist/delatefullcart/'
      , { "id": id },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
          'X-CSRFToken': csrftoken
        },
      })
      .then((response) => {
        props.setItems(props.cartItems.filter(record => { return record.id != id }))
      })

  }




  const delateall = async (id) => {
    axios.post('http://127.0.0.1:8000/api/shoppinglist/delate-full/'
      , { "id": id },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
          'X-CSRFToken': csrftoken
        },
      })
      .then((response) => {
        props.setItems([])
      })


  }

  const checkout = async (id) => {
    axios.post('http://127.0.0.1:8000/api/shoppinglist/checkout/'
      , { "id": id },

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,

          'X-CSRFToken': csrftoken
        },
      })
      .then((response) => {
        console.log('response', response.data)
        navigate('/pantry')

      })

    console.log(localStorage.getItem('access'))
      .catch((error) => {
        alert('error', error.response)
        console.log('----Errors---------', error)


      })




  }


  // const changeItemQuantity = async =>(id,symbol) {
  //   // console.log("id = ", id, ) ;
  //   // console.log("symbol = ", symbol) ;
  // }


  const changeItemQuantity = async (id, symbol) => {
    var requiredCartItemIndex = props.cartItems.findIndex(record => { return record.id == id })
    var requiredCartItem = props.cartItems[requiredCartItemIndex]
    var currentQuantity = requiredCartItem.quantity
    var price = requiredCartItem.item.price
    var newQuantity = 0
    if (currentQuantity > 0 && symbol == '-') {
      newQuantity = currentQuantity - 1
    }
    if (symbol == '+') {
      newQuantity = currentQuantity + 1
    }
    var newTotal = (parseInt(newQuantity) * parseFloat(price)) 
    requiredCartItem.total = parseFloat(Number(newTotal).toFixed(1))
    requiredCartItem.quantity = newQuantity
    props.cartItems[requiredCartItemIndex] = requiredCartItem
    props.setItems([...props.cartItems])

    axios.post('http://127.0.0.1:8000/api/shoppinglist/updatecartproduct/'
      , { "id": id, "quantity": newQuantity, 'total': newTotal },

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,


          'X-CSRFToken': csrftoken
        },
      })
      .then((response) => {
        console.log('response', response.data)

      })


  }


  function generateActionButtons(item) {
    return <>

      {/* <IconButton  aria-label="delete" sx={{ color: "grey" }} >
        <RemoveIcon />
      </IconButton>
      <IconButton  aria-label="delete" sx={{ color: "green" }} >
        <AddIcon /> 
       </IconButton> */}
      <IconButton onClick={() => changeItemQuantity(item.id, '-')} aria-label="delete" sx={{ color: "grey" }} >
        <RemoveIcon />
      </IconButton>
      <IconButton onClick={() => changeItemQuantity(item.id, '+')} aria-label="delete" sx={{ color: "green" }} >
        <AddIcon />
      </IconButton>
      <IconButton onClick={() => delatefullcard(item.id)} aria-label="delete" sx={{ color: "#f44336" }} >
        <DeleteIcon />
      </IconButton>
    </>
  }



  const [pageSize, setPageSize] = React.useState(5);

  var columnsPrototypes = [
    { field: 'id', headerName: 'Record ID', width: 40 },
    { field: 'itemName', headerName: 'Item', flex: 3 },
    { field: 'quantity', headerName: 'Quantity', flex: 1 },
    { field: 'price', headerName: 'Price', flex: 1 },
    {
      field: 'actions', headerName: 'Actions', flex: 1,
      renderCell: (cellValues) => {
        return generateActionButtons(cellValues)
      },
      sortable: false,
      disableColumnMenu: true,
    },

  ]

  var rowsData = props.cartItems.map(function (elem) {
    return {
      'id': elem.id,
      'itemName': elem.item.item,
      'quantity': elem.quantity,
      'price': elem.total,
      'actions': elem.id,
    }
  });





  return (




    <Box sx={{ m: 2, p: 2, boxShadow: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Typography sx={{ fontSize: '25px' }}>
          Shopping List
        </Typography>


      </Box>


      <Box height="70vh" sx={{ width: '100%' }}>
        <DataGrid
          rows={rowsData}
          columns={columnsPrototypes}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}

          checkboxSelection
          disableSelectionOnClick
        />
      </Box>


      <Box
        sx={{
          display: 'flex',
          p: 1,
          justifyContent: 'space-between',
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Typography sx={{ fontSize: '20px' }}>
          Total
        </Typography>    <Typography sx={{ fontSize: '20px' }}>
          {
            parseFloat(Number(props.cartItems.reduce((prev, next) => prev + next.total, 0)).toFixed(3))
          }
        </Typography>


      </Box>

      <br />
      <Button onClick={() => delateall(props.cart.id)} variant="contained" sx={{ backgroundColor: "#f44336" }} endIcon={<DeleteIcon />}>
        Delete Cart
      </Button>

    </Box>



  );

}

export default ShoppingList;