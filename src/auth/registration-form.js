import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import Input from '../utils/input';
import { required, nonEmpty, matches, length, isTrimmed } from './validators';
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
  render() {
    return (
      <form className="login-form" onSubmit={this.props.handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <Field component={Input} type="text" name="firstName" />
        <label htmlFor="lastName">Last name</label>
        <Field component={Input} type="text" name="lastName" />
        <label htmlFor="username">Username</label>
        <Field
          component={Input}
          type="text"
          name="username"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          validate={[required, passwordLength, isTrimmed]}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>
        <Field
          component={Input}
          type="password"
          name="passwordConfirm"
          validate={[required, nonEmpty, matchesPassword]}
        />
        <div className="center">
          <button
            className="lrg-blu"
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Sign Up
          </button>
          <p className="sml-txt">
            Already use Event Listner? <Link to="/login">Login here</Link>
          </p>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
