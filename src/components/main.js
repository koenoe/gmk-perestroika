// @flow
import React from 'react';
import styled from '@emotion/styled';
// $FlowFixMe
import 'react-lazy-load-image-component/src/effects/blur.css';

import type { Node } from 'react';

import Countdown from 'components/countdown.js';
import Heading from 'components/heading.js';
import Kit from 'components/kit.js';
import Colors from 'components/colors.js';
import Carousel from 'components/carousel.js';

import logoUrl from '../../img/logo.svg';

const Logo = styled.img`
  margin: 100px auto 50px;
  max-width: 600px;
  display: block;
`;

const Intro = styled.p`
  margin: 0 auto 25px;
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

const Container = styled.div`
  margin: auto;
  max-width: 1400px;
`;

const H1 = styled.h1`
  opacity: 0.25;
`;

export default function Main(): Node {
  return (
    <>
      <Logo src={logoUrl} />
      <Countdown start="2020-02-01T00:00:00" end="2020-02-29T23:59:59" />
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
        <H1>Kits &amp; colors</H1>
        <Kit type="base" alignment="right" />
        <Kit type="usual" alignment="left" />
        <Kit type="unusual" alignment="right" />
        <Kit type="modern" alignment="left" />
        <Colors alignment="right" />
      </Container>
      <Container>
        <H1>Renders</H1>
        <Carousel />
      </Container>
    </>
  );
}
