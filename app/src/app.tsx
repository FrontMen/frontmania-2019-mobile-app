import React from 'react';
import { ApplicationProvider } from 'react-native-ui-kitten';
import styled, { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';
import * as Permissions from 'expo-permissions';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';

import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { AppNavigatorContainer } from './appNavigator';
// import { DynamicStatusBar } from './dynamicStatusBar';
import { evaMapping, evaTheme, theme } from './theme';
import { DataProvider } from './providers/dataProvider';
import { FavoriteTalksProvider } from './providers/favoriteTalksProvider';
import { usePermissions } from './hooks/usePermission';
import { env } from './env';
import { useNativeBase } from '../useNativeBase';

const client = new GraphQLClient({
  url: `${env.endpoint}/graphql`,
});

export const App: React.FC<{}> = () => {
  const permissionStatus = usePermissions([Permissions.NOTIFICATIONS]);
  useNativeBase();

  return (
    permissionStatus && (
      <ClientContext.Provider value={client}>
        <ApplicationProvider mapping={evaMapping} theme={evaTheme}>
          <StyledComponentsThemeProvider theme={theme}>
            <DataProvider>
              <FavoriteTalksProvider>
                <Container>
                  <Header />
                  <AppNavigatorContainer />
                </Container>
              </FavoriteTalksProvider>
            </DataProvider>
          </StyledComponentsThemeProvider>
        </ApplicationProvider>
      </ClientContext.Provider>
    )
  );
};
