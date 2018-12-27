import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const CreateEventForm = props => {
  return (
    <form id="new-event-form" onSubmit={props.handleSubmit}>
      <label>
        Title: <br />
        <Field
          name="eventTitle"
          component="input"
          type="text"
          className="form-field"
        />
      </label>
      <label>
        Event Date: <br />
        <Field
          name="targetDate"
          component="input"
          type="date"
          className="form-field"
        />
      </label>
      <label>
        Notes: <br />
        <Field
          name="eventNotes"
          component="textarea"
          type="text"
          className="form-field"
        />
      </label>
      <br />
      <input type="submit" value="Save" />
    </form>
  );
};

export default reduxForm({
  form: 'createEvent'
})(CreateEventForm);
