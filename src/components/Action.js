import React, { PureComponent } from 'react';

export default class Action extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  $inputNode = null;

  handleClick() {
    const {
      handleOnAddItem,
    } = this.props;
    const value = this.$inputNode.value;
    if (value) {
      handleOnAddItem(value);
      this.$inputNode.value = '';
    }
  }

  render() {
    return (
      <div>
        <input ref={(node) => this.$inputNode = node} />
        <button onClick={this.handleClick}>
          加入
        </button>
      </div>
    )
  }
}
