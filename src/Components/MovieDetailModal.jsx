import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import StarRating from './StarRating';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieDetailModal({ movie, onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
            <div className="bg-white p-8 rounded-lg max-w-3xl w-full mx-4">
                <button className="text-black absolute top-4 right-4" onClick={onClose}>X</button>
                <div className="flex">
                    <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} className="w-1/3 rounded-lg" />
                    <div className="ml-8 w-2/3">
                        <h1 className="text-2xl font-bold">{movie.title}</h1>
                        <div className="flex items-center mt-4">
                            <div className="flex">
                                <StarRating rating={movie.vote_average} maxRating={10} />
                            </div>
                            <p className="ml-2 text-gray-500">{movie.vote_average.toFixed(1)}/10</p> {/* Display rating with one decimal place */}
                        </div>
                        <p className="mt-2"><strong>Release Date:</strong> {movie.release_date}</p>
                        <p className="mt-2">{movie.overview}</p>
                        {/* Additional details can be added here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailModal;
