import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import { Weather } from './interfaces/wather';
import WeatherInfo from './components/WeatherInfo';

const App:React.FC = () => {
  const has = (value:any):value is boolean => !!value; // 타입가드 has 선언
  const [city, setCity] = useState('seoul');
  const [weather, setWeather] = useState<Weather|null>(null);
  // useState 훅은 타입 안정성을 위해 제네릭을 사용해야 함

  const getWeather = async(city:string) => {
    const response = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=&lang=kr&appid=ae8a308d9b5c9c9fece25b2bca8d56fe`;
    fetch(response, {
      "method":"GET",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if(data.cod === 200) {
      const cityTemp:Weather = data.main;
      cityTemp.city = data.name;
      setWeather(cityTemp);
    } else {
      setWeather(null);
    }})
  }
  useEffect(() => {getWeather(city)}, []); // 빈 배열은 훅을 한 번만 호출한다는 의미이다

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value); //상태를 업데이트
  }

  const handleSubmit = (event:FormEvent) => {
    console.log(`handleSubmit`)
    event.preventDefault(); 
    getWeather(city);
  };

  const [msgFromChild, setMsgFromChild] = useState('');
  const getMsgFromChild = (msg:string) => setMsgFromChild(msg);

  return (
    <>
      <form>
        <input type="text" placeholder='Enter City' onChange={handleChange}/>
        <button type='submit' onClick={handleSubmit}>Get weather</button>
      </form>
      {msgFromChild}
      {has(weather) ? (
        <WeatherInfo weather={weather} parentChannel = {getMsgFromChild} children={"Hello from the parent!"}/>
      ) : (
        <h2>No weather avilable</h2>
      )}
    </>
  )

}

export default App;
