// @flow
import React from 'react';
import styled from '@emotion/styled';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// $FlowFixMe
import 'react-lazy-load-image-component/src/effects/blur.css';

import type { Node } from 'react';

import Heading from 'components/heading.js';

import baseKitUrl from '../../img/base-kit.png';
import usualKitUrl from '../../img/usual-kit.png';
import unusualKitUrl from '../../img/unusual-kit.png';
import modernKitUrl from '../../img/modern-kit.png';

const Container = styled.div`
  margin-bottom: 75px;
`;

type CssProps = $ReadOnly<{|
  alignment: 'left' | 'right',
|}>;

const Header = styled.div`
  margin-left: ${({ alignment }: CssProps) =>
    alignment === 'right' ? '70%' : 0};
`;

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${({ alignment }: CssProps) =>
    alignment === 'right' ? 'row' : 'row-reverse'};
`;

const ImageContainer = styled.div`
  max-width: 65%;
  margin-right: ${({ alignment }: CssProps) =>
    alignment === 'right' ? '5%' : 0};
  margin-left: ${({ alignment }: CssProps) =>
    alignment === 'left' ? '5%' : 0};
  margin-top: -135px;

  img {
    max-width: 100%;
  }
`;
const Paragraph = styled.p`
  max-width: 30%;
`;

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
