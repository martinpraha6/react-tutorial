// @flow

import React, { Component } from 'react';

import Game from '../components/Game';

export default class Index extends Component<{}> {
  render() {
    return (
      <div>
        <h1>Tic Tac Toe Game</h1>
        <Game />
        <style jsx global>{`
          body {
            font: 14px 'Century Gothic', Futura, sans-serif;
            margin: 20px;
          }

          ol,
          ul {
            padding-left: 30px;
          }
        `}</style>
      </div>
    );
  }
}
