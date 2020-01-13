// @flow
import React from 'react';
import styled from '@emotion/styled';
import ReactImagesCarousel from 'react-images';
import type { Node } from 'react';

import { Container } from 'components/contentBlocks.js';

import concrete910 from '../../img/concrete-910.png';
import concreteBauer from '../../img/concrete-bauer.png';
import concreteOGR from '../../img/concrete-ogr.png';
import concreteProphet from '../../img/concrete-prophet.png';

import officeBauer from '../../img/office-bauer.png';
import officeNoxary280 from '../../img/office-noxary280.png';
import officeLynxL50 from '../../img/office-lynxl50.png';

type Image = {|
  src: string,
|};

const CarouselContainer = styled(Container)`
  .react-images__footer__count {
    font-family: 'Montserrat', serif;
  }
`;

const images: Array<Image> = [
  { src: concrete910 },
  { src: concreteBauer },
  { src: concreteOGR },
  { src: concreteProphet },
  { src: officeBauer },
  { src: officeNoxary280 },
  { src: officeLynxL50 },
];

export default function Carousel(): Node {
  return (
    <CarouselContainer>
      <ReactImagesCarousel views={images} />
    </CarouselContainer>
  );
}
