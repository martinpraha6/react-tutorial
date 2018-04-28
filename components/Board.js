// @flow

import React, { Component } from 'react';

import Button from './Button';

type SquareProps = {
  isCurrent: boolean,
  value: string,
  onClick: any,
};

function Square(props: SquareProps) {
  let classes: Array<string> = ['square'];
  if (props.isCurrent) {
    classes.push('current');
  }

  return (
    <Button className={classes.join(' ')} clickEvent={props.onClick}>
      {props.value}
      <style jsx global>{`
        .square {
          background: #fff;
          border: 1px solid #999;
          color: darkgrey;
          float: left;
          font-size: 32px;
          font-weight: bold;
          line-height: 48px;
          height: 48px;
          margin-right: -1px;
          margin-top: -1px;
          padding: 0;
          text-align: center;
          width: 48px;
        }

        .square.current {
          color: black;
        }

        .square:focus {
          outline: none;
        }
      `}</style>
    </Button>
  );
}

type BoardProps = {
  squares: Array<string>,
  currentMove: ?number,
  onClick: any,
};

export default class Board extends Component<BoardProps> {
  renderSquare(i: number) {
    return (
      <Square
        key={'square' + i}
        isCurrent={this.props.currentMove === i}
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
