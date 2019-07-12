/* eslint-disable global-require */
import * as Permissions from 'expo-permissions';
import { ClientContext, GraphQLClient } from 'graphql-hooks';
import { StyleProvider } from 'native-base';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useNativeBase } from '../useNativeBase';
import { env } from './env';
import { usePermissions } from './hooks/usePermission';
import { AppProvider } from './providers/appProvider';
import { Router } from './router';
import getTheme from './theme/components';
import dark from './theme/variables/dark';

const client = new GraphQLClient({
  url: `${env.endpoint}/graphql`,
});

export const App: React.FC<{}> = () => {
  const permissionStatus = usePermissions([Permissions.NOTIFICATIONS]);
  useNativeBase();

  return (
    permissionStatus && (
      <ClientContext.Provider value={client}>
        <ThemeProvider theme={dark}>
          <StyleProvider style={getTheme(dark)}>
            <AppProvider>
              <Router />
            </AppProvider>
          </StyleProvider>
        </ThemeProvider>
      </ClientContext.Provider>
    )
  );
};
