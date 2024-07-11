import React, { FC, useState, useEffect } from 'react';
import './App.css';
import Search from '../searchnum/searchnum'
import PaginaCards from '../pca/pca'
import CardCar from '../CardCar/CardCar';
import ButtonComponent from '../ButtonMap/ButtonMap';
import SvgMap from '../SVGMap/SVGMap';
import Comparison from '../comparison/comparison'; 

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

interface Region {
  id: string;
  color: string;
}

function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [comparisonIsOpen, setComparisonIsOpen] = useState<boolean>(false); 
  const [regions, setRegions] = useState<Region[]>([]);
  const [carData, setCarData] = useState<Car | null | string>(null);
  const [Searchnomer, setNomer] = useState<string>(" ");
  const [buttonVisible, setButtonVisible] = useState<boolean>(false);

  const handleButtonClick = () => {
    setModalIsOpen(true);
  };

  const handleComparisonButtonClick = () => {
    setComparisonIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const closeComparisonModal = () => {
    setComparisonIsOpen(false);
  };

  useEffect(() => {
    if (carData && typeof carData === 'object' && 'region' in carData) {
      setRegions([{ id: carData.region.slug, color: '#a3a3a3' }]);
    }
    setButtonVisible(carData !== null);
  }, [carData]);

  return (
    <div className="App">
      <div className="background"></div>
      <Search setDataFromSearch={setCarData} setNomer={setNomer}></Search>
      <PaginaCards car={carData} nomer={Searchnomer}></PaginaCards>
      <div className={`button-container ${buttonVisible ? 'visible' : 'hidden'}`}>
        <ButtonComponent onClick={handleButtonClick} />
        <button 
            onClick={handleComparisonButtonClick} 
            className="button"
        >
        Сравнение Авто
      </button>
      </div>
      <SvgMap isOpen={modalIsOpen} onClose={closeModal} regions={regions} />

      {comparisonIsOpen && <Comparison onClose={closeComparisonModal} />} 
    </div>
  );
}

export default App;
