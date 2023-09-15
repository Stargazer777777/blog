import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "笔记",
      icon: "note",
      prefix: "notebook/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "article",
      prefix: "articles/",
      children: "structure",
    },
    // "intro",
    // "slides",
  ],
});
