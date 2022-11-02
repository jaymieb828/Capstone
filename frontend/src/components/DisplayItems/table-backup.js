<Table striped bordered hover variant="dark">
<thead align="center">

    <tr className='header-row'>
        <th>Item</th>
        <th>Quantity</th>
        <th>Category</th>
        <th>Price</th>

        <th>Expiration</th>
        {/* <th>Add to List</th> */}
        <th>Comments</th>
        <th>Action</th>

    </tr>
</thead>
<tbody align="center">
    {props.displayItems.filter((item) => {
        if (searchTerm === "") {
            return item;
        }
        else if (item.item.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
        }
    })
        .map((item, index) => {
            return (

                <tr key={index} className='display-rows'>

                    <td>{item.item}</td>
                    <td>{item.quantity}</td>
                    <td>{item.category.type}</td>
                    <td>{item.price}</td>

                    <td>{item.expiration}</td>
                    {/* <td>{item.add_to_list}</td>  */}
                    <td>{item.comments}</td>
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

                    <td>
                        {/* <AddtoList 
        listItem={listItem}
        lshow={lshow}
        pk={item.id}
        listtoggleShow={listtoggleShow}
    /> */}

                        <IconButton onClick={() => addtocart(item.id)} aria-label="Add to List" sx={{ color: "" }} >
                            <AddShoppingCartIcon />
                        </IconButton>
                        <IconButton onClick={() => delatefullPantry(item.id)} aria-label="delete" sx={{ color: "#f44336" }} >
                            <DeleteIcon />
                        </IconButton>
                        {/* <Button onClick={() => delatefullPantry(item.id)} className="btn btn-danger mx-2">Delete</Button> */}

                    </td>


                </tr>
            )
        })}
</tbody>
</Table>