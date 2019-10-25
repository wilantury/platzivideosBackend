//capa de servicios: se comunican con otros servicios y con librerías. El controlador solo se comunica con servicios
const { moviesMock } = require('../utils/mocks/movies.js')
//ahora usaremos nuestra base de datos de mongodb
const MongoLib = require('../lib/mongo');

class MovieService{
  constructor(){
    this.collection = 'movies';
    this.mongoDb =  new MongoLib();
  }
  async getMovies( { tags }){
    const query = tags && {tags: { $in: tags}}//sintaxis de mongo
    const movies = await this.mongoDb.getAll(this.collection, query);//Promise.resolve(moviesMock);
    return movies || [];
  }

  async getMovie({ movieId }){
    const movie = await this.mongoDb.get(this.collection, movieId);//Promise.resolve(moviesMock[0])
    return movie || {};
  }

  async createMovie({ movie }){
    const movieCreatedId = await this.mongoDb.create(this.collection, movie);//Promise.resolve(moviesMock[0].id);
    return movieCreatedId;
  }

  async updateMovie({ movieId, movie } = {}){
    const movieUpdatedId = await this.mongoDb.update(this.collection, movieId, movie);//Promise.resolve(moviesMock[0].id);
    return movieUpdatedId;
  }

  async deleteMovie({ movieId }){
    const movieDeletedId = this.mongoDb.delete(this.collection, movieId);//await Promise.resolve(moviesMock[0].id);
    return movieDeletedId;
  }
}

module.exports = MovieService;