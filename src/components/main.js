// @flow
import React from 'react';
import styled from '@emotion/styled';

import type { Node } from 'react';
import LogoUrl from '../../img/logo.png';

const Logo = styled.img`
  margin: auto;
  max-width: 800px;
  display: block;
`;

const Heading = styled.header`
  margin-bottom: 25px;

  &:before {
    content: '';
    border-top: 10px solid;
    border-image-source: linear-gradient(
      -90deg,
      currentColor calc(50% + ${props => props.textLength}),
      transparent calc(50% + ${props => props.textLength})
    );
    border-image-slice: 1;
    display: block;
  }

  &:after {
    content: '';
    border-top: 10px solid;
    border-image-source: linear-gradient(
      90deg,
      currentColor calc(50% + ${props => props.textLength}),
      transparent calc(50% + ${props => props.textLength})
    );
    border-image-slice: 1;
    display: block;
  }
`;

const H1 = styled.h1`
  text-align: center;
`;

const Intro = styled.p`
  margin: 0 auto 25px;
  max-width: 600px;
`;

const Container = styled.div`
  margin: auto;
  max-width: 800px;
  color: #59191f;
  background: #e9e0d2;
  padding: 25px 0;
`;

// const Divider = styled.hr`
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   max-width: 300px;
// `;

export default function Main(): Node {
  const ref = React.useRef(null);
  const [textLength, setTextLength] = React.useState(0);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    setTextLength(ref.current.textContent.length);
  });

  return (
    <>
      <Logo src={LogoUrl} />
      <Container>
        <Heading textLength={`${textLength}ex`}>
          <H1 ref={ref}>Our inspiration</H1>
        </Heading>
        <Intro>
          The rich dark red colour is a standout feature of this set. Its
          Cyrillic alphas give the set a unique aesthetic and are a nod to its
          name, Perestroika, which points to connotations of reformation and
          openness. In the same way, I hope its users will be empowered to be
          more daring - to unleash new ways of thinking and working when using
          the set.
        </Intro>
      </Container>
    </>
  );
}
