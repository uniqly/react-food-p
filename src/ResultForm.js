import React, { Component } from 'react';

class ResultForm extends Component {
  render() {
    return (
      <div className="ResultForm">
          <h1> success</h1>
          <p> 
            your age is { this.props.Info.age } and your gender is { this.props.Info.gender }.
            Your meal contains { this.props.Info.food } calories.
          </p>
          <form onSubmit = { this.props.handleRetry }>
            <button>Try Again</button>
          </form>
      </div>
    )
  }
}

export default ResultForm
