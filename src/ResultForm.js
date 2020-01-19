import React, { Component } from 'react';
import './forms/Form.css';
import Summary from './results/Summary'
import Results from './results/Results'

class ResultForm extends Component {
  constructor(props) {
		super(props)
		this.state = {
			pageNum: 1,
		}

		this.handleNext = this.handleNext.bind(this)
		this.handleBack = this.handleBack.bind(this)
	}

	handleNext = event => {
		this.setState({ pageNum: this.state.pageNum + 1})
	}

	handleBack = event => {
		this.setState({ pageNum: this.state.pageNum - 1})
  }

  render() {
    if (this.state.pageNum === 1) {
			return(
        <Summary 
          Info = { this.props.Info }
					handleNext = { this.handleNext }
					handleBack = { this.handleBack }
				/>
			)
		} else if (this.state.pageNum === 2) {
			return(
        <Results 
          Info = { this.props.Info }
					handleNext = { this.handleNext }
					handleBack = { this.handleBack }
          handleRetry = { this.props.handleRetry }
				/>
			)
		}
  }
}

export default ResultForm
