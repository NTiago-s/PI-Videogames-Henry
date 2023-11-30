const { Router } = require('express');
const router = Router();

const getGamesRouter = require('./VideoGame/getVideoGameRouter')
const postGamesRouter = require('./VideoGame/postVideoGameRouter')
const getGenresRouter = require('./Genre/getGenreRouter')

//configuracion de routers
router.use('/videogames', getGamesRouter);
router.use('/videogames/:id', getGamesRouter);
router.use('/videogames', postGamesRouter);
router.use('/genres', getGenresRouter);

module.exports = router;