import Constants from 'expo-constants';
import React from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from './providers/themeProvider';

const StyledStatusBar = styled.View`
  background: ${props => props.theme.statusBarColor};
  height: ${Constants.statusBarHeight}px;
`;

export const DynamicStatusBar: React.FC<{}> = () => {
  const theme = useTheme();
  // maybe something dynamic
  return (
    <StyledStatusBar>
      <StatusBar barStyle={theme.iosStatusbar as StatusBarStyle} />
    </StyledStatusBar>
  );
};
