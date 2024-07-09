import axios from 'axios';

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = '2ec0d66f5bdf1dd12eefa0723f1479cf';

// Function to fetch trending videos
const getTrendingVideos = () => {
    return axios.get(`${movieBaseUrl}/trending/all/day`, {
        params: { api_key }
    });
};

// Function to fetch movies by genre ID
const getMovieByGenreId = (id) => {
    return axios.get(`${movieBaseUrl}/discover/movie`, {
        params: { api_key, with_genres: id }
    });
};

// Function to fetch movie details by ID
const getMovieById = (id) => {
    return axios.get(`${movieBaseUrl}/movie/${id}`, {
        params: { api_key }
    });
};

// Function to search movies by query
const searchMovies = (query) => {
    return axios.get(`${movieBaseUrl}/search/movie`, {
        params: { api_key, query }
    });
};

export default {
    getTrendingVideos,
    getMovieByGenreId,
    getMovieById,
    searchMovies
};
