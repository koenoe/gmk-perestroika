// @flow
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { shuffle } from 'lodash';

import { Container } from 'components/contentBlocks.js';
import Image from 'components/image.js';

import type { Node, ComponentType } from 'react';
import type { Theme } from 'components/app.js';

import projectKeyboardLogoUrl from '../../img/logo-projectkeyboard.svg';
import myKeyboardLogoUrl from '../../img/logo-mykeyboard.svg';
import ilumkbLogoUrl from '../../img/logo-ilumkb.svg';
import dailyClackLogoUrl from '../../img/logo-dailyclack.svg';
import funkeysLogoUrl from '../../img/logo-funkeys.svg';

type CssProps = $ReadOnly<{|
  theme: Theme,
  width: string,
|}>;

const Logos: ComponentType<*> = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
  align-items: center;

  ${({ theme }: CssProps) => theme.media.l`
    grid-template-columns: repeat(5, 1fr);
  `}
`;

const Logo: ComponentType<*> = styled.a`
  display: flex;
  color: ${({ theme }: CssProps) => theme.colors.red};
  background: ${({ theme }: CssProps) => theme.colors.cream};
  padding: 25px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    padding-top: 100%;
  }

  ${({ theme }: CssProps) => theme.media.xl`
    padding: 50px;
  `}
`;

type Vendor = {|
  id: number,
  name: string,
  logo: string,
  url: string,
|};

const vendors: Array<Vendor> = [
  {
    id: 1,
    name: 'Project Keyboard',
    logo: projectKeyboardLogoUrl,
    url: 'https://store.projectkeyboard.com/products/gb-gmk-perestroika',
  },
  {
    id: 2,
    name: 'MyKeyboard',
    logo: myKeyboardLogoUrl,
    url:
      'https://mykeyboard.eu/catalogue/category/group-buys/gmk-perestroika_253/',
  },
  {
    id: 3,
    name: 'Daily Clack',
    logo: dailyClackLogoUrl,
    url: 'https://dailyclack.com/products/gmk-perestroika',
  },
  {
    id: 4,
    name: 'iLumkb',
    logo: ilumkbLogoUrl,
    url: 'https://ilumkb.com/collections/groupbuy/products/gb-gmk-perestroika',
  },
  {
    id: 5,
    name: 'Funkeys',
    logo: funkeysLogoUrl,
    url: 'https://groupbuy.funkeys.com.ua/gmk_perestroika',
  },
];

export default function Vendors(): Node {
  const [gallery, setGallery] = useState<Array<Vendor>>(vendors);

  useEffect(() => {
    setGallery(shuffle(vendors));
  }, [vendors]);

  return (
    <Container>
      <Logos>
        {gallery.map(({ id, name, logo, url }) => (
          <Logo key={id} href={url} target="_blank">
            <Image src={logo} alt={name} />
          </Logo>
        ))}
      </Logos>
    </Container>
  );
}
