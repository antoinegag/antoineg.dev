import React from "react";
import usePosts from "../../hooks/usePosts";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function PostList(props) {
  const { type } = props;
  const { loading, posts } = usePosts(type);
  const { t } = useTranslation();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-wrap justify-center">
      {Object.keys(posts).map((post) => {
        const { title, img, github, tech, url, indev } = posts[post];
        const link = github ? github : url ? url : "";
        return (
          <div className="w-full lg:w-1/2 px-10 py-10">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full"
            >
              <div className="project-card text-center h-full">
                <h3 className="font-bold text-4xl py-4">{title}</h3>
                <p className="text-xl">{t(`projects.${post}.description`)}</p>
                {tech && (
                  <div className="flex flex-wrap justify-center pt-3">
                    {tech.map((entry) => (
                      <div
                        className="mx-1 px-3 py-1 my-2 bg-blue-100"
                        color="info"
                      >
                        {entry}
                      </div>
                    ))}
                  </div>
                )}
                {img ? (
                  <img
                    src={img}
                    className="mx-auto pt-3"
                    alt={`${title} preview`}
                  />
                ) : (
                  <div className="text-3xl">
                    <span role="img" aria-label="hammer and pick image">
                      ⚒️
                    </span>{" "}
                    WIP
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
  type: PropTypes.string,
};

PostList.defaultProps = {
  type: "projects",
};

export default PostList;
