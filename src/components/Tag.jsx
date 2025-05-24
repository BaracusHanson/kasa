import PropTypes from "prop-types";
const Tag = ({ tags }) => {
  return (
    <>
      <p className="logement__tags">
        {tags.map((tag, index) => (
          <span className="logement__tag" key={index}>
            {tag}
          </span>
        ))}
      </p>
    </>
  );
};

Tag.propTypes = {
  tags: PropTypes.array.isRequired,
};
export default Tag;
