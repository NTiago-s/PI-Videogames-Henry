const { Router } = require('express');
const router = Router();

const getGamesRouter = require('./VideoGame/getVideoGameRouter')
const getGenresRouter = require('./Genre/getGenreRouter')
const postGamesRouter = require('./VideoGame/postGameRouter')
//*configuracion de routers General
router.use('/videogames', getGamesRouter);
router.use('/videogames/:id', getGamesRouter);
router.use('/videogames', postGamesRouter);
router.use('/genres', getGenresRouter);

module.exports = router;