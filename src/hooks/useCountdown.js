// @flow
import { useEffect, useReducer } from 'react';

import isEmptyObject from 'utils/isEmptyObject.js';

type TimeLeft = {|
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  years: number,
|};

type State = {|
  end: string,
  isFinished: boolean,
  isStarted: boolean,
  start: string,
  timeLeft: TimeLeft,
  title: string,
|};

type Action = {|
  type: 'update-time',
|};

type Args = $ReadOnly<{|
  end: string,
  start: string,
|}>;

const initialTimeLeft: TimeLeft = {
  years: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function calculate(endDate: string): TimeLeft {
  let diff = (new Date(endDate) - new Date()) / 1000;

  const timeLeft = initialTimeLeft;

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

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'update-time': {
      const isStarted = new Date(state.start) <= new Date();
      const date = isStarted ? state.end : state.start;
      const title = isStarted ? 'Groupbuy ends in' : 'Groupbuy starts in';
      const timeLeft = calculate(date);
      return {
        ...state,
        isFinished: isEmptyObject(timeLeft),
        isStarted,
        timeLeft,
        title,
      };
    }
    default:
      throw new Error(`Invalid action: ${action.type}`);
  }
}

export default function useCountdown({ start, end }: Args) {
  const [state, dispatch] = useReducer<State, Action, any>(reducer, {
    end,
    isFinished: false,
    isStarted: false,
    start,
    timeLeft: initialTimeLeft,
    title: '',
  });
  const { isFinished, isStarted, timeLeft, title } = state;

  useEffect(() => {
    // For initial update of title and time left
    dispatch({ type: 'update-time' });

    const intervalId = setInterval(() => {
      if (isFinished && isStarted) {
        clearInterval(intervalId);
      } else {
        dispatch({ type: 'update-time' });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isFinished, isStarted, timeLeft, title]);

  return [timeLeft, title];
}
