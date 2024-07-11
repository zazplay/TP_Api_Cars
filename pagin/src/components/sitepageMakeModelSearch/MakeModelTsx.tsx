import React, { FC, useState, useEffect } from 'react';
import './App.css';
import Search from "../searchmm/searchmm"
import CardCar from '../CardCarModel/CardCarModel';


interface MainModel {
  catalog_model: {
    id: number,
    is_actual_price: boolean,
    is_current: boolean,
    photo_url: string,
    plate_count: number,
    price_avg: number,
    price_max: number,
    price_min: number,
    slug: string,
    title: string,
    vendor_id: number,
    year_from: number,
    year_to: null| number,
    years: string,
    description: string
  },
  full_title: string,
  id: number,
  slug: string,
  title: string
};




function SearchMM() {

  const [dataFromSearch, setDataFromSearch] = useState<string | MainModel | null>(null);
  const [SearchMark, setMark] = useState<string>(" ");
  const [SearchModel, setModel] = useState<string>(" ");
  



  console.log(dataFromSearch);

   

  return (
    <div className="App">
      <Search setDataFromSearch={setDataFromSearch} setMakeUrl = {setMark} setModelUrl={setModel}/>
      {typeof dataFromSearch === 'object' && dataFromSearch !== null  ? (
        <CardCar
          full_title={dataFromSearch.full_title || ""}
          photo_url={dataFromSearch.catalog_model!=null && dataFromSearch.catalog_model.photo_url != null ? dataFromSearch.catalog_model.photo_url : "null"}
          price_avg={dataFromSearch.catalog_model!=null && dataFromSearch.catalog_model.price_avg != null ? dataFromSearch.catalog_model.price_avg.toString() : "(нет данных)"}
          years={dataFromSearch.catalog_model!=null && dataFromSearch.catalog_model.years!= null ? dataFromSearch.catalog_model.years : "(нет данных)"}
          plate_count={dataFromSearch.catalog_model!=null && dataFromSearch.catalog_model.plate_count!= null ? dataFromSearch.catalog_model.plate_count.toString() : "(нет данных)"}
          make={SearchMark || "Нет данных"}
          model={SearchModel || "Нет данных"}
        />
      ) : null}
    </div>
  );
}

export default SearchMM;
