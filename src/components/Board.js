// @flow

import React, { Component } from 'react';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
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

    return <div>{this.renderBoard(boardSize)}</div>;
  }
}
