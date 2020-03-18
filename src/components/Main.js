import React from 'react';
import styled from '@emotion/styled';


const Wrapper = styled('main')`
  margin: 90px auto 6rem;
  padding: 10px;
  max-width: 100ch;
  flex: 1 0 auto;
  width: 100%;
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

  img {
    max-height: 100%;
    max-width: 80%;
    display: block;
    margin: auto;
  }

  em {
    display: block;
    text-align: center;
    margin: auto;
  }
`;

const Main = ({ children, className }) => (
  <Wrapper role="main" id="content" className={className}>
    {children}
  </Wrapper>
);


export default Main;
