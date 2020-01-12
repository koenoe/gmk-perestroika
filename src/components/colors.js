// @flow
import React from 'react';
import styled from '@emotion/styled';

import type { Node } from 'react';

import Heading from 'components/heading.js';
import {
  Body,
  Container,
  Header,
  ImageContainer,
  Paragraph,
} from 'components/contentBlocks.js';

const RalContainer = styled(ImageContainer)`
  display: flex;
  box-sizing: border-box;
`;

const Ral = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  cursor: default;
  user-select: none;

  &:before {
    content: '';
    float: left;
    padding-top: 100%;
  }
`;

const Ral3005 = styled(Ral)`
  background: #59191f;
  border: 10px solid #e9e0d2;
  color: #e9e0d2;
`;

const Ral9001 = styled(Ral)`
  background: #e9e0d2;
  border: 10px solid #59191f;
  color: #59191f;
`;

type Props = $ReadOnly<{|
  alignment: 'left' | 'right',
|}>;

export default function Colors({ alignment }: Props): Node {
  return (
    <Container>
      <Header alignment={alignment}>
        <Heading alignment={alignment}>
          <h2>Colors</h2>
        </Heading>
      </Header>
      <Body alignment={alignment}>
        <RalContainer alignment={alignment}>
          <Ral3005>
            <strong>RAL 3005 - Wine Red</strong>
          </Ral3005>
          <Ral9001>
            <strong>RAL 9001 - Cream</strong>
          </Ral9001>
        </RalContainer>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec quam
          consequat, ornare ligula vitae, mollis elit. Duis hendrerit maximus
          sagittis. Suspendisse ac auctor est.
        </Paragraph>
      </Body>
    </Container>
  );
}
