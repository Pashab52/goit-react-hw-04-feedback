import PropTypes from 'prop-types';
import css from './Section.module.css'

export function Section (props) {
  
    return (
      <div>
        <p className={css.title}>{props.title}</p>
        {props.children}
      </div>
    );
};


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };