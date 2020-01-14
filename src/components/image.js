// @flow
import React from 'react';
import LazyLoad from 'react-lazyload';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Image = styled.img`
  animation: ${fadeIn} 500ms ease;
`;

type Props = $ReadOnly<{|
  src: string,
  alt: string,
|}>;

const LazyLoadedImage = ({ src, alt }: Props) => {
  return (
    <LazyLoad height={200} offset={100}>
      <Image src={src} alt={alt} />
    </LazyLoad>
  );
};

export default LazyLoadedImage;
