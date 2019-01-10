import React from 'react';
import { getItems, selectItem } from '../item-actions';
import { connect } from 'react-redux';

export class ItemListView extends React.Component {
  componentDidMount() {
    this.props.getItems();
    this.props.selectItem();
  }

  render() {
    setSelectedItem = item => this.props.selectItem(item);

    const listOfItems = this.props.itemList
      ? this.props.itemList.map(item => (
          <li onClick={() => setSelectedItem(item)} key={item.id}>
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

const mapStateToProps = state => {
  return {
    itemList: state.item.itemList,
    selectedItem: state.item.selectedItem
  };
};
const mapDispatchToProps = {
  getItems,
  selectItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemListView);
