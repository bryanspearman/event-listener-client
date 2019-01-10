import React from 'react';

export default function ItemListView(props) {
  const listOfItems = props.itemList
    ? props.itemList.map(item => (
        <li onClick={item.selectedItem} key={item.id}>
          {item.itemTitle}
        </li>
      ))
    : null;

  return (
    <div className="list-nav">
      <ul className="future-list">
        <div className="future-hdr">How Long Until</div>
        {listOfItems}
        <div className="past-hdr">How Long Since</div>
      </ul>
    </div>
  );
}
