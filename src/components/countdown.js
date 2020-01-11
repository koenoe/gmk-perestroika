// @flow
import React from 'react';
import styled from '@emotion/styled';

import type { Node } from 'react';

type Props = $ReadOnly<{|
  start: string,
  end: string,
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

const BlockTitle = styled.strong`
  font-size: 38px;
  line-height: 1;
`;

const BlockSubtitle = styled.strong`
  font-size: 9px;
  line-height: 1;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Launch = styled.div`
  margin: 0 auto 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Countdown({ start, end }: Props): Node {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [date, setDate] = React.useState<string>(start);
  const [title, setTitle] = React.useState<string>('Groupbuy starts in');

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (new Date(date) <= new Date()) {
        setDate(end);
        setTitle('Groupbuy ends in');
      } else {
        setDate(start);
        setTitle('Groupbuy starts in');
      }
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
