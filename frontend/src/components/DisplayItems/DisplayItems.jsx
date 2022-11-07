import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { Table } from 'reactstrap';
import NewItemModal from "./NewItemModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import CreateItem from '../CreateItem/CreateItem';
import AddItem from '../CreateItem/AddItem';
import { baseUrl } from '../../shared';
import AddtoList from '../CreateItem/AddtoList';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import qs from 'qs';
import { decode as base64_decode, encode as base64_encode } from 'base-64';



const DisplayItems = (props) => {

    const [show, setShow] = useState(false);
    const [lshow, lsetShow] = useState(false);
    const [user, token] = useAuth();


    var client_id = "mypantrytest-d04ea2bb830f8945fa9aee593069d3476339740537354243872"
    var client_secret = "H9H5mg2XTCRFu3DIrzCDk2CKc7v3i8dkzsr0cquv"
    var userpass = client_id + ':' + client_secret
    let encoded_client_token = base64_encode(userpass);
    const [kroger_access_token, setKrogerAccessToken] = useState('');
    async function generateKrogerAccessToken() {
        var data = qs.stringify({
            'grant_type': 'client_credentials',
            'scope[]': '["product.compact"]'
        });
        var config = {
            method: 'post',
            url: 'https://api.kroger.com/v1/connect/oauth2/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${encoded_client_token}`,
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                setKrogerAccessToken(response.data.access_token);
                // console.log((response.data.access_token));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        // generateKrogerAccessToken();
    }, [])

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');

    function toggleShow() {
        setShow(!show);
    }
    function listtoggleShow() {
        lsetShow(!lshow);
    }
    const [cats, setCats] = useState()


    const [dispatch] = useState();
    const navigate = useNavigate();
    const addtocart = async (id) => {
        axios.post('http://127.0.0.1:8000/api/shoppinglist/addtocart/'
            , { "id": id }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            },
        })
            .then((response) => {
                console.log('response', response.data)

            })
    }


    const delatefullPantry = async (id) => {
        axios.post('http://127.0.0.1:8000/api/pantry/delete/', { "id": id },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token
                    ,

                    'X-CSRFToken': csrftoken
                },
            })
            .then((response) => {
                console.log('deleted item', response.data)
                console.log('deleted id', id)
                props.setItems(props.displayItems.filter(record => { return record.id != id }))
            })



    }




    const [searchTerm, setSearchTerm] = useState('');
    function newItem(productId,upc,item,  price, expiration, comments, category) {
 
        const data = {productId:productId, upc:upc, item: item, price: parseFloat(price),  expiration: expiration, comments: comments, category: category };
        const url = baseUrl + 'api/pantry/add-item/';
        axios.post(url, JSON.stringify(data),
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,

                    'X-CSRFToken': csrftoken

                },
            })
            .then((response) => {
                console.log('response', response.data)
                if (response.data.id) {
                    props.setItems([response.data, ...props.displayItems])
                    toggleShow()

                } 

            })
    }



    function listItem(list_item, list_quantity) {
        const listdata = { item: list_item, quantity: list_quantity };
        const url = baseUrl + 'api/shoppinglist/';
        axios.post(url, JSON.stringify(listdata),
            {
                headers: {

                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                    'X-CSRFToken': csrftoken

                },
            })
            .then((response) => {
                navigate('/pantry')
            })
    }

    function generateActionButtons(item) {
        return <>
            <IconButton onClick={() => addtocart(item.id)} aria-label="Add to List" sx={{ color: "" }} >
                <AddShoppingCartIcon />
            </IconButton>
            <IconButton onClick={() => delatefullPantry(item.id)} aria-label="delete" sx={{ color: "#f44336" }} >
                <DeleteIcon />
            </IconButton>
        </>
    }

    function generateExpirationAlert(item) {
        var expiryDate = new Date(item.formattedValue).getTime() 
        var currentDate = new Date().getTime()
        var difference = parseInt((currentDate-expiryDate)/ (1000 * 3600 * 24)) 
        var fontColor = ''
        if (difference>=0){
            fontColor = 'red'
        }
        // if(currentDate-expiryDate)
        console.log(difference)
        return <Typography sx={{fontSize:14,color:fontColor}}> 
            {item.formattedValue}
        </Typography>
    }

    const [pageSize, setPageSize] = React.useState(5);
    var columnsPrototypes = [
        { field: 'id', headerName: 'ID', width: 40 },
        { field: 'item', headerName: 'Item', flex: 2 }, 
        { field: 'category', headerName: 'Category', flex: 1 },
        { field: 'price', headerName: 'Price', flex: 1 },
        {
            field: 'expiration', headerName: 'Expiration', flex: 1,
            renderCell: (cellValues) => {
                return generateExpirationAlert(cellValues)
            }
        },
        { field: 'comments', headerName: 'Comments', flex: 1 },
        {
            field: 'actions', headerName: 'Actions', flex: 1,
            renderCell: (cellValues) => {
                return generateActionButtons(cellValues)
            },
            sortable: false,
            disableColumnMenu: true,
        },

    ]

    var rowsData = props.displayItems.map(function (elem) {
        return {
            'id': elem.id,
            'item': elem.item, 
            'category': elem.category,
            'price': elem.price,
            'expiration': elem.expiration,
            'comments': elem.comments,
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
                    Pantry List
                </Typography>

                <Button onClick={toggleShow} variant="contained" endIcon={<AddIcon />}>
                    Add new Item
                </Button>
            </Box>
            <AddItem
                // kroger_access_token = {kroger_access_token}
                setKrogerAccessToken = {setKrogerAccessToken}
                generateKrogerAccessToken = {generateKrogerAccessToken}
                newItem={newItem}
                show={show}
                toggleShow={toggleShow}
            />
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

        </Box>
    );

}

export default DisplayItems;