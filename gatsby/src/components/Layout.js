import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const PageWrapper = styled.div`
  margin: 5rem 0;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Nav />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </>
  );
}
