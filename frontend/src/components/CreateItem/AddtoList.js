import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function AddtoList(props) {

    const [list_item, setListItem] = useState(props.id);
    const [list_quantity, setListQuantity] = useState(0);

    

    const [show, setShow] = useState(props.show);

    const handleClose = () => setShow(false);

    

    return (
        <>
            <Button
                onClick={props.toggleShow}
                className="block m-2 bg-purple-600 hover:bg-blue-700 text-white py-2 rounded "
            >
                Update
            </Button>

            <Modal
                show={props.show}
                onHide={handleClose}
                 
                
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setListItem(props.id);

                            setListQuantity();
                            
                            
                             
                             
                            console.log(list_item, list_quantity)
                            props.listItem(list_item,
                                        list_quantity,
                                        );
                        }}
                        id="leditmodal"
                        className="w-full max-w-sm"
                    >
                      

                         <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                     
                                >
                                    Quantity
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="quantity"
                                    placeholder="Item quantity"
                                    type="number"
                                    value={list_quantity}
                                    onChange={(e) => {
                                        setListQuantity(e.target.value);
                                    }}
                                />
                            </div>
                        </div>

 



             




                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
                        onClick={props.toggleShow}
                    >
                        Close
                    </button>
                    <button
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                        form="leditmodal"
                    >
                        Add
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
