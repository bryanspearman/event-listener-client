import React from 'react';
import requiresLogin from '../../auth/requires-login';
import HeaderBar from '../../nav/header-bar';
import ItemDetails from './itemDetails';
import ItemListView from '../list/itemListView';
import { getItems, selectItem } from '../item-actions';
import { connect } from 'react-redux';

export class ItemDetailsView extends React.Component {
  componentDidMount() {
    this.props.getItems();
    this.props.selectItem();
  }

  setSelectedItem = this.props
    ? item => {
        this.props.selectedItem({ selectedItem: item });
      }
    : null;

  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="dashboard">
          <HeaderBar />
          <main role="main">
            <ItemListView
              itemList={this.props.itemList}
              selectedItem={this.setSelectedItem()}
            />
            <div className="info-view">
              <ItemDetails data={this.props.selectedItem} />
            </div>
          </main>
        </div>
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

export default requiresLogin()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItemDetailsView)
);
