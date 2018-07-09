import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'components/form-controls/text-field';

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
            name="email"
            type="email"
            component={TextField}
            label="Email"
            fullWidth
          />
        </div>
        <div className="form-group">
          <Field
            name="password"
            type="password"
            component={TextField}
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
