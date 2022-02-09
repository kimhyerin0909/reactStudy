import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import { Weather } from './components/wather';
import { Cloud } from './components/cloud';

const App:React.FC = () => {
  const [city, setCity] = useState('seoul');
  const [weather, setWeather] = useState<Weather|null>(null);
  const [cloud, setCloud] = useState<Cloud|null>(null);
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
      const cityCloud:Cloud = data.weather[0];
      setWeather(cityTemp);
      setCloud(cityCloud);
    } else {
      setWeather(null);}
    })
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

  return (
    <div>
      <form>
        <input type="text" placeholder='Enter City' onChange={handleChange}/>
        <button type='submit' onClick={handleSubmit}>Get weather</button>
        <h2>City:{city}</h2>
        {/* {weather && <h2>Temperature : {weather.temp}F</h2>} */}
      </form>
      {weather && <h2>Temp : {weather.temp}F</h2>}
      {cloud && <h2>Cloud : {cloud.description}</h2>}
    </div>
  )

}

export default App;
