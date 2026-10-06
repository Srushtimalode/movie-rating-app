import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ movieList }) => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Movie Rating App</h1>

      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Movie Name</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          {movieList.map((movie) => (
            <tr
              key={movie.id}
              onClick={() => navigate(`/movie/${movie.id}`)}
              style={{ cursor: "pointer" }}
            >
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>⭐ {movie.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-center mt-4">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/add-movie")}
        >
          Add Movie
        </button>
      </div>
    </div>
  );
};

export default Home;