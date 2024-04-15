import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../store/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRated);

  useEffect(() => {
    !topRatedMovies?.length && getTopRatedMovies();
  }, []);

  const getTopRatedMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200",
      TMDB_OPTIONS
    )
      .then((response) => response.json())
      .then((topRatedMoviesList) =>
        dispatch(addTopRatedMovies(topRatedMoviesList.results))
      )
      .catch((err) => {
        console.log(err);
      });
  };
};

export default useTopRatedMovies;
