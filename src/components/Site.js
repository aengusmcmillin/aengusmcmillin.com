import React from 'react';
import styled from '@emotion/styled';

const Site = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default ({ children }) => (
  <Site role="site">
    {children}
  </Site>
);