// @flow
import React from 'react';
import styled from '@emotion/styled';
import { SocialIcon } from 'react-social-icons';
import { useTheme } from 'emotion-theming';

import type { Node } from 'react';

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
`;

const Icons = styled.div``;

export default function GDPR(): Node {
  const theme = useTheme();
  return (
    <Content>
      Copyright &copy; 2020 Koen Romers{' '}
      <Icons>
        <SocialIcon
          url="https://youtube.com/koenromers"
          network="youtube"
          bgColor="transparent"
          fgColor={theme.colors.cream}
          style={{ height: 40, width: 40 }}
          target="_blank"
        />
        <SocialIcon
          url="https://instagram.com/koenromers"
          network="instagram"
          bgColor="transparent"
          fgColor={theme.colors.cream}
          style={{ height: 40, width: 40 }}
          target="_blank"
        />
        <SocialIcon
          url="https://twitch.tv/koenromers"
          network="twitch"
          bgColor="transparent"
          fgColor={theme.colors.cream}
          style={{ height: 40, width: 40 }}
          target="_blank"
        />
      </Icons>
    </Content>
  );
}
