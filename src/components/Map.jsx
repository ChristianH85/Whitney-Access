import React, { Component } from "react";
import { Icon, Button } from "react-materialize";
import Axios from "axios";
import GoogleMapReact from "google-map-react";
import restaurants from "../show.js";

const Marker = ({ text }) => (
  <Button id="marker" tooltip={text} tooltipoptions={{ position: "top" }}>
    <Icon>accessible</Icon>
  </Button>
);

class Map extends Component {
  state = {
    locations: "",
    highAccess: "",
    medAccess: "",
    lowAccess: "",
    noAccess: "",
    accessibleList: []
  };
  static defaultProps = {
    center: {
      lat: 30.307182,
      lng: -97.755996
    },
    zoom: 12
  };

  componentDidMount() {
    let list = [];
    restaurants.map(data => {
      // console.log(data.location.lat);
      let lat = data.location.lat;
      let lng = data.location.lng;
      let name = data.name;
      let marker = {
        name: name,
        location: {
          lat: lat,
          lng: lng
        }
      };
      list.push(marker);
      // console.log(list);
      this.setState({ accessibleList: list });
    });
    if (this.props.pending >= 0) {
      this.props.pending.map(data => {
        console.log(data);
        let site = data.pAdd;
        Axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            site +
            "&key=" +
            process.env.REACT_APP_MAP_DATA
        )
          .then(res => {
            // let list = [];
            // console.log(res);
            // res.data.results.map(info => {
            //   let geo = {
            //     lat: info.geometry.location.lat,
            //     lng: info.geometry.location.lng
            //   };
            //   list.push(geo);
            //   console.log(list);
            //   this.setState({ accessibleList: list });
            // });
            console.log(res);
          })
          .catch();
      });
    }
    // let site = this;
    // Axios.get(
    //   "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    //     site +
    //     "&key=" +
    //     process.env.REACT_APP_MAP_DATA
    // )
    //   .then(res => {
    //     let list = [];
    //     console.log(res);
    //     res.data.results.map(info => {
    //       let geo = {
    //         lat: info.geometry.location.lat,
    //         lng: info.geometry.location.lng
    //       };
    //       list.push(geo);
    //       console.log(list);
    //       this.setState({ accessibleList: list });
    //     });
    //     console.log(res);
    //   })
    //   .catch();

    // let url = "whateverthe api is";
    // Axios.get(url).then(data => {
    //   if (data) {
    //     let list = [];
    //     console.log(data);
    //     data.map(res => {
    //       let site = res.address;
    //       Axios.get(
    //         "https://maps.googleapis.com/maps/api/geocode/json?" +
    //           site +
    //
    //       );
    //       list.push(res);
    //       this.setState({ locations: list });
    //     });
    //   } else {
    //     console.log("connect api");
    //   }
    // });
  }
  componentDidUpdate() {
    if (this.props.pending >= 0) {
      this.props.pending.map(data => {
        console.log(data);
        // let site = data.pAdd;
        // Axios.get(
        //   "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        //     site +
        //     "&key=" +
        //     process.env.REACT_APP_MAP_DATA
        // )
        //   .then(res => {
        // let list = [];
        // console.log(res);
        // res.data.results.map(info => {
        //   let geo = {
        //     lat: info.geometry.location.lat,
        //     lng: info.geometry.location.lng
        //   };
        //   list.push(geo);
        //   console.log(list);
        //   this.setState({ accessibleList: list });
        // });
        //   console.log(res);
        // })
        // .catch();
      });
    }
  }
  render() {
    return (
      <div id="map" style={{ height: "90vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_MAP_KEY
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.pending.length >= 0
            ? this.props.pending.map(data => {
                return (
                  <Marker
                    id="markerP"
                    // lat={data.location.lat}
                    // lng={data.location.lng}
                    text={data.name}
                    tooltipOptions={{ position: "top" }}
                  />
                );
              })
            : console.log("nothing")}
          {this.state.accessibleList.length <= 0
            ? console.log("awaiting data")
            : this.state.accessibleList.map(data => {
                // console.log(data);
                return (
                  <Marker
                    id="marker"
                    lat={data.location.lat}
                    lng={data.location.lng}
                    text={data.name}
                    tooltipOptions={{ position: "top" }}
                  ></Marker>
                );
              })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
