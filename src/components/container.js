// @flow
import React from 'react';
import styled from '@emotion/styled';

import type { Node } from 'react';

const ContainerDefault = styled.div`
  margin: auto;
`;

const ContainerWide = styled(ContainerDefault)`
  max-width: 1200px;
`;

const ContainerNarrow = styled(ContainerDefault)`
  max-width: 800px;
`;

type Props = $ReadOnly<{
  children: Node,
  narrow?: boolean,
}>;

export default function ScreenContainer({ narrow, children }: Props) {
  if (narrow) {
    return <ContainerNarrow>{children}</ContainerNarrow>;
  }
  return <ContainerWide>{children}</ContainerWide>;
}
