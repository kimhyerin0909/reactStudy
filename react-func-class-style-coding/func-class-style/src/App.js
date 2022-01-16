import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setClassShow] = useState(true);

  return (
    <div className='App'>
      <h1>Hello World</h1>
      <input type="button" value="remove func" onClick={
        function() {
          setFuncShow(false);
        }
      } ></input>
      <input type="button" value="remove class" onClick={
        function(){
          setClassShow(false);
        }
      }></input>
      <input type="button" value="appear func" onClick={
        function() {
          setFuncShow(true);
        }
      }></input>
      <input type="button" value="appear class" onClick={
        function() {
          setClassShow(true);
        }
      }></input>
      {/* initNumber이라는 값을 두 개의 컴포넌트에 각각 props로 줌 */}
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null }
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}

var funcStyle = 'color:blue';
var funcId = 0;
function FuncComp(props) { // props라는 인자값의 이름은 아무 이름으로 정해도 ok 변수 이름일 뿐
  var numberState = useState(props.initNumber);
  var number = numberState[0];
  var setNumber = numberState[1];

  // var dateState = useState((new Date()).toString());
  // var _date = dateState[0];
  // var setDate = dateState[1];

  var [_date, setDate] = useState((new Date()).toString());
  console.log('%cfunc => render ' + (++funcId), funcStyle);

  // side effect
  useEffect(function() { // useEffect의 첫 번째 인자와 반환값은 무조건 함수
    console.log('%cfunc => useEffect number (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
    // console.log('%cfunc => useEffect ' + (++funcId), funcStyle);
    document.title = number;

    return function() {
      console.log('%cfunc => useEffect number return (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
    }
  }, [number]);

  useEffect(function() {
    console.log('%cfunc => useEffect date (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
    document.title = _date;

    return function() {
      console.log('%cfunc => useEffect date return (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
    }
  }, [_date]);

  // 여러 개의 useEffect 사용 가능함
  // useEffect(function() {
  //   console.log('%cfunc => useEffect B (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
  //   document.title = number + ' : ' + _date;
  // })

  console.log('numberState ', numberState);
  return (
    <div className='container'>
      <h2>function style component</h2>
      {/* 함수형 스타일로 props 값을 받아 출력하는 방법 */}
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input type="button" value="random" onClick={
        function() {
          setNumber(number + 1);
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

var classStyle = 'color:red';
class ClassComp extends React.Component {
  state = {
    number:this.props.initNumber, // state의 초깃값을 props로 전달된 initNumber의 값을 지정함
    date: (new Date()).toString()
  }

  UNSAFE_componentWillMount() {
    console.log('%cclass => componentWillMount', classStyle);
  }

  componentDidMount() {
    console.log('%cclass => componentDidMount', classStyle);
  }

  shouldComponentUpdate(nevtProps, nextState) {
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }
  
  UNSAFE_componentWillUpdate(nevtProps, nextState) {
    console.log('%cclass => componentDidUpdate', classStyle);
  }

  componentDidUpdate(nevtProps, nextState) {
    console.log('%cclass => componentDidUpdate', classStyle);
  }

  render() {
    console.log('%cclass => render', classStyle);
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
