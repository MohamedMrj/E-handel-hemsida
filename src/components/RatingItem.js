import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

function RatingItem(props) {
  let averageRating;
  if (props.product.hasOwnProperty('id')) {
    let totalRating = 0;
    let ratingArray = props.product.ratings;
    ratingArray.forEach((rating) => {
      totalRating += rating.rating;
    });
    averageRating = ratingArray.length === 0 ? 0 : totalRating / ratingArray.length;
  } else {
    averageRating = 0;
  }

  return (
    <Box
      sx={{
        '& > legend': {mt: 2},
      }}>
      <Rating
        name="half-rating-read"
        value={averageRating}
        precision={0.5}
        size="small"
        readOnly
        style={{display: 'flex', alignItems: 'center'}}
      />
    </Box>
  );
}
export default RatingItem;