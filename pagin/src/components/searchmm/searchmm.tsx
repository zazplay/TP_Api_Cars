import React, {useState,useEffect} from 'react';
import { SearchNumContaner, ButtonContainer } from './searchmm.styled';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './searchmm.css';
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';



interface ChildComponentProps {
  setDataFromSearch: React.Dispatch<React.SetStateAction<MainModel | null | string>>;
  setMakeUrl: React.Dispatch<React.SetStateAction<string>>;
  setModelUrl: React.Dispatch<React.SetStateAction<string>>;

}

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


const SearchComponent: React.FC<ChildComponentProps> = ({ setDataFromSearch, setMakeUrl, setModelUrl }) => {

  const [Make, setMake] = useState<string>(' ');
  const [Model, setModel] = useState<string>(' ');

  const [carDataFromApi, setcarDataFromApi] = useState<string | null>(' ');


  const getApiCarData = async ( makeapi:string, markapi:string ) => {
    try{
      let url = `https://baza-gai.com.ua/make/${makeapi.replace(/ /g, "-").toLowerCase()}/${markapi.replace(/ /g, "-").toLowerCase()}`;
      let key = "8413c586936a2796df863c37079ee8b8";
      let request = fetch(url, {headers: {"Accept": "application/json", "X-Api-Key": key}}).then(r => r.json());
      let data = await request;
      if (data.error) {
        setDataFromSearch(null);
        setcarDataFromApi(null);
      } else {
        setDataFromSearch(data);
        setcarDataFromApi(data);
        console.log('Make:', makeapi);
        console.log('Model:', markapi);
        setMakeUrl(makeapi.replace(/ /g, "-").toLowerCase());
        setModelUrl(markapi.replace(/ /g, "-").toLowerCase());

      }
    }
    catch{
      console.error();
      setDataFromSearch(null);
      setcarDataFromApi(null);
    };
  }
  return (
    <SearchNumContaner>
      <Form.Label htmlFor="inputPassword5" id="LabelEnterNum">Введите марку автомобиля</Form.Label>
      <div className='containerSearch'>
        <Form.Control type="text" id="inputPassword5" aria-describedby="passwordHelpBlock" onChange={ e => setMake(e.target.value)} />
        </div>
     

    <div className='searchContainer'>
      <Form.Label htmlFor="inputPassword5" id="LabelEnterNum">Введите модель автомбобиля</Form.Label>
      <div className='containerSearch'>
        <Form.Control type="text" id="inputPassword5" aria-describedby="passwordHelpBlock" onChange={ e => setModel(e.target.value)} />
        </div>
      <Form.Text id="passwordHelpBlock" className="passwordHelp">
          Если автомобиль не найдено: добавте пробелы или "-"
      </Form.Text>
      </div>
      <ButtonContainer>
      <Button variant="success" onClick={() => { getApiCarData(Make, Model)}}>Поиск</Button>
      </ButtonContainer>

    

      {carDataFromApi === null  && 
        <Alert variant="danger" dismissible>
        <Alert.Heading>Ошибка АРІ запроса</Alert.Heading>
        <p className='pinError'>
          Проверте правильность введеных данных или
          повторите запрос. Возможно данный автомобиль не существует.
        </p>
      </Alert>
      }
    </SearchNumContaner>

    


  );
};

export default SearchComponent;
