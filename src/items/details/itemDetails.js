import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItem } from '../item-actions';
// import Counter from './counter';

export class ItemDetails extends Component {
  componentDidMount() {
    this.props.getItem();
  }

  render() {
    console.log(this.props.item.itemList);
    console.log(this.props.index);
    const { index, item, item: { itemList = [] } = {} } = this.props;
    return item && index && itemList.length ? (
      <div id="item-details">
        <h1>{this.props.item.itemList[this.props.index].itemTitle}</h1>
        <span className="item-date">
          {new Date(
            this.props.item.itemList[this.props.index].itemDate
          ).toDateString()}
        </span>
        <div className="counter">Counter Placeholder</div>
        <div className="item-notes">
          <h2>Notes</h2>
          <p>{this.props.item.itemList[this.props.index].itemNotes}</p>
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return { item: state.item };
};

const mapDispatchToProps = {
  getItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetails);
