// @flow

import React, { Component } from 'react';

type Props = {|
  children: any,
|};

export default class Block extends Component<Props> {
  render() {
    return <div>{this.props.children}</div>;
  }
}
