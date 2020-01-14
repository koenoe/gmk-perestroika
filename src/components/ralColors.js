// @flow
import React from 'react';
import styled from '@emotion/styled';

import type { Node } from 'react';

import type { Theme } from 'components/app.js';
import Heading from 'components/heading.js';
import {
  Body,
  Container,
  Header,
  ImageContainer,
  Text,
} from 'components/contentBlocks.js';

type CssProps = $ReadOnly<{|
  theme: Theme,
|}>;

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
  background: ${(props: CssProps) => props.theme.colors.red};
  border: 10px solid ${(props: CssProps) => props.theme.colors.cream};
  color: ${(props: CssProps) => props.theme.colors.cream};
`;

const Ral9001 = styled(Ral)`
  background: ${(props: CssProps) => props.theme.colors.cream};
  border: 10px solid ${(props: CssProps) => props.theme.colors.red};
  color: ${(props: CssProps) => props.theme.colors.red};
`;

type Props = $ReadOnly<{|
  alignment: 'left' | 'right',
|}>;

export default function RalColors({ alignment }: Props): Node {
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
        <Text>
          <p>The colours speak from themselves - a rich Wine Red and Cream.</p>
          <p>
            If you want to get creative about it; try imagining a bowl of
            steaming Borscht soup, vibrant red, with a dollop of sour cream on
            top. Mmm.
          </p>
          <p>
            A colour-match made in heaven and sure to look great on a variety of
            keyboards.
          </p>
        </Text>
      </Body>
    </Container>
  );
}
