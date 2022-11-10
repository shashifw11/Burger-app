import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom" ; 
import "./card.css" ; 

const Cards = ({id , name , type , img , price , review}) => {
  return (
    <Card className = "card-container" style={{ width: '18rem' }}>
      <Card.Img className = "image" variant="top" src={img} />
      <Card.Body>
        <Card.Title className = "card-title">{name}</Card.Title>
        <Card.Text className = "card-type">
          {type}
        </Card.Text >
        <Card.Text  className = "card-price">
          {price} ₹
        </Card.Text>
        <Card.Text className = "card-review">
          {review}
        </Card.Text>
        <Link to = {`${id}`}><Button className = "card-button"variant="primary">Show Product</Button></Link>
      </Card.Body>
    </Card>
  )
}

export default Cards
