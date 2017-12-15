import React, { PureComponent } from 'react';
import Action from './Action';
import TodoList from './TodoList';

import {
  STATE_COMPLETE,
  STATE_INCOMPLETE,
} from './constants';

const toggleState = (state) => {
  if (state === STATE_COMPLETE) {
    return STATE_INCOMPLETE;
  }
  return STATE_COMPLETE;
}

export default class TodoApp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };

    this.handleOnAddItem = this.handleOnAddItem.bind(this);
    this.handleOnDeleteItem = this.handleOnDeleteItem.bind(this);
    this.handleOnCheckItem = this.handleOnCheckItem.bind(this);
  }

  id = 0;

  handleOnAddItem(value) {

    const item = {
      id: this.id,
      value,
      state: STATE_INCOMPLETE,
    };
    this.setState({
      list: [...this.state.list, item],
    });
    this.id += 1;
  }

  handleOnDeleteItem(id) {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  }

  handleOnCheckItem(id) {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            state: toggleState(item.state),
          }
        }
        return item;
      }),
    });
  }

  render() {
    const {
      list,
    } = this.state;
    return (
      <div>
        <Action handleOnAddItem={this.handleOnAddItem} />
        <TodoList
          dataSource={list}
          handleOnDeleteItem={this.handleOnDeleteItem}
          handleOnCheckItem={this.handleOnCheckItem}
        />
      </div>
    )
  }
}
