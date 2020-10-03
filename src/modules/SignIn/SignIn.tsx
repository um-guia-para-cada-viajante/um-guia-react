import React from 'react';
import PropTypes from "prop-types";
import { withRouter, RouteComponentProps } from "react-router";

import './SignIn.scss';

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
  }

  signin = () => {
    this.props.history.push('/map')
  }

  render() {
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
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn;
