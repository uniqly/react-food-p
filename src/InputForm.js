import React, { Component } from 'react'
import AgeForm from './forms/AgeForm'
import GenderForm from './forms/GenderForm'
import FoodForm from './forms/FoodForm'
import SnackForm from './forms/SnackForm'
import DrinkForm from './forms/DrinkForm'

class InputForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			formNum: 1,
		}

		this.handleNext = this.handleNext.bind(this)
	}

	handleNext = event => {
		this.setState({ formNum: this.state.formNum + 1})
	}

	handleBack = event => {
		this.setState({ formNum: this.state.formNum - 1})
	}

	render() {
		if (this.state.formNum === 1) {
			return(
				<AgeForm 
					handleNext = { this.handleNext }
					handleBack = { this.handleBack }
					inputElement = { this.props.inputElement }
					handleInput = { this.props.handleInput }
				/>
			)
		} else if (this.state.formNum === 2) {
			return(
				<GenderForm 
					handleNext = { this.handleNext }
					handleBack = { this.handleBack }
					inputElement = { this.props.inputElement }
					handleInput = { this.props.handleInput }
				/>
			)
		} else if (this.state.formNum === 3) {
			return(
				<FoodForm 
					handleNext = { this.handleNext }
					handleBack = { this.handleBack }
					inputElement = { this.props.inputElement }
					handleInput = { this.props.handleInput }
				/>
			)
		} else if (this.state.formNum === 4) {
			return(
				<SnackForm 
					handleNext = { this.handleNext }
					handleBack = { this.handleBack }
					inputElement = { this.props.inputElement }
					handleInput = { this.props.handleInput }
				/>
			)
		} else if (this.state.formNum === 5) {
			return(
				<DrinkForm 
					handleNext = { this.props.handleSubmit }
					handleBack = { this.handleBack }
					inputElement = { this.props.inputElement }
					handleInput = { this.props.handleInput }
				/>
			)
		}
	}
}

export default InputForm
