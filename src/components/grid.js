// @flow
import React, { useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import type { Node, ComponentType } from 'react';

import styled from '@emotion/styled';
import ReactImagesCarousel, { Modal, ModalGateway } from 'react-images';
import { Container } from 'components/contentBlocks.js';
import type { Theme } from 'components/app.js';
import type { ImageSource } from 'components/image.js';

import Image from 'components/image.js';

import Janglad268AngleSmall from '../../img/small/janglad-268-angle.jpg';
import Janglad268TopSmall from '../../img/small/janglad-268-top.jpg';
import JangladHbcpTopSmall from '../../img/small/janglad-hbcp-top.jpg';
import JangladHbcpAngleSmall from '../../img/small/janglad-hbcp-angle.jpg';
import JangladKira80TopSmall from '../../img/small/janglad-kira80-top.jpg';
import JangladKira80AngleSmall from '../../img/small/janglad-kira80-angle.jpg';
import JangladMinitomicTopSmall from '../../img/small/janglad-minitomic-top.jpg';
import JangladMinitomicAngleSmall from '../../img/small/janglad-minitomic-angle.jpg';
import JangladPolarisTopSmall from '../../img/small/janglad-polaris-top.jpg';
import JangladPolarisAngleSmall from '../../img/small/janglad-polaris-angle.jpg';
import JangladThermalTopSmall from '../../img/small/janglad-thermal-top.jpg';
import JangladThermalAngleSmall from '../../img/small/janglad-thermal-angle.jpg';

import Janglad268AngleMedium from '../../img/medium/janglad-268-angle.jpg';
import Janglad268TopMedium from '../../img/medium/janglad-268-top.jpg';
import JangladHbcpTopMedium from '../../img/medium/janglad-hbcp-top.jpg';
import JangladHbcpAngleMedium from '../../img/medium/janglad-hbcp-angle.jpg';
import JangladKira80TopMedium from '../../img/medium/janglad-kira80-top.jpg';
import JangladKira80AngleMedium from '../../img/medium/janglad-kira80-angle.jpg';
import JangladMinitomicTopMedium from '../../img/medium/janglad-minitomic-top.jpg';
import JangladMinitomicAngleMedium from '../../img/medium/janglad-minitomic-angle.jpg';
import JangladPolarisTopMedium from '../../img/medium/janglad-polaris-top.jpg';
import JangladPolarisAngleMedium from '../../img/medium/janglad-polaris-angle.jpg';
import JangladThermalTopMedium from '../../img/medium/janglad-thermal-top.jpg';
import JangladThermalAngleMedium from '../../img/medium/janglad-thermal-angle.jpg';

import Janglad268AngleLarge from '../../img/large/janglad-268-angle.jpg';
import Janglad268TopLarge from '../../img/large/janglad-268-top.jpg';
import JangladHbcpTopLarge from '../../img/large/janglad-hbcp-top.jpg';
import JangladHbcpAngleLarge from '../../img/large/janglad-hbcp-angle.jpg';
import JangladKira80TopLarge from '../../img/large/janglad-kira80-top.jpg';
import JangladKira80AngleLarge from '../../img/large/janglad-kira80-angle.jpg';
import JangladMinitomicTopLarge from '../../img/large/janglad-minitomic-top.jpg';
import JangladMinitomicAngleLarge from '../../img/large/janglad-minitomic-angle.jpg';
import JangladPolarisTopLarge from '../../img/large/janglad-polaris-top.jpg';
import JangladPolarisAngleLarge from '../../img/large/janglad-polaris-angle.jpg';
import JangladThermalTopLarge from '../../img/large/janglad-thermal-top.jpg';
import JangladThermalAngleLarge from '../../img/large/janglad-thermal-angle.jpg';

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
  source: ImageSource,
|};

const images: Array<GridImage> = [
  {
    caption: 'Noxary 268 by Xondat',
    source: {
      small: Janglad268AngleSmall,
      medium: Janglad268AngleMedium,
      large: Janglad268AngleLarge,
    },
  },
  {
    caption: 'Noxary 268 by Xondat',
    source: {
      small: Janglad268TopSmall,
      medium: Janglad268TopMedium,
      large: Janglad268TopLarge,
    },
  },
  {
    caption: 'HBCP by Hineybush',
    source: {
      small: JangladHbcpAngleSmall,
      medium: JangladHbcpAngleMedium,
      large: JangladHbcpAngleLarge,
    },
  },
  {
    caption: 'HBCP by Hineybush',
    source: {
      small: JangladHbcpTopSmall,
      medium: JangladHbcpTopMedium,
      large: JangladHbcpTopLarge,
    },
  },
  {
    caption: 'Kira80 by Thesiscamper',
    source: {
      small: JangladKira80AngleSmall,
      medium: JangladKira80AngleMedium,
      large: JangladKira80AngleLarge,
    },
  },
  {
    caption: 'Kira80 by Thesiscamper',
    source: {
      small: JangladKira80TopSmall,
      medium: JangladKira80TopMedium,
      large: JangladKira80TopLarge,
    },
  },
  {
    caption: 'Minitomic by Maarten',
    source: {
      small: JangladMinitomicAngleSmall,
      medium: JangladMinitomicAngleMedium,
      large: JangladMinitomicAngleLarge,
    },
  },
  {
    caption: 'Minitomic by Maarten',
    source: {
      small: JangladMinitomicTopSmall,
      medium: JangladMinitomicTopMedium,
      large: JangladMinitomicTopLarge,
    },
  },
  {
    caption: 'Polaris by ai03',
    source: {
      small: JangladPolarisAngleSmall,
      medium: JangladPolarisAngleMedium,
      large: JangladPolarisAngleLarge,
    },
  },
  {
    caption: 'Polaris by ai03',
    source: {
      small: JangladPolarisTopSmall,
      medium: JangladPolarisTopMedium,
      large: JangladPolarisTopLarge,
    },
  },
  {
    caption: 'Thermal by Wilba',
    source: {
      small: JangladThermalAngleSmall,
      medium: JangladThermalAngleMedium,
      large: JangladThermalAngleLarge,
    },
  },
  {
    caption: 'Thermal by Wilba',
    source: {
      small: JangladThermalTopSmall,
      medium: JangladThermalTopMedium,
      large: JangladThermalTopLarge,
    },
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
  }, []);

  return (
    <>
      <Wrapper>
        {gallery.map(({ caption, source }, index) => (
          <Thumbnail
            role="button"
            tabIndex={index}
            key={typeof source === 'string' ? source : source.small}
            onClick={() => toggleLightbox(index)}
          >
            <Image src={source} alt={caption} />
          </Thumbnail>
        ))}
      </Wrapper>
      <ModalGateway>
        {lightboxIsOpen ? (
          <Modal onClose={toggleLightbox}>
            <ReactImagesCarousel
              currentIndex={selectedIndex}
              frameProps={{ autoSize: 'height' }}
              views={gallery.map(item => {
                return typeof item.source === 'string'
                  ? item
                  : {
                      caption: item.caption,
                      source: {
                        download: item.source.large,
                        fullscreen: item.source.large,
                        regular: item.source.large,
                        thumnbail: item.source.medium,
                      },
                    };
              })}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};

export default Grid;
