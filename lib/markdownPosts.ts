import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");
const projectsDirectory = path.join(process.cwd(), "projects");

export interface ProjectData {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  repository?: string;
  url?: string;
  tech?: string[];
}

export interface PostData {
  id: string;
  title: string;
  date: string;
}

function readFileMeta(directory: string, name: string) {
  const fullPath = path.join(directory, name);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return matter(fileContents).data;
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const meta = readFileMeta(postsDirectory, fileName);

    return {
      id,
      ...meta,
    } as PostData;
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getProjectsData() {
  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const meta = readFileMeta(projectsDirectory, fileName);

    return {
      id,
      ...meta,
    } as ProjectData;
  });

  return projects;
}

export function getAllPostIds() {
  return getAllIds(postsDirectory);
}

export function getAllProjectIds() {
  return getAllIds(projectsDirectory);
}

function getAllIds(directory: string) {
  const fileNames = fs.readdirSync(directory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

async function readAndProcessMarkdown(directory: string, id: string) {
  const fullPath = path.join(directory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return { contentHtml, matterResult };
}

export async function getPostData(id: string) {
  const { contentHtml, matterResult } = await readAndProcessMarkdown(
    postsDirectory,
    id
  );

  return {
    id,
    contentHtml,
    ...(matterResult.data as PostData),
  };
}

export async function getProjectData(id: string) {
  const { contentHtml, matterResult } = await readAndProcessMarkdown(
    projectsDirectory,
    id
  );

  return {
    id,
    contentHtml,
    ...matterResult.data,
  } as ProjectData & { contentHtml: string };
}
