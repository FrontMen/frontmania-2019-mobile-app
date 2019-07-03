import React from 'react';
import { ApplicationProvider } from 'react-native-ui-kitten';
import styled, { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';
import { BottomNav } from './bottomNav';
import { Content } from './content';
import { DynamicStatusBar } from './dynamicStatusBar';
import { evaMapping, evaTheme, theme } from './theme';

const Container = styled.View`
  flex: 1;
`;

export const App: React.FC<{}> = () => (
  <ApplicationProvider mapping={evaMapping} theme={evaTheme}>
    <StyledComponentsThemeProvider theme={theme}>
      <Container>
        <DynamicStatusBar />
        <Content />
        <BottomNav />
      </Container>
    </StyledComponentsThemeProvider>
  </ApplicationProvider>
);
