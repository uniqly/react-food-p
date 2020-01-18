import React, { Component } from 'react';
import './Form.css';

class FoodForm extends Component {

	render() {
		return(
			<div className="App">
				<div className="background">
					<div className="form foodForm">
						<div className="statement">What are you eating?</div>
						<div className="more">I want to eat...</div>
						<select className="appBox foodBox" name="food" onChange={ this.props.handleInput }>
							<option value="0">I'm not hungry</option>
							<option value="370">Fishball noodles</option>
							<option value="411">Wanton Noodles</option>
							<option value="313">Laksa</option>
							<option value="284">Ban Mian</option>
							<option value="461">Prawn Noodles (dry)</option>
							<option value="294">Prawn Noodles (soup)</option>
							<option value="373">Fishball Noodles (soup)</option>
							<option value="535">Chicken Burger</option>
							<option value="407">Fish Burger</option>
							<option value="129">Mushroom Soup</option>
							<option value="504">Spaghetti Bolognese</option>
							<option value="460">Carbonara</option>
							<option value="681">Fish and Chips</option>
							<option value="486">Aglio Olio</option>
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

export default FoodForm
