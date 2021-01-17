import React from "react";
import styles from "./MarkdownPost.module.scss";

interface Props {
  contentHtml: string;
}

export default function MarkdownPost({ contentHtml }: Props) {
  return (
    <div
      className={styles.markdown}
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
