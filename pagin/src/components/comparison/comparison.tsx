// comparison.tsx
import React, { FC, useState } from 'react';
import { Modal, ModalContent, CloseButton, ModalContentS } from './comparison.styled';
import Search from '../searchnum/searchnum';
import CardHar from '../harCardCar/harCardCar';
import standartCarImg from '../../img/standartcar.jpg';

interface ComparisonProps {
  onClose: () => void;
}

interface CardHarProps {
  num: string;
  img: string;
  brand: string;
  model: string;
  modelyear: string;
  color: string;
  fuel: string;
  type_car: string;
  weight: string;
}

interface Car {
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
}

const Comparison: FC<ComparisonProps> = ({ onClose }) => {
  const [carData, setCarData] = useState<Car | null | string>(null);
  const [searchNomer, setSearchNomer] = useState<string>("");
  const [carData1, setCarData1] = useState<Car | null | string>(null);
  const [searchNomer1, setSearchNomer1] = useState<string>("");

  const bothSearchesCompleted = carData && typeof carData !== "string" && carData1 && typeof carData1 !== "string";

  return (
    <Modal>
      <CloseButton onClick={onClose}>Закрыть</CloseButton>
      <ModalContentS>
        <Search setDataFromSearch={setCarData} setNomer={setSearchNomer} />
        <Search setDataFromSearch={setCarData1} setNomer={setSearchNomer1} />
      </ModalContentS>
      {bothSearchesCompleted && (
        <ModalContent>
          <CardHar
            num={searchNomer}
            img={carData.photo_url || standartCarImg}
            brand={carData.vendor || ''}
            model={carData.model || ''}
            modelyear={carData.model_year.toString() || ''}
            color={carData.operations.length > 0 ? carData.operations[0].color.ru || '' : ''}
            fuel={carData.operations.length > 0 ? carData.operations[0].fuel.ru || '' : ''}
            type_car={carData.operations.length > 0 ? carData.operations[0].kind.ru || '' : ''}
            weight={carData.operations.length > 0 ? carData.operations[0].own_weight || '' : ''}
          />
          <CardHar
            num={searchNomer1}
            img={carData1.photo_url || standartCarImg}
            brand={carData1.vendor || ''}
            model={carData1.model || ''}
            modelyear={carData1.model_year.toString() || ''}
            color={carData1.operations.length > 0 ? carData1.operations[0].color.ru || '' : ''}
            fuel={carData1.operations.length > 0 ? carData1.operations[0].fuel.ru || '' : ''}
            type_car={carData1.operations.length > 0 ? carData1.operations[0].kind.ru || '' : ''}
            weight={carData1.operations.length > 0 ? carData1.operations[0].own_weight || '' : ''}
          />
        </ModalContent>
      )}
    </Modal>
  );
};

export default Comparison;
