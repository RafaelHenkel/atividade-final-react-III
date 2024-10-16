import React from 'react';
import HeaderDefault from './HeaderDefault';
import PageDefaultStyled from './PageDefaultStyled';
import FooterDefault from './FooterDefault';
import { Container } from '@mui/material';

interface PageDefaultProps {
  children: React.ReactNode;
}

function PageDefault({ children }: PageDefaultProps) {
  return (
    <>
      <PageDefaultStyled>
        <HeaderDefault />
        <Container sx={{ minHeight: '76vh' }}>{children}</Container>
        <FooterDefault />
      </PageDefaultStyled>
    </>
  );
}

export default PageDefault;
