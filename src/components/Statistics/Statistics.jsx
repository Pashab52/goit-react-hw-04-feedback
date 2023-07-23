import PropTypes from 'prop-types';

export function Statistics (props) {

    return (
      <div>
        <span>Good: {props.good} </span>
        <span>Neutral: {props.neutral}</span>
        <span>Bad: {props.bad}</span>
        <span>Total: {props.total}</span>
        <span> Positive feedback: {props.positivePercentage}%</span>
      </div>
    );
  }

  Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };