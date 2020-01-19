// @flow
import React from 'react';
import ReactImagesCarousel from 'react-images';
import styled from '@emotion/styled';
import type { Node, ComponentType } from 'react';
import type { ViewType } from 'react-images';

import { Container } from 'components/contentBlocks.js';
import Image from 'components/image.js';
import type { Theme } from 'components/app.js';
import type { ImageSource } from 'components/image.js';

import concrete910Small from '../../img/small/concrete-910.jpg';
import concreteBauerSmall from '../../img/small/concrete-bauer.jpg';
import concreteOGRSmall from '../../img/small/concrete-ogr.jpg';
import concreteProphetSmall from '../../img/small/concrete-prophet.jpg';

import concrete910Medium from '../../img/medium/concrete-910.jpg';
import concreteBauerMedium from '../../img/medium/concrete-bauer.jpg';
import concreteOGRMedium from '../../img/medium/concrete-ogr.jpg';
import concreteProphetMedium from '../../img/medium/concrete-prophet.jpg';

import concrete910Large from '../../img/large/concrete-910.jpg';
import concreteBauerLarge from '../../img/large/concrete-bauer.jpg';
import concreteOGRLarge from '../../img/large/concrete-ogr.jpg';
import concreteProphetLarge from '../../img/large/concrete-prophet.jpg';

import officeBauerSmall from '../../img/small/office-bauer.jpg';
import officeNoxary280Small from '../../img/small/office-noxary280.jpg';
import officeLynxL50Small from '../../img/small/office-lynxl50.jpg';
import officeProphetSmall from '../../img/small/office-prophet.jpg';

import officeBauerMedium from '../../img/medium/office-bauer.jpg';
import officeNoxary280Medium from '../../img/medium/office-noxary280.jpg';
import officeLynxL50Medium from '../../img/medium/office-lynxl50.jpg';
import officeProphetMedium from '../../img/medium/office-prophet.jpg';

import officeBauerLarge from '../../img/large/office-bauer.jpg';
import officeNoxary280Large from '../../img/large/office-noxary280.jpg';
import officeLynxL50Large from '../../img/large/office-lynxl50.jpg';
import officeProphetLarge from '../../img/large/office-prophet.jpg';

type CssProps = $ReadOnly<{|
  theme: Theme,
|}>;

const Span: ComponentType<*> = styled.span`
  color: ${(props: CssProps) => props.theme.colors.cream};
`;

type CarouselImage = {|
  source: ImageSource,
  caption: string,
|};

const images: Array<CarouselImage> = [
  {
    source: {
      small: concrete910Small,
      medium: concrete910Medium,
      large: concrete910Large,
    },
    caption: 'TGR 910 by Yuktsi',
  },
  {
    source: {
      small: concreteBauerSmall,
      medium: concreteBauerMedium,
      large: concreteBauerLarge,
    },
    caption: 'Bauer by Dixie',
  },
  {
    source: {
      small: concreteOGRSmall,
      medium: concreteOGRMedium,
      large: concreteOGRLarge,
    },
    caption: 'OGR by Alchemist Keyboards',
  },
  {
    source: {
      small: concreteProphetSmall,
      medium: concreteProphetMedium,
      large: concreteProphetLarge,
    },
    caption: 'Prophet by Cable Car Designs',
  },
  {
    source: {
      small: officeNoxary280Small,
      medium: officeNoxary280Medium,
      large: officeNoxary280Large,
    },
    caption: 'Noxary 280 by xondat',
  },
  {
    source: {
      small: officeBauerSmall,
      medium: officeBauerMedium,
      large: officeBauerLarge,
    },
    caption: 'Bauer by Dixie',
  },
  {
    source: {
      small: officeLynxL50Small,
      medium: officeLynxL50Medium,
      large: officeLynxL50Large,
    },
    caption: 'Lynx L50 by wixxzblu',
  },
  {
    source: {
      small: officeProphetSmall,
      medium: officeProphetMedium,
      large: officeProphetLarge,
    },
    caption: 'Prophet by Cable Car Designs',
  },
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
