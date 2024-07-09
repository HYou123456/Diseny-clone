import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import GlobalApi from '../Service/GlobalAPi'; // Adjust the path as needed

const ITEMS_PER_PAGE = 5; // Number of items to show per page

function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Current page of pagination
    const navigate = useNavigate();

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    useEffect(() => {
        if (searchQuery.trim().length > 0) {
            const fetchSearchResults = async () => {
                try {
                    const response = await GlobalApi.searchMovies(searchQuery);
                    setSearchResults(response.data.results);
                } catch (error) {
                    console.error('Error fetching search results:', error);
                }
            };

            // Trigger search on initial load and whenever searchQuery changes
            fetchSearchResults();
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);

    const menu = [
        { name: 'HOME', icon: HiHome },
        { name: 'SEARCH', icon: HiMagnifyingGlass, onClick: toggleSearch },
        { name: 'WATCH LIST', icon: HiPlus },
        { name: 'ORIGINALS', icon: HiStar },
        { name: 'MOVIES', icon: HiPlayCircle },
        { name: 'SERIES', icon: HiTv }
    ];

    return (
        <div className='flex flex-col p-5'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-8'>
                    <img src={logo} className='w-[80px] md:w-[115px] object-cover' alt="Logo" />
                    <div className="flex items-center gap-8">
                        {menu.map((item) => (
                            <HeaderItem key={item.name} name={item.name} Icon={item.icon} onClick={item.onClick} />
                        ))}
                    </div>
                </div>
                {showSearch && (
                    <div className="flex items-center relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search movies..."
                            className="px-3 py-2 bg-gray-800 text-white rounded-md outline-none"
                        />
                    </div>
                )}
                <img
                    src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                    className='w-[60px] h-[60px] rounded-full'
                    alt="Avatar"
                />
            </div>

            {showSearch && searchResults.length > 0 && (
                <div className='mt-4'>
                    <ul className='divide-y divide-gray-700'>
                        {currentItems.map((movie) => (
                            <li
                                key={movie.id}
                                className='p-2 cursor-pointer hover:bg-gray-700 transition duration-300 text-white'
                                onClick={() => handleMovieClick(movie.id)}
                            >
                                {movie.title}
                            </li>
                        ))}
                    </ul>
                    {totalPages > 1 && (
                        <div className='flex justify-center mt-4'>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`px-3 py-1 mx-1 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300 ${currentPage === index + 1 ? 'bg-gray-700' : ''}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Header;
