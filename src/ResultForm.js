import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

class ResultForm extends Component {
  render() {
    return (
      <div className="ResultForm">
        <Container>
          <h1> success</h1>
          <p> 
            your age is { this.props.Info.age } and your gender is { this.props.Info.gender }.
            Your meal contains { this.props.Info.food } calories.
          </p>
          <form onSubmit = { this.props.handleRetry }>
            <button>Try Again</button>
          </form>
        </Container>
      </div>
    )
  }
}

export default ResultForm
