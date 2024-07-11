import React, { FC, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardCarWrapper } from './CardCar.styled';
import ListGroup from 'react-bootstrap/ListGroup';
import './styles.css'

interface CardCarProps {
   num: string,
   img: string,
   wanted: boolean,
   brand: string,
   model: string,
   modelyear: string,
   region: string,
   datereg: string,
   color: string,
   fuel: string,
}

const CardCar: FC<CardCarProps> = ({ num, img, wanted, brand, model, modelyear, region, datereg, color, fuel}) => (
  <CardCarWrapper>
    
  <Card border="success" className="card"   >
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
      <ListGroup.Item className={wanted ? 'bg-danger text-white' : 'bg-success text-white'}>
        {wanted ? 'В розыске' : 'Не в розыске'}
      </ListGroup.Item>
      <ListGroup.Item>Дата регистрации: {datereg}</ListGroup.Item>
      <ListGroup.Item>Регион: {region}</ListGroup.Item>
      <ListGroup.Item>Цвет: {color}</ListGroup.Item>
      <ListGroup.Item>Тип топлива: {fuel}</ListGroup.Item>
    </ListGroup>
    <Card.Body>
    <Button variant="primary" href={`https://baza-gai.com.ua/nomer/${num}`}>Детальнее</Button>
    </Card.Body>
  </Card>
</CardCarWrapper>
);

export default CardCar;
