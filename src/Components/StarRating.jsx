import React from 'react';
import Star from './Star';

const StarRating = ({ rating, maxRating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const decimalPart = rating - fullStars;

  for (let i = 1; i <= maxRating; i++) {
    if (i <= fullStars) {
      stars.push(<Star key={i} fillPercentage={100} />);
    } else if (i === fullStars + 1) {
      stars.push(<Star key={i} fillPercentage={decimalPart * 100} />);
    } else {
      stars.push(<Star key={i} fillPercentage={0} />);
    }
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
