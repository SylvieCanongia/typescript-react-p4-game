import { ContextFrom, EventFrom } from "xstate";
import { GameModel } from "./machine/GameMachine";

export enum PlayerColor {
  RED = 'red',
  YELLOW = 'yellow',
};

export type Player = {
  id: string,
  name: string,
  // optional parameter
  color?: PlayerColor
};

export type CellEmpty = 'E';
export type CellState = PlayerColor.RED | PlayerColor.YELLOW | CellEmpty;
export type GridState = CellState[][];
export type GameContext = ContextFrom<typeof GameModel>;
export type GameEvents = EventFrom<typeof GameModel>