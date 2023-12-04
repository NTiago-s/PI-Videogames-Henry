const getGenresController = require('../../controllers/Genre/genresController');
const { Genre } = require('../../db')

//*Handler que recibe la request de los genres
const getGenreHandler = async (req, res) => {
    try {
        const existGenres = await Genre.findAll();
        if (!existGenres.length) {
            const genresData = await getGenresController();
            await Genre.bulkCreate(genresData);
        }
        const allGenres = await Genre.findAll();
        res.status(200).json(allGenres);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getGenreHandler,
}