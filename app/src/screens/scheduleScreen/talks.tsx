import React from 'react';
import { List, ListItem } from 'react-native-ui-kitten';
import { Talk } from '../../types';

export const Talks: React.FC<{ talks: Talk[] }> = ({ talks }) => {
  const renderItem: React.FC<{ item: Talk }> = ({ item }) => {
    return <ListItem key={item.id} title={item.title} />;
  };

  return <List data={talks} renderItem={renderItem} />;
};
