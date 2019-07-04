import React from 'react';
import { List, ListItem } from 'react-native-ui-kitten';

const data = Array.from({ length: 10 }).map((_, index) => ({
  title: `Item ${index}`,
  description: `Description ${index}`,
}));

export const Talks: React.FC<{}> = () => {
  const renderItem = ({ item }) => {
    return <ListItem title={item.title} description={item.description} />;
  };

  return <List data={data} renderItem={renderItem} />;
};
