import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import requiresLogin from '../utils/requires-login';
import HeaderBar from '../nav/header-bar';
import Sidebar from '../ui/sidebar';
import SplashView from './splashView';
import CreateItemView from '../items/create/createItemView';
import EditItemView from '../items/edit/editItemView';
import ItemDetails from '../items/details/itemDetails';

import { getItems, selectItem } from '../items/item-actions';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    // const setSelectedItem = item => this.props.selectItem(item);
    return (
      <div className="row">
        <div className="dashboard">
          <HeaderBar />
          <main role="main">
            <Sidebar
              itemList={this.props.itemList}
              setSelectedItem={this.props.selectItem}
            />
            <div className="info-view">
              <Route exact path="/dashboard" component={SplashView} />
              <Route
                exact
                path="/dashboard/details/:id"
                component={ItemDetails}
              />
              <Route
                exact
                path="/dashboard/create"
                component={CreateItemView}
              />
              <Route
                exact
                path="/dashboard/edit/:id"
                component={EditItemView}
              />
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
