import { Card } from '@mui/material'
import React from 'react'
import ProductInfo from './Products.json'

export default function Products(props) {
  
  return (
    <div>
      {
        ProductInfo.map (product => <h4 key={product.title}> {product.type}, {product.description}, {product.image}, {product.rating} </h4>)
      }
    </div>
  )}
