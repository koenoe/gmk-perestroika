// @flow
import React from 'react';
import styled from '@emotion/styled';

import type { Node } from 'react';

type HeaderProps = $ReadOnly<{|
  textLength: string,
|}>;

const Header: any = styled.header`
  margin-bottom: 25px;

  &:before {
    content: '';
    border-top: 10px solid;
    border-image-source: linear-gradient(
      -90deg,
      currentColor calc(50% + ${({ textLength }: HeaderProps) => textLength}),
      transparent calc(50% + ${({ textLength }: HeaderProps) => textLength})
    );
    border-image-slice: 1;
    display: block;
  }

  &:after {
    content: '';
    border-top: 10px solid;
    border-image-source: linear-gradient(
      90deg,
      currentColor calc(50% + ${({ textLength }: HeaderProps) => textLength}),
      transparent calc(50% + ${({ textLength }: HeaderProps) => textLength})
    );
    border-image-slice: 1;
    display: block;
  }
`;

type Props = $ReadOnly<{|
  children: Node,
|}>;

type Ref = ?HTMLElement;

export default function Heading({ children }: Props): Node {
  const ref = React.useRef<Ref>();
  const [textLength, setTextLength] = React.useState<number>(0);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    setTextLength(ref.current.textContent.length);
  });

  return (
    <Header ref={ref} textLength={`${textLength}ex`}>
      {children}
    </Header>
  );
}
