/* eslint-disable no-script-url */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'components/form-controls/text-field';
import { Link } from 'react-router-dom';

export default reduxForm({
  form: 'login-form',
  validate: values => {
    const errors = {};
    return errors;
  },
})(props => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <fieldset>
        <div className="form-group">
          <Field
            name="name"
            floatingLabelText="Name"
            fullWidth
            component={TextField}
          />
        </div>
        <div className="form-group">
          <Field
            name="email"
            floatingLabelText="Email"
            type="email"
            fullWidth
            component={TextField}
          />
        </div>
        <div className="form-group">
          <Field
            name="password"
            floatingLabelText="Password"
            type="password"
            fullWidth
            component={TextField}
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

      <div className="card-action no-border text-right">
        <Link to="/login" className="color-gray-light">
          Login
        </Link>
        <button
          className="btn-link color-primary"
          disabled={pristine || submitting}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
});
