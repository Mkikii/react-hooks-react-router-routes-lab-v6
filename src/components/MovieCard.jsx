import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h2>
    </div>
  );
}

export default MovieCard;