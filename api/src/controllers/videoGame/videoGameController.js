require('dotenv').config();
const { Videogame, Genre } = require('../../db')
const axios = require('axios')
const { cleanVideoGame, removeTags, cleanVideoGameDB } = require('../../utils/videoGames/videoGamesUtils');
const { API_KEY } = process.env;
const { Op } = require('sequelize');


//*Controller que trae los juegos
const AllVideoGames = async () => {
    try {
        const resultGames = [];
        for (let i = 1; i <= 5; i++) {
            const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`);
            const videoGames = data.results;
            if (!videoGames) {
                throw new Error('No videogames information found');
            }
            const apiGames = cleanVideoGame(videoGames);
            resultGames.push(...apiGames);
        }
        const dbVideoGames = await Videogame.findAll({
            include: {
                model: Genre,
                attributes: ['name']
            }
        });
        const cleanGame = cleanVideoGameDB(dbVideoGames);
        return [...cleanGame, ...resultGames];
    } catch (error) {
        throw error
    }
}

//*Controller que busca por id
const videoGamesIdController = async (id, source) => {
    try {
        const response = source === 'api'
            ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`))
            : await Videogame.findByPk(id, {
                include: {
                    model: Genre,
                    attributes: ['name']
                }
            })
        if (!response) {
            throw new Error('Videogame not found!');
        }
        const data = source === 'api' ? response.data : response.toJSON();
        const gameData = {
            id: data.id,
            name: data.name,
            platforms: source === 'api' ? data.platforms?.map(platform => platform.platform.name).join(', ') : data.platforms,
            genres: source === 'api' ? data.genres?.map(genre => genre.name) : data.Genres?.map(genre => genre.name),
            image: source === 'api' ? data.background_image : data.image,
            description: removeTags(data.description),
            released: data.released,
            rating: data.rating,
            created: source === 'api' ? false : data.created
        };
        return gameData;
    } catch (error) {
        throw error;
    }
}

//*Controller que busca por nombre 
const videoGamesNameController = async (name) => {
    try {
        const dbGames = await Videogame.findAll({
            where: { name: { [Op.iLike]: `%${name}%` } },
            limit: 15,
            include: {
                model: Genre,
                attributes: ['name']
            }
        });
        const cleanGame = cleanVideoGameDB(dbGames)
        const { data } = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
        const response = data.results;
        const apiGame = cleanVideoGame(response);
        const filterApi = apiGame.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()));
        const apiResults = filterApi.slice(0, 15);
        return [...cleanGame, ...apiResults];
    } catch (error) {
        throw error;
    }
}

const createNewGameController = async (name, platforms, genres, image, description, released, rating) => {
    try {
        if (!genres.length) {
            throw new Error('You must provide at least one genre');
        }
        const genre = await Genre.findAll({ where: { name: genres } });
        const imageUrl = image ? image : 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
        const newVideoGame = await Videogame.create({
            name,
            platforms,
            image: imageUrl,
            description,
            released,
            rating,
        });
        await newVideoGame.addGenres(genre);
        return newVideoGame;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    AllVideoGames,
    videoGamesIdController,
    videoGamesNameController,
    createNewGameController,
}