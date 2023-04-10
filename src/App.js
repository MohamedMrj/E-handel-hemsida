import './App.css';
import {Routes, Route} from 'react-router-dom';
import {CssBaseline} from '@mui/material';
import {Container} from '@mui/system';
import Products from './views/Products';
import ProductDetail from './views/ProductDetail';
import ProductEdit from './views/ProductEdit';
import ProductAdd from './views/ProductAdd';
import Cart from './views/Cart';
import AppBar from './components/AppBar';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="fixed" />

      <Container sx={{marginY: '2rem'}}>
        <Routes>
          <Route exact path="/" element={<Products />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/products/:id" element={<ProductDetail />}></Route>
          <Route exact path="/products/:id/edit" element={<ProductEdit />}></Route>
          <Route exact path="/products/new" element={<ProductAdd />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;