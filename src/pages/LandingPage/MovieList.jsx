const MovieList = ({ title, movies }) => {
  console.log("Movie List: ", movies);
  return (
    movies && (
      <div className="px-14 py-8 relative z-20">
        <h1 className="text-white font-semibold text-2xl pb-2">{title}</h1>
        <div className="flex overflow-x-scroll gap-3 no-scrollbar">
          {movies.map((movie) => (
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
          ))}
        </div>
      </div>
    )
  );
};

export default MovieList;
