import React from 'react';
import Counter from '../../counter/counter';

export class ItemDetails extends React.Component {
  render() {
    return (
      <div id="item-details">
        <h1>{this.props.data.itemTitle}</h1>
        <span className="item-date">
          {new Date(this.props.data.itemDate).toDateString()}
        </span>
        <Counter
          targetDate={new Date(this.props.data.itemDate).toDateString()}
        />
        <div className="item-notes">
          <h2>Notes</h2>
          <p>{this.props.data.itemNotes}</p>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
