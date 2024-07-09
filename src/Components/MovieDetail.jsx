import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from '../Service/GlobalAPi';
import StarRating from './StarRating';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails();
  }, [id]);

  const getMovieDetails = () => {
    GlobalApi.getMovieById(id)
      .then(resp => {
        setMovie(resp.data);
      })
      .catch(error => {
        console.error("Error fetching movie details:", error);
      });
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="w-[250px] md:w-[350px] rounded-lg"
        />
        <div className="text-white max-w-xl">
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg mb-2">{movie.overview}</p>
          <p className="text-md mb-2"><strong>Release Date:</strong> {movie.release_date}</p>
          <div className="text-md mb-2 flex items-center">
            <strong className="mr-2">Rating:</strong>
            <StarRating rating={movie.vote_average} maxRating={10} />
            <span className="ml-2">{movie.vote_average.toFixed(1)}</span> {/* Display rating with one decimal place */}
          </div>
          <p className="text-md"><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
