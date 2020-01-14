// @flow
import React from 'react';
import styled from '@emotion/styled';

// $FlowFixMe
import 'react-lazy-load-image-component/src/effects/blur.css';

import type { Node } from 'react';

import Carousel from 'components/carousel.js';
import Cocoen from 'components/cocoen.js';
import RalColors from 'components/ralColors.js';
import Countdown from 'components/countdown.js';
import Grid from 'components/grid.js';
import Heading from 'components/heading.js';
import Kit from 'components/kit.js';
import type { Theme } from 'components/app.js';

import logoUrl from '../../img/logo.svg';

type CssProps = $ReadOnly<{|
  theme: Theme,
|}>;

const Layout = styled.div`
  margin: auto;
  max-width: 375px;
  padding: 15px;
  box-sizing: border-box;

  ${({ theme }) => theme.media.s`
    max-width: 576px;
  `}

  ${({ theme }) => theme.media.m`
    max-width: 768px;
    padding: 25px;
  `}

  ${({ theme }) => theme.media.l`
    max-width: 992px;
  `}

  ${({ theme }) => theme.media.xl`
    max-width: 1200px;
  `}

  ${({ theme }) => theme.media.xxl`
    max-width: 1600px;
  `}
`;

const Logo = styled.img`
  margin: 50px auto;
  display: block;
  max-width: 100%;

  ${({ theme }) => theme.media.l`
    margin-top: 100px;
    max-width: 50%;
  `}
`;

const Intro = styled.p`
  margin: 0 auto 25px;
  max-width: 80%;
`;

const IntroContainer = styled.div`
  margin: 0 auto 100px;
  color: ${({ theme }: CssProps) => theme.colors.red};
  background: ${({ theme }: CssProps) => theme.colors.cream};
  padding: 25px 0;
  box-sizing: border-box;
  max-width: 100%;

  ${({ theme }) => theme.media.l`
    max-width: 70%;
  `}

  ${({ theme }) => theme.media.xl`
    max-width: 60%;
  `}
`;

const Header = styled.div`
  margin-left: 9%;

  ${({ theme }) => theme.media.m`
    margin-left: 28%;
  `}
`;

const Container = styled.div`
  margin: auto;
`;

const H1 = styled.h1`
  opacity: 0.25;
  line-height: 1.2;
  margin-bottom: 25px;

  span {
    display: block;
    font-size: 12px;
    font-weight: 700;
  }
`;

export default function Main(): Node {
  return (
    <Layout>
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
        <RalColors alignment="right" />
      </Container>
      <Container>
        <H1>
          Renders <span>by MacSurfy</span>
        </H1>
        <Carousel />
      </Container>
      <Container>
        <H1>
          Renders <span>by Janglad</span>
        </H1>
        <Grid />
      </Container>
      <Container>
        <H1>
          Lighting <span>day and night</span>
        </H1>
        <Cocoen />
      </Container>
    </Layout>
  );
}
