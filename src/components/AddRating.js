import Rating from '@mui/material/Rating';
import {addRating} from '../models/ProductModel';
import * as React from 'react';

function AddRating({productId}) {
  const [rating, setRating] = React.useState(0);

  const handleRatingChange = async (event, newValue) => {
    setRating(newValue);
    try {
      await addRating(productId, newValue);
      window.location.reload(false);
    } catch (error) {
      console.error('Error adding rating:', error);
    }
  };

  return <Rating size="small" name="simple-controlled" value={rating} onChange={handleRatingChange} />;
}

export default AddRating;