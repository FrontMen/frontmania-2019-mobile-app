import * as Permissions from 'expo-permissions';
import { ClientContext, GraphQLClient } from 'graphql-hooks';
import { Container, StyleProvider } from 'native-base';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import getTheme from './theme/components';
import material from './theme/variables/material';
import { useNativeBase } from '../useNativeBase';
import { AppNavigatorContainer } from './appNavigator';
import { env } from './env';
import { usePermissions } from './hooks/usePermission';
import { DataProvider } from './providers/dataProvider';
import { FavoriteTalksProvider } from './providers/favoriteTalksProvider';

const client = new GraphQLClient({
  url: `${env.endpoint}/graphql`,
});

export const App: React.FC<{}> = () => {
  const permissionStatus = usePermissions([Permissions.NOTIFICATIONS]);
  useNativeBase();

  return (
    permissionStatus && (
      <ClientContext.Provider value={client}>
        <ThemeProvider theme={material}>
          <StyleProvider style={getTheme(material)}>
            <DataProvider>
              <FavoriteTalksProvider>
                <Container>
                  <AppNavigatorContainer />
                </Container>
              </FavoriteTalksProvider>
            </DataProvider>
          </StyleProvider>
        </ThemeProvider>
      </ClientContext.Provider>
    )
  );
};
