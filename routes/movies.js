//las rutas solo deben saber que datos llegan  ala ruta especifica y despues enviarlos a los servicios

const express = require('express');
const MovieService = require('../services/movies.js')
//const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app){
  const router = express.Router();
  app.use("/api/movies", router);

  const moviesService = new MovieService();

  router.get("/", async function(req, res, next){
    const { tags } = req.query;
    try{
      const movies = await moviesService.getMovies({ tags });
      //throw new Error('Error gettin movies - test')
      res.status(200).json({
        data: movies,
        message: 'Movies listed'
      })
    }catch(err){
      next(err)
    }
  });

  router.get("/:movieId", async function(req, res, next){
    const { movieId } = req.params;
    try{
      const movies = await moviesService.getMovie({ movieId });
      res.status(200).json({
        data: movies,
        message: 'Movie retrieved'
      })
    }catch(err){
      next(err)
    }
  });

  router.post("/", async function(req, res, next){
    const { body: movie } =  req;
    try{
      const createdMovieId = await moviesService.createMovie({ movie });
      res.status(201).json({
        data: createdMovieId,
        message: 'Movie created'
      })
    }catch(err){
      next(err)
    }
  });

  router.put("/:movieId", async function(req, res, next){
    const { body: movie } =  req;
    const { movieId } = req.params;
    try{
      const updatedMovieId = await moviesService.updateMovie({ movieId, movie});
      res.status(200).json({
        data: updatedMovieId,
        message: 'Movie updated'
      })
    }catch(err){
      next(err)
    }
  });

  router.delete("/:movieId", async function(req, res, next){
    const { movieId } = req.params;
    try{
      const deletedMovieId = await moviesService.deleteMovie({ movieId });
      res.status(200).json({
        data: deletedMovieId,
        message: 'Movie deleted'
      })
    }catch(err){
      next(err)
    }
  });
}

module.exports = moviesApi;
