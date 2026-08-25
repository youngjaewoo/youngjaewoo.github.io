export const siteConfig = {
  title: "Youngjae Woo",
  author: "Youngjae Woo",
  description: "Youngjae Woo writes about computational biology, genetics, and drug discovery.",
  url: "https://youngjaewoo.github.io",
  lang: "en-GB",
  date: {
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    } satisfies Intl.DateTimeFormatOptions,
  },
};

export const menuLinks = [
  { path: "/", title: "Home" },
  { path: "/posts/", title: "Posts" },
  { path: "/notes/", title: "Notes" },
  { path: "/about/", title: "About" },
];
