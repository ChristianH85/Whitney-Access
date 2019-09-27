import React, { Component } from "react";
import { TextInput } from "react-materialize";
import { Range, Button } from "react-materialize";

// const trigger = <Icon>playlist_add</Icon>;
class AddLoc extends Component {
  handleChange = e => {
    // console.log(this.props);
    let name = e.target.name;
    let val = e.target.value;
    this.props.onChange(name, val);

    // let value = e.tatget.val;
    console.log(name);
  };
  handleSubmit = () => {
    // console.log(this.props.passSubmit);
    // console.log("rating");
    this.props.passSubmit();
  };
  render() {
    return (
      <div>
        <form>
          <TextInput
            required
            id="input"
            label="Location Name"
            name="location"
            onChange={this.handleChange}
            value={this.props.location}
          ></TextInput>
          <TextInput
            required
            id="input"
            label="Address"
            name="address"
            onChange={this.handleChange}
            value={this.props.address}
          ></TextInput>
          <TextInput
            required
            id="input"
            label="Comments"
            name="comments"
            onChange={this.handleChange}
            value={this.props.comments}
          ></TextInput>
          <label id="ratingLabel">Accesibility Rating 1-5</label>
          <Range
            required
            min="0"
            max="5"
            name="rating"
            id="rating"
            onChange={this.handleChange}
            value={this.props.rating}
          />
          <Button type="button" onClick={this.handleSubmit}>
            Add Location
          </Button>
        </form>
      </div>
    );
  }
}
export default AddLoc;
