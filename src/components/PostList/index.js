import React from "react";
import PostCard from "./PostCard";
import usePosts from "../../hooks/usePosts";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PostList(props) {
  const { type } = props;
  const { loading, posts } = usePosts(type);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-wrap justify-center">
      {Object.keys(posts).map(post => {
        const { title, description, img, github, tech } = posts[post];
        return (
          <div className="w-full lg:w-1/2 px-10 py-10">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <div className="project-card text-center">
                <h3 className="font-bold text-4xl py-4">{title}</h3>
                <p className="text-xl">{description}</p>
                {img && (
                  <img
                    src={img}
                    className="mx-auto pt-3"
                    alt={`${title} preview`}
                  />
                )}
                {tech && (
                  <div className="flex flex-wrap justify-center pt-3">
                    {tech.map(entry => (
                      <div className="mx-1 px-3 py-1 bg-blue-100" color="info">
                        {entry}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

PostList.propTypes = {
  type: PropTypes.string
};

PostList.defaultProps = {
  type: "projects"
};

export default PostList;
