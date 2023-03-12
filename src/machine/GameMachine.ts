import { createMachine } from 'xstate';
import { createModel } from 'xstate/lib/model';
import { GameEvents, GridState, Player } from '../types';
import { chooseColorAction, joinGameAction, leaveGameAction, setCurrentPlayerAction } from './actions';
import { canChooseColorGuard, canJoinGuard, canLeaveGuard, canStartGameGuard } from './guards';

enum GameStates {
  // pending players
  LOBBY = 'LOBBY',
  PLAY = 'PLAY',
  VICTORY = 'VICTORY',
  // full grid without winner
  FULLGRID = 'FULLGRID'
}

// Separate and organize context and events in strongly-typed way
// TODO migrate create function to Typegen (create function wil be removed in xstate v5)
export const GameModel = createModel({
  // players list
  players:[] as Player[],
  currentPlayer: null as null | Player['id'],
  nbPionsToWin: 4,
  grid: [
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E']
  ] as GridState
}, {
  events: {
    join: (playerId: Player['id'], name: Player['name']) => ({ playerId, name }),
    leave: (playerId: Player['id']) => ({ playerId }),
    chooseColor: (playerId: Player['id'], color: Player['color']) => ({ playerId, color }),
    start: (playerId: Player['id']) => ({ playerId }),
    dropToken: (playerId: Player['id'], x: number) => ({ playerId, x }),
    restart: (playerId: Player['id']) => ({ playerId }),
  }
})

// Creates the machine and its config
// Creating the GameMachine from the GameModel allows to get the types automatically from the GameModel
export const GameMachine = GameModel.createMachine({
  predictableActionArguments: true,
  id: 'game',
  // initial context
  context: GameModel.initialContext,
  initial: GameStates.LOBBY,
  states : {
    [GameStates.LOBBY]: {
      // 'on' sets transitions to other states from LOBBY
      on: {
        // player can join a party
        join: {
          cond: canJoinGuard,
          // assign is an action that returns a particular context and do a treatment on the context
          actions: [GameModel.assign(joinGameAction)],
          target: GameStates.LOBBY
        },
        leave: {
          cond: canLeaveGuard,
          actions: [GameModel.assign(leaveGameAction)],
          target: GameStates.LOBBY
        },
        chooseColor: {
          cond: canChooseColorGuard,
          actions: [GameModel.assign(chooseColorAction)],
          target: GameStates.LOBBY
        },
        start: {
          cond: canStartGameGuard,
          target: GameStates.PLAY,
          actions: [GameModel.assign(setCurrentPlayerAction)]
        }
      }
    },
    [GameStates.PLAY]: {
      on: {
        // player can join a party
        dropToken: {
          // target: '???'
        },
      }
    },
    [GameStates.VICTORY]: {
      // 'on' sets transitions to other states from LOBBY
      on: {
        // player can join a party
        restart: {
          target: GameStates.LOBBY
        }
      }
    },
    [GameStates.FULLGRID]: {
      // 'on' sets transitions to other states from LOBBY
      on: {
        // player can join a party
        restart: {
          target: GameStates.LOBBY
        }
      }
    }
  }
})