// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export default {
  siteMetadata: {
    title: `Biff's Brews`,
    siteUrl: `https://biffs-brews.netlify.app/`,
    description: `Biff Tannen likes his beer, and he wants to share it with you`,
    twitter: `@biffsbrews`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      // this is the name of the plugin you are adding
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `w201sv7e`,
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
