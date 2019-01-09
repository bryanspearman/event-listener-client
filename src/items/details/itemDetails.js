import React from 'react';
import { connect } from 'react-redux';
import { getItems } from '../item-actions';
import Counter from '../../counter/counter';

export class ItemDetails extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { index, item, item: { itemList = [] } = {} } = this.props;

    return item && index && itemList.length ? (
      <div id="item-details">
        <h1>
          {this.props.itemList[this.props.index].this.props.itemList.itemTitle}
        </h1>
        <span className="item-date">
          {new Date(
            this.props.itemList[this.props.index].itemDate
          ).toDateString()}
        </span>
        <Counter
          targetDate={new Date(
            this.props.itemList[this.props.index].this.props.itemList.itemDate
          ).toDateString()}
        />
        <div className="item-notes">
          <h2>Notes</h2>
          <p>
            {
              this.props.itemList[this.props.index].this.props.itemList
                .itemNotes
            }
          </p>
        </div>
      </div>
    ) : null;
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
)(ItemDetails);
