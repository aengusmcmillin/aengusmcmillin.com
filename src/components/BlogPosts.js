import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styled from "@emotion/styled";

const AllPosts = styled.div``;

const Post = styled(Link)`
  display: block;
`;

export default () => (
  <StaticQuery
    query={graphql`
      query {
        posts: allFile(
          filter: {
            relativePath: { glob: "posts/**/*.{md,mdx}" }
            childMdx: { frontmatter: { published: { eq: true } } }
          }
          sort: { fields: relativePath, order: DESC }
        ) {
          nodes {
            name
            childMdx {
              excerpt(pruneLength: 250)
              frontmatter {
                title
                slug
                date
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const Posts = data.posts.nodes.map((node) => (
        <Post to={node.childMdx.frontmatter.slug}>
          <h3>{node.childMdx.frontmatter.title}</h3>
          <PostDate>{node.childMdx.frontmatter.date}</PostDate>
          <p>{node.childMdx.excerpt}</p>
        </Post>
      ));
      return <AllPosts>{Posts}</AllPosts>;
    }}
  />
);
