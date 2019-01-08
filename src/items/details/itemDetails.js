import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../item-actions';
// import Counter from '../counter/counter';

export class ItemDetails extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    console.log(this.props.index, this.props.item);
    const { index, item, item: { itemList = [] } = {} } = this.props;
    const title = this.props.item.itemList[this.props.index].itemTitle;
    const dateToUse = new Date(
      this.props.item.itemList[this.props.index].itemDate
    ).toDateString();
    const notes = this.props.item.itemList[this.props.index].itemNotes;

    return item && index && itemList.length ? (
      <div id="item-details">
        <h1>{title}</h1>
          <span className="item-date">{dateToUse}</span>
             <Counter targetDate={dateToUse} />
        <div className="item-notes">
          <h2>Notes</h2>
          <p>{notes}</p>
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return { item: state.item };
};

const mapDispatchToProps = {
  getItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetails);
