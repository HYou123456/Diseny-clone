import React from 'react';

const Star = ({ fillPercentage }) => (
  <div className="relative inline-block w-5 h-5">
    <svg
      aria-hidden="true"
      className="absolute top-0 left-0 w-full h-full text-gray-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.804a1 1 0 00.95.69h5.054c.969 0 1.371 1.24.588 1.81l-4.1 2.977a1 1 0 00-.364 1.118l1.562 4.804c.3.921-.755 1.688-1.539 1.118l-4.1-2.977a1 1 0 00-1.175 0l-4.1 2.977c-.784.57-1.839-.197-1.539-1.118l1.562-4.804a1 1 0 00-.364-1.118L2.45 10.23c-.783-.57-.38-1.81.588-1.81h5.054a1 1 0 00.95-.69l1.562-4.804z" />
    </svg>
    <svg
      aria-hidden="true"
      className="absolute top-0 left-0 w-full h-full text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      style={{ clipPath: `inset(0 ${100 - fillPercentage}% 0 0)` }}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.804a1 1 0 00.95.69h5.054c.969 0 1.371 1.24.588 1.81l-4.1 2.977a1 1 0 00-.364 1.118l1.562 4.804c.3.921-.755 1.688-1.539 1.118l-4.1-2.977a1 1 0 00-1.175 0l-4.1 2.977c-.784.57-1.839-.197-1.539-1.118l1.562-4.804a1 1 0 00-.364-1.118L2.45 10.23c-.783-.57-.38-1.81.588-1.81h5.054a1 1 0 00.95-.69l1.562-4.804z" />
    </svg>
  </div>
);

export default Star;
