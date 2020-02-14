// @flow
import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { range } from 'lodash';
import { useInView } from 'react-intersection-observer';

import { Container } from 'components/contentBlocks.js';

import type { Node, ComponentType } from 'react';
import type { Theme } from 'components/app.js';

const MAX = 400;
const NUMBER_OF_COLUMNS = 4;
const COLUMNS = range(0, MAX, MAX / NUMBER_OF_COLUMNS);
const BAR_HEIGHT = 50;
const LABEL_WIDTH = 100;

type CssProps = $ReadOnly<{|
  theme: Theme,
  width: string,
|}>;

const bar = keyframes`
  0% { width: 0px; }
  100% { width: ${({ width }: CssProps) => width}; }
`;

const Bars: ComponentType<*> = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`;

const BarContainer: ComponentType<*> = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const Label: ComponentType<*> = styled.span`
  display: block;
  width: ${LABEL_WIDTH}px;
  height: ${BAR_HEIGHT}px;
  line-height: ${BAR_HEIGHT}px;
  font-style: italic;
  font-size: 16px;
`;

const Bar: ComponentType<*> = styled.div`
  position: relative;
  width: 100%;
  height: ${BAR_HEIGHT}px;
  margin: 0 auto 20px auto;
  line-height: ${BAR_HEIGHT}px;
  color: ${({ theme }: CssProps) => theme.colors.red};
  padding: 0 0 0 10px;
  font-size: 11px;
  z-index: 0;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: ${BAR_HEIGHT}px;
    background: ${({ theme }: CssProps) => theme.colors.cream};
    opacity: 0.25;
    z-index: -2;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }: CssProps) => theme.colors.cream};
    height: ${BAR_HEIGHT}px;
    transition: 0.7s;
    display: block;
    animation: ${bar} 1 1.8s;
    width: ${({ width }: CssProps) => width};
    z-index: -1;
  }

  ${({ theme }) => theme.media.m`
    font-size: 13px;
  `}
`;

const Tick: ComponentType<*> = styled.span`
  position: absolute;
  left: ${({ width }: CssProps) => width};
  top: -1px;
  height: calc(${BAR_HEIGHT}px + 2px);
  border-left: 4px solid ${({ theme }: CssProps) => theme.colors.red};
  padding-left: 4px;
  font-size: 12px;
  color: ${({ theme }: CssProps) => theme.colors.red};
  transform: translateX(-2px);
`;

const Legends: ComponentType<*> = styled.div`
  display: grid;
  grid-template-columns: repeat(${NUMBER_OF_COLUMNS}, 1fr);
  font-size: 13px;
  box-sizing: border-box;
  padding-left: ${LABEL_WIDTH}px;
  opacity: 0.25;
  visibility: hidden;

  ${({ theme }) => theme.media.m`
    visibility: visible;
  `}
`;

const Legend: ComponentType<*> = styled.div`
  transform: translateX(-18px);

  &:first-of-type {
    transform: translateX(-12px);
  }
`;

type Kit = {|
  label: 'Base' | 'Usual' | 'Unusual' | 'Modern',
  moq: number,
  sales: number,
|};

const kits: Array<Kit> = [
  {
    label: 'Base',
    moq: 250,
    sales: 108,
  },
  {
    label: 'Usual',
    moq: 100,
    sales: 34,
  },
  {
    label: 'Unusual',
    moq: 100,
    sales: 26,
  },
  {
    label: 'Modern',
    moq: 100,
    sales: 25,
  },
];

export default function MOQ(): Node {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <Container ref={ref}>
      {inView && (
        <Bars>
          {kits.map(({ label, moq, sales }) => (
            <BarContainer key={label}>
              <Label>{label}</Label>
              <Bar width={`${(sales / MAX) * 100}%`}>
                {sales}/{moq}
                <Tick width={`${(moq / MAX) * 100}%`}>MOQ</Tick>
              </Bar>
            </BarContainer>
          ))}
          <Legends>
            {COLUMNS.map(value => (
              <Legend key={value}>{value}</Legend>
            ))}
          </Legends>
        </Bars>
      )}
    </Container>
  );
}
