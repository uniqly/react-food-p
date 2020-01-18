import React, { Component } from 'react';
import './Form.css';

class SnackForm extends Component {

	render() {
		return(
			<div className="App">
				<div className="background">
					<div className="form foodForm">
						<div className="statement">Are you hungry for more?</div>
						<div className="more">I'm craving...</div>
						<select className="appBox foodBox" name="snack" onChange={ this.props.handleInput }>
							<option value="0">I don't need a snack</option>
							<option value="110">Hello Panda</option>
							<option value="240">Potato Chips</option>
							<option value="159">Pocky</option>
							<option value="30">Wang Wang</option>
							<option value="122">Mamme Noodle Snack</option>
							<option value="34">Cream Crackers</option>
							<option value="101">Corntos</option>
							<option value="130">Cassava Chips</option>
							<option value="160">Oreo</option>
							<option value="130">Gummy</option>
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

export default SnackForm
