import React, {ChangeEvent, useEffect, useState} from 'react';
import { Weather } from './components/wather';

const App:React.FC = () => {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState<Weather|null>(null);
  // useState 훅은 타입 안정성을 위해 제네릭을 사용해야 함


  const getWeather = async(city:string) => {
    const response = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=&lang=kr&appid=ae8a308d9b5c9c9fece25b2bca8d56fe`;
    fetch(response, {
      "method":"GET",
    })
    .then((res) => res.json())
    .then((data) => {if(data.status === 200) {
      const cityTemp:Weather = data.main();
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

  return (
    <div>
      <form>
        <input type="text" placeholder='Enter City' onChange={handleChange}/>
        <button type='submit'>Get weather</button>
        <h2>City:{city}</h2>
      </form>
    </div>
  )

}

export default App;
