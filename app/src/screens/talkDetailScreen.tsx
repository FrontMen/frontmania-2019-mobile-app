import { AntDesign, Octicons } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components/native';
import { Avatar } from '../components/avatar';
import { MarkdownText } from '../components/markdownText';
import { Tag } from '../components/tag';
import { useDataProvider } from '../providers/dataProvider';
import { theme } from '../theme';
import { formatTime, getImageUrl } from '../utils';

const StyledTalkDetailScreen = styled.ScrollView`
  display: flex;
  flex: 1 auto;
  background-color: ${theme.backgroundBasicColor1};
  padding: 10px;
`;

const BaseText = styled.Text`
  color: white;
`;

const Title = styled(BaseText)`
  color: white;
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

export const TalkDetailScreen: React.FC<{ navigation }> = ({ navigation }) => {
  const talkId = navigation.getParam('talkId');
  const data = useDataProvider();
  const talk = data.talksById[talkId];
  const room = data.roomsById[talk.room.id];
  const speakers = talk.speakers.map(s => data.speakersById[s.id]);

  return (
    <StyledTalkDetailScreen>
      <Title>{talk.title}</Title>
      {speakers.map(s => (
        <Avatar
          onPress={() => {
            navigation.navigate('Speaker', { speakerId: s.id, title: s.name });
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
          <Tag key={tag.name} text={tag.name} />
        ))}
      </TagsBar>
      <DescriptionContainer>
        <MarkdownText>{talk.description}</MarkdownText>
      </DescriptionContainer>
    </StyledTalkDetailScreen>
  );
};
