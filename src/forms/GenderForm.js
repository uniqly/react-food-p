import React, { Component } from 'react';
import './Form.css';

class GenderForm extends Component {
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
		const item = target.value

		console.log(typeof item)
		console.log(item)

		this.props.handleInput(name, item)
		this.setState({checkValid: true})
	}

	render() {
		return(
			<div className="App">
				<div className="background">
					<div className="form genderForm">
						<div className="statement">Tell me more about you.</div>
						<div className="more">Are you... or ...</div>
					</div>
					<div className="genderBox">
						<input 
							name="gender"
							id="boy"
							type="radio" 					
							ref={ this.props.inputElement }
							value="Male"
							onClick={ this.changeInput } 
						/>
						<label className="picture boy" htmlFor="boy">
							<div >Male</div>
						</label>
						<input 
							name="gender"
							id="girl"
							type="radio" 					
							ref={ this.props.inputElement }
							value="Female"
							onClick={ this.changeInput } 
						/>
						<label className="picture girl" htmlFor="girl">
							<div>Female</div>
						</label>
					</div>
				</div>
				<div className="bottom">
					<button type="button" className="appBtn backBtn" onClick={ this.props.handleBack }>Back</button>
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

export default GenderForm
