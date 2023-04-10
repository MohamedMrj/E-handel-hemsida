import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Container, TextField, Button, Alert} from '@mui/material';
import {getOne, update, remove} from '../models/ProductModel.js';
import {Box} from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

function EditProduct() {
  const params = useParams();
  const productId = params.id;
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    getOne(productId).then((product) => {
      setProduct(product);
    });
  }, [productId]);

  useEffect(() => {
    setTitle(product.title);
    setDescription(product.description);
    setImageUrl(product.imageUrl);
    setPrice(product.price);
  }, [product]);

  const onSave = () => {
    update({id: productId, title, description, imageUrl, price})
      .then((product) => {
        setAlert({severity: 'success', message: 'Produkten har uppdaterats!'});
      })
      .catch(() => {
        setAlert({severity: 'error', message: 'Produkten kunde inte uppdateras!'});
      });
  };

  const onDelete = () => {
    remove(productId).then(() => {
      navigate('/', {state: {message: 'Produkten togs bort!'}});
    });
  };

  return (
    <Container sx={{paddingBottom: '2rem', display: 'flex', flexDirection: 'column'}} maxWidth="md">
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
      <Box display="flex" justifyContent="space-between" marginTop="1rem" sx={{marginBottom: '1.5rem'}}>
        <Box>
          <Button
            variant="contained"
            onClick={onSave}
            sx={{marginTop: '1rem', backgroundImage: 'linear-gradient(to right, #00c9ff, #92fe9d)', color: 'white'}}
            startIcon={<SaveIcon />}>
            Uppdatera
          </Button>
        </Box>
        <Box>
          <Button
            variant="contained"
            onClick={onDelete}
            sx={{marginTop: '1rem'}}
            color="error"
            startIcon={<DeleteIcon />}>
            Ta bort
          </Button>
        </Box>
      </Box>
      {alert && <Alert severity={alert.severity}>{alert.message}</Alert>}
    </Container>
  );
}

export default EditProduct;