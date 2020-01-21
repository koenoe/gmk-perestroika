// @flow
import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';

import type { Node, ComponentType, ElementRef } from 'react';
import type { Theme } from 'components/app.js';

type HeaderProps = $ReadOnly<{|
  textLength: string,
  alignment: 'left' | 'right' | 'center',
  theme: Theme,
|}>;

const Header: ComponentType<*> = styled.header`
  margin-bottom: 25px;
  line-height: 1.5;
  contain: layout;

  &:${({ alignment }: HeaderProps) =>
    alignment === 'left' ? 'before' : 'after'} {
    content: '';
    height: 8px;
    background-color: currentColor;
    width: 100vw;
    transform: translateX(
      calc(-100% + ${({ textLength }: HeaderProps) => textLength} + 1rem)
    );
    display: inline-block;
    text-align: left;
  }

  &:${({ alignment }: HeaderProps) =>
    alignment === 'left' ? 'after' : 'before'} {
    content: '';
    height: 8px;
    background-color: currentColor;
    width: 100vw;
    transform: translateX(-1rem);
    display: inline-block;
    text-align: right;
  }

  span {
    font-weight: 700;
    display: block;
    font-size: 12px;
  }

  h1, h2 {
    font-size: 28px;

    ${({ theme }) => theme.media.m`
      font-size: 34px;
    `}
  }
`;

type Props = $ReadOnly<{|
  children: Node,
  alignment: 'left' | 'right' | 'center',
|}>;

type Ref = ElementRef<*>;

export default function Heading({ children, alignment }: Props): Node {
  const ref = useRef<Ref>();
  const [textLength, setTextLength] = React.useState<number>(0);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    setTextLength(ref.current.textContent.length);
  }, []);

  return (
    <Header ref={ref} textLength={`${textLength}ex`} alignment={alignment}>
      {children}
    </Header>
  );
}
