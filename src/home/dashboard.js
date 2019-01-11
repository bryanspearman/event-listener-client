import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../utils/requires-login';
import HeaderBar from '../nav/header-bar';
import SplashView from './splashView';
import ItemDetails from '../items/details/itemDetails';
import Sidebar from '../ui/sidebar';
import { getItems, selectItem } from '../items/item-actions';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getItems();
    this.props.selectItem();
  }

  renderInfoView() {
    if (this.props.selectedItem) {
      return <ItemDetails data={this.props.selectedItem} />;
    } else {
      return <SplashView />;
    }
  }

  render() {
    const setSelectedItem = item => this.props.selectItem(item);
    return (
      <div className="row">
        <div className="dashboard">
          <HeaderBar />
          <main role="main">
            <Sidebar />
            <div className="info-view">{this.renderInfoView()}</div>
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
