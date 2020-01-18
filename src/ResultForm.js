import React, { Component } from 'react';
import './forms/Form.css';
import maleImg from './assets/male.png';
import femaleImg from './assets/female.png';

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

  checkDaily(total, daily) {
    const diff = Math.abs(daily-total);
    if (diff/total <= 0.25) {
      return <h2>Great job! You're within 25% of your daily recommended intake.</h2>
    } else if (total > daily) {
      return <h2>Oh no! Your caloric intake is more than 25% of your daily recommended intake.</h2>
    } else {
      return <h2>Oh no! Your caloric intake is less than 25% of your daily recommended intake.</h2>
    }
  }

  checkSex(gender) {
    if (gender === "Male"){
      return <img className="maleImg" src={ maleImg }/>
    } else {
      return <img className="femaleImg" src={ femaleImg }/>
    }
  }

  render() {
    const age = this.props.Info.age
    const gender = this.props.Info.gender
    const foodCal = this.props.Info.food
    const snackCal = this.props.Info.snack
    const drinkCal = this.props.Info.drink
    const totalCal = +foodCal + +snackCal + +drinkCal
    const kcal = this.calcCalorie(age, gender)
    const daily = kcal/3;
    const message = this.checkDaily(totalCal, daily)
    const genderImg = this.checkSex(gender)

    return (
      <div className="App">
        <div className="background">
          <div className="form resultForm">
            <div className="statement">Results</div>
            { message }
            <div className="more ageGender"> 
              <span>Your age is </span><span class="ageSpan">{ age } </span>  
              <span>Your gender is</span>{ genderImg }
            </div>
            <h2>Your recommended calorie intake for this meal is</h2>
            <div className="kcalBox">
              <span className="kcalSpan">{ Math.round(daily) }</span><span>kcal</span>
            </div>
            <h2>Your meal contained</h2>
            <div className="kcalBox">
              <span className="kcalSpan">{ totalCal }</span><span>kcal</span>
            </div>
            {/* <div className="more"> 
              Your age is { age } and you're a { gender }.<br/>
              Your meal contains { foodCal } calories.<br/>
              Your snack contains { snackCal } calories.<br/>
              Your drink contains { drinkCal } calories.<br/>
              Overall you have consumed { totalCal } calories.<br/>
              Your daily recommended calorie intake based on your age and gender is { kcal } calories.<br/>
              Your suggested calorie intake for this meal is { Math.round(kcal/3) }
            </div> */}
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
