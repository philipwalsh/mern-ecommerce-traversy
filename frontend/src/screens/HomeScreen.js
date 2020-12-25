import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
//old way, before hooked into backend
// useState added in temprarily
//import products from '../products'


const HomeScreen = () => {
    const [products, setProducts] = useState([])
    useEffect ( () => {
        // this is where the component load
        // console.log('hello')
        //await axios.get('/api/products')
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products')
            setProducts (data)
        }

        fetchProducts()
    },[])


    return (
        <>
         <h1>latest products</h1>
         <Row>
             {products.map(product => (
                 <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                 <Product product={product}/>
                 </Col>
             ))}
        </Row>   
        </>
    )
}

export default HomeScreen
