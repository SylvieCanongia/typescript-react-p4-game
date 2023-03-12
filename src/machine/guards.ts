//  Conditions

import { GameContext, GameEvent, GameGuard, PlayerColor } from "../types";

export const canJoinGuard: GameGuard<'join'> = (context, event) => {
  //  can join the game if there is less than 2 players and if player isn't already in game
  return context.players.length < 2 && context.players.find(player => player.id === event.playerId) === undefined
}

export const canLeaveGuard: GameGuard<'leave'> = (context, event) => {
  //  can leave the game if there is a matching player in game
  return !!context.players.find(player => player.id === event.playerId)
}

export const canChooseColorGuard: GameGuard<'chooseColor'> = (context, event) => {
  //  Checks if the color is RED or YELLOW
  return [PlayerColor.RED, PlayerColor.YELLOW].includes(event.color) &&
    // and if there is a player
    context.players.find(player => player.id === event.playerId) !== undefined &&
    //  and if the color hasn't not already been chosen
    context.players.find(player => player.color === event.color) === undefined
}

export const canStartGameGuard: GameGuard<'start'> = (context, event) => {
  // Checks if there is 2 players. Each player can start the game
  return context.players.filter(player => player.color).length === 2
}

