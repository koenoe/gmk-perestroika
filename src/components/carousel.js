// @flow
import React from 'react';
import LazyLoad from 'react-lazyload';
import ReactImagesCarousel from 'react-images';
import type { Node } from 'react';

import { Container } from 'components/contentBlocks.js';
import Image from 'components/image.js';

import concrete910 from '../../img/concrete-910.png';
import concreteBauer from '../../img/concrete-bauer.png';
import concreteOGR from '../../img/concrete-ogr.png';
import concreteProphet from '../../img/concrete-prophet.png';

import officeBauer from '../../img/office-bauer.png';
import officeNoxary280 from '../../img/office-noxary280.png';
import officeLynxL50 from '../../img/office-lynxl50.png';
import officeProphet from '../../img/office-prophet.png';

type CarouselImage = {|
  source: string,
  caption: string,
|};

const images: Array<Image> = [
  { source: concrete910, caption: 'TGR 910 by Yuktsi' },
  { source: concreteBauer, caption: 'Bauer by Dixie' },
  { source: concreteOGR, caption: 'OGR by Alchemist Keyboards' },
  { source: concreteProphet, caption: 'Prophet by Cable Car Designs' },
  { source: officeNoxary280, caption: 'Noxary 280 by xondat' },
  { source: officeBauer, caption: 'Bauer by Dixie' },
  { source: officeLynxL50, caption: 'Lynx L50 by wixxzblu' },
  { source: officeProphet, caption: 'Prophet by Cable Car Designs' },
];

type ViewProps = $ReadOnly<{|
  data: CarouselImage,
|}>;

function View(props: ViewProps): Node {
  const { data } = props;
  return (
    <LazyLoad height={200} offset={100}>
      <Image fadeIn src={data.source} alt={data.caption} />{' '}
    </LazyLoad>
  );
}

export default function Carousel(): Node {
  return (
    <Container>
      <ReactImagesCarousel views={images} components={{ View }} />
    </Container>
  );
}
