import React, { PureComponent } from 'react';

import {
  STATE_COMPLETE,
  STATE_INCOMPLETE,
} from './constants';

const completeStyle = {
  textDecoration: 'line-through',
}

const ShowCompleteText = (props) => props.state === STATE_COMPLETE ?
  <span style={completeStyle}>{props.value}</span> : null;

const ShowIncompleteText = (props) => props.state === STATE_INCOMPLETE ?
  <span>{props.value}</span> : null;

export default class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.onCheckItem = this.onCheckItem.bind(this);
  }

  onDeleteItem(evt) {
    const id = parseInt(evt.target.getAttribute('data-id'), 10);
    this.props.handleOnDeleteItem(id);
  }

  onCheckItem(evt) {
    const id = parseInt(evt.target.getAttribute('data-id'), 10);
    this.props.handleOnCheckItem(id);
  }

  renderList(data, index) {
    const {
      handleOnDeleteItem,
    } = this.props;
    return (
      <li key={data.id}>
        <ShowCompleteText {...data} />
        <ShowIncompleteText {...data} />
        <button data-id={data.id} onClick={this.onDeleteItem}>delete</button>
        <button data-id={data.id} onClick={this.onCheckItem}>check</button>
      </li>
    )
  }

  render() {
    const {
      dataSource,
    } = this.props;
    console.log(dataSource)
    return (
      <ul>
        {dataSource.map(this.renderList)}
      </ul>
    );
  }
}
