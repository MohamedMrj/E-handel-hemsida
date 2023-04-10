import { useState } from 'react';
import { Container, Alert } from '@mui/material';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

const CustomFab = styled(Fab)({
  background: 'linear-gradient(to right, #6c5ce7, #0984e3)',
  position: 'fixed',
  bottom: '50px',
  right: '50px',
  '&:hover': {
    background: 'linear-gradient(to right, #0984e3, #6c5ce7)',
  },
});

function Products() {
  const location = useLocation();

  const message = location?.state?.message;
  const [alertOpen, setAlertOpen] = useState(location.state != null);

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <Container maxWidth="md">
      {alertOpen && message && (
        <Alert
          severity="error"
          sx={{
            width: '100%',
            marginBottom: '20px',
            background: 'linear-gradient(to right, #6c5ce7, #0984e3)',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '4px',
          }}
          onClose={handleCloseAlert}
        >
          {message}
        </Alert>
      )}
      <ProductList pathname="products" />
      <CustomFab color="primary" aria-label="add" href="/products/new">
        <AddIcon />
      </CustomFab>
    </Container>
  );
}

export default Products;
