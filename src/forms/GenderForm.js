import React, { Component } from 'react';
import './Form.css';

class GenderForm extends Component {
	
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
							onClick={ this.props.handleInput } 
						/>
						<label className="picture boy" for="boy">
							<div >Male</div>
						</label>
						<input 
							name="gender"
							id="girl"
							type="radio" 					
							ref={ this.props.inputElement }
							value="Female"
							onClick={ this.props.handleInput } 
						/>
						<label className="picture girl" for="girl">
							<div>Female</div>
						</label>
					</div>
				</div>
				<div className="bottom">
					<button type="button" class="appBtn backBtn" onClick={ this.props.handleBack }>Back</button>
					<button type="button" class="appBtn nextBtn" onClick={ this.props.handleNext }>Next</button>
				</div>
			</div>
			// <Container>
			// 	<Row className="genderForm">
			// 		<form onSubmit = { this.props.handleNext }>
			// 			<label>
			// 			What is your gender? <br/>
			// 			<input 
            //                 name="gender"
            //                 className="opt1"
			// 				type="radio" 					
			// 				ref={ this.props.inputElement }
			// 				value="Male"
			// 				onClick={ this.props.handleInput } 
            //             />Male
            //             <input 
            //                 name="gender"
            //                 className="opt2"
			// 				type="radio" 					
			// 				ref={ this.props.inputElement }
			// 				value="Female"
			// 				onClick={ this.props.handleInput } 
            //             />Female
			// 			</label>
			// 			<br/>
			// 			<input type='submit'/>
			// 		</form>
			// 	</Row>
			// </Container>
			)
		}
	}

export default GenderForm
