// @flow
import React from 'react';
import { render } from 'react-dom';
import styled from '@emotion/styled';

import type { Node } from 'react';

const Container = styled.div`
  background: red;
`;

export default function App(): Node {
  return <Container>hoi</Container>;
}

render(<App />, (document.getElementById('root'): any));
