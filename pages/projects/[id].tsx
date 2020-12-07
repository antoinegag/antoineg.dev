import {
  getAllProjectIds,
  getProjectData,
  ProjectData,
} from "../../lib/markdownPosts";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import ProjectNotFound from "../../components/Projects/ProjectNotFound";

export default function Post({
  projectData,
}: {
  projectData: ProjectData & { contentHtml: string };
}) {
  if (!projectData) {
    return <ProjectNotFound />;
  }

  const {
    id,
    name,
    description,
    repository,
    tech,
    url,
    contentHtml,
    imageUrl,
  } = projectData;

  return (
    <div className="md:px-64 md:py-24">
      <Head>
        <title>{name}</title>
      </Head>
      <article>
        <h1 className="text-6xl text-center font-semibold uppercase">{name}</h1>
        {repository && (
          <div className="text-center underline text-blue-600">
            <a href={repository}>{repository}</a>
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectData = await getProjectData(params.id as string);
  return {
    props: {
      projectData,
    },
  };
};
