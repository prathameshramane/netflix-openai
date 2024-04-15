import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";
import { addRecommendedMovies } from "../store/gptSlice";

const useGptMovieList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const movieNameList = useSelector((store) => store.gpt.gptResults);
  const dispatch = useDispatch();

  useEffect(() => {
    movieNameList?.length > 0 && fetchGptMovieDetails();
  }, [movieNameList]);

  const fetchGptMovieDetails = async () => {
    setIsLoading(true);
    const movieDetailsPromiseArray = movieNameList.map((movie) =>
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,
        TMDB_OPTIONS
      )
    );
    const resolvedFetchArray = await Promise.all(movieDetailsPromiseArray);
    const jsonParsedResponse = await Promise.all(
      resolvedFetchArray.map((response) => response.json())
    );
    const moviesResultList = jsonParsedResponse.map((response) =>
      response.results.filter((result) => result.poster_path !== null)
    );
    dispatch(addRecommendedMovies(moviesResultList));
    setIsLoading(false);
  };

  return { isLoading };
};

export default useGptMovieList;
