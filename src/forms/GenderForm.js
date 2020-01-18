import React, { Component } from 'react';

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
						<label className="boy" for="boy">
							<div><div>Male</div></div>
						</label>
						<input 
							name="gender"
							id="girl"
							type="radio" 					
							ref={ this.props.inputElement }
							value="Female"
							onClick={ this.props.handleInput } 
						/>
						<label className="girl" for="girl">
							<div><div>Female</div></div>
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
