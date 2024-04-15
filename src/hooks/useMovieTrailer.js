import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setTrailerId } from "../store/movieSlice";

const useMovieTrailer = (movieId) => {
  const movieTrailerId = useSelector((state) => state.movies.trailerId);
  const dispatch = useDispatch();

  useEffect(() => {
    !movieTrailerId && getMovieTrailer();
  }, []);

  const getMovieTrailer = () => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, TMDB_OPTIONS)
      .then((response) => {
        return response.json();
      })
      .then((videoList) => {
        const trailerVideo = videoList.results.find(
          (video) => video.type === "Trailer"
        );
        const trailerId = trailerVideo
          ? trailerVideo?.key
          : videoList.results[0]?.key;
        dispatch(setTrailerId(trailerId));
      });
  };

  return { movieTrailerId };
};

export default useMovieTrailer;
