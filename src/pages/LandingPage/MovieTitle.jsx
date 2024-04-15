import React from "react";

const MovieTitle = ({ title, overview }) => {
  return (
    <div className="px-32 py-36 text-white relative z-20">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="w-1/3">{overview}</p>
    </div>
  );
};

export default MovieTitle;
