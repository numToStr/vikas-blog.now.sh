module.exports = {
    siteMetadata: {
        title: `Full Stack Developer`,
        description: `A Full Stack Developer who loves to make new things.`,
        author: `Vikas Raj`,
        social: {
            twitter: "@numberToString",
            github: "@vkasraj",
        },
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/posts`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-relative-images`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 768,
                            linkImagesToOriginal: false,
                        },
                    },
                ],
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-material-ui`,
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /images/, // See below to configure properly
                },
            },
        },
        {
            resolve: "gatsby-plugin-no-sourcemaps",
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
