import { Container } from 'native-base';
import React from 'react';
import { DataProvider } from './dataProvider';
import { FavoriteTalksProvider } from './favoriteTalksProvider';

export const AppProvider: React.FC<{}> = ({ children }) => {
  return (
    <DataProvider>
      <FavoriteTalksProvider>
        <Container>{children}</Container>
      </FavoriteTalksProvider>
    </DataProvider>
  );
};
