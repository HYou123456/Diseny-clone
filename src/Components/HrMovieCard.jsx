import React from 'react';
import { useNavigate } from 'react-router-dom';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div
      className='flex flex-col items-center md:items-start hover:scale-105 transition-transform duration-150 ease-in-out cursor-pointer'
      onClick={handleClick}
    >
      {/* Movie Poster */}
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        alt={`Poster of ${movie.title}`}
        className='w-[160px] md:w-[320px] rounded-lg object-cover hover:border-4 border-gray-400 transition-border duration-150 ease-in-out'
      />

      {/* Movie Title */}
      <h2 className='text-white text-center md:text-left mt-2 text-sm md:text-lg font-semibold'>
        {movie.title}
      </h2>
    </div>
  );
}

export default HrMovieCard;
