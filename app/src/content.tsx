import React from 'react';
import styled from 'styled-components/native';
import { ScheduleScreen } from './screens/scheduleScreen';

const StyledContent = styled.View`
  flex: 1;
`;

export const Content: React.FC<{}> = () => (
  <StyledContent>
    <ScheduleScreen />
  </StyledContent>
);
