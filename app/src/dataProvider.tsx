import React, { useContext } from 'react';
import { Text } from 'react-native';
import { useQuery } from 'graphql-hooks';
import { Talk, Speaker, Room } from './types';
import { allDataQuery } from './queries';

export interface DataProviderContext {
  speakers: Speaker[];
  talks: Talk[];
  rooms: Room[];
}

const DataProviderContext = React.createContext<DataProviderContext>(null);

export const useDataProvider = (): DataProviderContext => {
  return useContext(DataProviderContext);
};

export const DataProvider: React.FC<{}> = ({ children }) => {
  const { loading, error, data } = useQuery(allDataQuery);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Something went wrong</Text>;
  }

  return <DataProviderContext.Provider value={data}>{children}</DataProviderContext.Provider>;
};
