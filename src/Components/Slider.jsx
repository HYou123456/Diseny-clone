import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Service/GlobalAPi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos()
            .then(resp => {
                setMovieList(resp.data.results);
            })
            .catch(error => {
                console.error('Error fetching trending movies:', error);
            });
    };

    const sliderRight = () => {
        elementRef.current.scrollLeft += screenWidth - 110;
    };

    const sliderLeft = () => {
        elementRef.current.scrollLeft -= screenWidth - 110;
    };

    return (
        <div className="relative">
            <HiChevronLeft
                className="hidden md:block text-white text-[30px] absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer"
                onClick={sliderLeft}
            />
            <HiChevronRight
                className="hidden md:block text-white text-[30px] absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                onClick={sliderRight}
            />
            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
                {movieList.map((item) => (
                    <img
                        key={item.id} // Ensure each item has a unique key
                        src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
                        alt={item.title}
                        className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;
