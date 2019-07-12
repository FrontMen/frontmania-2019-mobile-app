import { Badge, Text, Fab, Icon, Button, Content, Container } from 'native-base';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { IconText } from '../components/iconText';
import { Avatar } from '../components/avatar';
import { MarkdownText } from '../components/markdownText';
import { useDataProvider } from '../providers/dataProvider';
import { formatTime, getImageUrl } from '../utils';
import { useFavoriteTalks } from '../providers/favoriteTalksProvider';
import { Talk } from '../types';
import { useTheme } from '../providers/themeProvider';

const BaseText = styled(Text)``;

const Title = styled(BaseText)`
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0;
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

const StyledFavoriteButton = styled(Button)`
  background-color: ${props =>
    props.active ? props.theme.brandPrimary : props.theme.listNoteColor};
`;

const Actions: React.FC<{ talk: Talk }> = ({ talk }) => {
  const { items, toggle } = useFavoriteTalks();
  const [active, setActive] = useState(false);
  const theme = useTheme();

  const isFavorite = items.includes(talk.id);

  return (
    <Fab
      active={active}
      direction="up"
      containerStyle={{}}
      style={{ backgroundColor: theme.brandPrimary }}
      position="bottomRight"
      onPress={() => setActive(fa => !fa)}
    >
      <Icon name="add" />
      <StyledFavoriteButton
        style={{ backgroundColor: isFavorite ? theme.brandPrimary : theme.listNoteColor }}
        onPress={() => toggle(talk.id)}
      >
        <Icon name="heart" />
      </StyledFavoriteButton>
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
    <Container>
      <Content padder>
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
          <IconText
            iconType="AntDesign"
            icon="clockcircleo"
            text={` ${formatTime(talk.startsAt)} - ${formatTime(talk.endsAt)}`}
          />
          <IconText
            style={{ marginLeft: 10 }}
            iconType="Octicons"
            icon="location"
            text={` ${room.name}`}
          />
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
    </Container>
  );
};
