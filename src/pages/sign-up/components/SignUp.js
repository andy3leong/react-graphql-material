import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { SubmissionError } from 'redux-form';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router';
import { CookieStorage } from 'cookie-storage';

import SignUpForm from 'components/forms/signup';
import { requestRegister } from 'components/gqls';

import logo from 'assets/logo.png';

class SignUp extends React.Component {
  handleSubmit = values => {
    return this.props
      .mutate({
        variables: values,
      })
      .then(({ data }) => {
        if (data.Register.auth === true) {
          const cookieStorage = new CookieStorage({
            path: '/',
          });
          cookieStorage.setItem('p2p-auth', data.Register.token);
          this.props.history.replace('/');
        } else {
          throw new SubmissionError({
            name: data.Register.message,
          });
        }
      })
      .catch(error => {
        if (error instanceof SubmissionError) {
          throw error;
        }
        throw new SubmissionError({
          name: 'There was an error sending the query',
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

            <SignUpForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

const GQLSignUp = graphql(requestRegister)(withRouter(SignUp));

export default () => (
  <div className="page-login">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <GQLSignUp />
        </div>
      </QueueAnim>
    </div>
  </div>
);
