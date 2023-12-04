const { Router } = require('express');
const { postVideoGameHandler } = require('../../handlers/videoGame/videoGameHandler');
const postGamesRouter = Router();

postGamesRouter.post("/", postVideoGameHandler)

module.exports = postGamesRouter;