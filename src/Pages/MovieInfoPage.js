import React from "react";
import MovieInfo from "./MovieInfo/MovieInfo";

const MovieInfoPage = ({ selectedMovie, handleMovieSelect }) => {
  return (
    <div className="container">
      <header className="header">
        <div className="appname">
          <img className="icon" src="/images/logo.png" alt="icono"></img>
          Movie App
        </div>
      </header>
      <main>
        <MovieInfo selectedMovie={selectedMovie} onMovieSelect={handleMovieSelect} />
      </main>
    </div>
  );
};

export default MovieInfoPage;
