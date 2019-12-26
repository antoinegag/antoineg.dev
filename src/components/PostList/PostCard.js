import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";

function PostCard(props) {
  const { slug, title, description, img, link, github } = props;
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h3">
            <Link to={`${slug}`}>{title}</Link>
          </CardTitle>
          <CardSubtitle>{description}</CardSubtitle>
        </CardBody>
        {img && <img src={img} alt={`${title} preview`} />}
        <CardBody>
          <CardText>{description}</CardText>
          {link && <CardLink href={link}>Project Link</CardLink>}
          {github && (
            <CardLink className="link-unstyled" href={github}>
              <u>
                <i className="fab fa-github mr-2" />
                Github Repo
              </u>
            </CardLink>
          )}
        </CardBody>
      </Card>
    </div>
  );
}

PostCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  img: PropTypes.string,
  src: PropTypes.string.isRequired,
  link: PropTypes.string,
  github: PropTypes.string
};

export default PostCard;
