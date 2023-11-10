import blog, { ga } from "https://deno.land/x/blog/blog.tsx";
// prismjs
import "https://esm.sh/prismjs/components/prism-typescript?no-check";
import "https://esm.sh/prismjs/components/prism-python?no-check";

blog({
  author: "syamaguc",
  title: "syamaguc's Blog",
  description: "The appearance of a child and the intellect of a child.",
  avatar: "haibara_ai_square.png",
  avatarClass: "rounded-full",
  //theme: "light",
  //cover: "#F8F8F2",
  //coverTextColor: "#BD93F9",
  links: [
    { title: "GitHub", url: "https://github.com/syamaguc" },
    { title: "Twitter", url: "https://twitter.com/syamaguc" },
  ],
  lang: "jp",
  dateFormat: (date) =>
    new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date),
  middlewares: [ga("G-TV5MK3SE7E")],
  favicon: "favicon.ico",
});
