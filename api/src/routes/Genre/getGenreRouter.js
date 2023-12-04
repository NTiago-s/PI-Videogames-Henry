const { Router } = require('express');
const { getGenreHandler } = require('../../handlers/genre/genreHandler');
const getRuterGenre = Router();


//*Routers de genres
getRuterGenre.get('/', getGenreHandler);

module.exports = getRuterGenre;