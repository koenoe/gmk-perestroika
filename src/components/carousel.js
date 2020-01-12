// @flow
import React from 'react';
// import styled from '@emotion/styled';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import type { Node } from 'react';

import { Container } from 'components/contentBlocks.js';

import concrete910 from '../../img/concrete-910.png';
// import concreteBauer from '../../img/concrete-bauer.png';
// import concreteOGR from '../../img/concrete-ogr.png';
// import concreteProphet from '../../img/concrete-prophet.png';

export default function Carousel(): Node {
  return (
    <Container>
      <LazyLoadImage src={concrete910} alt="" effect="blur" />
      {/* <LazyLoadImage src={concreteBauer} alt="" effect="blur" />
      <LazyLoadImage src={concreteOGR} alt="" effect="blur" />
      <LazyLoadImage src={concreteProphet} alt="" effect="blur" /> */}
    </Container>
  );
}
