import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MovieInfo.css";
import { API_KEY } from "../../App";

const MovieInfo = (props) => {
  const { selectedMovie } = props;
  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
      .then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);

  return (
    <div className="containerInfo">
    {movieInfo ? ( <>
      <img className="coverImage" src={movieInfo?.Poster} alt="" />
      <div className="infoColumn">
      
        <ul className="movieInfo">
        <p className="movieName">
        {movieInfo?.Type}: {movieInfo?.Title}
        </p>
        <li>IMDB Rating: <span>{movieInfo?.imdbRating}</span></li>
          <li>Year: <span>{movieInfo?.Year}</span></li>
          <li>Language: <span>{movieInfo?.Language}</span></li>
          <li>Rated: <span>{movieInfo?.Rated}</span></li>
          <li>Released: <span>{movieInfo?.Released}</span></li>
          <li>Runtime: <span>{movieInfo?.Runtime}</span></li>
          <li>Genre: <span>{movieInfo?.Genre}</span></li>
          <li>Director: <span>{movieInfo?.Director}</span></li>
          <li>Actors: <span>{movieInfo?.Actors}</span></li>
          <li>Plot: <span>{movieInfo?.Plot}</span></li>
        </ul>
      </div>
      <button className="close" onClick={() => props.onMovieSelect()}>X</button>
      </>
    ) : (
        "Loading..."
      )}
    </div>
  );
};

export default MovieInfo;
