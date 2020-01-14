// @flow
import React from 'react';
import LazyLoad from 'react-lazyload';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

// const fadeIn = keyframes`
//   0% { opacity: 0; }
//   100% { opacity: 1; }
// `;

const blur = keyframes`
  0% { filter: blur(0px);}
  50% { filter: blur(10px);}
  100% { filter: blur(0px);}
`;

const Image = styled.img`
  animation: ${blur} 500ms ease;
`;

type Props = $ReadOnly<{|
  src: string,
  alt: string,
|}>;

const LazyLoadedImage = ({ src, alt }: Props) => {
  return (
    <LazyLoad height="100%" offset={100} once>
      <Image src={src} alt={alt} />
    </LazyLoad>
  );
};

export default LazyLoadedImage;
