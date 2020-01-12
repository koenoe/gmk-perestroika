// @flow
import styled from '@emotion/styled';

type CssProps = $ReadOnly<{|
  alignment: 'left' | 'right',
|}>;

export const Container = styled.div`
  margin-bottom: 75px;
`;

export const Header = styled.div`
  margin-left: ${({ alignment }: CssProps) =>
    alignment === 'right' ? '70%' : 0};
`;

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${({ alignment }: CssProps) =>
    alignment === 'right' ? 'row' : 'row-reverse'};
`;

export const ImageContainer = styled.div`
  width: 65%;
  margin-right: ${({ alignment }: CssProps) =>
    alignment === 'right' ? '5%' : 0};
  margin-left: ${({ alignment }: CssProps) =>
    alignment === 'left' ? '5%' : 0};
  margin-top: -135px;

  img {
    max-width: 100%;
  }
`;

export const Paragraph = styled.p`
  width: 30%;
`;
