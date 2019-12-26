import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Badge
} from "reactstrap";

function PostCard(props) {
  const { slug, title, description, img, link, github, tech, indev } = props;
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h3">
            <Link to={`${slug}`}>{title}</Link>
            {indev && (
              <Badge className="ml-2" color="info">
                In Development
              </Badge>
            )}
          </CardTitle>
          <CardSubtitle>{description}</CardSubtitle>
        </CardBody>
        {img && <img src={img} alt={`${title} preview`} />}
        <CardBody>
          <CardText>
            <p>{description}</p>
            {tech && <p>Technologies: {tech.join(", ")}</p>}
          </CardText>
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
  github: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string),
  indev: PropTypes.bool
};

export default PostCard;
