export const SITE = {
  website: "https://ramneet-singh.github.io/", // replace this with your deployed domain
  author: "Ramneet Singh",
  profile: "https://ramneet-singh.netlify.app/",
  desc: "I write about things that interest me. For now, this includes computer science, music and food.",
  title: "The Maverick Chronicles",
  ogImage: "blog-photo.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/Ramneet-Singh/maverick-chronicles/edit/gh-pages/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Calcutta", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
