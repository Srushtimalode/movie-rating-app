import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AddMovie from "./components/Addmovie";
import MovieDetails from "./components/MovieDetails";
import movies from "./data";

const App = () => {
  const [movieList, setMovieList] = useState(() => {
    const savedMovies = localStorage.getItem("movies");

    return savedMovies ? JSON.parse(savedMovies) : movies;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home movieList={movieList} />}
        />

        <Route
          path="/add-movie"
          element={
            <AddMovie
              movieList={movieList}
              setMovieList={setMovieList}
            />
          }
        />

        <Route
          path="/movie/:id"
          element={<MovieDetails movieList={movieList} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;