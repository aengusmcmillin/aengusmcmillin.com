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

  p {
    width: 100%;
    max-width: 80ch;
    vertical-align: middle;
  }

  ul {
    width: 100%;
    max-width: 80ch;
  }
`;

const Main = ({ children, className }) => (
  <Wrapper role="main" id="content" className={className}>
    {children}
  </Wrapper>
);


export default Main;