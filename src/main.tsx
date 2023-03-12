import React from 'react'
import ReactDOM from 'react-dom/client'
import { interpret } from 'xstate'
import App from './App'
import './index.css'
import { GameMachine, GameModel } from './machine/GameMachine'

// Creates a new instance of the Game Machine
const machine = interpret(GameMachine).start();

/*
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/
