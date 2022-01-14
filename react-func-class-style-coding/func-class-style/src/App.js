import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Hello World</h1>
      {/* initNumber이라는 값을 두 개의 컴포넌트에 각각 props로 줌 */}
      <FuncComp initNumber={2}></FuncComp> 
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

function FuncComp(props) { // props라는 인자값의 이름은 아무 이름으로 정해도 ok 변수 이름일 뿐
  var numberState = useState(props.initNumber);
  var number = numberState[0];
  var setNumber = numberState[1];

  var dateState = useState((new Date()).toString());
  var _date = dateState[0];
  var setDate = dateState[1];

  console.log('numberState ', numberState);
  return (
    <div className='container'>
      <h2>function style component</h2>
      {/* 함수형 스타일로 props 값을 받아 출력하는 방법 */}
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input type="button" value="random" onClick={
        function() {
          setNumber(Math.random());
        } 
      }></input>
      <input type="button" value="date" onClick={
        function() {
          setDate((new Date()).toString());
        }
      }>
      </input>
      
    </div>
  );
}

class ClassComp extends React.Component {
  state = {
    number:this.props.initNumber, // state의 초깃값을 props로 전달된 initNumber의 값을 지정함
    date: (new Date()).toString()
  }
  render() {
    return (
      <div className='container'>
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type="button" value="random" onClick={
          function() {
            this.setState({number:Math.random()});
          }.bind(this)
        }></input>
        <input type="button" value="date" onClick={
          function() {
            this.setState({date:(new Date()).toString()});
          }.bind(this)
        }>
        </input>
      </div>
    )
  }
}

export default App;
