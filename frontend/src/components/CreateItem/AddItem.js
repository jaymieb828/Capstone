import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AddItem(props) {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(0);

    const [expiration, setExpiratin] = useState('');
    const [add_to_list, setAddtolist] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0);


    const [comments, setComments] = useState('');


    const [show, setShow] = useState(props.show);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button
                onClick={props.toggleShow}
                className="block m-2 bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
            >
                + Add Item
            </Button>

            <Modal
                show={props.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setItem('');
                            setQuantity('');
                            setPrice('');
                            setAddtolist('');
                            setExpiratin('');

                            setComments('');
                            setCategory('');


                             

                            props.newItem(item,
                                        quantity,
                                        price,
                                        add_to_list,
                                        expiration,
                                        comments,
                                        category
                                         );
                        }}
                        id="editmodal"
                        className="w-full max-w-sm"
                    >
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="item"
                                >
                                    Item
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="item"
                                    placeholder="Item title"
                                    type="text"
                                    value={item}
                                    onChange={(e) => {
                                        setItem(e.target.value);
                                    }}
                                />
                            </div>

                        </div>


                         <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="quant"
                                >
                                    Quantity
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="quant"
                                    placeholder="Item quantity"
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => {
                                        setQuantity(e.target.value);
                                    }}
                                />
                            </div>
                        </div>

                            <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="price"
                                >
                                    Price
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="price"
                                    placeholder="Item price"
                                    type="number"
                                    value={price}
                                    onChange={(e) => {
                                        setPrice(e.target.value);
                                    }}
                                />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="industry"
                                >
                                    Expiration
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="industry"
                                    placeholder="Expiration date"
                                    type="date"
                                    value={expiration}
                                    onChange={(e) => {
                                        setExpiratin(e.target.value);
                                    }}
                                />
                            </div>
                        </div>



                         <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="add_"
                                >
                                    Add to list
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="add_"
                                    placeholder="Add to list"
                                    type="text"
                                    value={add_to_list}
                                    onChange={(e) => {
                                        setAddtolist(e.target.value);
                                    }}
                                />
                            </div>

                        </div>




                     <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="item"
                                >
                                    Comments
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="item"
                                    placeholder="Comments"
                                    type="text"
                                    value={comments}
                                    onChange={(e) => {
                                        setComments(e.target.value);
                                    }}
                                />
                            </div>

                        </div>


                    <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    for="item"
                                >
                                    Category
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="item"
                                    placeholder="Item category"
                                    type="text"
                                    value={category}
                                    onChange={(e) => {
                                        setCategory(e.target.value);
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
                        form="editmodal"
                    >
                        Add
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
