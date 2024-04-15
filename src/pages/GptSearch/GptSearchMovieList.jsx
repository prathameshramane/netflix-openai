import React from "react";
import useGptMovieList from "../../hooks/useGptMovieList";
import { useSelector } from "react-redux";
import MovieList from "../LandingPage/MovieList";
import MovieListShimmer from "../../components/MovieListShimmer";

const GptSearchMovieList = () => {
  const { isLoading } = useGptMovieList();
  const recommendedMovies = useSelector((state) => state.gpt.recommendedMovies);
  const gptResults = useSelector((state) => state.gpt.gptResults);

  if (!recommendedMovies?.length) return null;
  if (isLoading) return <MovieListShimmer />;
  return (
    <div>
      {gptResults.map((movie, index) => (
        <MovieList
          key={movie}
          title={movie}
          movies={recommendedMovies[index]}
        />
      ))}
    </div>
  );
};

export default GptSearchMovieList;
