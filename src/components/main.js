// @flow
import React from 'react';
import styled from '@emotion/styled';

import type { Node } from 'react';

import Heading from 'components/heading.js';
import Countdown from 'components/countdown.js';
import LogoUrl from '../../img/logo.svg';

const Logo = styled.img`
  margin: 100px auto 50px;
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
  box-sizing: border-box;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Launch = styled.div`
  margin: 0 auto 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Main(): Node {
  return (
    <>
      <Logo src={LogoUrl} />
      <Launch>
        <Title>Groupbuy ends in</Title>
        <Countdown date="2020-02-29T23:59:59" />
      </Launch>
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
