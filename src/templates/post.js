import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import SEO from "../components/SEO";

const BlogLayout = styled(Layout)`
  margin: 5em auto 6rem;

  @media (min-width: 300px) {
    max-width: 100%;
    width: 20ch;
  }
`;

const Blog = styled.article`
  margin-bottom: 5rem;
  align-items: center;
  display: flex;
  flex-direction: column;

  h1, h2, h3, h4, h5, h6 {
    width: 100%;
    max-width: 600px;
    vertical-align: middle;
  }

  p {
    width: 100%;
    max-width: 600px;
    vertical-align: middle;
  }

  ul {
    width: 100%;
    max-width: 600px;
  }
`;

export default function PostTemplate({data: { mdx }, pageContext}) {
    return (
        <BlogLayout>
          <Blog>
            <SEO post={{ title: mdx.frontmatter.title, path: pageContext.postPath }} />
            <h1>{mdx.frontmatter.title}</h1>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </Blog>
        </BlogLayout>
    );
}

export const pageQuery = graphql`
  query PostsBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
        body
        frontmatter {
            title
        }
    }
  }
`;