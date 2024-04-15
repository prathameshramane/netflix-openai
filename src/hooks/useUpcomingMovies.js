import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../store/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => getUpcomingMovies(), []);

  const getUpcomingMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}",
      TMDB_OPTIONS
    )
      .then((response) => response.json())
      .then((topRatedMoviesList) =>
        dispatch(addUpcomingMovies(topRatedMoviesList.results))
      )
      .catch((err) => {
        console.log(err);
      });
  };
};

export default useUpcomingMovies;
