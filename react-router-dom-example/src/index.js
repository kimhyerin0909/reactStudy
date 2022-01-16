import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, NavLink, useParams} from 'react-router-dom';

// Link : 페이지가 리로드 되지 않게 자동으로 구현하는 컴포넌트
// NavLink : Link와 흡사하지만 선택된 컴포넌트에 class="active"를 추가한다 -> css로 응용 가능

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

var contents = [
  {id:1, title:'HTML', desc:'HTML is...'},
  {id:2, title:'JS', desc:'JS is...'},
  {id:3, title:'React', desc:'React is...'}
]

function Topic() {
  var params = useParams();
  var {topic_id} = params.topic_id;
  var selected_topic = {
    title:'Sorry',
    desc:'Not Found'
  };
  for(var i = 0; i < contents.length; i++){
    if(contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.desc}
    </div>
  )
}

function Topics() {
  var lsts = [];
  for(var i = 0; i < contents.length; i++) {
    lsts.push(
      <li key={contents[i].id}><NavLink to={"/topics/" + contents[i].id}>{contents[i].title}</NavLink></li>
    );
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lsts}
      </ul>
      <Routes>
        <Route exact path="/topics/:topic_id" element={<Topic />}></Route>
      </Routes>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      {/* Home, Topic, Contact 컴포넌트을 URL에 따라 달라지게끔 구현 */}
      {/* '/*'를 사용하지 않으면 더 깊이 탐색할 때 상위 경로가 일치하지 않아 하위 경로가 렌더링되지 않는다. */}
      {/* -> route 하나에 여러 개의 path를 설정할 때 사용 */}
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/topics/'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
      <Routes>
        {/* exact : path가 정확히 일치하는 경우에만 매칭시킴 */}
        <Route exact={true} path="/" element={<Home />}></Route>
        <Route path="/topics/*" element={<Topics />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        
      </Routes>
    </div>
  );
}

ReactDOM.render(<React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>, document.getElementById('root'));

reportWebVitals();
