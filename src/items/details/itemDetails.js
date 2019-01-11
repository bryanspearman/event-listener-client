import React from 'react';
import Counter from '../../ui/counter';

export default function ItemDetails(props) {
  return (
    <div id="item-details">
      <h1>{props.data.itemTitle}</h1>
      <span className="item-date">
        {new Date(props.data.itemDate).toDateString()}
      </span>
      <Counter targetDate={new Date(props.data.itemDate).toDateString()} />
      <div className="item-notes">
        <h2>Notes</h2>
        <p>{props.data.itemNotes}</p>
      </div>
    </div>
  );
}
