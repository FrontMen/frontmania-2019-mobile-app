import React from 'react';
import { ApplicationProvider } from 'react-native-ui-kitten';
import styled, { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';

import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { BottomNav } from './bottomNav';
import { Content } from './content';
import { DynamicStatusBar } from './dynamicStatusBar';
import { evaMapping, evaTheme, theme } from './theme';

const Container = styled.View`
  flex: 1;
`;

// TODO: take the url from environment
const client = new GraphQLClient({
  url: 'http://localhost:1337/graphql',
});

export const App: React.FC<{}> = () => (
  <ClientContext.Provider value={client}>
    <ApplicationProvider mapping={evaMapping} theme={evaTheme}>
      <StyledComponentsThemeProvider theme={theme}>
        <Container>
          <DynamicStatusBar />
          <Content />
          <BottomNav />
        </Container>
      </StyledComponentsThemeProvider>
    </ApplicationProvider>
  </ClientContext.Provider>
);
