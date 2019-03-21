import React, { Component } from 'react';

class Step extends Component {
  state = {
    direction: null, // 'up' or 'down'
    state: null, // 'enter' or 'exit'
    offsetHeight: null,
  };

  nodeRef = React.createRef();

  getDomNode = () => this.nodeRef.current;

  getData = () => this.props.data;

  updateOffsetHeight = () =>
    this.setState({ offsetHeight: this.getDomNode().offsetHeight });

  enter = direction => this.setState({ state: 'enter', direction });
  exit = direction => this.setState({ state: 'exit', direction });

  render() {
    const { id, children } = this.props;

    return React.cloneElement(React.Children.only(children), {
      // place id on child to retrieve id from the raw DOM node (which
      // is what the intersection observer gives our callback
      id,

      // place ref on child to calculate offsets
      ref: this.nodeRef,
    });
  }
}

export default Step;
