import React from 'react';
import styled from 'styled-components/native';
import { Container } from 'native-base';
import { TalkList } from '../components/talkList';
import { useDataProvider } from '../providers/dataProvider';
import { useFavoriteTalks } from '../providers/favoriteTalksProvider';
import { Talk } from '../types';

export const FavoriteScreen: React.FC<{ navigation }> = ({ navigation }) => {
  const { items: favoriteTalks } = useFavoriteTalks();
  const data = useDataProvider();

  const talks = favoriteTalks.map(id => data.talksById[id]);

  function handleItemPress(talk: Talk): void {
    navigation.navigate('TalkDetail', { talkId: talk.id, title: talk.title });
  }

  return (
    <Container>
      <TalkList talks={talks} onPress={handleItemPress} />
    </Container>
  );
};
