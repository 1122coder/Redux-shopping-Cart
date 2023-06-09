import React from "react";

import "./Product.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import Images from '../Assets/1.jpg';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Product = ({ name, id, imgURL, price }) => {

  const dispatch = useDispatch();
  const handleClick = ()=>{
    dispatch(cartActions.addToCart({
      name,
      id,
      price
    }))
  }
  return (
    
      <div className="card">
        <Card sx={{ width: 320, height: 400}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="222"
        backgroundCover='no-repeat'
        image={Images}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="large" variant="outlined" style={{color: 'green'}}> Add to Cart</Button>
      </CardActions>
    </Card>
      </div>


  
  );
};

export default Product;
