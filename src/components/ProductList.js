import ProductCard from './ProductCard';
import {getAll} from '../models/ProductModel';
import {useEffect, useState} from 'react';
import {Grid, Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


function ProductList({pathname}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll(pathname).then((products) => setProducts(products));
  }, [pathname]);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="flex-start" spacing={2}>
      {products.map((product) => (
        <Grid item xs key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
      <Fab
        href="/products/new"
        size="large"
        color="primary"
        aria-label="add"
        style={{position: 'fixed', bottom: '50px', right: '50px'}}>
        <AddIcon />
      </Fab>
    </Grid>
  );
}

export default ProductList;