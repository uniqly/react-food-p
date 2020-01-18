import React, { Component } from 'react';
import './Form.css';

class AgeForm extends Component {
	
	render() {
		return(
			<div className="App">
				<div className="background">
					<div className="banner lunch">
						<div>Food Paradise</div>
					</div>
					<div className="form ageForm">
						<div>
							<div className="statement">Let's get started.</div>
							<div className="more">A key to healthy living is to watch your diet.</div>
							<input 
								className="ageBox"
								name="age"
								type="text" 
								autoComplete="off"
								placeholder="What is your age?"						
								ref={ this.props.inputElement }
								value={ this.props.currentElement }
								onChange={ this.props.handleInput }
							/>
						</div>
					</div>
				</div>
				<div className="bottom">
					<button type="button" class="appBtn nextBtn" onClick={ this.props.handleNext }>Next</button>
				</div>
			</div>
			)
		}
	}

export default AgeForm
