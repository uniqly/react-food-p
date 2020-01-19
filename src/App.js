import React, { Component } from 'react';
import './App.css';

import InputForm from './InputForm';
import ResultForm from './ResultForm';


class App extends Component {
  inputElement = React.createRef()
  constructor(props) {
		super(props)
		this.state = {
      check: false,
      age: '16',
      gender: 'Male',
      food: '0',
      snack: '0',
      drink: '0',
    }
    

    this.handleRetry = this.handleRetry.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
	}

	// mySubmitHandler = event => {
	// 	ReactDOM.render(<ResultForm  Ages={this.state.age}/>,document.getElementById('data'))
  // }

  handleRetry = event => {
    this.setState({
      check: false,
      age: '16',
      gender: 'Male',
      food: '0',
      snack: '0',
      drink: '0',
    })
  }

  handleSubmit = event => {
    this.setState({check: true})
  }

  handleInput(name, item) {
		this.setState({
			[name]: item
    })
    //alert(this.state.age)
  }

  render() {
    return (
      <div className="App">
        { this.state.check ? 
          <ResultForm 
            handleRetry = { this.handleRetry }
            Info = { this.state }
             /> :
          <InputForm 
            inputElement = { this.inputElement }
            handleNext = { this.handleNext }
            handleSubmit = { this.handleSubmit }
            handleInput = { this.handleInput }
          /> 
        }
      </div>
    )
  }
}

export default App;
