// @flow
import React from 'react';
import styled from '@emotion/styled';

import Container from 'components/container.js';
import type { Node } from 'react';
import LogoUrl from '../../img/logo-transparent.png';

const Header = styled.div`
  background: #818181;
  color: #fff;
  padding: 75px 0;
`;

const Logo = styled.img`
  margin: auto;
  max-width: 400px;
  display: block;
`;

const Intro = styled.p`
  margin: 75px 0;
`;

const Divider = styled.hr`
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 300px;
`;

export default function Main(): Node {
  return (
    <Header>
      <Container narrow>
        <Logo src={LogoUrl} />
        <Intro>
          The rich dark red colour is a standout feature of this set. Its
          Cyrillic alphas give the set a unique aesthetic and are a nod to its
          name, Perestroika, which points to connotations of reformation and
          openness. In the same way, I hope its users will be empowered to be
          more daring - to unleash new ways of thinking and working when using
          the set.
        </Intro>
        <Divider />
      </Container>
    </Header>
  );
}
