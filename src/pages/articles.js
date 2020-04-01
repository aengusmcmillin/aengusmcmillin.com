import React from "react"	
import { StaticQuery, graphql, Link } from "gatsby"	
import styled from '@emotion/styled'	
import Layout from "../components/Layout";

const AllPosts = styled.div`	
`;	

const Post = styled(Link)`	
  display: block;	

`;	

const PostTitle = styled.h3`
  color: #333333;

  ${Post}:hover & {
    color: #777777;
  }
`;

const PostDate = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: -10px;
  margin-bottom: 15px;
  font-size: 11pt;
  color: #888888;

  ${Post}:hover & {
    color: #AAAAAA;
  }
`

const ArticlesPage = ({data}) => {
      const Posts = data.posts.nodes.map(node => (
        <Post to={node.childMdx.frontmatter.slug}>
          <PostTitle>{node.childMdx.frontmatter.title}</PostTitle>
          <PostDate>{node.childMdx.frontmatter.date}</PostDate>
          <p>{node.childMdx.excerpt}</p>
        </Post>
      ));
    return (
      <Layout>
        <AllPosts>{Posts}</AllPosts>
      </Layout>
    );
}

export const query = graphql`
         query {
           posts: allFile(
             filter: {
               relativePath: { glob: "posts/**/*.{md,mdx}" }
               childMdx: { frontmatter: { published: { eq: true } } }
             }
             sort: { fields: [childMdx___frontmatter___date], order: DESC }
           ) {
             nodes {
               name
               childMdx {
                 excerpt(pruneLength: 250)
                 frontmatter {
                   date(formatString: "MMMM D, Y")
                   title
                   slug
                 }
               }
             }
           }
         }
       `;

export default ArticlesPage
