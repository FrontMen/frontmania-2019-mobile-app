import React, { useContext } from 'react';
import { Text } from 'react-native';
import { useQuery } from 'graphql-hooks';
import { Talk, Speaker, Room, Question, Config } from '../types';
import { allDataQuery } from '../queries';
import { normalize } from '../utils';

export interface DataProviderContext {
  config: Config;
  questions: Question[];
  speakers: Speaker[];
  talks: Talk[];
  rooms: Room[];
  speakersById: Record<string, Speaker>;
  talksById: Record<string, Talk>;
  roomsById: Record<string, Room>;
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

  data.talksById = normalize(data.talks);
  data.roomsById = normalize(data.rooms);
  data.speakersById = normalize(data.speakers);
  // eslint-disable-next-line prefer-destructuring
  data.config = data.configs[0];

  return <DataProviderContext.Provider value={data}>{children}</DataProviderContext.Provider>;
};
