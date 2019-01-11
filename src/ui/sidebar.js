import React from 'react';

export default class Sidebar extends React.Component {
  render() {
    const listOfItems = this.props.itemList
      ? this.props.itemList.map(item => (
          <li
            className={this.props.selectedItem ? 'selected' : null}
            onClick={() => this.props.setSelectedItem(item)}
            key={item.id}
          >
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
}
