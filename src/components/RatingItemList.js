import * as React from 'react';
import Rating from '@mui/material/Rating';

function RatingItemList(props) {
  let currentRating = props.rating;
  return (
    <Rating
      name="half-rating-read"
      value={currentRating.rating}
      precision={0.5}
      size="small"
      readOnly
      style={{display: 'flex', alignItems: 'center'}}
    />
  );
}

export default RatingItemList;