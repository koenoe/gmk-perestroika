// @flow
import React from 'react';
import styled from '@emotion/styled';

import useCountdown from 'hooks/useCountdown.js';
import type { Theme } from 'components/app.js';

import type { Node, ComponentType } from 'react';

type CssProps = $ReadOnly<{|
  theme: Theme,
|}>;

const Blocks: ComponentType<*> = styled.div`
  display: flex;
  user-select: none;
`;

const Block: ComponentType<*> = styled.div`
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  color: ${(props: CssProps) => props.theme.colors.red};
  background: ${(props: CssProps) => props.theme.colors.cream};
  width: 79px;
  padding: 10px 15px;
  text-align: right;
  box-sizing: border-box;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const BlockTitle: ComponentType<*> = styled.strong`
  font-size: 38px;
  line-height: 1;
`;

const BlockSubtitle: ComponentType<*> = styled.strong`
  font-size: 9px;
  line-height: 1;
`;

const Title: ComponentType<*> = styled.h1`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Launch: ComponentType<*> = styled.div`
  margin: 0 auto 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type Props = $ReadOnly<{|
  end: string,
  start: string,
|}>;

function addLeadingZeros(value: number): string {
  return String(value).padStart(2, '0');
}

export default function Countdown({ start, end }: Props): Node {
  const [timeLeft, title] = useCountdown({ start, end });

  return (
    <Launch>
      <Title>{title}</Title>
      <Blocks>
        <Block>
          <BlockTitle>{addLeadingZeros(timeLeft.days)}</BlockTitle>
          <BlockSubtitle>{timeLeft.days === 1 ? 'Day' : 'Days'}</BlockSubtitle>
        </Block>

        <Block>
          <BlockTitle>{addLeadingZeros(timeLeft.hours)}</BlockTitle>
          <BlockSubtitle>
            {timeLeft.hours === 1 ? 'Hour' : 'Hours'}
          </BlockSubtitle>
        </Block>

        <Block>
          <BlockTitle>{addLeadingZeros(timeLeft.minutes)}</BlockTitle>
          <BlockSubtitle>Min</BlockSubtitle>
        </Block>

        <Block>
          <BlockTitle>{addLeadingZeros(timeLeft.seconds)}</BlockTitle>
          <BlockSubtitle>Sec</BlockSubtitle>
        </Block>
      </Blocks>
    </Launch>
  );
}
