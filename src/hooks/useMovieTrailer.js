import { useEffect, useState } from "react";
import { TMDB_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const [movieTrailerId, setMovieTrailerId] = useState(null);

  useEffect(() => {
    getMovieTrailer();
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
        setMovieTrailerId(trailerId);
      });
  };

  return { movieTrailerId };
};

export default useMovieTrailer;
