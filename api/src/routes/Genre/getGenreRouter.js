const { Router } = require('express');
const { getGenreHandler } = require('../../handlers/genre/genreHandler');
const getRuterGenre = Router();



getRuterGenre.get('/', getGenreHandler);

module.exports = getRuterGenre;