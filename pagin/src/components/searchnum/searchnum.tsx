import React, {useState,useEffect} from 'react';
import { SearchNumContaner } from './CardCar.styled';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css';
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';



interface ChildComponentProps {
  setDataFromSearch: React.Dispatch<React.SetStateAction<Car | null | string>>;
  setNomer: React.Dispatch<React.SetStateAction<string>>;

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







const SearchComponent: React.FC<ChildComponentProps> = ({ setDataFromSearch, setNomer }) => {
  
  
  


  const [num, setNum] = useState<string>(' ');

  const [carDataFromApi, setcarDataFromApi] = useState<string | null>(' ');



  const getApiCarData = async ( num:string ) => {

    try{
      let url = `https://baza-gai.com.ua/nomer/${num}`;
      let key = "8413c586936a2796df863c37079ee8b8";
      let request = fetch(url, {headers: {"Accept": "application/json", "X-Api-Key": key}}).then(r => r.json());
      let data = await request;
      if (data.error) {
        setDataFromSearch(null);
        setcarDataFromApi(null);
      } else {
        setDataFromSearch(data);
        setcarDataFromApi(data);
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
      <Form.Label htmlFor="inputPassword5" id="LabelEnterNum">Введите номер</Form.Label>
      <div className='containerSearch'>
        <Form.Control type="text" id="inputPassword5" aria-describedby="passwordHelpBlock" onChange={ e => setNum(e.target.value)} />
        <Button variant="success" onClick={() => { getApiCarData(num); setNomer(num); }}>Поиск</Button>
        </div>
      <Form.Text id="passwordHelpBlock" className="passwordHelp">
          Номер должен соответствовать регламентам Украины
      </Form.Text>
      {carDataFromApi === null  && 
        <Alert variant="danger" dismissible>
        <Alert.Heading>Ошибка АРІ запроса</Alert.Heading>
        <p className='pinError'>
          Проверте правильность введеных данных или
          повторите запрос. Возможно данный номер не существует.
        </p>
      </Alert>
      }
    </SearchNumContaner>

    


  );
};

export default SearchComponent;
