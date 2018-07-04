import React from 'react';
import TextField from 'material-ui/TextField';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router-dom';
import { SubmissionError, Field, reduxForm } from 'redux-form';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import logo from 'assets/logo.png';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const LoginForm = reduxForm({
  form: 'login-form',
  validate: values => {
    const errors = {};
    return errors;
  },
})(props => {
  const { handleSubmit, pristine, submitting, error } = props;

  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <fieldset>
        <div className="form-group">
          <Field
            name="email"
            type="email"
            component={renderTextField}
            label="Email"
            fullWidth
          />
        </div>
        <div className="form-group">
          <Field
            name="password"
            type="password"
            component={renderTextField}
            label="Password"
            fullWidth
          />
        </div>
      </fieldset>

      <div className="card-action no-border text-right">
        <button
          className="btn-link color-primary"
          disabled={pristine || submitting}
        >
          Login
        </button>
      </div>
    </form>
  );
});

const requestLogin = gql`
  mutation requestLogin($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      auth
      token
      message
    }
  }
`;

class Login extends React.Component {
  handleSubmit = values => {
    return this.props
      .mutate({
        variables: values,
      })
      .then(({ data }) => {
        console.log('got data', data);
        throw new SubmissionError({
          _error: data.Login.message,
        });
      })
      .catch(error => {
        if (error instanceof SubmissionError) {
          throw error;
        }
        throw new SubmissionError({
          _error: 'There was an error sending the query',
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
                <Link to="/">
                  <img src={logo} alt="Logo" width="200px" />
                </Link>
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

const GQLLogin = graphql(requestLogin)(Login);

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
