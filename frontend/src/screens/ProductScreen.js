import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios'
//import products from '../products';
const ProductScreen = ({ match }) => {
//const product = products.find((p) => p._id === match.params.id);

const [product, setProduct] = useState({})

useEffect ( () => {
  // this is where the component load
  // console.log('hello')
  //await axios.get('/api/products')
  const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${match.params.id}`)
      setProduct (data)
  }

  fetchProduct()
},[match])

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={` ${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>${product.price}</h4>
            </ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>{product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.countInStock>0?'Avail':'out of stock'}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
              <Button className='btn-block' type='Button' disabled={product.countInStock>0 ? false : true}>
                  Add to Cart
                  </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
