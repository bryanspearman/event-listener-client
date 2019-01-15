import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Sidebar extends React.Component {
  static propTypes = {
    itemList: PropTypes.array.isRequired,
    setSelectedItem: PropTypes.func.isRequired
  };

  sortItems(itemList) {
    return itemList.sort((itemOne, itemTwo) => {
      const dateOne = new Date(itemOne.itemDate).getTime();
      const dateTwo = new Date(itemTwo.itemDate).getTime();
      if (dateOne < dateTwo) {
        return -1;
      } else if (dateOne > dateTwo) {
        return 1;
      } else if (dateOne === dateTwo) {
        return 0;
      }
      return 0;
    });
  }

  getPastItems() {
    const nowDate = new Date();
    return this.props.itemList.filter(item => {
      const itemDate = new Date(item.itemDate);
      return !!(itemDate.getTime() < nowDate.getTime());
    });
  }

  getFutureItems() {
    const nowDate = new Date();
    return this.props.itemList.filter(item => {
      const itemDate = new Date(item.itemDate);
      return !!(itemDate.getTime() > nowDate.getTime());
    });
  }

  renderTimerLink = item => (
    <Link to={`/dashboard/details/${item.id}`} key={item.id}>
      <li
        className={
          this.props.selectedItem && this.props.selectedItem.id === item.id
            ? 'selected'
            : null
        }
      >
        {item.itemTitle}
      </li>
    </Link>
  );

  render() {
    if (!this.props.itemList) {
      return null;
    }

    let futureItems = this.sortItems(this.getFutureItems()).map(
      this.renderTimerLink
    );

    let pastItems = this.sortItems(this.getPastItems()).map(
      this.renderTimerLink
    );

    return (
      <div className="list-nav">
        <ul className="future-list">
          <div className="future-hdr">How Long Until</div>
          {futureItems}
          <div className="past-hdr">How Long Since</div>
          {pastItems}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedItem: state.item.selectedItem
});

export default connect(mapStateToProps)(Sidebar);
