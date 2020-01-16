// @flow
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ReactGA from 'react-ga';
import { useCookies } from 'react-cookie';
import styled from '@emotion/styled';

import type { Node } from 'react';
import type { Theme } from 'components/app.js';

type CssProps = $ReadOnly<{|
  theme: Theme,
|}>;

const cookieName: string = 'gdpr';

const Content = styled.div`
  position: fixed;
  left: 50%;
  bottom: 15px;
  max-width: 1600px;
  width: 95%;
  box-sizing: border-box;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, sans-serif;
  font-size: 15px;

  button {
    border: 0;
    background: white;
    color: black;
    padding: 10px 15px;
    margin-left: 15px;
    font-weight: bold;
    cursor: pointer;
  }

  ${({ theme }: CssProps) => theme.media.l`
    padding: 20px;
  `}
`;

function CookieConsent({ children }): Node {
  const { body } = document;
  if (!body) {
    return null;
  }
  return createPortal(children, body);
}

export default function GDPR(): Node {
  const [cookies, setCookie] = useCookies([cookieName]);
  const [show, setShow] = useState<boolean>(true);

  const init = () => {
    ReactGA.initialize('UA-156150051-1');
    setShow(false);
  };

  useEffect(() => {
    if (cookies[cookieName]) {
      init();
    }
  }, []);

  const handleClick = (e: SyntheticMouseEvent<>) => {
    e.preventDefault();

    setCookie(cookieName, true, {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      secure: process.env.NODE_ENV !== 'production',
    });

    init();
  };

  return show ? (
    <CookieConsent>
      <Content>
        This website uses cookies to enhance the user experience.
        <button type="button" onClick={handleClick}>
          OK
        </button>
      </Content>
    </CookieConsent>
  ) : null;
}
