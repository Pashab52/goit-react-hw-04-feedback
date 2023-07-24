import PropTypes from 'prop-types';
import css from './Notification.module.css'
  
export function Notification (props){

  return <p className={css.text}>{props.message}</p>;
}

  Notification.propTypes = {
    message: PropTypes.string.isRequired,
  };