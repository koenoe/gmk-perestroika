// @flow
import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

import type { Node } from 'react';

import { Container } from 'components/contentBlocks.js';

import beforeUrl from '../../img/office-prophet.png';
import afterUrl from '../../img/office-prophet-night.png';

const Wrapper = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  line-height: 0;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  user-select: none;

  * {
    box-sizing: inherit;

    &:after,
    &:before {
      box-sizing: inherit;
    }
  }

  img,
  picture > img {
    max-width: none;
  }

  > img,
  > picture > img {
    display: block;
    width: 100%;
  }

  > div {
    &:first-of-type,
    picture & {
      height: 100%;
      left: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      width: 50%;
    }
`;

const Drag = styled.span`
  background: #fff;
  bottom: 0;
  cursor: ew-resize;
  left: 50%;
  margin-left: -1px;
  position: absolute;
  top: 0;
  width: 2px;

  &:before {
    border: 3px solid #fff;
    content: '';
    height: 30px;
    left: 50%;
    margin-left: -7px;
    margin-top: -18px;
    position: absolute;
    top: 50%;
    width: 14px;
  }
`;

// import concrete910 from '../../img/concrete-910.png';
// import concreteBauer from '../../img/concrete-bauer.png';
// import concreteOGR from '../../img/concrete-ogr.png';
// import concreteProphet from '../../img/concrete-prophet.png';

export default function Cocoen(): Node {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.addEventListener('click', () => {});

    // eslint-disable-next-line consistent-return
    return () => {
      if (!ref.current) {
        return;
      }

      ref.current.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <Container>
      <Wrapper ref={ref}>
        <div>
          <img src={beforeUrl} alt="" />
          <img src={afterUrl} alt="" />
        </div>
        <Drag />
      </Wrapper>
    </Container>
  );
}
