import React from 'react';
import { useNavigate } from 'react-router-dom';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div
      className='w-[110px] md:w-[200px] rounded-lg overflow-hidden relative cursor-pointer transform hover:scale-105 transition-transform duration-150 ease-in-out'
      onClick={handleClick}
    >
      {/* Movie Poster */}
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title}
        className='w-full h-full object-cover'
      />

      {/* Overlay with movie title */}
      <div className='absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-150 ease-in-out flex items-center justify-center p-2'>
        <p className='text-white text-sm md:text-lg font-semibold text-center'>{movie.title}</p>
      </div>
    </div>
  );
}

export default MovieCard;
