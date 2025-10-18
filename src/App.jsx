import { useState } from "react";
import "./App.css";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mt-6">Movie Recommender</h1>
      <MovieForm setMovies={setMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
