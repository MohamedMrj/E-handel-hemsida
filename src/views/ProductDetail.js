import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Container} from '@mui/system';
import BigProduct from '../components/BigProduct';
import {getOne} from '../models/ProductModel';

function ProductDetail() {
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState({});

  useEffect(() => {
    getOne(productId).then((product) => setProduct(product));
  }, [productId]);

  return (
    <>
      <Container maxWidth="md">
        <BigProduct product={product} />
      </Container>
    </>
  );
}

export default ProductDetail;