import React from 'react';
import styled from 'styled-components/native';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { theme } from '../../theme';
import { useDataProvider } from '../../dataProvider';
import { formatTime } from '../../utils';
import { MarkdownText } from '../../components/markdownText';

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
  margin-bottom: 10px;
`;

export const TalkDetailScreen: React.FC<{ navigation }> = ({ navigation }) => {
  const talkId = navigation.getParam('talkId');
  const data = useDataProvider();
  const talk = data.talksById[talkId];
  const room = data.roomsById[talk.room.id];

  return (
    <StyledTalkDetailScreen>
      <Title>{talk.title}</Title>
      <TalkInfoBar>
        <AntDesign name="clockcircleo" color="grey" size={15}>
          <IconText>{` ${formatTime(talk.startsAt)} - ${formatTime(talk.endsAt)}`}</IconText>
        </AntDesign>
        <Octicons name="location" color="grey" size={15} style={{ marginLeft: 10 }}>
          <IconText>{` ${room.name}`}</IconText>
        </Octicons>
      </TalkInfoBar>
      <DescriptionContainer>
        <MarkdownText>{talk.description}</MarkdownText>
      </DescriptionContainer>
    </StyledTalkDetailScreen>
  );
};