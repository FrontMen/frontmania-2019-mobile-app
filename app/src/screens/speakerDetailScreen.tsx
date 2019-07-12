import { Container, Content, Text } from 'native-base';
import React from 'react';
import styled from 'styled-components/native';
import { IconText } from '../components/iconText';
import { MarkdownText } from '../components/markdownText';
import { useDataProvider } from '../providers/dataProvider';

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
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const SpeakerDetailScreen: React.FC<{ navigation }> = ({ navigation }) => {
  const speakerId = navigation.getParam('speakerId');
  const data = useDataProvider();
  const speaker = data.speakersById[speakerId];

  return (
    <Container>
      <Content padder>
        <Title>{speaker.name}</Title>
        <TalkInfoBar>
          <IconText iconType="MaterialIcons" icon="email" text={` ${speaker.email}`} />
          <IconText
            style={{ marginLeft: 10 }}
            iconType="AntDesign"
            icon="twitter"
            text={` ${speaker.twitter}`}
          />
        </TalkInfoBar>
        <DescriptionContainer>
          <MarkdownText>{speaker.bio}</MarkdownText>
        </DescriptionContainer>
      </Content>
    </Container>
  );
};
