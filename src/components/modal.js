// @flow
import { createPortal } from 'react-dom';

import type { Node } from 'react';

type Props = $ReadOnly<{|
  children: Node,
|}>;

export default function Modal({ children }: Props): Node {
  const { body } = document;
  if (!body) {
    return null;
  }
  return createPortal(children, body);
}
