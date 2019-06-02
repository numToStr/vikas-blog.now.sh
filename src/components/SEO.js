import React from "react";
import Helmet from "react-helmet";
import useSiteMetadata from "../hooks/useSiteMetadata";

const SEO = ({ lang, title }) => {
    const { title: siteTitle, description, author } = useSiteMetadata();

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${author} | ${siteTitle}`}
            meta={[
                {
                    name: `description`,
                    content: description,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: description,
                },
            ]}
        />
    );
};

SEO.defaultProps = {
    lang: `en`,
};

export default SEO;
