import PropTypes from 'prop-types';

function ListeCourses({ elements }) {
  return (
    <ol>
      {elements.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  );
}

ListeCourses.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListeCourses;