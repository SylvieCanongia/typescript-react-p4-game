import { beforeEach, describe, expect, it } from 'vitest';
import { interpret, InterpreterFrom } from 'xstate';
import { GameMachine, GameModel } from '../../src/machine/GameMachine';

describe('machine/GameMachine', () => {


  describe('join', () => {
    let machine: InterpreterFrom<typeof GameMachine >

    // Need to initialize machine before each test
    beforeEach(() => {
      machine = interpret(GameMachine).start()
    })

    it('Should let a player join', () => {
      expect(machine.send(GameModel.events.join('1', '1')).changed).toBe(true);
      expect(machine.state.context.players).toHaveLength(1);
      expect(machine.send(GameModel.events.join('2', '2')).changed).toBe(true);
      expect(machine.state.context.players).toHaveLength(2);
    })

    it('Should not let a player join the game twice', () => {
      expect(machine.send(GameModel.events.join('1', '1')).changed).toBe(true);
      expect(machine.send(GameModel.events.join('1', '1')).changed).toBe(false);
    })

  })
})