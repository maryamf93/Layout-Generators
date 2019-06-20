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
      () => { 
        var VALIDATE = this.state.validate.toUpperCase().split("/")
        console.log(VALIDATE)
        var i;
        for (i = 0; i < VALIDATE.length; i++) {
          if (VALIDATE[i].search('XL') !== -1) {
            var j;
            for (j = 0; j < parseInt(VALIDATE[i]); j++) {
              return (
                <div className='XL'></div>
              )
            }  
          } if (VALIDATE[i].search('L') !== -1) {
            var k;
            for (k = 0; k < parseInt(VALIDATE[i]); k++) {
              return (
                <div className='L'></div>
              )
            } 
          } else if (VALIDATE[i].search('SM') !== -1) {
            var l;
            for (l = 0; l < parseInt(VALIDATE[i]); l++) {
              return (
                <div className='SM'></div>
              )
            } 
          }
        }
      }
    )
  }

  render() {
     return (
    <div className="App">
      <input 
        className='input-box'
        type='text'
        placeholder='Example: 2XL/L/SM'
        name='validate'
        onChange={(event) => this.handleChange(event)}
      >
      </input>
      <div className='output' >
        {this.handleChange}
      </div>
    </div>
    )
  }
 
}

export default App;
