// @flow
import React, { useState } from 'react';
import type { Node } from 'react';
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

const Button = styled.button`
  ${buttonStyles}
`;

const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.75);
  transition: 0.25s;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
`;

const ModalContent = styled.div`
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

const ModalHeader = styled.div`
  margin: 25px 0 0 50%;
  transform: translateX(-75%);
  white-space: nowrap;

  ${({ theme }: CssProps) => theme.media.l`
    transform: translateX(-50%);
  `}
`;

const ModalButtons = styled.div`
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

const ModalButton = styled.a`
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

type Content = {|
  title: string,
  subtitle: string,
  image: string,
  text: Node,
  price: number,
  vendors: {|
    europe: string,
    america: string,
    oceania: string,
    asia: string,
  |},
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
        price: 0,
        vendors: {
          europe: 'https://mykeyboard.eu',
          america: 'https://store.projectkeyboard.com',
          oceania: 'https://dailyclack.com',
          asia: 'https://ilumkb.com',
        },
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
        price: 0,
        vendors: {
          europe: 'https://mykeyboard.eu',
          america: 'https://store.projectkeyboard.com',
          oceania: 'https://dailyclack.com',
          asia: 'https://ilumkb.com',
        },
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
        price: 0,
        vendors: {
          europe: 'https://mykeyboard.eu',
          america: 'https://store.projectkeyboard.com',
          oceania: 'https://dailyclack.com',
          asia: 'https://ilumkb.com',
        },
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
        price: 0,
        vendors: {
          europe: 'https://mykeyboard.eu',
          america: 'https://store.projectkeyboard.com',
          oceania: 'https://dailyclack.com',
          asia: 'https://ilumkb.com',
        },
      };
    default:
      return {
        title: '',
        subtitle: '',
        image: baseKitUrl,
        text: '',
        price: 0,
        vendors: {
          europe: 'https://mykeyboard.eu',
          america: 'https://store.projectkeyboard.com',
          oceania: 'https://dailyclack.com',
          asia: 'https://ilumkb.com',
        },
      };
  }
}

type Props = $ReadOnly<{|
  type: 'base' | 'usual' | 'unusual' | 'modern',
  alignment: 'left' | 'right',
|}>;

export default function Kit({ type, alignment }: Props): Node {
  const [showBuyModal, setShowBuyModal] = useState<boolean>(false);
  const { title, subtitle, image, text, price, vendors } = getContent(type);
  const vendorNames = Object.keys(vendors);
  const vendorUrls = Object.values(vendors);

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
                Buy now
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
                  <h1>Choose vendor</h1>
                </Heading>
              </ModalHeader>
              <ModalButtons>
                {vendorNames.map((name, index) => (
                  <ModalButton
                    key={name}
                    href={vendorUrls[index]}
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
