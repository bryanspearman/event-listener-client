import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItem } from '../item-actions';
// import Counter from './counter';

export class ItemDetails extends Component {
  render() {
    return this.props.item ? (
      <div id="item-details">
        <h1>{this.props.item.itemTitle}</h1>
        <span className="item-date">
          {new Date(this.props.item.itemDate).toDateString()}
        </span>
        <div className="counter">Counter Placeholder</div>
        <div className="item-notes">
          <h2>Notes</h2>
          <p>{this.props.item.itemNotes}</p>
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = (state, props) => {
  return { item: state.item.itemList[props.index] };
};

const mapDispatchToProps = {
  getItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetails);
