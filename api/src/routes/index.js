const { Router } = require('express');
const router = Router();

const GamesRouter = require('./VideoGame/VideoGameRouter')
const getGenresRouter = require('./Genre/getGenreRouter')

//*configuracion de routers General
router.use('/videogames', GamesRouter);
router.use('/videogames/:id', GamesRouter);
router.use('/videogames', GamesRouter);
router.use('/genres', getGenresRouter);

module.exports = router;