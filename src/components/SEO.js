import path from 'path';
import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

const SEO = ({ post }) => {
  const data = useStaticQuery(graphql`
      {
        site {
          siteMetadata {
            title
            description
            image
            baseUrl
            social {
              twitter
            }
          }
        }
      }
  `)

  const defaults = data.site.siteMetadata;

  if (defaults.baseUrl === '' && typeof window !== 'undefined') {
    defaults.baseUrl = window.location.origin;
  }

  if (defaults.baseUrl === '') {
    console.error('Please set a baseUrl in your site metadata!');
    return null;
  }
  if (post === undefined) {
    post = {}
  }

  const title = (post.title && post.title + " - " + defaults.title) || defaults.title;
  const description = post.description || defaults.description;
  const url = new URL(post.path || '', defaults.baseUrl);
  const image = post.image ? new URL(post.image, defaults.baseUrl) : false;

  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={defaults.social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.any,
      excerpt: PropTypes.any,
    }),
  }),
  postImage: PropTypes.string,
};

SEO.defaultProps = {
  isBlogPost: false,
  postData: { childMarkdownRemark: {} },
  postImage: null,
};

export default SEO;
