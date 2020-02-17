import React from 'react';
import ReactDOM from 'react-dom';
import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';
import { HSclone } from './lib/game';
import GameWrapper from './components/game-wrapper/GameWrapper';
import './index.css';
import * as serviceWorker from './serviceWorker';

const REDUX_DEVTOOLS =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const HScloneClient = Client({
  game: HSclone,
  board: GameWrapper,
  debug: true,
  multiplayer: SocketIO({ server: 'localhost:8000' }),
  enhancer: REDUX_DEVTOOLS
});

class App extends React.Component {
  state = {
    playerID: null,
    deck: []
  };

  componentDidMount() {
    const {
      location: { href }
    } = window;

    href.includes('3002')
      ? this.setState({ playerID: '1' })
      : this.setState({ playerID: '0' });
  }

  render() {
    if (this.state.playerID === null) {
      return (
        <div>
          <p>Play as</p>
          <button onClick={() => this.setState({ playerID: '0' })}>
            Player 0
          </button>
          <button onClick={() => this.setState({ playerID: '1' })}>
            Player 1
          </button>
        </div>
      );
    }

    return (
      <React.Fragment>
        <HScloneClient
          playerID={this.state.playerID}
          // deck={this.state.deck}
          // allCards={this.state.allCards}
        />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
