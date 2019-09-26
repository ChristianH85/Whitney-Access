import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class LocInfo extends Component {
  render() {
    return (
      <div>
        <form>
          <Form.Group>
            <Form.Label>loc</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>address</Form.Label>
            <Form.Text>whatever they say about it appears here</Form.Text>
          </Form.Group>
        </form>
      </div>
    );
  }
}
export default LocInfo;
