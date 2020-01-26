// @flow
import React, { useState } from 'react';
import type { Node, ComponentType } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Transition } from 'react-transition-group';

import Heading from 'components/heading.js';
import {
  Body,
  Container,
  Header,
  ImageContainer,
  Text,
} from 'components/contentBlocks.js';
import Image from 'components/image.js';
import Modal from 'components/modal.js';
import type { Theme } from 'components/app.js';
import type { ImageSource } from 'components/image.js';

import baseKitUrlLarge from '../../img/large/base-kit-without-title.jpg';
import usualKitUrlLarge from '../../img/large/usual-kit-without-title.jpg';
import unusualKitUrlLarge from '../../img/large/unusual-kit-without-title.jpg';
import modernKitUrlLarge from '../../img/large/modern-kit-without-title.jpg';

import baseKitUrlMedium from '../../img/medium/base-kit-without-title.jpg';
import usualKitUrlMedium from '../../img/medium/usual-kit-without-title.jpg';
import unusualKitUrlMedium from '../../img/medium/unusual-kit-without-title.jpg';
import modernKitUrlMedium from '../../img/medium/modern-kit-without-title.jpg';

import baseKitUrlSmall from '../../img/small/base-kit-without-title.jpg';
import usualKitUrlSmall from '../../img/small/usual-kit-without-title.jpg';
import unusualKitUrlSmall from '../../img/small/unusual-kit-without-title.jpg';
import modernKitUrlSmall from '../../img/small/modern-kit-without-title.jpg';

type CssProps = $ReadOnly<{|
  theme: Theme,
|}>;

const Price: ComponentType<*> = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  color: ${({ theme }: CssProps) => theme.colors.red};
  background: ${({ theme }: CssProps) => theme.colors.cream};
  display: inline-block;
  padding: 2px 6px;
  font-size: 12px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  cursor: default;

  ${({ theme }) => theme.media.m`
    padding: 5px 15px;
    top: 15px;
    right: 15px;
    font-size: 13px;
  `}
`;

const buttonStyles = ({ theme }: CssProps) =>
  css`
    box-sizing: border-box;
    padding: 10px 15px;
    color: ${theme.colors.cream};
    border: 2px solid ${theme.colors.cream};
    background: transparent;
    transition-duration: 0.5s;
    transition-property: color, background-color;

    &:hover {
      background: ${theme.colors.cream};
      color: ${theme.colors.red};
    }
  `;

const Button: ComponentType<*> = styled.button`
  ${buttonStyles}
`;

const ModalOverlay: ComponentType<*> = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.75);
  transition: 0.25s;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
`;

const ModalContent: ComponentType<*> = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  max-width: 725px;
  width: 95%;
  box-sizing: border-box;
  transform: translateX(-50%) translateY(-50%);
  background: ${({ theme }: CssProps) => theme.colors.red};
  color: ${({ theme }: CssProps) => theme.colors.cream};
  overflow: hidden;
  transition: 0.5s;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
`;

const ModalHeader: ComponentType<*> = styled.div`
  margin: 25px 0 0 50%;
  transform: translateX(-91%);
  white-space: nowrap;

  header h1 {
    font-size: 26px;

    ${({ theme }) => theme.media.m`
      font-size: 34px;
    `}
  }

  ${({ theme }: CssProps) => theme.media.m`
    transform: translateX(-57%);
  `}

  ${({ theme }: CssProps) => theme.media.l`
    transform: translateX(-60%);
  `}
`;

const ModalButtons: ComponentType<*> = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px 20px;
  flex-direction: column;

  ${({ theme }: CssProps) => theme.media.l`
    flex-direction: row;
    padding: 25px;
  `}
`;

const ModalButton: ComponentType<*> = styled.a`
  ${buttonStyles}
  cursor: pointer;
  user-select: none;
  font-family: ${({ theme }: CssProps) => theme.fonts.secondary};
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;

  ${({ theme }: CssProps) => theme.media.l`
    margin-left: 25px;
    margin-bottom: 0;
    width: auto;
    text-align: left;

    &:first-of-type {
      margin-left: 0;
    }
  `}
`;

