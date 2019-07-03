import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { theme } from './theme';

// TODO: use props.theme
const StyledStatusBar = styled.View`
  background: ${theme.backgroundBasicColor1};
  height: 35px;
`;

export const DynamicStatusBar: React.FC<{}> = () => {
  // maybe something dynamic
  return (
    <StyledStatusBar>
      <StatusBar barStyle="light-content" />
    </StyledStatusBar>
  );
};
