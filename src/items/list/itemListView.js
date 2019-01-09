import React from 'react';

export default function ItemListView(props) {
  console.log(props);
  const listOfItems = props.itemList
    .filter(item => item.selectedItem === item.id)
    .map((item, idx) => (
      <li onClick={item.selectedItem} key={idx}>
        {item.itemTitle}
      </li>
    ));

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
