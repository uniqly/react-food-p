import React, { Component } from 'react';
import '../forms/Form.css';
import maleImg from '../assets/male.png';
import femaleImg from '../assets/female.png';

class Summary extends Component {
  checkSex(gender) {
    if (gender === "Male"){
      return <img className="maleImg" src={ maleImg } alt="male.png"/>
    } else {
      return <img className="femaleImg" src={ femaleImg } alt="female.png"/>
    }
  }

  render() {
    const age = this.props.Info.age
    const gender = this.props.Info.gender
    const foodCal = this.props.Info.food
    const snackCal = this.props.Info.snack
    const drinkCal = this.props.Info.drink
    const genderImg = this.checkSex(gender)

    return (
      <div className="App">
        <div className="background">
          <div className="form resultForm">
            <div className="statement">Summary</div>
            <div className="more ageGender"> 
              <div className="flex-center">
                <span className="textIs">Your age is </span><span className="ageSpan">{ age } </span>
              </div>
              <div className="flex-center">
                <span className="textIs">Your gender is</span>{ genderImg }
              </div>
            </div>
            <div className="more flex-cetner">
              <span className="textIs">Your selected meal contains</span>
              <div className="flex-bottom">
                <span className="kcalSpan">{ foodCal }</span>
                <span className="kcal">kcal</span>
              </div>
            </div>
            <div className="more flex-cetner">
              <span className="textIs">Your selected snack contains</span>
              <div className="flex-bottom">
                <span className="kcalSpan">{ snackCal }</span>
                <span className="kcal">kcal</span>
              </div>
            </div>
            <div className="more flex-cetner">
              <span className="textIs">Your selected drink contains</span>
              <div className="flex-bottom">
                <span className="kcalSpan">{ drinkCal }</span>
                <span className="kcal">kcal</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <button type="button" className="appBtn nextBtn" onClick={ this.props.handleNext }>Next</button>
        </div>
      </div>
    )
  }
}

export default Summary
