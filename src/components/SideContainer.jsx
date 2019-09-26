import React, { Component } from "react";
import { Tabs, Tab } from "react-materialize";

class SideContainer extends Component {
  render() {
    return (
      <div>
        <Tabs>
          <Tab>Add Location</Tab>
          <Tab>Add Rating</Tab>
          <Tab>Filter</Tab>
        </Tabs>
        {/* <Tabs variant="tabs" defaultActiveKey="AddLocation">
          <Tab eventkey="AddLocation" title="Add Location"></Tab>
          <Tab eventkey="ViewDetails" title="Details"></Tab>
        </Tabs> */}
      </div>
    );
  }
}
export default SideContainer;
