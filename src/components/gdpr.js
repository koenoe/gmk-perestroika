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
    <CookieConsent onAccept={init} cookieName={cookieName}>
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
}
