import React, { Component } from 'react';
import '../forms/Form.css';

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
      return <h2>Oh no! Your caloric intake is 25% above your daily recommended intake.</h2>
    } else {
      return <h2>Oh no! Your caloric intake is 25% below your daily recommended intake.</h2>
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
              <span className="textIs">Your daily recommended calorie for this meal is</span>
              <div className="flex-bottom">
                <span className="kcalSpan">{ Math.round(daily) }</span>
                <span className="kcal">kcal</span>
              </div>
            </div>
            <div className="more flex-cetner">
              <span className="textIs">Your meal contained</span>
              <div className="flex-bottom">
                <span className="kcalSpan">{ totalCal }</span>
                <span className="kcal">kcal</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <button type="button" className="appBtn BackBtn" onClick={ this.props.handleBack }>Back</button>
          <button type="button" className="appBtn nextBtn" onClick={ this.props.handleRetry }>Retry</button>
        </div>
      </div>
    )
  }
}

export default ResultForm
