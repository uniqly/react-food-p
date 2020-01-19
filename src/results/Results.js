import React, { Component } from 'react';
import '../forms/Form.css';

class ResultForm extends Component {

  calcCalorie(age, gender) {
    var cal = 2000;
    if (gender === 'Male') {
      if (age > 65) {
        cal = 2200
      } else if (age > 45) {
        cal = 2400
      } else if (age > 16) {
        cal = 2800
      } 
    } else {
      if (age > 50) {
        cal = 1800
      } else if (age > 25) {
        cal = 2000
      } else if (age > 18) {
        cal = 2200
      } 
    }
    return cal
    }

  checkDaily(total, daily) {
    const diff = Math.abs(daily-total);
    if (total < daily && diff/total <= 0.3) {
      return <h2>Great Job! You're eating healthily!</h2>
    } else if (total > daily && diff/total <= 0.25) {
      return <h2>Keep it up! Your caloric intake is within 25% of your daily recommended intake.</h2>
    } else if (total < daily && diff/total > 0.3) {
      return <h2>Oh no! You're eating way below your daily recommended intake.</h2>
    } else {
      return <h2>Oh no! You're eating way above your daily recommended intake.</h2>
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

    return (
      <div className="App">
        <div className="background">
          <div className="form resultForm">
            <div className="statement">Results</div>
            { message }
            <div className="more flex-cetner">
              <span className="textIs">Your daily recommended calorie intake is</span>
              <div className="flex-bottom">
                <span className="kcalSpan">{ Math.round(daily) }</span>
                <span className="kcal">kcal</span>
              </div>
            </div>
            <div className="more flex-cetner">
              <span className="textIs">Overall your meal contains</span>
              <div className="flex-bottom">
                <span className="kcalSpan">{ totalCal }</span>
                <span className="kcal">kcal</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <button type="button" className="appBtn backBtn" onClick={ this.props.handleBack }>Back</button>
          <button type="button" className="appBtn nextBtn" onClick={ this.props.handleRetry }>Retry</button>
        </div>
      </div>
    )
  }
}

export default ResultForm
