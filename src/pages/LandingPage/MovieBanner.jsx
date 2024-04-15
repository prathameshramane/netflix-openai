import React from "react";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const MovieBanner = ({ movieId }) => {
  const { movieTrailerId } = useMovieTrailer(movieId);
  
  if(!movieTrailerId) return;
  return (
    <>
      <div className="absolute top-0">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${movieTrailerId}?autoplay=1&mute=1&controls=0&loop=1&showinfo=0&modestbranding=0&autohide=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="absolute top-0 z-10 bg-gradient-to-r from-black w-screen aspect-video"></div>
    </>
  );
};

export default MovieBanner;
