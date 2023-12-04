require('dotenv').config();

const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const VideogameFunction = require('./models/Videogame');
const GenreFunction = require('./models/Genres');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

//*ejecucion de las funciones de los modelos
VideogameFunction(sequelize);
GenreFunction(sequelize);

//*nombre de los modelos
const { Videogame, Genre } = sequelize.models;
//* Aca vendrian las relaciones
Videogame.belongsToMany(Genre, { through: 'VideogameGenre' });
Genre.belongsToMany(Videogame, { through: 'VideogameGenre' });

module.exports = {
  ...sequelize.models, // exportamos los modelos 
  conn: sequelize,     // exportamos la conexion del conn
};
