import MovieInfo from "../../components/MovieInfo/MovieInfo";
import React, { useState } from "react";
import axios from "axios";
import Movie from "../../components/Movie/Movie";

const MoviesPages = () => {
  const [search, updateSearch] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState();
  const [selectedMovie, onMovieSelect] = useState();

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearch(e.target.value);
    const timeout = setTimeout(() => fetch(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  const fetch = async (searchString) => {
    const API_KEY = "ae398e96";
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    updateMovieList(response.data.Search);
  };

  return (
    <div>
      <div className="searchBox">
        <img
          className="searchIcon"
          src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png"
          alt="lupa"
        />
        <input
          className="searchInput"
          placeholder="Buscar..."
          value={search} //se asigna valor de useState
          onChange={onTextChange}
        />
      </div>
      {selectedMovie && (
        <MovieInfo
          selectedMovie={selectedMovie}
          onMovieSelect={onMovieSelect}
        />
      )}
      <main className="movieListContainer">
        {/* Si la pelicula no se encuenta con map, no esta */}
        {movieList?.length
          ? movieList.map((movie, index) => (
              <Movie key={index} movie={movie} onMovieSelect={onMovieSelect} />
            ))
          : "Busca una peli"}
      </main>
    </div>

  );
};

export default MoviesPages;
