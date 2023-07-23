import PropTypes from 'prop-types';

export function FeedbackOptions(props) {

    return (
      <div>
        {props.options.map(option => {
          return (
            <button
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