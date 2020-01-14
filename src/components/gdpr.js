// @flow
import React, { useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import ReactGA from 'react-ga';
import { useCookies } from 'react-cookie';

import type { Node } from 'react';

const init = () => {
  ReactGA.initialize('UA-156150051-1');
};

const cookieName: string = 'gdpr';

export default function GDPR(): Node {
  const [cookies] = useCookies([cookieName]);

  useEffect(() => {
    if (cookies[cookieName]) {
      init();
    }
  }, []);

  return (
    <CookieConsent
      buttonText="OK"
      cookieName={cookieName}
      disableButtonStyles
      disableStyles
      location="none"
      onAccept={init}
      style={{
        alignItems: 'center',
        background: '#191919',
        bottom: 0,
        boxSizing: 'border-box',
        color: 'white',
        display: 'flex',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        height: 60,
        justifyContent: 'space-between',
        left: 0,
        padding: '10px 0 10px 10px',
        position: 'fixed',
        right: 0,
        width: '100%',
        zIndex: 999,
      }}
      buttonStyle={{
        background: 'black',
        border: 0,
        borderRadius: 0,
        boxShadow: 'none',
        color: 'white',
        cursor: 'pointer',
        fontWeight: 'bold',
        margin: '0 10px',
        padding: 10,
      }}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
}
