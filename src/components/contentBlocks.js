// @flow
import styled from '@emotion/styled';
import type { Theme } from 'components/app.js';

type CssProps = $ReadOnly<{|
  alignment: 'left' | 'right',
  theme: Theme,
|}>;

export const Container = styled.div`
  margin-bottom: 25px;

  img {
    max-width: 100%;
  }

  ${({ theme }: CssProps) => theme.media.l`
    margin-bottom: 75px;
  `}
`;

export const Header = styled.div`
  margin-left: 0;

  ${({ theme, alignment }: CssProps) => theme.media.l`
    margin-left: ${alignment === 'right' ? '60%' : 0};
  `}

  ${({ theme, alignment }: CssProps) => theme.media.xl`
    margin-left: ${alignment === 'right' ? '70%' : 0};
  `}

  ${({ theme, alignment }: CssProps) => theme.media.xxl`
    margin-left: ${alignment === 'right' ? '80%' : 0};
  `}
`;

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  ${({ theme, alignment }: CssProps) => theme.media.l`
    flex-direction: ${alignment === 'right' ? 'row' : 'row-reverse'};
  `}
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 25px;

  img {
    max-width: 100%;
  }

  ${({ theme, alignment }: CssProps) => theme.media.l`
    width: 55%;
    margin-top: -135px;
    margin-right: ${alignment === 'right' ? '5%' : 0};
    margin-left: ${alignment === 'left' ? '5%' : 0};
    margin-bottom: 0;
  `}

  ${({ theme }: CssProps) => theme.media.xl`
    width: 65%;
  `}

  ${({ theme }: CssProps) => theme.media.xxl`
    width: 75%;
  `}
`;

export const Text = styled.div`
  width: 100%;

  p {
    margin: 0 0 25px;
  }

  ${({ theme }: CssProps) => theme.media.l`
    width: 40%;
  `}

  ${({ theme }: CssProps) => theme.media.xl`
    width: 30%;
  `}

  ${({ theme }: CssProps) => theme.media.xxl`
    width: 20%;
  `}
`;
