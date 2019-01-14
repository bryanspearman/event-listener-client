import React from 'react';
import { connect } from 'react-redux';

import CounterView from '../../counter/counterView';
import { getItem } from '../item-actions';

export class ItemDetails extends React.Component {
  componentDidMount() {
    this.props.getItem(this.props.match.params.id);
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getItem(this.props.match.params.id);
    }
  }
  render() {
    if (!this.props.selectedItem) {
      return <p>Loading...</p>;
    }
    return (
      <div id="item-details">
        <h1>{this.props.selectedItem.itemTitle}</h1>
        <span className="item-date">
          {new Date(this.props.selectedItem.itemDate).toDateString()}
        </span>
        <CounterView
          targetDate={new Date(this.props.selectedItem.itemDate).toDateString()}
        />
        <div className="item-notes">
          <h2>Notes</h2>
          <p>{this.props.selectedItem.itemNotes}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedItem: state.item.selectedItem
});

const mapDispatchToProps = {
  getItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetails);
