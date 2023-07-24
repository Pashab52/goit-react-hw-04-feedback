import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export function Statistics (props) {

    return (
      <div className={css.wrap}>
        <span className={css.text}>Good: {props.good} </span>
        <span className={css.text}>Neutral: {props.neutral} </span>
        <span className={css.text}>Bad: {props.bad} </span> <br />
        <span className={css.text}>Total: {props.total} </span>
        <span className={css.text}> Positive feedback: {props.positivePercentage}%</span>
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