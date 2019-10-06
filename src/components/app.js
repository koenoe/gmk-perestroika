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
          @import url('https://fonts.googleapis.com/css?family=Lora:400,400i|Roboto:700&display=swap&subset=cyrillic');
          html,
          body {
            padding: 0;
            margin: 0;
            background: #fff;
            min-height: 100%;
            font-family: 'Lora', serif;
            font-weight: 400;
            font-size: 16px;
            line-height: 1.8;
          }
          h1,
          h2,
          h3,
          h4 {
            font-family: 'Roboto', serif;
            font-weight: 700;
          }
        `}
      />
      <Main />
    </>
  );
}
