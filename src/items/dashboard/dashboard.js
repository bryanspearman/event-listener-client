import React from 'react';
import requiresLogin from '../../utils/requires-login';
import HeaderBar from '../../nav/header-bar';
import ItemDetails from './itemDetails';
import ItemListView from './itemListView';
import { getItems, selectItem } from '../item-actions';
import { connect } from 'react-redux';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getItems();
    this.props.selectItem();
  }

  render() {
    return (
      <div className="row">
        <div className="dashboard">
          <HeaderBar />
          <main role="main">
            <ItemListView />
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
  )(Dashboard)
);
