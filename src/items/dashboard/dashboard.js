import React from 'react';
import requiresLogin from '../../auth/requires-login';
import HeaderBar from '../../nav/header-bar';
import ItemDetails from '../details/itemDetails';
import ItemListView from '../list/itemListView';

export class Dashboard extends React.Component {
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
