import React from 'react';
import styled from 'styled-components/native';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';

const StyledImage = styled.Image<{ size: number }>`
  /* border: 2px solid black; */
  border-radius: ${props => props.size / 2}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const StyledAvatar = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StyledText = styled.Text<{ size: number }>`
  margin: 5px 0 5px 5px;
  font-size: ${props => (props.size * 2) / 3}px;
`;

export const Avatar: React.FC<{
  size?: number;
  image: string;
  onPress: (event: GestureResponderEvent) => void;
}> = ({ size = 30, image, children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <StyledAvatar>
        <StyledImage size={size} source={{ uri: image }} />
        <StyledText size={size}>{children}</StyledText>
      </StyledAvatar>
    </TouchableOpacity>
  );
};
