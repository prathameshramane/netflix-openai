import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../store/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popular);

  useEffect(() => {
    !popularMovies?.length && getPopularMovies();
  }, []);

  const getPopularMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc",
      TMDB_OPTIONS
    )
      .then((response) => response.json())
      .then((popularMovieList) =>
        dispatch(addPopularMovies(popularMovieList.results))
      )
      .catch((err) => {
        console.log(err);
      });
  };
};

export default usePopularMovies;
