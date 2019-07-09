import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const StyledSpeakerScreen = styled.View`
  display: flex;
`;

export const SpeakerScreen: React.FC<{ navigation }> = ({ navigation }) => {
  const speakerId = navigation.getParam('speakerId');

  return (
    <StyledSpeakerScreen>
      <Text>{speakerId}</Text>
    </StyledSpeakerScreen>
  );
};
