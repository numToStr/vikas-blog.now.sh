import { useStaticQuery, graphql } from "gatsby";

export default () => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    title
                    description
                    social {
                        twitter
                        github
                    }
                }
            }
        }
    `);

    return site.siteMetadata;
};
