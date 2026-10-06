import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = ({ movieList, setMovieList }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      id: movieList.length + 1,
      title: title,
      description: description,
      rating: Number(rating),
    };

    const updatedMovies = [...movieList, newMovie];

    setMovieList(updatedMovies);

    localStorage.setItem("movies", JSON.stringify(updatedMovies));

    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <h2 className="text-center mb-4">Add Movie</h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Movie Name</label>

              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>

              <textarea
                className="form-control"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Rating</label>

              <input
                type="number"
                className="form-control"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-success me-2">
              Add Movie
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/")}
            >
              Back
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default AddMovie;