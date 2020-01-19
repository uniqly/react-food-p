import React, { Component } from 'react';
import './Form.css';

class AgeForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			checkValid: false,
		}

		this.changeInput = this.changeInput.bind(this)
	}

	changeInput(e) {
		const target = e.target
		const name = target.name
		const item = Number(target.value)

		console.log(typeof item)
		console.log(item)

		if (item >= 12 && item <= 20 && Number.isInteger(item)) {
			this.props.handleInput(name, item)
			this.setState({checkValid: true})
		} else {
			this.setState({checkValid: false})
		}
	}

	render() {
		return(
			<div className="App">
				<div className="background">
					<div className="banner lunch">
						<div>Healthify Me</div>
					</div>
					<div className="form ageForm">
						<div>
							<div className="statement">Let's get started.</div>
							<div className="more">A key to healthy living is to watch your diet.</div>
							<input 
								className="appBox ageBox"
								name="age"
								type="number" 
								autoComplete="off"
								placeholder="What is your age?"		
								pattern="\d*"				
								ref={ this.props.inputElement }
								value={ this.props.currentElement }
								onChange={ this.changeInput }
							/>
						</div>
					</div>
				</div>
				<div className="bottom">
					<button 
						type="button" 
						className="appBtn nextBtn" 
						onClick={ this.props.handleNext }
						disabled={ !this.state.checkValid }>
						Next
					</button>
				</div>
			</div>
			)
		}
	}

export default AgeForm
