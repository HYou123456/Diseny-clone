import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import GlobalApi from '../Service/GlobalAPi'; // Adjust the path as needed

function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const handleSearchSubmit = async () => {
        try {
            console.log(`Searching for: ${searchQuery}`); // Debugging log
            const response = await GlobalApi.searchMovies(searchQuery);
            console.log('Search Response:', response); // Debugging log

            if (response.data.results.length > 0) {
                const movie = response.data.results[0]; // Assuming we take the first result
                console.log('Navigating to movie:', movie); // Debugging log
                navigate(`/movie/${movie.id}`);
            } else {
                alert('No movies found.');
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass,
            onClick: toggleSearch
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ];

    return (
        <div className='flex items-center justify-between p-5'>
            <div className='flex items-center gap-8'>
                <img src={logo} className='w-[80px] md:w-[115px] object-cover' alt="Logo" />
                <div className="flex items-center gap-8">
                    {menu.map((item) => (
                        <HeaderItem key={item.name} name={item.name} Icon={item.icon} onClick={item.onClick} />
                    ))}
                </div>
            </div>
            {showSearch && (
                <div className="flex items-center">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search movies..."
                        className="px-3 py-2 bg-gray-800 text-white rounded-md outline-none"
                    />
                    <button
                        onClick={handleSearchSubmit}
                        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Search
                    </button>
                </div>
            )}
            <img
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                className='w-[60px] h-[60px] rounded-full'
                alt="Avatar"
            />
        </div>
    );
}

export default Header;
