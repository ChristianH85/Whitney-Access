import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

class Login extends Component {
  componentDidMount() {
    console.log(process.env.REACT_APP_GCP_ID);
  }
  render() {
    const responseFacebook = response => {
      if (response.name !== undefined) {
        console.log(this.props);
        let user = {
          name: response.name,
          email: response.email,
          photo: response.picture.data.url
        };
        this.props.toggleLogin(this.props.isLoggedIn, user);
      }
      console.log(response);
    };
    const responseSuccess = response => {
      console.log(this.props);
      console.log(response);
      let data = response.profileObj;
      let user = {
        name: data.name,
        email: data.email,
        photo: data.ImageUrl
      };
      this.props.toggleLogin(this.props.isLoggedIn, user);
    };
    const responseFail = response => {
      console.log(response);
    };
    return (
      <div className="card">
        <div className="row">
          {console.log(process.env.REACT_APP_FB_AUTH)}

          <FacebookLogin
            appId={process.env.REACT_APP_FB_AUTH} //APP ID NOT CREATED YET
            fields="name,email,picture"
            callback={responseFacebook}
          />
          <br />
          {console.log(process.env.REACT_APP_GCP_ID)}
          <GoogleLogin
            clientId={process.env.REACT_APP_GCP_ID} //CLIENTID NOT CREATED YET
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseSuccess}
            onFailure={responseFail}
          />
        </div>
      </div>
    );
  }
}
export default Login;
