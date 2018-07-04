/* eslint-disable no-script-url */
import React from 'react';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.png';

class SignUp extends React.Component {
  render() {
    return (
      <div className="body-inner">
        <div className="card bg-white">
          <div className="card-content">
            <section className="logo text-center">
              <h1>
                <img src={logo} alt="Logo" width="200px" />
              </h1>
            </section>

            <form className="form-horizontal">
              <fieldset>
                <div className="form-group">
                  <TextField floatingLabelText="Username" fullWidth />
                </div>
                <div className="form-group">
                  <TextField floatingLabelText="Email" type="email" fullWidth />
                </div>
                <div className="form-group">
                  <TextField
                    floatingLabelText="Password"
                    type="password"
                    fullWidth
                  />
                </div>
                <div className="divider" />
                <div className="form-group">
                  <p className="text-small">
                    By clicking on sign up, you agree to{' '}
                    <a href="javascript:;">
                      <i>terms</i>
                    </a>{' '}
                    and{' '}
                    <a href="javascript:;">
                      <i>privacy policy</i>
                    </a>
                  </p>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="card-action no-border text-right">
            <Link to="/login" className="color-gray-light">
              Login
            </Link>
            <Link to="/" className="color-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default () => (
  <div className="page-login">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <SignUp />
        </div>
      </QueueAnim>
    </div>
  </div>
);
