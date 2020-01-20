// @flow
import React from 'react';
import LazyLoad from 'react-lazyload';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import type { ComponentType } from 'react';

const blur = keyframes`
  0% { filter: blur(0px);}
  50% { filter: blur(10px);}
  100% { filter: blur(0px);}
`;

const Image: ComponentType<*> = styled.img`
  animation: ${blur} 500ms ease;
`;
type Src = $ReadOnly<{|
  small: string,
  medium: string,
  large: string,
|}>;

export type ImageSource = string | Src;

type Props = $ReadOnly<{|
  src: ImageSource,
  alt: string,
|}>;

const LazyLoadedImage = ({ src, alt }: Props) => {
  return (
    <LazyLoad height="100%" offset={100} once>
      {typeof src === 'string' ? (
        <Image src={src} alt={alt} />
      ) : (
        <Image
          src={src.small}
          srcSet={`${src.small} 300w, ${src.medium} 768w, ${src.large} 1280w`}
          alt={alt}
        />
      )}
    </LazyLoad>
  );
};

export default LazyLoadedImage;
