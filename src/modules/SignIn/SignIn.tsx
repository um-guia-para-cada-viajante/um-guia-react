import React from 'react';
import PropTypes from "prop-types";
import { withRouter, RouteComponentProps } from "react-router";
import axios from 'axios';
import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
import './SignIn.scss';
import { CLIENT_ID } from '../../google-credentials';

interface IProps extends RouteComponentProps {
  history: any;
}

class SignIn extends React.Component<IProps> {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
    };
  }

  signin = () => {
    this.props.history.push('/map')
  }

  signupWithGoogle = (response: any) => {
    console.log(response);
  }

  render() {
    const googleResponse = (response: any) => {
      console.log(response);
      var res = response.profileObj;
      console.log(res);
      this.signupWithGoogle(response);
    }

    return (
      <div className="sign-in-page h-100">
        <div className="background d-flex flex-grow-1 h-100">
        </div>
        <div className="card h-100 d-flex align-items-center justify-content-center">
          <div className="container-fluid">
            <div className="py-3 mb-4 text-center">
              <h4>Bem Vindo!</h4>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="btn border">
                    <i className="fa fa-user"></i>
                  </div>
                </div>
                <input className="form-control" placeholder="E-mail" type="text" />
              </div>
            </div>
            <div className="form-group mb-0">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="btn border">
                    <i className="fa fa-lock"></i>
                  </div>
                </div>
                <input className="form-control" placeholder="Senha" type="password" />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <span></span>
              <a className="px-2 py-1">
                <small className="text-muted">Esqueceu sua Senha?</small>
              </a>
            </div>
            <div className="d-flex justify-content-between pt-4">
              <button className="btn btn-link w-100 mx-2">
                Criar Conta
              </button>
              <button className="btn btn-primary w-100 mx-2" onClick={this.signin}>
                <i className="fa fa-sign-in"></i>&nbsp;&nbsp;Entrar
             </button>
            </div>
              <div className="d-flex justify-content-center" style={{ 'paddingTop': "10px" }}>
                <GoogleLogin
                  clientId={CLIENT_ID}
                  buttonText="Login com Google"
                  onSuccess={googleResponse}
                  onFailure={googleResponse} ></GoogleLogin>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn;
