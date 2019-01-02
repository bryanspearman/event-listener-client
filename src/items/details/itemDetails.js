import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItem } from '../item-actions';
// import Counter from './counter';

export class ItemDetails extends Component {
  componentDidMount() {
    this.props.getItem(this.props.itemId);
  }

  render() {
    // const itemDetail = this.props.item.filter(itemDetailObj => {
    //   return itemDetailObj.id === this.props.itemId;
    // });
    return this.props.item ? (
      <div id="item-details">
        <h1>{this.props.item.itemTitle}</h1>
        <span className="item-date">{this.props.item.itemDate}</span>
        <div className="counter">Counter Placeholder</div>
        <div className="item-notes">
          <h2>Notes</h2>
          <p>{this.props.item.itemNotes}</p>
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return { item: state.item.itemDetails };
};

const mapDispatchToProps = {
  getItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetails);
