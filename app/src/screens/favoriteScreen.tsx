import React from 'react';
import { Layout } from 'react-native-ui-kitten';
import styled from 'styled-components/native';
import { TalkList } from '../components/talkList';
import { useDataProvider } from '../providers/dataProvider';
import { useFavoriteTalks } from '../providers/favoriteTalksProvider';
import { Talk } from '../types';

const StyledScheduleScreen = styled.View`
  flex: 1 auto;
`;

const StyledTabContent = styled(Layout)`
  flex: 1 auto;
  height: 100%;
`;

export const FavoriteScreen: React.FC<{ navigation }> = ({ navigation }) => {
  const { items: favoriteTalks } = useFavoriteTalks();
  const data = useDataProvider();

  const talks = favoriteTalks.map(id => data.talksById[id]);

  function handleItemPress(talk: Talk): void {
    navigation.navigate('TalkDetail', { talkId: talk.id, title: talk.title });
  }

  return (
    <StyledScheduleScreen>
      <StyledTabContent>
        <TalkList talks={talks} onPress={handleItemPress} />
      </StyledTabContent>
    </StyledScheduleScreen>
  );
};
