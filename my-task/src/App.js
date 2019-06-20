import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      validate: ''
    }
  }

  handleChange(event) {
    this.setState({ validate: event.target.value },
      () => { const VALIDATE = this.state.validate.toUpperCase().split("/")
      for (i) }
    )
    console.log(event.target.value.toUpperCase().split("/"))
  }

  render() {
     return (
    <div className="App">
      <input 
        className='input-box'
        type='text'
        placeholder='Example: 2XL/L'
        name='validate'
        onChange={(event) => this.handleChange(event)}
      >
      </input>
      <div className='output' >
      
      </div>
    </div>
    )
  }
 
}

export default App;
