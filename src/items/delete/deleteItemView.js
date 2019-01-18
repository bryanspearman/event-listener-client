import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import requiresLogin from '../../utils/requires-login';

import CounterView from '../../counter/counterView';
import { getItem, getItems, deleteItem } from '../item-actions';

export class DeleteItemView extends React.Component {
  componentDidMount() {
    this.props.getItem(this.props.match.params.id);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getItem(this.props.match.params.id);
    }
  }

  dateIsInPast(testDate) {
    const now = new Date();
    return !!(testDate.getTime() < now.getTime());
  }

  warningMessage(message) {
    document.getElementById('warning').innerHTML = message;
  }

  deleteItem(itemId) {
    this.props.deleteItem(itemId).then(() => {
      this.warningMessage('Delete Successful');
      setTimeout(() => {
        this.props.getItems();
        this.props.history.push('/dashboard');
      }, 1500);
    });
  }

  render() {
    const { selectedItem } = this.props;
    if (!selectedItem) {
      return <p>Loading...</p>;
    }
    const itemDate = new Date(selectedItem.itemDate);
    const dateIsInPast = this.dateIsInPast(itemDate);

    return (
      <div id="item-details">
        <div id="warning" className="warning">
          <p>Are you sure you want to delete?</p>
        </div>
        <Link to={`/dashboard/details/${this.props.selectedItem.id}`}>
          <button className="sml-blu">Cancel</button>
        </Link>

        <Link to="#">
          <button
            className="sml-red"
            onClick={() => this.deleteItem(selectedItem.id)}
          >
            DELETE
          </button>
        </Link>
        <div className="dim">
          <h1>{selectedItem.itemTitle}</h1>
          <CounterView targetDate={itemDate.toDateString()} />
          <span>{dateIsInPast ? 'Since: ' : 'Until: '}</span>
          <span>{itemDate.toDateString()}</span>
          <div>
            <h2>Notes</h2>
            <p>{selectedItem.itemNotes}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedItem: state.item.selectedItem
});

const mapDispatchToProps = {
  getItem,
  getItems,
  deleteItem
};

export default requiresLogin()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeleteItemView)
);
