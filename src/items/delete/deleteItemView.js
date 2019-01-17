import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

  deleteItem(itemId) {
    this.props.deleteItem(itemId).then(() => this.props.getItems());
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
        <div className="warning">Are you sure you want to delete?</div>
        <Link to="/dashboard">
          <button className="sml-blu">Cancel</button>
        </Link>

        <Link to="#">
          <button
            className="sml-red"
            onClick={() => this.props.deleteItem(selectedItem.id)}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteItemView);
