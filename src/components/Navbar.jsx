import React, { Component } from "react";
import { Navbar, Button, SideNav, Icon } from "react-materialize";

import AddLoc from "./AddLocation";

const trigger = (
  <Button
    id="side"
    tooltip="Add a new Location"
    tooltipoptions={{ position: "bottom" }}
  >
    <Icon>playlist_add</Icon>
  </Button>
);

class Nav extends Component {
  handlePass = (name, val) => {
    console.log(this.props);
    console.log(name, val, [name]);
    this.props.onChange(name, val);
  };
  submitNewLocation = () => {
    let newLocation = {
      Address: this.props.address,
      Comments: this.props.comments,
      Rating: this.props.rating
    };
  };
  render() {
    return (
      <div id="nav">
        <Navbar className="nav">
          <span id="whitney">Whitney</span>
          <SideNav
            id="addNew"
            trigger={trigger}
            options={("right", { closeOnClick: true })}
          >
            <header id="slogan">Help Us Help You!</header>
            <AddLoc onChange={this.handlePass} {...this.props} />
          </SideNav>
        </Navbar>
      </div>
    );
  }
}
export default Nav;
