import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { CREATE_I_API_URL } from "../../constants";

 

class NewItemForm extends React.Component {
  state = {
    pk: 0,
    item: "",
    quantity: 0,
    comments: "",
    category: ""
  };

  componentDidMount() {
    if (this.props.items) {
      const { pk, item, quantity, comments, category } = this.props.items;
      this.setState({ pk, item, quantity, comments, category });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createStudent = e => {
    e.preventDefault();
    axios.post(CREATE_I_API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editStudent = e => {
    e.preventDefault();
    axios.put(CREATE_I_API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.student ? this.editStudent : this.createStudent}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="item"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.item)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Quantity:</Label>
          <Input
            type="email"
            name="quantity"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.quantity)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="document">Comments:</Label>
          <Input
            type="text"
            name="comments"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.comments)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Category:</Label>
          <Input
            type="text"
            name="category"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.category)}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default NewItemForm;