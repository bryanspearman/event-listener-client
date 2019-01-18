import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { HashLink as Link } from 'react-router-hash-link';

export const CreateItemForm = props => {
  return (
    <form id="new-item-form" onSubmit={props.handleSubmit}>
      <label>
        Title: <br />
        <Field
          name="itemTitle"
          component="input"
          type="text"
          className="form-field"
        />
      </label>
      <label>
        Event Date: <br />
        <Field
          name="itemDate"
          component="input"
          type="date"
          className="form-field"
        />
      </label>
      <label>
        Notes: <br />
        <Field
          name="itemNotes"
          component="textarea"
          type="text"
          className="form-field"
        />
      </label>
      <br />
      <Link to={'/dashboard#top'}>
        <button className="sml-red">Cancel</button>
      </Link>
      <input type="submit" value="Save" />
    </form>
  );
};

export default reduxForm({
  form: 'createItem'
})(CreateItemForm);
