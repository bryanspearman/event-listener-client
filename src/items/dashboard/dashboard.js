import React from 'react';
import requiresLogin from '../../auth/requires-login';
import HeaderBar from '../../nav/header-bar';
import SplashView from './splashView';
import ItemListView from '../list/itemListView';
import { getItems, selectItem } from '../item-actions';
import { connect } from 'react-redux';

export class Dashboard extends React.Component {
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
              <SplashView />
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
  )(Dashboard)
);
