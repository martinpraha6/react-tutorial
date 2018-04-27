// @flow

import React, { Component } from 'react';

type Props = {|
  children: any,
  clickEvent: any,
  className?: string,
|};

export default class Button extends Component<Props> {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.clickEvent}>
        {this.props.children}
        <style jsx>{`
          button {
            cursor: hand;
            cursor: pointer;
          }

          .btn-link {
            color: ingherit;
            background-color: none;
            box-sizing: border-box;
            padding: 0em;
            border-width: 0px;
            border-style: outset;
            border-color: none;
            border-image: none;
            text-rendering: auto;
            color: initial;
            letter-spacing: normal;
            word-spacing: normal;
            text-transform: none;
            text-indent: 0px;
            text-shadow: none;
            display: inline-block;
            margin: 0em;
            font: 400 11px system-ui;
            text-decoration: none;
          }

          .btn-link:hover {
            text-decoration: underline;
          }
        `}</style>
      </button>
    );
  }
}
