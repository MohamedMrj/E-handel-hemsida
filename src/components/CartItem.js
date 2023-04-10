import {Box, Card, CardHeader, CardMedia, CardContent, Typography} from '@mui/material';
import {indigo} from '@mui/material/colors';

function CartItem({product}) {
  return (
    product && (
      <Card sx={{display: 'flex', width: '100%', maxWidth: '80%', backgroundColor: indigo[100]}}>
        <CardMedia
          component="img"
          sx={{maxWidth: '150px', height: '175px', objectFit: 'cover'}}
          image={
            product.imageUrl ||
            'https://images.pexels.com/photos/4271933/pexels-photo-4271933.jpeg?auto=compress&cs=tinysrgb&w=1600'
          }
          alt={`Bild till ${product.title}`}
        />
        <Box sx={{display: 'flex', flexDirection: 'column', flex: '1'}}>
          <CardHeader title={<Typography variant="h6">{product.title}</Typography>}></CardHeader>
          <CardContent sx={{alignSelf: 'flex-end', textAlign: 'right'}}>
            <Typography variant="subtitle2">{`Pris: ${product.price} kr`}</Typography>
            <Typography variant="subtitle2">{`Antal: ${product.quantity} st`}</Typography>
            <Typography variant="subtitle2">{`Totalt: ${product.totalPrice} kr`}</Typography>
          </CardContent>
        </Box>
      </Card>
    )
  );
}

export default CartItem;