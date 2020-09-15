import React from "react";
import { useTranslation } from "react-i18next";
import PostList from "../../components/PostList";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <div className="w-full" id="my-projects">
      <div className="text-center py-10">
        <h2 className="py-2">{t("projects.title")}.</h2>
        <p className="text-lg">{t("projects.description")}</p>
        <p className="lg:hidden">{t("projects.touch")}</p>
      </div>
      <PostList />
    </div>
  );
}
