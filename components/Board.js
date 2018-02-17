// @flow

import React, { Component } from 'react';

import Button from './Button';

function Square(props) {
  return (
    <Button className="square" clickEvent={props.onClick}>
      {props.value}
      <style jsx global>{`
        .square {
          background: #fff;
          border: 1px solid #999;
          float: left;
          font-size: 24px;
          font-weight: bold;
          line-height: 34px;
          height: 34px;
          margin-right: -1px;
          margin-top: -1px;
          padding: 0;
          text-align: center;
          width: 34px;
        }

        .square:focus {
          outline: none;
        }
      `}</style>
    </Button>
  );
}

type Props = {
  squares: Array<string>,
  onClick: any,
};

export default class Board extends Component<Props> {
  renderSquare(i: number) {
    return (
      <Square
        key={'square' + i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderBoardRow(id: number, count: number) {
    return Array(count)
      .fill(null)
      .map(() => this.renderSquare(id++));
  }

  renderBoard(count: number) {
    let i: number = 0;
    return Array(count)
      .fill(null)
      .map(() => (
        <div key={'row' + i} className="board-row">
          {this.renderBoardRow(i++ * count, count)}
        </div>
      ));
  }

  render() {
    const boardSize: number = 3;

    return (
      <div>
        {this.renderBoard(boardSize)}
        <style jsx>{`
          .board-row:after {
            clear: both;
            content: '';
            display: table;
          }
        `}</style>
      </div>
    );
  }
}
