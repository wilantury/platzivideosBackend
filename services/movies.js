//capa de servicios: se comunican con otros servicios y con librerías. El controlador solo se comunica con servicios
const { moviesMock } = require('../utils/mocks/movies.js');

class MovieService{
  async getMovies(){
    const movies = await Promise.resolve(moviesMock);
    return movies || [];
  }

  async getMovie(){
    const movie = await Promise.resolve(moviesMock[0])
    return movie || {};
  }

  async createMovie(){
    const movieCreatedId = await Promise.resolve(moviesMock[0].id);
    return movieCreatedId;
  }

  async updateMovie(){
    const movieUpdatedId = await Promise.resolve(moviesMock[0].id);
    return movieUpdatedId;
  }

  async deleteMovie(){
    const movieDeletedId = await Promise.resolve(moviesMock[0].id);
    return movieDeletedId;
  }
}

module.exports = MovieService;