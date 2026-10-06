import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import movies from "../data";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const savedMovies = localStorage.getItem("movies");

  const movieList = savedMovies ? JSON.parse(savedMovies) : movies;

  const movie = movieList.find((item) => item.id === Number(id));

  return (
    <div className="container mt-5">

      {movie ? (
        <div className="card shadow mx-auto" style={{ maxWidth: "600px" }}>
          <div className="card-body">

            <h2 className="card-title">
              {movie.title}
            </h2>

            <p className="mt-3">
              <strong>Rating:</strong> ⭐ {movie.rating}/5
            </p>

            <p className="mt-3">
              <strong>Description:</strong>
            </p>

            <p>
              {movie.description}
            </p>

            <button
              className="btn btn-secondary mt-3"
              onClick={() => navigate("/")}
            >
              Back
            </button>

          </div>
        </div>
      ) : (
        <h2>Movie Not Found</h2>
      )}

    </div>
  );
};

export default MovieDetails;