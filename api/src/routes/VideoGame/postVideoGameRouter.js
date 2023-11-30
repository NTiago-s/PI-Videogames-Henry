const { Router } = require('express');
const { postVideoGameHandler } = require('../../handlers/videoGame/videoGameHandler')
const postRouter = Router();

postRouter.post('/', postVideoGameHandler)

module.exports = postRouter