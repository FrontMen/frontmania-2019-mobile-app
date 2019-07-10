import Constants from 'expo-constants';
import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

// TODO: use props.theme
const StyledStatusBar = styled.View`
  background: white;
  height: ${Constants.statusBarHeight}px;
`;

export const DynamicStatusBar: React.FC<{}> = () => {
  // maybe something dynamic
  return (
    <StyledStatusBar>
      <StatusBar barStyle="dark-content" />
    </StyledStatusBar>
  );
};
