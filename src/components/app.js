// @flow
import React from 'react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import { ThemeProvider } from 'emotion-theming';

import Main from 'components/main.js';

import type { Node } from 'react';

type Colors = $ReadOnly<{|
  red: string,
  cream: string,
|}>;

type Fonts = $ReadOnly<{|
  primary: string,
  secondary: string,
|}>;

export type Theme = $ReadOnly<{|
  colors: Colors,
  fonts: Fonts,
|}>;

const theme: Theme = {
  colors: {
    red: '#59191f',
    cream: '#e9e0d2',
  },
  fonts: {
    primary: "'Lora', serif",
    secondary: "'Montserrat', serif",
  },
};

export default function App(): Node {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${emotionNormalize}
          @import url('https://fonts.googleapis.com/css?family=Lora:400|Montserrat:700,900&display=swap&subset=cyrillic');
          html,
          body {
            padding: 0;
            margin: 0;
            min-height: 100%;
            font-family: ${theme.fonts.primary};
            font-weight: 400;
            font-size: 17px;
            line-height: 1.8;
            background: ${theme.colors.red};
            color: ${theme.colors.cream};
          }
          h1,
          h2,
          h3,
          h4,
          strong {
            font-family: ${theme.fonts.secondary};
            font-weight: 900;
            text-transform: uppercase;
            margin: 0;
            padding: 0;
          }
          h1 {
            font-size: 36px;
          }
        `}
      />
      <Main />
    </ThemeProvider>
  );
}
