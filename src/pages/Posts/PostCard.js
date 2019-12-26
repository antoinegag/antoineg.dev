import React from "react";
import PropTypes from "prop-types";

function PostCard(props) {
  const { title, description, img } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {img && <img src={img} alt={`${title} preview`} />}
    </div>
  );
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  img: PropTypes.string,
  src: PropTypes.string.isRequired
};

export default PostCard;
