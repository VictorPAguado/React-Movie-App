import React from "react";
import "./Movie.css";

const Movie = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <div className="movieContainer" onClick={()=>props.onMovieSelect(imdbID)} >
      <img className="coverImage" src={Poster} alt="Poster" />
      <span className="movieName">{Title}</span>
      <div className="infoColumn">
        <span className="movieInfo">Year: {Year}</span>
        <span className="movieInfo">Type: {Type}</span>
      </div>
    </div>
  );
};

export default Movie;
