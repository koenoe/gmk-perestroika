// @flow
import React from 'react';
import styled from '@emotion/styled';

import type { Node } from 'react';

import Heading from 'components/heading.js';
import LogoUrl from '../../img/logo.svg';

const Logo = styled.img`
  margin: 100px auto;
  max-width: 600px;
  display: block;
`;

const H1 = styled.h1`
  text-align: center;
`;

const Intro = styled.p`
  margin: 0 auto;
  max-width: 600px;
`;

const Container = styled.div`
  margin: auto;
  max-width: 800px;
  color: #59191f;
  background: #e9e0d2;
  padding: 25px 0;
`;

// const Divider = styled.hr`
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   max-width: 300px;
// `;

export default function Main(): Node {
  return (
    <>
      <Logo src={LogoUrl} />
      <Container>
        <Heading>
          <H1>Our inspiration</H1>
        </Heading>
        <Intro>
          The rich dark red colour is a standout feature of this set. Its
          Cyrillic alphas give the set a unique aesthetic and are a nod to its
          name, Perestroika, which points to connotations of reformation and
          openness. In the same way, I hope its users will be empowered to be
          more daring - to unleash new ways of thinking and working when using
          the set.
        </Intro>
      </Container>
    </>
  );
}
