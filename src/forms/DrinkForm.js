import React, { Component } from 'react';
import './Form.css';

class DrinkForm extends Component {

	render() {
		return(
			<div className="App">
				<div className="background">
					<div className="form foodForm">
						<div className="statement">What are you drinking?</div>
						<div className="more">I'm thirsty for...</div>
						<select className="appBox foodBox" name="drink" onChange={ this.props.handleInput } required>
							<option value="" disabled selected>Select Drink</option>
							<option value="0">I'm not thirsty</option>
							<option value="0">Water</option>
							<option value="68">Meiji Milk</option>
							<option value="120">Apple juice</option>
							<option value="167">VitaSoy</option>
							<option value="121">Milo</option>
							<option value="142">Coke</option>
						</select>
					</div>
				</div>
				<div className="bottom">
					<button type="button" class="appBtn backBtn" onClick={ this.props.handleBack }>Back</button>
					<button type="button" class="appBtn nextBtn" onClick={ this.props.handleNext }>Next</button>
				</div>
			</div>
			)
		}
	}

export default DrinkForm
