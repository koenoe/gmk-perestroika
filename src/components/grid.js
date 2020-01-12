// @flow
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Container } from 'components/contentBlocks.js';
import shuffleArray from 'utils/shuffleArray.js';

import type { Node } from 'react';

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

const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  > * {
    object-fit: cover;
  }
`;

const images = [
  Janglad268Angle,
  Janglad268Top,
  JangladHbcpTop,
  JangladHbcpAngle,
  JangladKira80Top,
  JangladKira80Angle,
  JangladMinitomicTop,
  JangladMinitomicAngle,
  JangladPolarisTop,
  JangladPolarisAngle,
  JangladThermalTop,
  JangladThermalAngle,
];

export default function Grid(): Node {
  const [gallery, setGallery] = useState(images);
  useEffect(() => {
    setGallery(shuffleArray(images));
  }, [images]);
  return (
    <Wrapper>
      {gallery.map(image => (
        <LazyLoadImage src={image} key={image} alt="" />
      ))}
    </Wrapper>
  );
}
