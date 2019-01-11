import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default class Sidebar extends React.Component {
  static propTypes = {
    itemList: PropTypes.array.isRequired,
    setSelectedItem: PropTypes.func.isRequired
  };

  render() {
    const listOfItems = this.props.itemList
      ? this.props.itemList.map(item => (
          <Link to={`/dashboard/details/${item.id}`}>
            <li
              className={this.props.selectedItem ? 'selected' : null}
              key={item.id}
            >
              {item.itemTitle}
            </li>
          </Link>
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
