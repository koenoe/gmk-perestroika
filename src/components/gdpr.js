// @flow
import React, { useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import ReactGA from 'react-ga';
import { useCookies } from 'react-cookie';
import { useTheme } from 'emotion-theming';

import type { Node } from 'react';

const init = () => {
  ReactGA.initialize('UA-156150051-1');
};

const cookieName: string = 'gdpr';

export default function GDPR(): Node {
  const [cookies] = useCookies([cookieName]);
  const theme = useTheme();

  useEffect(() => {
    if (cookies[cookieName]) {
      init();
    }
  }, []);

  return (
    <CookieConsent
      cookieName={cookieName}
      disableButtonStyles
      disableStyles
      location="none"
      onAccept={init}
      style={{
        zIndex: 999,
        width: '350px',
        minHeight: '20px',
        boxSizing: 'border-box',
        padding: '30px 30px 30px 30px',
        background: theme.colors.cream,
        color: theme.colors.red,
        overflow: 'hidden',
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
      }}
      buttonStyle={{
        background: theme.colors.red,
        border: '0',
        borderRadius: '0px',
        boxShadow: 'none',
        color: theme.colors.cream,
        cursor: 'pointer',
        flex: '0 0 auto',
        padding: '10px',
        margin: '15px 0 0 0',
      }}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
}
