import React, { Component } from 'react';

class FoodForm extends Component {
	
	render() {
		return(
			<div>
				<div className="genderForm">
					<form onSubmit = { this.props.handleNext }>
						<label>
						What is are you going to eat? <br/>
                        <select name="food" onChange={ this.props.handleInput }>
                            <option value="0">None</option>
                            <option value="370">Fishball noodles</option>
                            <option value="411">Wanton Noodles</option>
                            <option value="313">Laksa</option>
                            <option value="284">Ban Mian</option>
                            <option value="461">Prawn Noodles (dry)</option>
                            <option value="294">Prawn Noodles (soup)</option>
                            <option value="373">Fishball Noodles (soup)</option>
                            <option value="535">CHicken Burger</option>
                            <option value="407">Fish Burger</option>
                            <option value="129">Mushroom Soup</option>
                            <option value="504">Spaghetti Bolognese</option>
                            <option value="460">Carbonara</option>
                            <option value="681">Fish and Chips</option>
                            <option value="486">Aglio Olio</option>
                        </select>
						</label>
						<br/>
						<input type='submit'/>
					</form>
				</div>
			</div>
			)
		}
	}

export default FoodForm
