import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { Link } from 'react-router-dom';
import Input from '../utils/input';
import { required, nonEmpty } from './validators';

export class LoginForm extends React.Component {
  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <form className="login-form">
        <div className="error-message">{error}</div>
        <label htmlFor="username">Username</label>
        <Field
          component={Input}
          type="text"
          name="username"
          id="username"
          validate={[required, nonEmpty]}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          id="password"
          validate={[required, nonEmpty]}
        />
        <div className="center">
          <button
            className="lrg-blu"
            disabled={this.props.pristine || this.props.submitting}
          >
            Login
          </button>
          <p className="sml-txt">
            Need an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('login', 'username'))(LoginForm)
});
