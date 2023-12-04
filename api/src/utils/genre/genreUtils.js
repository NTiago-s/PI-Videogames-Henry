//*Funcion de utils para Genres
const cleanArrayGenres = (arr) =>
    arr.map((data) => {
        return {
            name: data.name
        }
    });

module.exports = cleanArrayGenres;