// @flow
import React from 'react';
import styled from '@emotion/styled';

import type { Node } from 'react';

type Props = $ReadOnly<{|
  date: string,
|}>;

type TimeLeft = {|
  years: number,
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
|};

function calculate(endDate: string): TimeLeft {
  let diff = (new Date(endDate) - new Date()) / 1000;

  const timeLeft: TimeLeft = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  // clear countdown when date is reached
  if (diff <= 0) return timeLeft;

  // calculate time difference between now and expected date
  if (diff >= 365.25 * 86400) {
    // 365.25 * 24 * 60 * 60
    timeLeft.years = Math.floor(diff / (365.25 * 86400));
    diff -= timeLeft.years * 365.25 * 86400;
  }
  if (diff >= 86400) {
    // 24 * 60 * 60
    timeLeft.days = Math.floor(diff / 86400);
    diff -= timeLeft.days * 86400;
  }
  if (diff >= 3600) {
    // 60 * 60
    timeLeft.hours = Math.floor(diff / 3600);
    diff -= timeLeft.hours * 3600;
  }
  if (diff >= 60) {
    timeLeft.minutes = Math.floor(diff / 60);
    diff -= timeLeft.minutes * 60;
  }
  timeLeft.seconds = Math.floor(diff);

  return timeLeft;
}

function addLeadingZeros(value: number): string {
  let result = String(value);
  while (result.length < 2) {
    result = `0${result}`;
  }
  return result;
}

function isFinished(timeLeft: TimeLeft): boolean {
  return Object.values(timeLeft).every(v => v === 0);
}

const Blocks = styled.div`
  display: flex;
`;

const Block = styled.div`
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  color: #59191f;
  background: #e9e0d2;
  width: 50px;
  padding: 10px 15px;
  text-align: right;
`;

const Title = styled.strong`
  font-size: 38px;
  line-height: 1;
`;

const Subtitle = styled.strong`
  font-size: 9px;
  line-height: 1;
`;

export default function Countdown({ date }: Props): Node {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const remainingTime = calculate(date);
      if (isFinished(remainingTime)) {
        clearInterval(intervalId);
      } else {
        setTimeLeft(remainingTime);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <Blocks>
      <Block>
        <Title>{addLeadingZeros(timeLeft.days)}</Title>
        <Subtitle>{timeLeft.days === 1 ? 'Day' : 'Days'}</Subtitle>
      </Block>

      <Block>
        <Title>{addLeadingZeros(timeLeft.hours)}</Title>
        <Subtitle>{timeLeft.hours === 1 ? 'Hour' : 'Hours'}</Subtitle>
      </Block>

      <Block>
        <Title>{addLeadingZeros(timeLeft.minutes)}</Title>
        <Subtitle>Min</Subtitle>
      </Block>

      <Block>
        <Title>{addLeadingZeros(timeLeft.seconds)}</Title>
        <Subtitle>Sec</Subtitle>
      </Block>
    </Blocks>
  );
}
