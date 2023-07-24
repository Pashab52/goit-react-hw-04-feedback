import PropTypes from 'prop-types';
import css from './Section.module.css'

export function Section (props) {
  
    return (
      <div>
        <h2 className={css.title}>{props.title}</h2>
        {props.children}
      </div>
    );
};


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };