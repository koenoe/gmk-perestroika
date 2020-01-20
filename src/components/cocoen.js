// @flow
import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { debounce } from 'lodash';

import { Container as ContentBlockContainer } from 'components/contentBlocks.js';

import type { Node, ComponentType, ElementRef } from 'react';
import type { Theme } from 'components/app.js';

import beforeUrlLarge from '../../img/large/office-prophet.jpg';
import afterUrlLarge from '../../img/large/office-prophet-night.jpg';

import beforeUrlMedium from '../../img/medium/office-prophet.jpg';
import afterUrlMedium from '../../img/medium/office-prophet-night.jpg';

import beforeUrlSmall from '../../img/small/office-prophet.jpg';
import afterUrlSmall from '../../img/small/office-prophet-night.jpg';

type CssProps = $ReadOnly<{|
  theme: Theme,
|}>;

const Wrapper: ComponentType<*> = styled(ContentBlockContainer)`
  img {
    max-width: none;
  }
`;

const Container: ComponentType<*> = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  line-height: 0;
  margin: 0 auto;
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
`;

const Before: ComponentType<*> = styled.div`
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 50%;
`;

const BeforeImage: ComponentType<*> = styled.img`
  max-width: none;
`;

const AfterImage: ComponentType<*> = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
`;

const Drag: ComponentType<*> = styled.span`
  background: #e9e0d2;
  bottom: 0;
  cursor: ew-resize;
  left: 50%;
  margin-left: -1px;
  position: absolute;
  top: 0;
  width: 2px;

  &:before {
    border: 3px solid #e9e0d2;
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

const Legend: ComponentType<*> = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  font-style: italic;
  font-size: 12px;
  margin: 10px 0 0 0;
  box-sizing: border-box;
  text-align: center;

  ${({ theme }: CssProps) => theme.media.l`
    font-size: 14px;
  `}
`;

const Tip: ComponentType<*> = styled.span`
  opacity: 0.25;
`;

type Ref = ElementRef<*>;

const beforeImageSource = {
  small: beforeUrlSmall,
  medium: beforeUrlMedium,
  large: beforeUrlLarge,
};

const afterImageSource = {
  small: afterUrlSmall,
  medium: afterUrlMedium,
  large: afterUrlLarge,
};

export default function Cocoen(): Node {
  const ref = useRef<Ref>();
  const dragRef = useRef<Ref>();

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [elementWidth, setElementWidth] = useState<number>(0);
  const [dragElementWidth, setDragElementWidth] = useState<number>(0);
  const [x, setX] = useState<number>(0);
  const [openRatio, setOpenRatio] = useState<string>('50%');

  const calculateOpenRatio = (activeX: number): string => {
    let value = activeX;
    if (activeX < 0) {
      value = dragElementWidth;
    } else if (activeX >= elementWidth) {
      value = elementWidth - dragElementWidth;
    }

    let ratio = value + dragElementWidth / 2;
    ratio /= elementWidth;
    return `${ratio * 100}%`;
  };

  const calculateXfromEvent = e => {
    const clientX = e.clientX ? e.clientX : e.touches[0].clientX;
    const offsetLeft = ref.current
      ? ref.current.getBoundingClientRect().left
      : 0;
    return clientX - offsetLeft;
  };

  const onDragStart = e => {
    e.preventDefault();

    setIsDragging(true);
  };

  const onDrag = e => {
    e.preventDefault();

    if (!isDragging || !ref.current) {
      return;
    }

    setX(calculateXfromEvent(e));
  };

  const onDragEnd = () => {
    setIsDragging(false);
  };

  const onClick = e => {
    e.preventDefault();

    setX(calculateXfromEvent(e));
  };

  const updateDimensions = () => {
    if (ref.current && dragRef.current) {
      setElementWidth(parseInt(window.getComputedStyle(ref.current).width, 10));
      setDragElementWidth(
        parseInt(window.getComputedStyle(dragRef.current).width, 10),
      );
    }
  };

  useEffect(() => {
    if (!x) {
      return;
    }

    window.requestAnimationFrame(() => {
      setOpenRatio(calculateOpenRatio(x));
    });
  }, [x]);

  useEffect(() => {
    const debouncedUpdateDimensions = debounce(updateDimensions, 250);
    window.addEventListener('resize', debouncedUpdateDimensions);
    window.addEventListener('mouseup', onDragEnd);
    window.addEventListener('touchend', onDragEnd);
    return () => {
      window.removeEventListener('resize', debouncedUpdateDimensions);
      window.removeEventListener('mouseup', onDragEnd);
      window.removeEventListener('touchend', onDragEnd);
    };
  }, []);

  useEffect(() => {
    updateDimensions();
  }, []);

  return (
    <Wrapper>
      <Container
        onMouseDown={onDragStart}
        onTouchStart={onDragStart}
        onMouseMove={onDrag}
        onTouchMove={onDrag}
        onClick={onClick}
        ref={ref}
      >
        <Before style={{ width: openRatio }}>
          <BeforeImage
            src={beforeImageSource.small}
            srcSet={`${beforeImageSource.small} 300w, ${beforeImageSource.medium} 768w, ${beforeImageSource.large} 1280w`}
            alt=""
            style={{ width: elementWidth }}
            draggable={false}
          />
        </Before>
        <AfterImage
          src={afterImageSource.small}
          srcSet={`${afterImageSource.small} 300w, ${afterImageSource.medium} 768w, ${afterImageSource.large} 1280w`}
          alt=""
          draggable={false}
        />
        <Drag ref={dragRef} style={{ left: openRatio }} />
      </Container>
      <Legend>
        <span>day</span>
        <Tip>(move slider to left or right)</Tip>
        <span>night</span>
      </Legend>
    </Wrapper>
  );
}
