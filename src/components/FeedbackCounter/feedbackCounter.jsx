import React from 'react';

class FeedbackCounter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Feedback Counter</h2>
        <div>
          <button type="button" onClick={() => this.handleClick('good')}>
            Good
          </button>
          <button type="button" onClick={() => this.handleClick('neutral')}>
            Neutral
          </button>
          <button type="button" onClick={() => this.handleClick('bad')}>
            Bad
          </button>
        </div>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
        </div>
      </div>
    );
  }
}

export default FeedbackCounter;
