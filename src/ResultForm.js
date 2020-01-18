import React, { Component } from 'react';
import './forms/Form.css';

class ResultForm extends Component {

  calcCalorie(age, gender) {
    var cal = 2000;
    if (gender === 'Male') {
      cal += 200;
      if (age <= 13) {
        cal = 2000;
      } else if (age >= 16) {
        return 2800;
      } else {
        cal += 200*(age-13);
      }
    } else {
      if (age >= 19) {
        cal = 2200;
      }
    }
    return cal
    }

  render() {
    const age = this.props.Info.age
    const gender = this.props.Info.gender
    const foodCal = this.props.Info.food
    const snackCal = this.props.Info.snack
    const drinkCal = this.props.Info.drink
    const totalCal = +foodCal + +snackCal + +drinkCal
    const kcal = this.calcCalorie(age, gender)

    return (
      <div className="App">
        <div className="background">
          <div className="form resultForm">
            <div className="statement">Success</div>
            <div className="more"> 
              your age is { age } and your gender is { gender }.<br/>
              Your meal contains { foodCal } calories.<br/>
              Your snack contains { snackCal } calories.<br/>
              Your drink contains { drinkCal } calories.<br/>
              Overall you have consumed { totalCal } calories.<br/>
              Your daily recommanded calorie intake based on your age and gender is { kcal } calories.<br/>
            </div>
          </div>
        </div>
        <div className="bottom">
          <button type="button" class="appBtn nextBtn" onClick={ this.props.handleRetry }>Retry</button>
        </div>
      </div>
    )
  }
}

export default ResultForm
