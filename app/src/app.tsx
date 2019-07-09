import React from 'react';
import { ApplicationProvider } from 'react-native-ui-kitten';
import styled, { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';
import * as Permissions from 'expo-permissions';

import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { AppNavigatorContainer } from './appNavigator';
import { DynamicStatusBar } from './dynamicStatusBar';
import { evaMapping, evaTheme, theme } from './theme';
import { DataProvider } from './providers/dataProvider';
import { FavoriteTalksProvider } from './providers/favoriteTalksProvider';
import { usePermissions } from './hooks/usePermission';
import { env } from './env';

const Container = styled.View`
  flex: 1;
`;

const client = new GraphQLClient({
  url: `${env.endpoint}/graphql`,
});

export const App: React.FC<{}> = () => {
  const permissionStatus = usePermissions([Permissions.NOTIFICATIONS]);

  return (
    permissionStatus && (
      <ClientContext.Provider value={client}>
        <ApplicationProvider mapping={evaMapping} theme={evaTheme}>
          <StyledComponentsThemeProvider theme={theme}>
            <DataProvider>
              <FavoriteTalksProvider>
                <Container>
                  <DynamicStatusBar />
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
