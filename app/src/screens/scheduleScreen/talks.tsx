import React from 'react';
import { List, ListItem, StyleType } from 'react-native-ui-kitten';
import styled from 'styled-components/native';
import { Talk } from '../../types';
import { formatTime } from '../../utils';

const StyledTime = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledTimeText = styled.Text`
  color: white;
  font-weight: bold;
  width: 50px;
`;

const Time: React.FC<{ style: StyleType; time: Date }> = ({ style, time }) => (
  <StyledTime style={style}>
    <StyledTimeText>{formatTime(time)}</StyledTimeText>
  </StyledTime>
);

const renderTalkDescription = (item: Talk): string => {
  return [
    `${formatTime(item.startsAt)} - ${formatTime(item.endsAt)}`,
    `by ${item.speaker.name}`,
  ].join('\n');
};

const renderTalkItem: React.FC<{ item: Talk }> = ({ item }) => {
  return (
    <ListItem
      icon={({ style }) => <Time style={style} time={item.startsAt} />}
      key={item.id}
      title={item.title}
      description={renderTalkDescription(item)}
    />
  );
};

export const Talks: React.FC<{ talks: Talk[] }> = ({ talks }) => {
  return <List data={talks} renderItem={renderTalkItem} />;
};
