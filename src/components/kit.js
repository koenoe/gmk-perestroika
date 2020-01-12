// @flow
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import type { Node } from 'react';

import Heading from 'components/heading.js';
import {
  Body,
  Container,
  Header,
  ImageContainer,
  Paragraph,
} from 'components/contentBlocks.js';

import baseKitUrl from '../../img/base-kit-without-title.png';
import usualKitUrl from '../../img/usual-kit-without-title.png';
import unusualKitUrl from '../../img/unusual-kit-without-title.png';
import modernKitUrl from '../../img/modern-kit-without-title.png';

type Content = {|
  title: string,
  subtitle: string,
  image: string,
  text: string,
|};

function getContent(type: 'base' | 'usual' | 'unusual' | 'modern'): Content {
  switch (type) {
    case 'base':
      return {
        title: 'Base kit',
        subtitle: 'Базовый набор',
        image: baseKitUrl,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec quam
        consequat, ornare ligula vitae, mollis elit. Duis hendrerit maximus
        sagittis. Suspendisse ac auctor est. Aenean commodo sagittis leo, ac
        vestibulum mi efficitur in. Mauris euismod purus lacus, a eleifend
        elit porta non. Nullam nec vehicula sem.`,
      };
    case 'usual':
      return {
        title: 'Usual kit',
        subtitle: 'Обычный набор',
        image: usualKitUrl,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec quam
          consequat, ornare ligula vitae, mollis elit. Duis hendrerit maximus
          sagittis. Suspendisse ac auctor est. Aenean commodo sagittis leo, ac
          vestibulum mi efficitur in. Mauris euismod purus lacus, a eleifend
          elit porta non. Nullam nec vehicula sem.`,
      };
    case 'unusual':
      return {
        title: 'Unusual kit',
        subtitle: 'Необычный набор',
        image: unusualKitUrl,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec quam
          consequat, ornare ligula vitae, mollis elit. Duis hendrerit maximus
          sagittis. Suspendisse ac auctor est. Aenean commodo sagittis leo, ac
          vestibulum mi efficitur in. Mauris euismod purus lacus, a eleifend
          elit porta non. Nullam nec vehicula sem.`,
      };
    case 'modern':
      return {
        title: 'Modern kit',
        subtitle: 'Современный набор',
        image: modernKitUrl,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec quam
          consequat, ornare ligula vitae, mollis elit. Duis hendrerit maximus
          sagittis. Suspendisse ac auctor est. Aenean commodo sagittis leo, ac
          vestibulum mi efficitur in. Mauris euismod purus lacus, a eleifend
          elit porta non. Nullam nec vehicula sem.`,
      };
    default:
      return {
        title: '',
        subtitle: '',
        image: baseKitUrl,
        text: '',
      };
  }
}

type Props = $ReadOnly<{|
  type: 'base' | 'usual' | 'unusual' | 'modern',
  alignment: 'left' | 'right',
|}>;

export default function Kit({ type, alignment }: Props): Node {
  const { title, subtitle, image, text } = getContent(type);

  return (
    <Container>
      <Header alignment={alignment}>
        <Heading alignment={alignment}>
          <h2>
            {title} <span>{subtitle}</span>
          </h2>
        </Heading>
      </Header>
      <Body alignment={alignment}>
        <ImageContainer alignment={alignment}>
          <LazyLoadImage
            src={image}
            alt={`${title} ${subtitle}`}
            effect="blur"
          />
        </ImageContainer>
        <Paragraph>{text}</Paragraph>
      </Body>
    </Container>
  );
}
