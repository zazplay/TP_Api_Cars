import React, { FC, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Midle } from './harCardCar.styled';
import ListGroup from 'react-bootstrap/ListGroup';
import './styles.css'

interface harCardCarProps {
   num: string,
   img: string,
   brand: string,
   model: string,
   modelyear: string,
   color: string,
   fuel: string,
   type_car: string,
   weight: string,

}

const CardCar: FC<harCardCarProps> = ({ num,img, brand, model, modelyear, type_car, weight, color, fuel}) => (
   <Midle>
  <Card border="success" className="mb-4 shadow-sm"  id = "card" >
  <div className="license-plate">
        <div className="flag">
          <img src='https://www.prostil.com.ua/images/products/ukraina.png' className='flag'></img>
        </div>
        <span className="text">{num}</span>
    </div>
    <Card.Img variant="top" src={img} style={{ height: '180px', objectFit: 'cover' }} />
    <Card.Body>
      <Card.Title>{brand}</Card.Title>
      <Card.Text>{model} {modelyear}</Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Тип топлива: {fuel}</ListGroup.Item>
      <ListGroup.Item>Тип кузова:{type_car}</ListGroup.Item>
      <ListGroup.Item>Цвет: {color}</ListGroup.Item>
      <ListGroup.Item>Вес: {weight}</ListGroup.Item>
    </ListGroup>
    <Card.Body>
    <Button variant="primary" href={`https://baza-gai.com.ua/nomer/${num}`}>Детальнее</Button>
    </Card.Body>
  </Card>
  </Midle>
);

export default CardCar;
