import React from "react"	
import { StaticQuery, graphql, Link } from "gatsby"	
import styled from '@emotion/styled'	
import Layout from "../components/Layout";

const AllNotes = styled.div`	
  width: 100%;
`;	

const Note = styled(Link)`	
  display: block;	
`;	

const NoteTitle = styled.h3`
  color: #333333;

  ${Note}:hover & {
    color: #777777;
  }
`;

const NoteAuthor = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: -10px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  font-size: 11pt;
  color: #888888;

  ${Note}:hover & {
    color: #AAAAAA;
  }
`

const NotesPage = ({data}) => {
  const Notes = data.notes.nodes.map(node => {
      let frontmatter = node.childMdx.frontmatter
      return (
      <Note to={`/notes/${frontmatter.slug}`}>
        <NoteTitle>{frontmatter.title}</NoteTitle>
        <NoteAuthor>{frontmatter.author}</NoteAuthor>
      </Note>
      )
    });
  return (
    <Layout>
      <AllNotes>{Notes}</AllNotes>
    </Layout>
  );
}

export const query = graphql`
  query {
    notes: allFile(
      filter: {
        sourceInstanceName: { eq: "notes" }
        relativePath: { glob: "**/*.{md,mdx}" }
      }
      sort: { fields: [childMdx___frontmatter___title], order: DESC }
    ) {
      nodes {
        name
        childMdx {
          frontmatter {
            title
            author
            slug
          }
        }
      }
    }
  }
`;

export default NotesPage
