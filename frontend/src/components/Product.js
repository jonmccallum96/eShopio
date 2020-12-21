import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
  console.log(product);
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
        <Card.Header>{product.name}</Card.Header>
      </a>
    </Card>
  );
};

export default Product;