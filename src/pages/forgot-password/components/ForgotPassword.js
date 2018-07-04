import React from 'react';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.png';

class ForgotPassowrd extends React.Component {
  render() {
    return (
      <div className="body-inner">
        <div className="card bg-white">
          <div className="card-content">
            <section className="logo text-center">
              <h1>
                <Link to="/">
                  <img src={logo} alt="Logo" width="200px" />
                </Link>
              </h1>
            </section>
            <form>
              <fieldset>
                <div className="form-group">
                  <TextField floatingLabelText="Email" type="email" fullWidth />
                  <div className="additional-info text-center text-small">
                    Enter your email address that you used to register. We{"'"}ll
                    send you an email with your username and a link to reset
                    your password.
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="card-action no-border text-right">
            <Link to="/" className="color-primary">
              Reset
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const Page = () => (
  <div className="page-forgot">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <ForgotPassowrd />
        </div>
      </QueueAnim>
    </div>
  </div>
);

export default Page;
