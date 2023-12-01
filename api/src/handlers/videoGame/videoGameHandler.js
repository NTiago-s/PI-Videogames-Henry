const {
    AllVideoGames,
    videoGamesIdController,
    videoGamesNameController,
    createNewGameController,
    findGameByNameController,
} = require("../../controllers/videoGame/videoGameController");

const getVideoGameIDHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? 'db' : 'api';
    try {
        const dataVideoGame = await videoGamesIdController(id, source)
        res.status(200).json(dataVideoGame)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getVideoGameHandler = async (req, res) => {
    try {
        const { name } = req.query;
        const result = name
            ? await videoGamesNameController(name)
            : await AllVideoGames();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const postVideoGameHandler = async (req, res) => {
    try {
        const { name, platforms, genres, image, description, released, rating } = req.body;
        const existingGame = await findGameByNameController(name);
        if (existingGame) {
            throw new Error('Ya existe un juego con el mismo nombre.');
        }
        const newVideoGame = await createNewGameController(name, platforms, genres, image, description, released, rating);
        res.status(200).send(newVideoGame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getVideoGameHandler,
    getVideoGameIDHandler,
    postVideoGameHandler,
}