import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components/native';
import { MarkdownText } from '../components/markdownText';
import { useDataProvider } from '../providers/dataProvider';
import { theme } from '../theme';

const StyledSpeakerDetailScreen = styled.ScrollView`
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

const DescriptionContainer = styled.View`
  flex: 1 auto;
`;

const TalkInfoBar = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
`;

const IconText = styled(BaseText)`
  font-size: 16px;
  color: grey;
  margin-left: 5px;
`;

export const SpeakerDetailScreen: React.FC<{ navigation }> = ({ navigation }) => {
  const speakerId = navigation.getParam('speakerId');
  const data = useDataProvider();
  const speaker = data.speakersById[speakerId];

  return (
    <StyledSpeakerDetailScreen>
      <Title>{speaker.name}</Title>
      <TalkInfoBar>
        <MaterialIcons name="email" color="grey" size={15} />
        <IconText>{speaker.email}</IconText>

        <AntDesign name="twitter" color="grey" size={15} style={{ marginLeft: 5 }} />
        <IconText>{speaker.twitter}</IconText>
      </TalkInfoBar>
      <DescriptionContainer>
        <MarkdownText>{speaker.bio}</MarkdownText>
      </DescriptionContainer>
    </StyledSpeakerDetailScreen>
  );
};
