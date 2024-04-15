import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import LandingPage from "./LandingPage/LandingPage";
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
      <LandingPage />
    </>
  );
};

export default Browse;
