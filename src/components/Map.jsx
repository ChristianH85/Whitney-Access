import React, { Component } from "react";
import { Icon, Button } from "react-materialize";
import Axios from "axios";
import GoogleMapReact from "google-map-react";
import restaurants from "../show.js";
/* this is where you make marker */

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
    console.log(process.env.REACT_APP_MAP_KEY);
    let list = [];
    restaurants.map(data => {
      console.log(data.location.lat);
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
      console.log(list);
      this.setState({ accessibleList: list });
    });
    // let markerTip = () => {
    //   if (this.state.accessibleList.length > 0) {
    //     let list = this.state.accessibleList;
    //     list.map(data => {
    //       const Marker = ({ text }) => (
    //         <Button
    //           id="marker"
    //           tooltip={data.name}
    //           tooltipoptions={{ position: "top" }}
    //         >
    //           <Icon>accessible</Icon>
    //         </Button>
    //       );
    //       return (
    //         <Marker
    //           lat={data.location.lat}
    //           lng={data.location.lng}
    //           // text={data.name}
    //           // tooltipOptions={{ position: "top" }}
    //         />
    //       );
    //     });
    //   }
    // };
    // let site = "701 Brazos St, Austin, TX";
    // Axios.get(
    //   "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    //     site +
    //     "&key=AIzaSyC-VBqDcnHsR9OlRgOyPxelWg4M5qrV23E"
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
    //           "&AIzaSyC-VBqDcnHsR9OlRgOyPxelWg4M5qrV23E"
    //       );
    //       list.push(res);
    //       this.setState({ locations: list });
    //     });
    //   } else {
    //     console.log("connect api");
    //   }
    // });
  }
  render() {
    // let markerTip = () => {
    //   if (this.state.accessibleList.length > 0) {
    //     let list = this.state.accessibleList;
    //     list.map(data => {
    //       const Marker = ({ text }) => (
    //         <Button
    //           id="marker"
    //           tooltip={data.name}
    //           tooltipoptions={{ position: "top" }}
    //         >
    //           <Icon>accessible</Icon>
    //         </Button>
    //       );
    //       console.log(data);
    //       return (
    //         <Marker
    //           lat={data.location.lat}
    //           lng={data.location.lng}
    //           text={data.name}
    //           tooltipOptions={{ position: "top" }}
    //         />
    //       );
    //     });
    //   }
    // };
    // const google = window.google;

    // var map, popup, Popup;
    // function createPopupClass() {
    //   /**
    //    * A customized popup on the map.
    //    * @param {!google.maps.LatLng} position
    //    * @param {!Element} content The bubble div.
    //    * @constructor
    //    * @extends {google.maps.OverlayView}
    //    */
    //   function Popup(position, content) {
    //     this.position = position;

    //     content.classList.add("popup-bubble");

    //     // This zero-height div is positioned at the bottom of the bubble.
    //     var bubbleAnchor = document.createElement("div");
    //     bubbleAnchor.classList.add("popup-bubble-anchor");
    //     bubbleAnchor.appendChild(content);

    //     // This zero-height div is positioned at the bottom of the tip.
    //     this.containerDiv = document.createElement("div");
    //     this.containerDiv.classList.add("popup-container");
    //     this.containerDiv.appendChild(bubbleAnchor);

    //     // Optionally stop clicks, etc., from bubbling up to the map.
    //     google.maps.OverlayView.preventMapHitsAndGesturesFrom(
    //       this.containerDiv
    //     );
    //   }
    //   // ES5 magic to extend google.maps.OverlayView.
    //   Popup.prototype = Object.create(google.maps.OverlayView.prototype);

    //   /** Called when the popup is added to the map. */
    //   Popup.prototype.onAdd = function() {
    //     this.getPanes().floatPane.appendChild(this.containerDiv);
    //   };

    //   /** Called when the popup is removed from the map. */
    //   Popup.prototype.onRemove = function() {
    //     if (this.containerDiv.parentElement) {
    //       this.containerDiv.parentElement.removeChild(this.containerDiv);
    //     }
    //   };

    //   /** Called each frame when the popup needs to draw itself. */
    //   Popup.prototype.draw = function() {
    //     var divPosition = this.getProjection().fromLatLngToDivPixel(
    //       this.position
    //     );

    //     // Hide the popup when it is far out of view.
    //     var display =
    //       Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
    //         ? "block"
    //         : "none";

    //     if (display === "block") {
    //       this.containerDiv.style.left = divPosition.x + "px";
    //       this.containerDiv.style.top = divPosition.y + "px";
    //     }
    //     if (this.containerDiv.style.display !== display) {
    //       this.containerDiv.style.display = display;
    //     }
    //   };

    //   return Popup;
    // }

    return (
      // <Container>
      <div id="map" style={{ height: "90vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyC-VBqDcnHsR9OlRgOyPxelWg4M5qrV23E"
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* this is where you make marker */}
          {/* {restaurants.map(data => {
            console.log(data.location.lat);
            
            // var btn = document.createElement("BUTTON");
            // btn.innerHTML = (
            //   <Marker
            //     lat={data.location.lat}
            //     lng={data.location.lng}
            //     text={data.name}
            //     tooltip={data.name}
            //   />
            // );
          })} */}
          {this.state.accessibleList.length + 1 <= 0
            ? console.log("awaiting data")
            : this.state.accessibleList.map(data => {
                console.log(data);
                return (
                  <Marker
                    lat={data.location.lat}
                    lng={data.location.lng}
                    text={data.name}
                    tooltipOptions={{ position: "top" }}
                  ></Marker>
                );
              })
          // {markerTip()
          }
          {/* <Marker lat={30.2509} lng={-97.7542} tooltip="torchy's" /> */}
        </GoogleMapReact>
      </div>

      // <div id="map"></div>

      /** Initializes the map and the custom popup. */
      // function initMap() {
      //   map = new google.maps.Map(document.getElementById("map"), {
      //     center: { lat: -33.9, lng: 151.1 },
      //     zoom: 10
      //   });
      //   Popup = createPopupClass();
      //   popup = new Popup(
      //     new google.maps.LatLng(-33.866, 151.196),
      //     document.getElementById("content")
      //   );
      //   popup.setMap(map);
      // }
      /**
       * Returns the Popup class.
       *
       * Unfortunately, the Popup class can only be defined after
       * google.maps.OverlayView is defined, when the Maps API is loaded.
       * This function should be called by initMap.
       */
    );
  }
}

export default Map;
