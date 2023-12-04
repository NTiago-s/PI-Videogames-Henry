const { Router } = require('express');
const {
    getVideoGameHandler,
    getVideoGameIDHandler,
} = require('../../handlers/videoGame/videoGameHandler')

const RouterGame = Router();

//* routers get de videoGames
RouterGame.get('/', getVideoGameHandler)
RouterGame.get('/:id', getVideoGameIDHandler)

module.exports = RouterGame;
