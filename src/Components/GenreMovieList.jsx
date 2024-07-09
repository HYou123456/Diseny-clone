import React from 'react';
import GenresList from './Constant/GenresList';
import MovieList from './MovieList';

function GenreMovieList() {
  return (
    <div className="bg-gray-900">
      {GenresList.genere.map((item, index) => index <= 4 && (
        <div key={item.id} className="py-8 px-4 md:px-8">
          <h2 className="text-2xl text-white font-bold mb-4">{item.name}</h2>
          <div className="flex overflow-x-auto gap-4 md:gap-8 scrollbar-none scroll-smooth">
            <MovieList genreId={item.id} index_={index} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default GenreMovieList;
