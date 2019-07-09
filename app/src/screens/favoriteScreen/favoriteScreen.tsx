import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TabView, Tab, Layout } from 'react-native-ui-kitten';
import _ from 'lodash';
import { Talk } from '../../types';
import { useDataProvider } from '../../providers/dataProvider';
import { TalkList } from '../../components/talkList';
import { useFavoriteTalks } from '../../providers/favoriteTalksProvider';

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
