// @flow
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { useCookies } from 'react-cookie';
import styled from '@emotion/styled';

import Modal from 'components/modal.js';

import type { Node } from 'react';
import type { Theme } from 'components/app.js';

type CssProps = $ReadOnly<{|
  theme: Theme,
|}>;

const COOKIE_NAME: string = 'gdpr';

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
    background: white;
    color: black;
    padding: 10px 15px;
    margin-left: 15px;
    font-weight: bold;
    font-family: Arial, sans-serif;
  }

  ${({ theme }: CssProps) => theme.media.l`
    padding: 20px;
  `}
`;

const init = () => {
  ReactGA.initialize('UA-156150051-1');
};

export default function GDPR(): Node {
  const [cookies, setCookie] = useCookies([COOKIE_NAME]);
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    if (cookies[COOKIE_NAME]) {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    if (!show) {
      init();
    }
  }, [show]);

  const handleClick = (e: SyntheticMouseEvent<>) => {
    e.preventDefault();

    setCookie(COOKIE_NAME, true, {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      secure: process.env.NODE_ENV === 'production',
    });

    setShow(false);
  };

  return show ? (
    <Modal>
      <Content>
        This website uses cookies to enhance the user experience.
        <button type="button" onClick={handleClick}>
          OK
        </button>
      </Content>
    </Modal>
  ) : null;
}
