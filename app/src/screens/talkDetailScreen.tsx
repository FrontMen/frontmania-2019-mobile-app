import { AntDesign, Octicons } from '@expo/vector-icons';
import { Badge, Text, Fab, Icon, Button, Content } from 'native-base';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Avatar } from '../components/avatar';
import { MarkdownText } from '../components/markdownText';
import { useDataProvider } from '../providers/dataProvider';
import { formatTime, getImageUrl } from '../utils';
import { useFavoriteTalks } from '../providers/favoriteTalksProvider';
import { Talk } from '../types';

const StyledTalkDetailScreen = styled.View`
  display: flex;
  flex: 1 auto;
  padding: 10px;
`;

const BaseText = styled(Text)``;

const Title = styled(BaseText)`
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0;
`;

const IconText = styled(BaseText)`
  font-size: 16px;
  color: grey;
`;

const DescriptionContainer = styled.View`
  flex: 1 auto;
`;

const TalkInfoBar = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
`;

const TagsBar = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledBadge = styled(Badge)`
  margin-right: 5px;
`;

const Actions: React.FC<{ talk: Talk }> = ({ talk }) => {
  const { items, toggle } = useFavoriteTalks();
  const [active, setActive] = useState(false);

  const isFavorite = items.includes(talk.id);

  return (
    <Fab
      active={active}
      direction="up"
      containerStyle={{}}
      style={{ backgroundColor: '#5067FF' }}
      position="bottomRight"
      onPress={() => setActive(fa => !fa)}
    >
      <Icon name="add" />
      <Button
        style={{ backgroundColor: isFavorite ? 'red' : 'grey' }}
        onPress={() => toggle(talk.id)}
      >
        <Icon name="heart" />
      </Button>
    </Fab>
  );
};

export const TalkDetailScreen: React.FC<{ navigation }> = ({ navigation }) => {
  const talkId = navigation.getParam('talkId');
  const data = useDataProvider();
  const talk = data.talksById[talkId];
  const room = data.roomsById[talk.room.id];
  const speakers = talk.speakers.map(s => data.speakersById[s.id]);

  return (
    <StyledTalkDetailScreen>
      <Content>
        <Title>{talk.title}</Title>
        {speakers.map(s => (
          <Avatar
            onPress={() => {
              navigation.navigate('SpeakerDetail', { speakerId: s.id, title: s.name });
            }}
            key={s.id}
            image={getImageUrl(s.avatar.url)}
          >
            {s.name}
          </Avatar>
        ))}
        <TalkInfoBar>
          <AntDesign name="clockcircleo" color="grey" size={15}>
            <IconText>{` ${formatTime(talk.startsAt)} - ${formatTime(talk.endsAt)}`}</IconText>
          </AntDesign>
          <Octicons name="location" color="grey" size={15} style={{ marginLeft: 10 }}>
            <IconText>{` ${room.name}`}</IconText>
          </Octicons>
        </TalkInfoBar>
        <TagsBar>
          {talk.tags.map(tag => (
            <StyledBadge key={tag.name}>
              <Text>{tag.name}</Text>
            </StyledBadge>
          ))}
        </TagsBar>
        <DescriptionContainer>
          <MarkdownText>{talk.description}</MarkdownText>
        </DescriptionContainer>
      </Content>
      <Actions talk={talk} />
    </StyledTalkDetailScreen>
  );
};
