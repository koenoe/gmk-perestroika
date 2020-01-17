// @flow
import React from 'react';
import ReactImagesCarousel from 'react-images';
import styled from '@emotion/styled';
import type { Node } from 'react';
import type { ViewType } from 'react-images';

import { Container } from 'components/contentBlocks.js';
import Image from 'components/image.js';
import type { Theme } from 'components/app.js';

import concrete910 from '../../img/concrete-910.png';
import concreteBauer from '../../img/concrete-bauer.png';
import concreteOGR from '../../img/concrete-ogr.png';
import concreteProphet from '../../img/concrete-prophet.png';

import officeBauer from '../../img/office-bauer.png';
import officeNoxary280 from '../../img/office-noxary280.png';
import officeLynxL50 from '../../img/office-lynxl50.png';
import officeProphet from '../../img/office-prophet.png';

type CssProps = $ReadOnly<{|
  theme: Theme,
|}>;

const Span = styled.span`
  color: ${(props: CssProps) => props.theme.colors.cream};
`;

type CarouselImage = {|
  source: string,
  caption: string,
|};

const images: Array<CarouselImage> = [
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
  return <Image src={data.source} alt={data.caption} />;
}

function FooterCaption(props: ViewType): Node {
  const { currentView } = props;
  const { caption } = currentView;
  return <Span>{caption}</Span>;
}

function FooterCount(props: ViewType): Node {
  const { currentIndex, views } = props;
  return (
    <Span>
      {currentIndex + 1}/{views.length}
    </Span>
  );
}

export default function Carousel(): Node {
  return (
    <Container>
      <ReactImagesCarousel
        views={images}
        components={{ View, FooterCaption, FooterCount }}
      />
    </Container>
  );
}
