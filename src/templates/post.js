import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import SEO from "../components/SEO";
import Newsletter from "../components/Newsletter";

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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
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

const PostDate = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: -10px;
  margin-bottom: 15px;
  font-size: 11pt;
`;

export default function PostTemplate({ data: { mdx }, pageContext }) {
  return (
    <BlogLayout>
      <Blog>
        <SEO
          post={{ title: mdx.frontmatter.title, path: pageContext.postPath }}
        />
        <h1>{mdx.frontmatter.title}</h1>
        <PostDate>{mdx.frontmatter.date}</PostDate>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <h2>One last thing.</h2>
        <p>
          If you enjoyed this post, consider signing up for my newsletter. Every
          week The Wednesday Writeup will come to you with an update on what I
          have been working on and thinking about, as well as recommendations
          for things to read and watch. You can check out the backlog at{" "}
          <a href="https://aengus.substack.com">aengus.substack.com</a>.
        </p>
        <p>
          I don't have comments on this site, but I would also greatly
          appreciate any feedback via{" "}
          <a href="https://twitter.com/aengusmcmillin">Twitter</a> or{" "}
          <a href="mailto:hello@aengusmcmillin.com">Email</a>.
        </p>
        <Newsletter />
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
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
