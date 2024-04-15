import React from "react";
import MovieTitle from "./MovieTitle";
import MovieBanner from "./MovieBanner";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlaying);
  const popularMovies = useSelector((store) => store.movies.popular);
  const topRatedMovies = useSelector((store) => store.movies.topRated);
  const upComingMovies = useSelector((store) => store.movies.upcoming);

  if (!nowPlayingMovies?.length) return;

  const mainMovie = nowPlayingMovies[0];
  const { id, original_title, overview } = mainMovie;
  return (
    <>
      <MovieTitle title={original_title} overview={overview} />
      <MovieBanner movieId={id} />
      <MovieList title="Now Playing on Netflix" movies={nowPlayingMovies} />
      <MovieList title="Popular on Netflix" movies={popularMovies} />
      <MovieList title="Upcoming on Netflix" movies={upComingMovies} />
      <MovieList title="Top Rated on Netflix" movies={topRatedMovies} />
    </>
  );
};

export default LandingPage;
