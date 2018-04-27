// @flow

import React, { Component } from 'react';

import Board from './Board';
import Text from './Text';
import Block from './Block';
import Button from './Button';

type Props = {};
type State = {|
  history: Array<{
    squares: Array<string>,
    move: ?number,
    whoPlayed: string,
  }>,
  xIsNext: boolean,
  stepNumber: number,
|};

export default class Game extends Component<Props, State> {
  constructor(props: Props) {
    super((props: Props));
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          move: null,
          whoPlayed: '',
        },
      ],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  handleClick(i: number): void {
    const history = this.state.history;
    const current = history[history.length - 1];

    if (current.squares) {
      const squares = current.squares.slice();

      if (calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([
          {
            squares: squares,
            move: i,
            whoPlayed: squares[i],
          },
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  getCoordinates(move: number): string {
    if (move > -1) {
      const x: string = ['A', 'B', 'C'][Math.floor(move % 3)];
      const y: string = Math.ceil((move + 1) / 3).toString();
      return '[' + x + ',' + y + ']';
    }
    return '';
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner: ?string = calculateWinner(current.squares);

    const moves = history.map((step, index) => {
      const desc =
        step.move !== null
          ? step.whoPlayed +
            ' ' +
            this.getCoordinates(
              step.move !== null && typeof step.move !== 'undefined'
                ? step.move
                : -1,
            )
          : 'Start';
      return (
        <li key={index}>
          <Button className="btn-link" clickEvent={() => this.jumpTo(index)}>
            <Text>{desc}</Text>
          </Button>
        </li>
      );
    });

    let status: string;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <Block>{status}</Block>
          <ol>{moves}</ol>
        </div>
        <style jsx>{`
          .game {
            display: flex;
            flex-direction: row;
          }

          .game-info {
            margin-left: 20px;
          }
        `}</style>
      </div>
    );
  }
}

function calculateWinner(squares): ?string {
  const lines: Array<Array<number>> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
