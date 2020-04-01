import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const DefaultLayout = styled(Layout)`
  margin: 5em;
`;

export default ({children}) => {
    return (
      <DefaultLayout>
        <SEO />
        {children}
      </DefaultLayout>
    );
};