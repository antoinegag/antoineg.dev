import {
  getAllProjectIds,
  getProjectData,
  ProjectData,
} from "../../lib/markdownPosts";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import MarkdownPost from "../../components/MarkdownPost";

export default function Post({
  projectData,
}: {
  projectData: ProjectData & { contentHtml: string };
}) {
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
    <div className="md:px-64 py-10 min-h-screen bg-gray-800 text-white">
      <Head>
        <title>{name}</title>
      </Head>
      <div className="flex justify-between">
        <div className="text-3xl font-semibold mb-2">// Projects</div>
        <Link href="/">
          <a className="underline">Back home</a>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <article>
          <div className="mb-4">
            <h2 className="text-6xl font-semibold uppercase pb-2 text-yellow-500">
              {name}
            </h2>
            <div className="text-xl">{description}</div>
          </div>
          <div>
            {tech && tech.length > 0 && <div>{tech.join(", ")}</div>}
            {repository && (
              <div className="underline">
                <a href={repository}>{repository}</a>
              </div>
            )}
          </div>
          <hr className="my-5" />
          <MarkdownPost contentHtml={projectData.contentHtml} />
        </article>
      </div>
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
