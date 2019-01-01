import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItem } from '../item-actions';
// import Counter from './counter';

export class ItemDetails extends Component {
  componentDidMount() {
    this.props.getItem({
      itemId: this.props.match.params.itemId
    });
  }

  render() {
    const { item } = this.props;
    if (!item) {
      return <p>Loading ...</p>;
    }
    return (
      <div id="item-details">
        <h1>{item.itemTitle}</h1>
        <span className="item-date">{item.itemDate}</span>>
        <div className="counter">Counter Placeholder</div>
        <div className="item-notes">
          <h2>Notes</h2>
          <p>{item.itemNotes}</p>
        </div>
      </div>
    );
  }
  a;
}

const mapStateToProps = state => ({
  itemDetails: state.item.itemDetails
});

const mapDispatchToProps = {
  getItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetails);
