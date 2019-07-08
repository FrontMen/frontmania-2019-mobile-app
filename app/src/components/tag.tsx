import React from 'react';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  background: green;
  color: white;
  margin: 5px;
  padding: 5px;
  font-weight: bold;
`;

export const Tag: React.FC<{ text: string }> = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};
