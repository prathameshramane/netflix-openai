import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", TMDB_OPTIONS)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        dispatch(addNowPlayingMovies(jsonData.results));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default useNowPlayingMovies;
