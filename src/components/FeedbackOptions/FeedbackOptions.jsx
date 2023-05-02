import React from 'react';
import PropTypes from 'prop-types';


export const FeedbackOptions = ({ handleClick }) => {
  return (
    <div>
      <button type="button" onClick={handleClick} name="good">
        Good
      </button>
      <button type="button" onClick={handleClick} name="neutral">
        Neutral
      </button>
      <button type="button" onClick={handleClick} name="bad">
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.prototype = {
  handleClick: PropTypes.func.isRequired,
};

