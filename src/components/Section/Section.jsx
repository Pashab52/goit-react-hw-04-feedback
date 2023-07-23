import PropTypes from 'prop-types';


export function Section (props) {
  
    return (
      <div>
        <p>{props.title}</p>
        {props.children}
      </div>
    );
};


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };