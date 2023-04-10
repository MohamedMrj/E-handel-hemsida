import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions} from '@mui/material';
import RatingItem from './RatingItem';
import {Link} from 'react-router-dom';
import {truncate} from '../formatHelper';

function ProductCard(props) {
  const {product} = props;
  return (
    <Card
  className="product-card"
  sx={{
    minWidth: 240,
    maxWidth: 300,
    background: 'linear-gradient(to bottom, #667eea, #764ba2)',
    color: '#fff',
    textShadow: '0px 1px 2px rgba(0,0,0,0.7)',
  }}
>

      <Link
        to={`/products/${product.id}`}
        style={{textDecoration: 'inherit', color: 'inherit'}}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={
              product.imageUrl ||
              'https://media.istockphoto.com/id/1271880340/sv/vektor/radvektorikonen-f%C3%B6rlorade-objekt-oidentifierade-objekt-kontur-isolerade-ikonen.jpg?s=612x612&w=0&k=20&c=GSYC11NZj79jd6TXzVK9EdURagWRS3xlgpaQobpDmRQ='
            }
            alt={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {product.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{marginBottom: 10}}
            >
              {truncate(product.description, 300)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions style={{justifyContent: 'space-between'}}>
        <Typography
          variant="body1"
          sx={{
            color: '#fff',
            textShadow: '0px 1px 2px rgba(0,0,0,0.7)',
            
          }}
        >
          {product.price} kr
        </Typography>
        <RatingItem product={product} />
        <CardContent
          sx={{alignSelf: 'flex-end', textAlign: 'right', color: '#fff'}}
        />
      </CardActions>
    </Card>
  );
}

export default ProductCard;
