import { useState, useEffect } from 'react';
import { Typography, Container, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { getCart } from '../models/CartModel';


function Cart() {
  const [cart, setCart] = useState({});
  const [userId, setUserId] = useState(null);

  const onUserIdEntered = (event) => {
    const enteredId = event.target.value;
    if (isNaN(enteredId)) {
      setUserId(null);
    } else {
      setUserId(enteredId);
    }
  };

  useEffect(() => {
    if (userId) {
      getCart(userId).then((cart) => setCart(cart));
    }
  }, [userId]);

  return (
    <Container sx={{ paddingBottom: '2rem' }}>
      <Typography variant="h3">Kundvagn</Typography>
      <TextField
        size="small"
        id="outlined-basic"
        label="Användar-ID"
        variant="outlined"
        onChange={onUserIdEntered}
        sx={{ marginTop: '6px', width: '120px', marginBottom: '1rem' }}
        margin="dense"
      />
      {cart && cart.products && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="cart table">
            <TableHead>
              <TableRow>
                <TableCell>Produkt</TableCell>
                <TableCell align="right">Pris</TableCell>
                <TableCell align="right">Antal</TableCell>
                <TableCell align="right">Summa</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {cart.products.map((product) => (
  <TableRow key={product.id}>
    <TableCell component="th" scope="row">
      {product.title}
    </TableCell>
    <TableCell align="right">{product.price} kr</TableCell>
    <TableCell align="right">{product.quantity}</TableCell>
<TableCell align="right">{product.price * product.quantity} kr</TableCell>

  </TableRow>
))}

            </TableBody>
          </Table>
        </TableContainer>
      )}
      {cart && cart.cartTotal && (
        <Typography variant="subtitle1">{`Totalsumma: ${cart.cartTotal} kr`}</Typography>
      )}
    </Container>
  );
}

export default Cart;
