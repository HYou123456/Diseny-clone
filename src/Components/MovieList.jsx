import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Service/GlobalAPi';
import MovieCard from './MovieCard ';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';
import MovieDetailModal from './MovieDetailModal'; // Import the modal component

function MovieList({ genreId, index_ }) {
    const [movieList, setMovieList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null); // State for selected movie
    const elementRef = useRef(null);

    useEffect(() => {
        getMovieByGenreId();
    }, []);

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId)
            .then(resp => {
                setMovieList(resp.data.results);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
    }

    const slideRight = (element) => {
        element.scrollLeft += 500;
    }

    const slideLeft = (element) => {
        element.scrollLeft -= 500;
    }

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    }

    const closeMovieDetailModal = () => {
        setSelectedMovie(null);
    }

    return (
        <div className='relative'>
            <IoChevronBackOutline
                onClick={() => slideLeft(elementRef.current)}
                className={`text-4xl text-white p-2 z-10 cursor-pointer absolute top-1/3 transform -translate-y-1/2 left-0 md:left-4 ${index_ % 3 === 0 ? 'mt-8' : 'mt-16'}`}
            />

            <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
                {movieList.map((item, index) => (
                    <React.Fragment key={item.id}>
                        {index % 3 === 0
                            ? <HrMovieCard movie={item} onClick={() => handleMovieClick(item)} />
                            : <MovieCard movie={item} onClick={() => handleMovieClick(item)} />
                        }
                    </React.Fragment>
                ))}
            </div>

            <IoChevronForwardOutline
                onClick={() => slideRight(elementRef.current)}
                className={`text-[50px] text-white hidden md:block
                 p-2 cursor-pointer z-10 top-0
                 absolute right-0
                 ${index_ % 3 === 0 ? 'mt-8' : 'mt-16'}`}
            />

            {selectedMovie && (
                <MovieDetailModal movie={selectedMovie} onClose={closeMovieDetailModal} />
            )}
        </div>
    );
}

export default MovieList;
