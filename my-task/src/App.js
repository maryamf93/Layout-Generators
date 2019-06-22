import React from 'react'
import './App.css'
import arrow from './arrow.svg'
import Reload from './Reload.svg'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      validate: '',
      validateOutput: []
    }
  }

  handleChange (event) {
    this.setState({ validate: event.target.value })
  }

  handleClick () {
    var VALIDATE = this.state.validate.toUpperCase().split('/')
    console.log(VALIDATE)
    var i
    var validateOutput
    var selectObject = ['XL', 'L', 'SM']
    for (i = 0; i < VALIDATE.length; i++) {
      var k
      for (k = 0; k < selectObject.length; k++) {
        if (VALIDATE[i].replace(/\d+/g, '') === (selectObject[k])) {
          if (isNaN(parseInt(VALIDATE[i]))) {
            validateOutput = document.createElement('div')
            validateOutput.setAttribute('class', selectObject[k])
            validateOutput = document.getElementById('output').appendChild(validateOutput)
          } else {
            var j
            for (j = 0; j < parseInt(VALIDATE[i]); j++) {
              validateOutput = document.createElement('div')
              validateOutput.setAttribute('class', selectObject[k])
              validateOutput = document.getElementById('output').appendChild(validateOutput)
            }
          }
        }
      }
    }
    this.setState({ validate: '' })
  }

  ResetApp () {
    window.location.reload()
  }

  render () {
    return (
      <div className='App'>
        <div >
          <p> Enter The Desired Value, Similar To Example</p>
          <input
            className='input-box'
            type='text'
            placeholder='Example: 2XL/L/SM'
            name='validate'
            onChange={(event) => this.handleChange(event)}
          />
        </div>

        <div className='button-box'>
          <button
            className='display-btn'
            onClick={() => this.handleClick()}>
            Show output
            <img
              className='material-icons'
              src={arrow}
            />
          </button>
          <button
            className='reload-btn'
            onClick={() => this.ResetApp()}>
            Reset
            <img
              className='material-icons'
              src={Reload}
            />
          </button>
        </div>

        <div id='output' />
      </div>
    )
  }
}

export default App
