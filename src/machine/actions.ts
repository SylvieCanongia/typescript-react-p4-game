// The actions take an event and return a modified context.
// They only return the properties that have changed.

import { GameAction, GameContext, PlayerColor } from "../types";

export const joinGameAction: GameAction<'join'> = (context, event) => ({
  players: [...context.players, { id: event.playerId, name: event.name }]
})

export const leaveGameAction: GameAction<'leave'> = (context, event) => ({
  // Only keeps in game the player with the id that doesn't match the event playerId
  players: context.players.filter(player => player.id !== event.playerId)
})

export const chooseColorAction: GameAction<'chooseColor'> = (context, event) => ({
  players: context.players.map(player => {
    if(player.id === event.playerId) {
      return { ...player, color: event.color }
    }
    return player
  })
})

export const setCurrentPlayerAction: GameAction<'start'> = (context: GameContext) => ({
  currentPlayer: context.players.find(player => player.color === PlayerColor.YELLOW)!.id
})