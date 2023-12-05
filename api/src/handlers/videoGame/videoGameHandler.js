const {
    AllVideoGames,
    videoGamesIdController,
    videoGamesNameController,
    createNewGameController,
} = require("../../controllers/videoGame/videoGameController");



//*Handler que recibe la request del id
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

//*Handler que recibe la request del name
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
//*Handler que recibe la request del post
const postVideoGameHandler = async (req, res) => {
    try {
        const { name, platforms, genres, image, description, released, rating } = req.body;
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