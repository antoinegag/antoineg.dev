import {
  getAllProjectIds,
  getProjectData,
  ProjectData,
} from "../../lib/markdownPosts";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";

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
      <article>
        <div className="flex justify-between">
          <div>
            <h2 className="text-6xl font-semibold uppercase pb-2 text-yellow-500">
              {name}
            </h2>
            <div className="text-xl">{description}</div>
          </div>
          <div className="self-end text-right">
            {tech && tech.length > 0 && <div>{tech.join(", ")}</div>}
            {repository && (
              <div className="underline">
                <a href={repository}>{repository}</a>
              </div>
            )}
          </div>
        </div>
        <hr className="my-5" />
        <div
          className="text-white"
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
        />
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
