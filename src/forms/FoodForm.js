import React, { Component } from 'react';
import './Form.css';

class FoodForm extends Component {
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
						<div className="statement">What are you eating?</div>
						<div className="more">I want to eat...</div>
						<select className="appBox foodBox" name="food" onChange={ this.changeInput } required>
							<option value="none" disabled selected hidden>Select Food</option>
							<option value="0">I'm not hungry</option>
							<option value="370">Fishball Noodle (Dry)</option>
							<option value="411">Wanton Noodle</option>
							<option value="313">Laksa</option>
							<option value="284">Ban Mian</option>
							<option value="461">Prawn Noodle (Dry)</option>
							<option value="294">Prawn Noodle (Soup)</option>
							<option value="373">Fishball Noodle (Soup)</option>
							<option value="535">Chicken Burger</option>
							<option value="407">Fish Burger</option>
							<option value="129">Mushroom Soup</option>
							<option value="504">Spaghetti Bolognese</option>
							<option value="460">Carbonara</option>
							<option value="681">Fish and Chips</option>
							<option value="486">Aglio Olio</option>
							<option value="555">Mee Rebus</option>
							<option value="520">Mee Siam</option>
							<option value="520">Mee Soto</option>
							<option value="312">Maggie Goreng</option>
							<option value="159">Nasi Goreng</option>
							<option value="339">Nasi Lemak</option>
							<option value="466">Lontong</option>
							<option value="430">Teriyaki Chicken with Rice</option>
							<option value="560">Teriyaki Salmon with Rice</option>
							<option value="698">Omurice</option>
							<option value="513">Chicken Ramen</option>
							<option value="855">Katsu Pork with Rice</option>
							<option value="1103">Katsu Chicken with Rice</option>
							<option value="182">Chicken Porridge</option>
							<option value="466">White Carrot Cake</option>
							<option value="199">Chicken Macaroni</option>
							<option value="493">Black Carrot Cake</option>
							<option value="302">Watercress Soup with Rice</option>
							<option value="232">ABC Soup with Rice</option>
							<option value="250">Fried Bee Hoon</option>
							<option value="500">Fried Hokkien mee</option>
							<option value="380">Yong Tau Foo with Rice </option>
							<option value="510">Fried Kway Teow</option>
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

export default FoodForm
