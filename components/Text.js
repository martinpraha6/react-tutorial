// @flow

import React, { Component } from 'react';

type Props = {|
  children: string | number,
|};

export default class Text extends Component<Props> {
  render() {
    return <span>{this.props.children}</span>;
  }
}
