import React from 'react';
import requiresLogin from '../../auth/requires-login';
import HeaderBar from '../../nav/header-bar';
import ItemDetails from './itemDetails';
import ItemListView from '../list/itemListView';
import { getItems } from '../item-actions';
import { connect } from 'react-redux';

export class ItemDetailsView extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    return (
      <div className="row">
        <div className="dashboard">
          <HeaderBar />
          <main role="main">
            <ItemListView />
            <div className="info-view">
              {this.props.itemList.map(item => (
                <ItemDetails data={item} />
              ))}
            </div>
          </main>
        </div>
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

export default requiresLogin()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItemDetailsView)
);
