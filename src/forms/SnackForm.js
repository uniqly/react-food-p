import React, { Component } from 'react';
import './Form.css';

class SnackForm extends Component {
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
		if (item !== "none") {
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
					<div className="form foodForm">
						<div className="statement">Are you hungry for more?</div>
						<div className="more">I'm craving for...</div>
						<select className="appBox foodBox" name="snack" onChange={ this.changeInput } required>
							<option value="none" disabled selected hidden>Select Snack</option>
							<option value="0">I don't need a snack</option>
							<option value="110">Hello Panda</option>
							<option value="240">Potato Chips</option>
							<option value="159">Pocky</option>
							<option value="30">Wang Wang</option>
							<option value="122">Mamee Noodle Snack</option>
							<option value="34">Cream Crackers</option>
							<option value="101">Corntos</option>
							<option value="130">Cassava Chips</option>
							<option value="160">Oreo</option>
							<option value="130">Gummy</option>
						</select>
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

export default SnackForm
