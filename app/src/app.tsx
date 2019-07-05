import React from 'react';
import { ApplicationProvider } from 'react-native-ui-kitten';
import styled, { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';

import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { BottomNav } from './bottomNav';
import { AppNavigatorContainer } from './appNavigator';
import { DynamicStatusBar } from './dynamicStatusBar';
import { evaMapping, evaTheme, theme } from './theme';
import { DataProvider } from './dataProvider';

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
        <DataProvider>
          <Container>
            <DynamicStatusBar />
            <AppNavigatorContainer />
            <BottomNav />
          </Container>
        </DataProvider>
      </StyledComponentsThemeProvider>
    </ApplicationProvider>
  </ClientContext.Provider>
);
