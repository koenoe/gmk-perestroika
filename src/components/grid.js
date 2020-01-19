// @flow
import React, { useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import type { Node, ComponentType } from 'react';

import styled from '@emotion/styled';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Container } from 'components/contentBlocks.js';
import type { Theme } from 'components/app.js';

import Image from 'components/image.js';

import Janglad268Angle from '../../img/janglad-268-angle.png';
import Janglad268Top from '../../img/janglad-268-top.png';
import JangladHbcpTop from '../../img/janglad-hbcp-top.png';
import JangladHbcpAngle from '../../img/janglad-hbcp-angle.png';
import JangladKira80Top from '../../img/janglad-kira80-top.png';
import JangladKira80Angle from '../../img/janglad-kira80-angle.png';
import JangladMinitomicTop from '../../img/janglad-minitomic-top.png';
import JangladMinitomicAngle from '../../img/janglad-minitomic-angle.png';
import JangladPolarisTop from '../../img/janglad-polaris-top.png';
import JangladPolarisAngle from '../../img/janglad-polaris-angle.png';
import JangladThermalTop from '../../img/janglad-thermal-top.png';
import JangladThermalAngle from '../../img/janglad-thermal-angle.png';

type CssProps = $ReadOnly<{|
  theme: Theme,
|}>;

const Wrapper: ComponentType<*> = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${({ theme }: CssProps) => theme.media.m`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${({ theme }: CssProps) => theme.media.l`
    grid-template-columns: repeat(4, 1fr);
  `}
`;

const Thumbnail: ComponentType<*> = styled.div`
  display: inherit;
  cursor: zoom-in;
  outline: none;

  img {
    object-fit: cover;
    display: block;
  }
`;

type GridImage = {|
  caption: string,
  source: string,
|};

const images: Array<GridImage> = [
  {
    caption: 'Noxary 268 by Xondat',
    source: Janglad268Angle,
  },
  {
    caption: 'Noxary 268 by Xondat',
    source: Janglad268Top,
  },
  {
    caption: 'HBCP by Hineybush',
    source: JangladHbcpAngle,
  },
  {
    caption: 'HBCP by Hineybush',
    source: JangladHbcpTop,
  },
  {
    caption: 'Kira80 by Thesiscamper',
    source: JangladKira80Angle,
  },
  {
    caption: 'Kira80 by Thesiscamper',
    source: JangladKira80Top,
  },
  {
    caption: 'Minitomic by Maarten',
    source: JangladMinitomicAngle,
  },
  {
    caption: 'Minitomic by Maarten',
    source: JangladMinitomicTop,
  },
  {
    caption: 'Polaris by ai03',
    source: JangladPolarisAngle,
  },
  {
    caption: 'Polaris by ai03',
    source: JangladPolarisTop,
  },
  {
    caption: 'Thermal by Wilba',
    source: JangladThermalAngle,
  },
  {
    caption: 'Thermal by Wilba',
    source: JangladThermalTop,
  },
];

const Grid = (): Node => {
  const [gallery, setGallery] = useState<Array<GridImage>>(images);
  const [lightboxIsOpen, setLightboxIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const toggleLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxIsOpen(!lightboxIsOpen);
  };

  useEffect(() => {
    setGallery(shuffle(images));
  }, [images]);

  return (
    <>
      <Wrapper>
        {gallery.map(({ caption, source }, index) => (
          <Thumbnail
            role="button"
            tabIndex={index}
            key={source}
            onClick={() => toggleLightbox(index)}
          >
            <Image src={source} alt={caption} />
          </Thumbnail>
        ))}
      </Wrapper>
      <ModalGateway>
        {lightboxIsOpen ? (
          <Modal onClose={toggleLightbox}>
            <Carousel
              currentIndex={selectedIndex}
              frameProps={{ autoSize: 'height' }}
              views={gallery}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};

export default Grid;
