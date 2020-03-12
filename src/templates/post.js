import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

const BlogLayout = styled(Layout)`
  margin: 5em auto 6rem;

  @media (min-width: 300px) {
    max-width: 100%;
    width: 20ch;
  }
`;

const Blog = styled.article`
  margin-bottom: 5rem;
`;

export default function PostTemplate({data: { mdx }}) {
    return (
        <BlogLayout>
          <Blog>
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