// @flow
import React from 'react';
import type { Node } from 'react';
import styled from '@emotion/styled';

import Heading from 'components/heading.js';
import {
  Body,
  Container,
  Header,
  ImageContainer,
  Text,
} from 'components/contentBlocks.js';
import Image from 'components/image.js';
import type { Theme } from 'components/app.js';

import baseKitUrl from '../../img/base-kit-without-title.png';
import usualKitUrl from '../../img/usual-kit-without-title.png';
import unusualKitUrl from '../../img/unusual-kit-without-title.png';
import modernKitUrl from '../../img/modern-kit-without-title.png';

type CssProps = $ReadOnly<{|
  theme: Theme,
|}>;

const Price = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  color: ${({ theme }: CssProps) => theme.colors.red};
  background: ${({ theme }: CssProps) => theme.colors.cream};
  display: inline-block;
  padding: 5px 15px;
  font-size: 13px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  cursor: default;
`;

type Content = {|
  title: string,
  subtitle: string,
  image: string,
  text: Node,
  price: number,
|};

function getContent(type: 'base' | 'usual' | 'unusual' | 'modern'): Content {
  switch (type) {
    case 'base':
      return {
        title: 'Base kit',
        subtitle: 'Базовый набор',
        image: baseKitUrl,
        text: (
          <>
            <p>
              The blend of beautiful Cyrillic and English characters is unique
              and symbolises the two-way thinking that made room for a new way
              of life in Russia. Just maybe, the kit could inspire you to try a
              new way of working.
            </p>
            <p>
              This kit is large and includes numpad support and ISO support,
              making it a great choice for a variety of layouts.
            </p>
          </>
        ),
        price: 100,
      };
    case 'usual':
      return {
        title: 'Usual kit',
        subtitle: 'Обычный набор',
        image: usualKitUrl,
        text: (
          <>
            <p>
              Not feeling the Cyrillics? Have no fear, you can convert the kit
              to be fully English (US/UK). Just like Gorbachev, the set strives
              to provide for the masses.
            </p>
            <p>
              During the interest check, it was clear that it would be
              beneficial to create this, and so it’s ultimately the community’s
              kit.
            </p>
          </>
        ),
        price: 100,
      };
    case 'unusual':
      return {
        title: 'Unusual kit',
        subtitle: 'Необычный набор',
        image: unusualKitUrl,
        text: (
          <>
            <p>
              For those among us who don’t fit the mould - this kit is for you.
              It covers the more unusual layouts, such as 40% and split.
            </p>
            <p>
              After all, some of history’s greatest milestones were achieved by
              folks who did things a little differently.
            </p>
          </>
        ),
        price: 100,
      };
    case 'modern':
      return {
        title: 'Modern kit',
        subtitle: 'Современный набор',
        image: modernKitUrl,
        text: (
          <>
            <p>
              For the people who want it even more modern than the base kit. The
              Modern Kit covers a 60% keyboard layout to achieve a smart uniform
              look without the use of English legends.
            </p>
            <p>Forward-thinkers, we salute you.</p>
          </>
        ),
        price: 100,
      };
    default:
      return {
        title: '',
        subtitle: '',
        image: baseKitUrl,
        text: '',
        price: 0,
      };
  }
}

type Props = $ReadOnly<{|
  type: 'base' | 'usual' | 'unusual' | 'modern',
  alignment: 'left' | 'right',
|}>;

export default function Kit({ type, alignment }: Props): Node {
  const { title, subtitle, image, text, price } = getContent(type);

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
          <Image src={image} alt={`${title} ${subtitle}`} />
          <Price>{price} USD</Price>
        </ImageContainer>
        <Text>{text}</Text>
      </Body>
    </Container>
  );
}
