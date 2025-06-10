// bu satırı silmeyin
import { siteContent } from "./content.js";
console.log("Site içeriği", siteContent);

/* Kodlar buradan aşağıya */
const htmlTemplate = {
  head: {
    title: "Dijital Pazarlama Uzmanı",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" },
      { rel: "stylesheet", href: "reset.css" },
      { rel: "stylesheet", href: "styles.css" }
    ]
  },