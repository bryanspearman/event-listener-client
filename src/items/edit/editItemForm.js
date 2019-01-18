import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment';

export const EditItemForm = props => {
  return (
    <form id="edit-item-form" onSubmit={props.handleSubmit}>
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
      <Link to={`/dashboard/details/${props.itemId}`}>
        <button className="sml-red">Cancel</button>
      </Link>
      <input type="submit" value="Save" />
    </form>
  );
};

const reduxFormEditItem = reduxForm({
  form: 'editItem'
})(EditItemForm);

const mapStateToProps = state => {
  const { selectedItem } = state.item;
  if (!selectedItem) {
    return {};
  } else {
    return {
      initialValues: {
        itemTitle: selectedItem.itemTitle,
        itemDate: moment(selectedItem.itemDate).format('YYYY-MM-DD'),
        itemNotes: selectedItem.itemNotes
      }
    };
  }
};

export default connect(mapStateToProps)(reduxFormEditItem);
