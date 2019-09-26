import React, { Component } from "react";
import { TextInput } from "react-materialize";
import { Range, Button, Icon } from "react-materialize";

const trigger = <Icon>playlist_add</Icon>;
class AddLoc extends Component {
  handleChange = e => {
    console.log(this.props);
    let name = e.target.name;
    let val = e.target.value;
    this.props.onChange(name, val);

    // let value = e.tatget.val;
    console.log(name);
  };
  handleSubmit() {
    console.log("rating");
  }
  render() {
    return (
      <div>
        <form>
          <TextInput
            id="input"
            label="Location Name"
            name="location"
            onChange={this.handleChange}
            value={this.props.location}
          ></TextInput>
          <TextInput
            id="input"
            label="Address"
            name="address"
            onChange={this.handleChange}
            value={this.props.address}
          ></TextInput>
          <TextInput
            id="input"
            label="Comments"
            name="Comments"
            onChange={this.handleChange}
            value={this.props.comments}
          ></TextInput>
          <label id="ratingLabel">Accesibility Rating 1-5</label>
          <Range
            min="0"
            max="5"
            name="rating"
            id="rating"
            onChange={this.handleChange}
            value={this.props.rating}
          />
          <Button onClick={this.handleSubmit}>Add Location</Button>
          {/* <Form.Label>User</Form.Label>
          <Form.Group>
            <Form.Label>Location Name:</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Location Name"
            ></Form.Control>
          </Form.Group> */}

          {/* <Form.Group>
            <Form.Label>Address:</Form.Label>
            <Form.Control
              type="address"
              placeholder="Enter Location Address"
            ></Form.Control>
          </Form.Group> */}
          {/* <Form.Group>
            <Form.Label>Comments:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add comments about accessibility here"
            ></Form.Control>
          </Form.Group> */}
        </form>
      </div>
    );
  }
}
export default AddLoc;
