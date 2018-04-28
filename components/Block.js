// @flow

import React, { Component } from 'react';

type Props = {|
  children: string,
|};

export default class Block extends Component<Props> {
  render() {
    return (
      <div>
        {this.props.children}
        <style jsx>{`
          div {
            margin-bottom: 1em;
          }
        `}</style>
      </div>
    );
  }
}
