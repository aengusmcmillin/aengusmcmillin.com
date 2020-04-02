import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import SEO from "../components/SEO";

const NotesLayout = styled(Layout)`
  margin: 5em auto 6rem;

  @media (min-width: 300px) {
    max-width: 100%;
    width: 20ch;
  }
`;

const Note = styled.article`
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

const NoteType = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: -10px;
  margin-bottom: 15px;
  font-size: 11pt;
`

export default function NoteTemplate({data: { mdx }, pageContext}) {
    return (
        <NotesLayout>
          <Note>
            <SEO post={{ title: `${mdx.frontmatter.type}: ${mdx.frontmatter.title}`, path: pageContext.postPath }} />
            <h1>{mdx.frontmatter.title}</h1>
            <NoteType>{mdx.frontmatter.author}</NoteType>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </Note>
        </NotesLayout>
    );
}

export const noteQuery = graphql`
  query NotesBySlugAndType($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } } ) {
        body
        frontmatter {
            title
            author
            date(formatString: "MMMM Do, YYYY")
        }
    }
  }
`;