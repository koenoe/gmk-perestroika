// @flow
import React from 'react';
// import styled from '@emotion/styled';
import ReactImagesCarousel from 'react-images';
import type { Node } from 'react';

import { Container } from 'components/contentBlocks.js';

import concrete910 from '../../img/concrete-910.png';
import concreteBauer from '../../img/concrete-bauer.png';
import concreteOGR from '../../img/concrete-ogr.png';
import concreteProphet from '../../img/concrete-prophet.png';

const images = [
  { src: concrete910 },
  { src: concreteBauer },
  { src: concreteOGR },
  { src: concreteProphet },
];

export default function Carousel(): Node {
  return (
    <Container>
      <ReactImagesCarousel views={images} />
    </Container>
  );
}
