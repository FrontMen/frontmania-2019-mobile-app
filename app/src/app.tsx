import * as Permissions from 'expo-permissions';
import { ClientContext, GraphQLClient } from 'graphql-hooks';
import { Container } from 'native-base';
import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';
import { useNativeBase } from '../useNativeBase';
import { AppNavigatorContainer } from './appNavigator';
import { env } from './env';
import { usePermissions } from './hooks/usePermission';
import { DataProvider } from './providers/dataProvider';
import { FavoriteTalksProvider } from './providers/favoriteTalksProvider';
import { evaMapping, evaTheme, theme } from './theme';

const client = new GraphQLClient({
  url: `${env.endpoint}/graphql`,
});

export const App: React.FC<{}> = () => {
  const permissionStatus = usePermissions([Permissions.NOTIFICATIONS]);
  useNativeBase();

  return (
    permissionStatus && (
      <ClientContext.Provider value={client}>
        <StyledComponentsThemeProvider theme={theme}>
          <DataProvider>
            <FavoriteTalksProvider>
              <Container>
                <AppNavigatorContainer />
              </Container>
            </FavoriteTalksProvider>
          </DataProvider>
        </StyledComponentsThemeProvider>
      </ClientContext.Provider>
    )
  );
};
