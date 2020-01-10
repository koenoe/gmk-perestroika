// @flow
import React from 'react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

import Main from 'components/main.js';

import type { Node } from 'react';

export default function App(): Node {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          @import url('https://fonts.googleapis.com/css?family=Lora:400,400i|Montserrat:900&display=swap&subset=cyrillic');
          html,
          body {
            padding: 0;
            margin: 0;
            min-height: 100%;
            font-family: 'Lora', serif;
            font-weight: 400;
            font-size: 17px;
            line-height: 1.8;
            background: #59191f;
            color: #e9e0d2;
          }
          h1,
          h2,
          h3,
          h4,
          strong {
            font-family: 'Montserrat', serif;
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
    </>
  );
}
