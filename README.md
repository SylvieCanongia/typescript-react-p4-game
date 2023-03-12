# Jeu de puissance 4 basé sur React TypeScript --- Connect 4 game based on React TypeScript

## Comment jouer

Il s'agit d'un jeu de puissance 4 où 2 joueurs peuvent s'affronter en ligne.

- Le joueur 1 choisit un pseudo et obtient une URL à partager pour inviter les autres joueurs.
- Le joueur 2 choisoit aussi un pseudo et rejoint la partie.
- Les 2 joueurs choisissent une partie.
- Le créateur de la partie lance la partie.
- Les joueurs placent des pions à tour de rôle dans une grille de 7x6
- Un joueur gagne si 4 pions sont alignés verticalement, horizontalement ou en diagonale.

Bon jeu !

## Les technologies

- NodeJS
- TypeScript
- React (initialisation du projet avec Vite)
- Xstate
- Websocket
- Package Npm pour la gestion du websocket côté client : <https://www.npmjs.com/package/reconnecting-websocket>
- Fastify
- Package Npm pour gérer le websocket avec Fastify : <https://www.npmjs.com/package/@fastify/websocket>

## Étapes

Voici les étapes suivies pour créer le jeu :

- Machine d'état (à tester)
- Interface
- Jeu hors ligne (connexion entre la machine à état et l'interface en jeu hors ligne)
- Mise en place du serveur (Node JS + Fastify)
- Jeu en ligne (la synchronisation se fera directement côté serveur)
- Déploiement (mise en ligne)

====================================================================================

## How to play

This is a connect 4 game where 2 players can compete online.

- Player 1 chooses a nickname and gets a URL to share to invite other players.
- Player 2 also chooses a nickname and joins the game.
- The 2 players choose a game.
- The game creator starts the game.
- Players take turns placing pawns in a 7x6 grid
- A player wins if 4 pawns are aligned vertically, horizontally or diagonally.

Good game !

## Technologies

- NodeJS
- TypeScript
- React (project initialization with Vite)
- Xstate
- Websocket
- Npm package for managing websocket on client side : <https://www.npmjs.com/package/reconnecting-websocket>
- Fastify
- Npm package for managing websocket with Fastify : <https://www.npmjs.com/package/@fastify/websocket>

## Steps

Here are the steps followed to create the game :

- State machine (to test)
- Interface
- Offline game (connection between state machine and interface, local game)
- Setting up the server (Node JS + Fastify)
- Online game (the synchronization will be done directly on the server side)
- Deployment
