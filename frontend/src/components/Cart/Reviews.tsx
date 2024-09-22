import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Define prop types
interface RatingProps {
  value: number;
  text: string;
}

const Rating: FC<RatingProps> = ({ value, text }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((rate) => (
        <span key={uuidv4()}>
          <i
            style={{ color: '#0080FF' }}
            className={
              value + 1 === rate + 0.5
                ? 'fas fa-star-half-alt'
                : value >= rate
                  ? 'fas fa-star'
                  : 'far fa-star'
            }
          ></i>
        </span>
      ))}
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
