// @flow
import React from 'react';
import styled from '@emotion/styled';

import type { Node } from 'react';

import Countdown from 'components/countdown.js';
import Heading from 'components/heading.js';
import Kit from 'components/kit.js';

import logoUrl from '../../img/logo.svg';

const Logo = styled.img`
  margin: 100px auto 50px;
  max-width: 600px;
  display: block;
`;

const Intro = styled.p`
  margin: 0 auto;
  max-width: 600px;
`;

const IntroContainer = styled.div`
  margin: 0 auto 100px;
  max-width: 800px;
  color: #59191f;
  background: #e9e0d2;
  padding: 25px 0;
  box-sizing: border-box;
`;

const Header = styled.div`
  margin-left: 28%;
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

const Container = styled.div`
  margin: auto;
  max-width: 1600px;
`;

export default function Main(): Node {
  return (
    <>
      <Logo src={logoUrl} />
      <Launch>
        <Title>Groupbuy ends in</Title>
        <Countdown date="2020-02-29T23:59:59" />
      </Launch>
      <IntroContainer>
        <Header>
          <Heading alignment="center">
            <h1>Our inspiration</h1>
          </Heading>
        </Header>
        <Intro>
          The rich dark red colour is a standout feature of this set. Its
          Cyrillic alphas give the set a unique aesthetic and are a nod to its
          name, Perestroika, which points to connotations of reformation and
          openness. In the same way, I hope its users will be empowered to be
          more daring - to unleash new ways of thinking and working when using
          the set.
        </Intro>
      </IntroContainer>
      <Container>
        <Kit type="base" alignment="right" />
        <Kit type="usual" alignment="left" />
        <Kit type="unusual" alignment="right" />
        <Kit type="modern" alignment="left" />
      </Container>
    </>
  );
}
