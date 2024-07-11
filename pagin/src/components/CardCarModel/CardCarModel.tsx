import React, { FC, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardCarWrapper } from './CardCarModel.styled';
import ListGroup from 'react-bootstrap/ListGroup';
import './styles.css'
import standartCarImg from '../../img/standartcar.jpg';



interface CardCarProps {
   full_title: string | null,
   photo_url:string | null,
   price_avg:string | null,
   years:string | null,
   plate_count:string | null,
   make:string | null,
   model: string | null
}

const CardCar: FC<CardCarProps> = ({full_title,photo_url,price_avg,years,plate_count, make, model }) => { 
  
  
  return(
  <CardCarWrapper>
  <Card border="success" className="mb-4 shadow-sm"  id = "card" >
    <Card.Img variant="top" src={photo_url ? photo_url: standartCarImg} style={{ height: '180px', objectFit: 'cover' }} />
    <Card.Body>
      <Card.Title>{full_title}</Card.Title>
      {/* <Card.Text>{model} {modelyear}</Card.Text> */}
    </Card.Body>
    <ListGroup className="list-group-flush">
      
      <ListGroup.Item>Средняя цена авто: {price_avg} грн.</ListGroup.Item>
      <ListGroup.Item>Годы выпуска: {years}</ListGroup.Item>
      <ListGroup.Item>Количество автомобилей в Украине: {plate_count}</ListGroup.Item>
    </ListGroup>
    <Card.Body>
    <Button variant="primary" href={`https://baza-gai.com.ua/make/${make}/${model}`}>Детальнее</Button>
    </Card.Body>
  </Card>
</CardCarWrapper>
)};

export default CardCar;
