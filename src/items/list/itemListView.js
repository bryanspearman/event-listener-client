import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItems } from '../item-actions';

export class ItemListView extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const listOfItems = this.props.itemList.map((item, index) => (
      <Link to={`/details/${index}`} key={index}>
        <li>{item.itemTitle}</li>
      </Link>
    ));
    return (
      <div className="list-nav">
        <ul className="future-list">
          <div className="future-hdr">How Long Until</div>
          {listOfItems}
        </ul>
      </div>
    );
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
