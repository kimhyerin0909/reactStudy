import './App.css';
import TogBoard from './components/TogBoard';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='togBoard'>
        <TogBoard></TogBoard>
      </div>
    )
  }
}

export default App;