import React, { FC, useState, useEffect } from 'react';
import './App.css';
import Search from '../searchvin/searchvin'
import PaginaCards from '../pca/pca'

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

var nomerCar




function App() {
//   const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
//   const [regions, setRegions] = useState<Region[]>([]);
  const [carData, setCarData] = useState<Car | null | string>(null);
  const [SearchVin, setVin] = useState<string>(" ");

//   const handleButtonClick = () => {
//     setModalIsOpen(true);
//   };
  
//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

  console.log(carData);

   


  return (
    <div className="App">
          <div className="background"></div>
          <Search setDataFromSearch = {setCarData} setVin = {setVin} ></Search>
          <div className='carContainer'>
          <PaginaCards car = {carData} nomer ={carData !=null && typeof carData === "object" ? carData.digits : " " }></PaginaCards>  
          </div>
    </div>
  );
}

export default App;
