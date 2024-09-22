import { RatingContainer } from './productInfoStyled';
import EmptyStarSVG from '../../../images/Empty-star.svg';
import FilledStarSVG from '../../../images/Filled-star.svg';
import React from 'react';

export type StarRatingProps = {
  rating: number;
  maxStars?: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => (
  <RatingContainer>
    {Array.from({ length: maxStars }, (_, index) => (
      <img
        key={index}
        src={index < rating ? FilledStarSVG : EmptyStarSVG}
        alt={index < rating ? 'filled-star-icon' : 'empty-star-icon'}
      />
    ))}
  </RatingContainer>
);
export default StarRating;
