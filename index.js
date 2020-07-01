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
    
        <SelectionDiv />
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