type Region = {|
  name: string,
  url: string,
|};

type Content = {|
  title: string,
  subtitle: string,
  image: ImageSource,
  text: Node,
  price: number,
  regions: Array<Region>,
|};

const DEFAULT_REGIONS = [
  {
    name: 'America',
    url: 'https://store.projectkeyboard.com/collections/group-buys',
  },
  {
    name: 'Europe',
    url: 'https://mykeyboard.eu/catalogue/category/keycaps/gmk_105/',
  },
  {
    name: 'Asia',
    url: 'https://ilumkb.com/collections/groupbuy',
  },
  {
    name: 'Oceania',
    url: 'https://dailyclack.com/collections/group-buys',
  },
  {
    name: 'UA/RU/BY',
    url: 'https://groupbuy.funkeys.com.ua/gmk_perestroika',
  },
];

function getContent(type: 'base' | 'usual' | 'unusual' | 'modern'): Content {
  switch (type) {
    case 'base':
      return {
        title: 'Base kit',
        subtitle: 'Базовый набор',
        image: {
          small: baseKitUrlSmall,
          medium: baseKitUrlMedium,
          large: baseKitUrlLarge,
        },
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
        price: 129,
        regions: DEFAULT_REGIONS,
      };
    case 'usual':
      return {
        title: 'Usual kit',
        subtitle: 'Обычный набор',
        image: {
          small: usualKitUrlSmall,
          medium: usualKitUrlMedium,
          large: usualKitUrlLarge,
        },
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
        price: 59,
        regions: DEFAULT_REGIONS,
      };
    case 'unusual':
      return {
        title: 'Unusual kit',
        subtitle: 'Необычный набор',
        image: {
          small: unusualKitUrlSmall,
          medium: unusualKitUrlMedium,
          large: unusualKitUrlLarge,
        },
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
        price: 39,
        regions: DEFAULT_REGIONS,
      };
    case 'modern':
      return {
        title: 'Modern kit',
        subtitle: 'Современный набор',
        image: {
          small: modernKitUrlSmall,
          medium: modernKitUrlMedium,
          large: modernKitUrlLarge,
        },
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
        price: 39,
        regions: DEFAULT_REGIONS,
      };
    default:
      return {
        title: '',
        subtitle: '',
        image: {
          small: baseKitUrlSmall,
          medium: baseKitUrlMedium,
          large: baseKitUrlLarge,
        },
        text: '',
        price: 0,
        regions: DEFAULT_REGIONS,
      };
  }
}

type Props = $ReadOnly<{|
  type: 'base' | 'usual' | 'unusual' | 'modern',
  alignment: 'left' | 'right',
|}>;

export default function Kit({ type, alignment }: Props): Node {
  const [showBuyModal, setShowBuyModal] = useState<boolean>(false);
  const { title, subtitle, image, text, price, regions } = getContent(type);

  const handleOpen = (e: SyntheticMouseEvent<>) => {
    e.preventDefault();

    setShowBuyModal(true);
  };

  const handleClose = (e: SyntheticMouseEvent<>) => {
    e.preventDefault();

    setShowBuyModal(false);
  };

  return (
    <>
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
            {price > 0 && <Price>{price} USD</Price>}
          </ImageContainer>
          <Text>
            {text}
            {price > 0 && (
              <Button type="button" onClick={handleOpen}>
                pre-order
              </Button>
            )}
          </Text>
        </Body>
      </Container>
      <Modal>
        <Transition in={showBuyModal} timeout={100} unmountOnExit mountOnEnter>
          {state => <ModalOverlay onClick={handleClose} state={state} />}
        </Transition>
        <Transition in={showBuyModal} timeout={200} unmountOnExit mountOnEnter>
          {state => (
            <ModalContent state={state}>
              <ModalHeader>
                <Heading alignment="center">
                  <h1>Choose your region</h1>
                </Heading>
              </ModalHeader>
              <ModalButtons>
                {regions.map(({ name, url }) => (
                  <ModalButton
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </ModalButton>
                ))}
              </ModalButtons>
            </ModalContent>
          )}
        </Transition>
      </Modal>
    </>
  );
}
