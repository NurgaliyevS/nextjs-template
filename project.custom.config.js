import themes from "daisyui/src/theming/themes.js";

export const customConfig = {
  colors: {
    theme: "acid",
    main: themes[`[data-theme=acid]`],
  },
  // example as nurgaliyevs.com without https://
  domainName: "nurgaliyevs.com",
  mailgun: {
    subdomain: "mg",
    fromNoReply: `UptimeFriend <noreply@mg.nurgaliyevs.com>`,
    fromAdmin: `UptimeFriend <nurgasab@mg.nurgaliyevs.com>`,
    supportEmail: "nurgasab@nurgaliyevs.com",
    forwardRepliesTo: "nurgasab@gmail.com",
  },
  domainWithHttps: "",
  seo: {
    keywords: "",
    description: "",
    themeColor: "",
    applicationName: "",
    og: {
      title: "",
      url: "",
      image: "",
      imageAlt: "",
      articleAuthor: "",
      twitterSite: "",
      twitterImage: "",
    },
  },
};
