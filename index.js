import React, { Component } from 'react';
import { render } from 'react-dom';
import SelectionDiv from './SelectionDiv';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <h1>Finding Falcone!</h1>
        <h3>Select planets you want to search in: </h3>
        <SelectionDiv />
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
