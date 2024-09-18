import React, { FormEvent } from 'react';
import {
  ReviewsContainer,
  AddReviewContainer,
  ReviewContainer,
} from './productInfoStyled';
import StarRating from './StarRating';
import { Review } from './ProductInfoPage';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

// Make dayjs work with UTC
dayjs.extend(utc);

export type ReviewsProps = {
  isReviewFormOpen: boolean;
  handleReviewSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  handleCommentInputChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleRatingInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setIsReviewFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  reviews: [] | Review[];
};

const Reviews: React.FC<ReviewsProps> = ({
  isReviewFormOpen,
  handleReviewSubmit,
  handleCommentInputChange,
  handleRatingInputChange,
  setIsReviewFormOpen,
  reviews,
}) => {
  return (
    <ReviewsContainer className="lolll">
      <div className="reviews-title">
        <h3>Reviews</h3>
        <button
          type="button"
          onClick={() => setIsReviewFormOpen((previousState) => !previousState)}
        >
          {isReviewFormOpen ? 'Cancel' : 'Add Review'}
        </button>
      </div>

      <AddReviewContainer className={isReviewFormOpen ? 'open' : 'close'}>
        <form onSubmit={handleReviewSubmit}>
          <div className="input-container">
            <label htmlFor="add-comment">Comment:</label>
            <textarea
              name="comment"
              id="add-comment"
              placeholder="Add your comment here"
              required
              onChange={(event) => {
                handleCommentInputChange(event);
              }}
            ></textarea>
          </div>

          <div className="input-container">
            <label htmlFor="add-rating">Rating:</label>
            <input
              type="number"
              name="rating"
              id="add-rating"
              placeholder="1 - 5"
              maxLength={5}
              minLength={1}
              required
              onChange={(event) => {
                handleRatingInputChange(event);
              }}
            />
          </div>

          <button type="submit">Submit review</button>
        </form>
      </AddReviewContainer>

      {reviews.length > 0 ? (
        reviews.map(({ comment, username, shopName, rating, date }, index) => {
          return (
            <ReviewContainer key={index}>
              <StarRating rating={rating}></StarRating>
              <p className="comment">{comment}</p>
              <p className="username">{username}</p>
              {shopName && <p className="user-shop">From {shopName}</p>}
              <p className="comment-date">
                {dayjs.utc(date).format('DD MMMM YYYY')}
              </p>
            </ReviewContainer>
          );
        })
      ) : (
        <p>No Reviews</p>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
