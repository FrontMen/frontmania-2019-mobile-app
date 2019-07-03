import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { ScheduleScreen } from './screens/scheduleScreen';

const StyledContent = styled.View`
  flex: 1;
`;

export const Content = () => (
  <StyledContent>
    <ScheduleScreen />
  </StyledContent>
);
