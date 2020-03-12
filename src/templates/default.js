import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';

const DefaultLayout = styled(Layout)`
  margin: 5em;
`;

export default ({children}) => {
    return (
      <DefaultLayout>
        {children}
      </DefaultLayout>
    );
};