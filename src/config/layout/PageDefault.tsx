import React from 'react';
import HeaderDefault from './header/HeaderDefault';
import MainDefaultStyled from './MainDefaultStyled';
import PageDefaultStyled from './PageDefaultStyled';
import FooterDefault from './footer/FooterDefault';
import { Container } from '@mui/material';

interface PageDefaultProps {
  children: React.ReactNode;
}

function PageDefault({ children }: PageDefaultProps) {
  return (
    <>
      <PageDefaultStyled>
        <HeaderDefault />
        <MainDefaultStyled>
          <Container>{children}</Container>
        </MainDefaultStyled>
        <FooterDefault />
      </PageDefaultStyled>
    </>
  );
}

export default PageDefault;
