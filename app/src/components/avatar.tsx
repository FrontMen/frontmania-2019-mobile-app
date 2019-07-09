import React from 'react';
import styled from 'styled-components/native';

const StyledImage = styled.Image<{ size: number }>`
  border: 2px solid white;
  border-radius: ${props => props.size / 2}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const StyledAvatar = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StyledText = styled.Text<{ size: number }>`
  color: white;
  margin: 5px 0 5px 5px;
  font-size: ${props => (props.size * 2) / 3}px;
`;

export const Avatar: React.FC<{ size?: number; image: string }> = ({
  size = 30,
  image,
  children,
}) => {
  return (
    <StyledAvatar>
      <StyledImage size={size} source={{ uri: image }} />
      <StyledText size={size}>{children}</StyledText>
    </StyledAvatar>
  );
};
