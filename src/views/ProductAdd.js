import { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import { create } from '../models/ProductModel.js';
import { Box } from '@mui/system';

function CreateProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');

  const onSave = () => {
    create({ title, description, imageUrl, price })
      .then((product) => {
        console.log('Created: ', product);
        setTitle(product.title);
        setDescription(product.description);
        setImageUrl(product.imageUrl);
        setPrice(product.price);
      })
      .finally(() => {
        setTitle('');
        setDescription('');
        setImageUrl('');
        setPrice('');
        window.location.href = '/products';
      });
  };

  return (
    <Container
      sx={{ paddingBottom: '2rem', display: 'flex', flexDirection: 'column' }}
      maxWidth="md"
    >
      <TextField
        size="small"
        label="Titel"
        variant="standard"
        multiline
        onChange={(event) => setTitle(event.target.value)}
        margin="dense"
        value={title}
      />
      <TextField
        size="small"
        label="Description"
        variant="standard"
        multiline
        minRows={4}
        onChange={(event) => setDescription(event.target.value)}
        margin="dense"
        value={description}
      />
      <TextField
        size="small"
        label="Image URL"
        variant="standard"
        multiline
        onChange={(event) => setImageUrl(event.target.value)}
        margin="dense"
        value={imageUrl}
      />
      <TextField
        size="small"
        label="Price"
        variant="standard"
        multiline
        onChange={(event) => setPrice(event.target.value)}
        margin="dense"
        value={price}
      />
      <Box>
        <Button
          variant="contained"
          onClick={onSave}
          sx={{
            marginTop: '1rem',
            backgroundImage: 'linear-gradient(90deg, #fe6b8b 0%, #ff8e53 100%)',
            color: 'white',
            textTransform: 'capitalize',
            borderRadius: '4px',
            boxShadow: 'none',
            '&:hover': {
              backgroundImage: 'linear-gradient(90deg, #fe6b8b 0%, #ff8e53 100%)',
              boxShadow: 'none',
            },
          }}
        >
          Lägg till
        </Button>
      </Box>
    </Container>
  );
}

export default CreateProduct;
