import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Sidebar extends React.Component {
  static propTypes = {
    itemList: PropTypes.array.isRequired,
    setSelectedItem: PropTypes.func.isRequired
  };

  render() {
    const listOfItems = this.props.itemList
      ? this.props.itemList.map(item => (
          <Link to={`/dashboard/details/${item.id}`} key={item.id}>
            <li
              className={
                this.props.selectedItem &&
                this.props.selectedItem.id === item.id
                  ? 'selected'
                  : null
              }
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

const mapStateToProps = state => ({
  selectedItem: state.item.selectedItem
});

export default connect(mapStateToProps)(Sidebar);
