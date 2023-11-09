import blog, { ga } from "https://deno.land/x/blog/blog.tsx";

blog({
  author: "syamaguc",
  title: "syamaguc's Blog",
  description: "The appearance of a child and the intellect of a child.",
  avatar: "haibara_ai_square.png",
  avatarClass: "rounded-full",
  links: [
    { title: "GitHub", url: "https://github.com/syamaguc" },
    { title: "Twitter", url: "https://twitter.com/syamaguc" },
  ],
  lang: "ja",
  dateFormat: (date) =>
    new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date),
  middlewares: [ga("G-TV5MK3SE7E")],
  favicon: "favicon.ico",
});
