const { Router } = require('express');
const {
    getVideoGameHandler,
    getVideoGameIDHandler
} = require('../../handlers/videoGame/videoGameHandler')

const getRouterGame = Router();

getRouterGame.get('/', getVideoGameHandler)
getRouterGame.get('/:id', getVideoGameIDHandler)

module.exports = getRouterGame;
