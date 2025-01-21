import PropTypes from "prop-types";
const Tag = ({ tags }) => {
  return <span className="logement__tag"> {tags} </span>;
};

Tag.propTypes = {
  tags: PropTypes.string.isRequired,
};
export default Tag;
