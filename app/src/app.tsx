import { dark as darkTheme, mapping } from '@eva-design/eva';
import React from 'react';
import { ApplicationProvider } from 'react-native-ui-kitten';
import styled from 'styled-components/native';
import { BottomNav } from './bottomNav';
import { Content } from './content';
import { DynamicStatusBar } from './dynamicStatusBar';

const Container = styled.View`
  flex: 1;
`;

export const App: React.SFC<{}> = () => (
  <ApplicationProvider mapping={mapping} theme={darkTheme}>
    <Container>
      <DynamicStatusBar />
      <Content />
      <BottomNav />
    </Container>
  </ApplicationProvider>
);
