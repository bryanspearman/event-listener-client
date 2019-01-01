import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItems } from '../item-actions';

export class ItemListView extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    const { data } = this.props;
    if (!data) {
      return <p>Loading ...</p>;
    } else {
      const listOfItems = this.props.itemList.map(item => (
        <li key={item.itemId}>
          <Link to={`/items/${item.itemId}`}>{item.itemTitle}</Link>
        </li>
      ));
      return listOfItems;
    }
  }
}

const mapStateToProps = state => ({
  itemList: state.item.itemList
});

const mapDispatchToProps = {
  getItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemListView);
