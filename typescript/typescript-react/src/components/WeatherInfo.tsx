import * as React from 'react';
import { Weather } from '../interfaces/wather';

const WeatherInfo: React.FC<{weather: Weather, parentChannel:(msg:string) => void}> = ({weather, children, parentChannel}) => {
    const {city, humidity, pressure, temp, temp_max, temp_min} = weather;
    return (
        <div>
            <h2>{children}</h2>
            
            <h2>지역 : {city}</h2>
            <h2>온도 : {Math.floor(temp - 273)}°C</h2>
            <h2>최고 온도 : {Math.floor(temp_max - 273)}°C</h2>
            <h2>최저 온도 : {Math.floor(temp_min - 273)}°C</h2>
            <h2>습도 : {humidity}%</h2>
            <h2>기압 : {pressure}hPa</h2>

            {/* 부모 컴포넌트의 getMsgFromChild 함수의 인자로 parentChannel이라는 프로퍼티를 전달함. */}
            <button onClick={() => parentChannel("Hello from child!")}> 
                Say Hello to parent
            </button>
        </div>
    );
};

export default WeatherInfo;