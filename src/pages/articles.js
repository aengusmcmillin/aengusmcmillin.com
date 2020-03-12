import React from "react"	
import { StaticQuery, graphql, Link } from "gatsby"	
import styled from '@emotion/styled'	
import Layout from "../components/Layout";

const AllPosts = styled.div`	
`;	

const Post = styled(Link)`	
  display: block;	
`;	

const ArticlesPage = ({data}) => {
      const Posts = data.posts.nodes.map(node => (
        <Post to={node.childMdx.frontmatter.slug}>
          <h3>{node.childMdx.frontmatter.title}</h3>
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
                   date
                   title
                   slug
                 }
               }
             }
           }
         }
       `;

export default ArticlesPage
