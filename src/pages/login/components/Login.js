import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router-dom';
import { SubmissionError } from 'redux-form';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router';
import { CookieStorage } from 'cookie-storage';

import LoginForm from 'components/forms/login';
import { requestLogin } from 'components/gqls';

import logo from 'assets/logo.png';

class Login extends React.Component {
  handleSubmit = values => {
    return this.props
      .mutate({
        variables: values,
      })
      .then(({ data }) => {
        if (data.Login.auth === true) {
          const cookieStorage = new CookieStorage({
            path: '/',
          });
          cookieStorage.setItem('p2p-auth', data.Login.token);
          this.props.history.replace('/');
        } else {
          throw new SubmissionError({
            email: data.Login.message,
          });
        }
      })
      .catch(error => {
        if (error instanceof SubmissionError) {
          throw error;
        }
        throw new SubmissionError({
          email: 'There was an error sending the query',
        });
      });
  };

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
            <LoginForm onSubmit={this.handleSubmit} />
          </div>
        </div>
        <div className="additional-info">
          <Link to="/sign-up">Sign up</Link>
          <span className="divider-h" />
          <Link to="/forgot-password">Forgot your password?</Link>
        </div>
      </div>
    );
  }
}

const GQLLogin = graphql(requestLogin)(withRouter(Login));

export default () => (
  <div className="page-login">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <GQLLogin />
        </div>
      </QueueAnim>
    </div>
  </div>
);
