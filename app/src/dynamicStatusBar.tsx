import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

const StyledStatusBar = styled.View`
  height: 35px;
`;

export const DynamicStatusBar = () => {
  // maybe something dynamic
  return (
    <StyledStatusBar>
      <StatusBar barStyle="dark-content" />
    </StyledStatusBar>
  );
};
