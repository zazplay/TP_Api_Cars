import React, { FC, useState } from 'react';
import { PaginationControlContainer, PcaWrapper, CardCarWrapper } from './pca.styled';
import Pagination from 'react-bootstrap/Pagination';
import CardCar from '../CardCar/CardCar';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import standartCarImg from '../../img/standartcar.jpg';

interface CarProps {
  car: {
    comments: string[];
    digits: string;
    is_stolen: boolean;
    model: string;
    model_year: number;
    operations: Array<any>;
    photo_url: string;
    region: {
      name: string;
      name_ua: string;
      slug: string;
      old_code: string;
      new_code: string;
    };
    stolen_details: any;
    vendor: string;
    vin: string;
  } | null | string;
  nomer?: string; 
}

const Pca: FC<CarProps> = ({ car, nomer = "" }) => {
  const cars = [];
  
  if (car != null && typeof car === 'object') {
    var car1image = car.photo_url;
    var standartCar = standartCarImg;
    for (let i = 0; i < car.operations.length; i++) {
      cars.push(car.operations[i]);
    }
  }

  const itemsPerPage = 1;
  const [page, setPage] = useState(1);
  const [animationClass, setAnimationClass] = useState('slide-in-right');

  const totalPages = Math.ceil(cars.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = cars.slice(startIndex, endIndex);

  const changePage = (newPage: number) => {
    const direction = newPage > page ? 'right' : 'left';
    setAnimationClass(`slide-out-${direction}`);
    setTimeout(() => {
      setPage(newPage);
      setAnimationClass(`slide-in-${direction}`);
    }, 500); 
  };

  return (
    <div>
      <PcaWrapper>
        {currentPageItems.map((item, index) => (
          <CardCarWrapper
            key={index}
            className={animationClass}
            onAnimationEnd={() => setAnimationClass('')}
          >
            <CardCar
              num={nomer}
              img={page === 1 ? car1image : standartCar}
              wanted={typeof car === 'object' && (car as { is_stolen: boolean }).is_stolen}              
              brand={item.vendor}
              model={item.model}
              modelyear={item.model_year}
              region={item.address}
              datereg={item.registered_at}
              color={item.color.ru}
              fuel={item.fuel.ru}
            />
          </CardCarWrapper>
        ))}
      </PcaWrapper>
      <PaginationControlContainer>
        <PaginationControl
          page={page}
          between={4}
          total={cars.length}
          limit={itemsPerPage}
          changePage={changePage}
          ellipsis={1}
        />
      </PaginationControlContainer>
    </div>
  );
};

export default Pca;
