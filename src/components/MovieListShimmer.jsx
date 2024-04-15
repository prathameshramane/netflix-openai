import React from "react";

const MovieListShimmer = () => {
  return Array(7)
    .fill("")
    .map((value, index) => (
      <div className="px-32 py-14" key={index}>
        <div className="bg-slate-500 w-64 h-5 rounded mb-3 animate-pulse"></div>
        <div className="inline-flex gap-4 overflow-hidden">
          {Array(20)
            .fill("")
            .map((value, index) => (
              <div className="bg-slate-500 w-44 h-64 rounded animate-pulse"></div>
            ))}
        </div>
      </div>
    ));
};

export default MovieListShimmer;
