import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PostCard(props) {
  const { slug, title, description, img } = props;
  return (
    <div>
      <Link to={slug}>{title}</Link>
      <p>{description}</p>
      {img && <img src={img} alt={`${title} preview`} />}
    </div>
  );
}

PostCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  img: PropTypes.string,
  src: PropTypes.string.isRequired
};

export default PostCard;
