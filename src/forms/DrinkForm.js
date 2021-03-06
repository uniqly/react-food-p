import React, { Component } from 'react';
import './Form.css';

class DrinkForm extends Component {
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
						<div className="statement">What are you drinking?</div>
						<div className="more">I'm thirsty for...</div>
						<select className="appBox foodBox" name="drink" onChange={ this.changeInput } defaultValue={ "none" }>
							<option value="none" disabled hidden>Select Drink</option>
							<option value="0">I'm not thirsty</option>
							<option value="0">Water</option>
							<option value="68">Meiji Milk</option>
							<option value="120">Apple Juice</option>
							<option value="167">VitaSoy</option>
							<option value="121">Milo</option>
							<option value="142">Coke</option>
							<option value="72">Green Tea</option>
							<option value="90">Ribena</option>
							<option value="93">Nescafe Coffee</option>
							<option value="130">Pink Dolphin</option>
							<option value="74">100 Plus</option>
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
						Submit
					</button>
				</div>
			</div>
			)
		}
	}

export default DrinkForm
