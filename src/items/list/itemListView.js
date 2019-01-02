import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItems } from '../item-actions';

export class ItemListView extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    const listOfItems = this.props.itemList.map(item => (
      <Link to={`/items/${item.id}`} key={item.id}>
        <li>{item.itemTitle}</li>
      </Link>
    ));
    return listOfItems;
  }
}

const mapStateToProps = state => {
  return { itemList: state.item.itemList };
};

const mapDispatchToProps = {
  getItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemListView);
