
import React from 'react';
// import PropTypes from 'prop-types';


export function Statistics ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) {
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {countTotalFeedback}</p>
        <p>Positive Feedback: {countPositiveFeedbackPercentage}%</p>
      </div>
    );
}





