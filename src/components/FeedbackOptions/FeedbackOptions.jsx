import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export function FeedbackOptions(props) {

    return (
      <div className={css.btnWrap}>
        {props.options.map(option => {
          return (
            <button className={css.btn}
              type="button"
              // data-btn={option}
              key={option}
              onClick={() => props.onLeaveFeedback(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }

  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };