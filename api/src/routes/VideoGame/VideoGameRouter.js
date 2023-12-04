const { Router } = require('express');
const {
    getVideoGameHandler,
    getVideoGameIDHandler,
    postVideoGameHandler
} = require('../../handlers/videoGame/videoGameHandler')

const RouterGame = Router();

//* routers get de videoGames
RouterGame.get('/', getVideoGameHandler)
RouterGame.get('/:id', getVideoGameIDHandler)
RouterGame.post('/', postVideoGameHandler)

module.exports = RouterGame;
