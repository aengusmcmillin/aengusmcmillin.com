import React from "react";
import styled from "@emotion/styled";
import Layout from "../../../components/Layout";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import SEO from "../../../components/SEO";

const BrainLayout = styled(Layout)`
  margin: 5em auto 6rem;

  @media (min-width: 300px) {
    max-width: 100%;
    width: 20ch;
  }
`;

const BrainNote = styled.article`
  width: 100%;
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

export default ({ note }, pageContext) => {
  let references = [];
  let referenceBlock;
  if (note.inboundReferences != null) {
    references = note.inboundReferences.map((ref) => <a href={ref}>{ref}</a>);

    if (references.length > 0) {
      referenceBlock = (
        <>
          <h1>Linked References</h1>
          {references}
        </>
      );
    }
  }

  return (
    <BrainLayout>
      <BrainNote>
        <SEO post={{ title: `${note.title}`, path: pageContext.postPath }} />
        <h1>{note.title}</h1>
        <MDXRenderer>{note.childMdx.body}</MDXRenderer>
        {referenceBlock}
      </BrainNote>
    </BrainLayout>
  );
};
