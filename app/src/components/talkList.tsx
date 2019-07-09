import React from 'react';
import styled from 'styled-components/native';
import _ from 'lodash';
import { List, ListItem, Left, Body, Right, Text, Button, Icon, View } from 'native-base';
import { Talk } from '../types';
import { formatTime } from '../utils';
import { useFavoriteTalks } from '../providers/favoriteTalksProvider';

const StyledTime = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledTimeText = styled.Text`
  color: white;
  font-weight: bold;
  width: 50px;
  flex: 1;
`;

const StyledFavoriteButton = styled(Icon)`
  font-size: 30px;
  color: ${props => (props.active ? 'red' : 'grey')};
`;

const Time: React.FC<{ time: Date }> = ({ time }) => (
  <StyledTime>
    <StyledTimeText>{formatTime(time)}</StyledTimeText>
  </StyledTime>
);

export const TalkList: React.FC<{ talks: Talk[]; onPress: (talk: Talk) => void }> = ({
  talks,
  onPress,
}) => {
  const { items, toggle } = useFavoriteTalks();

  return (
    <List>
      {talks.map(talk => {
        const speakerName = _.get(talk, 'speakers[0].name', null);
        const isFav = items.includes(talk.id);

        return (
          <ListItem avatar key={talk.id} onPress={() => onPress(talk)}>
            <Left>
              <Text>{formatTime(talk.startsAt)}</Text>
            </Left>
            <Body>
              <Text>{talk.title}</Text>
              <Text note>
                {formatTime(talk.startsAt)} - {formatTime(talk.endsAt)}
              </Text>
              <Text note>by {speakerName}</Text>
            </Body>
            <Right style={{ justifyContent: 'center' }}>
              <StyledFavoriteButton active={isFav} name="heart" onPress={() => toggle(talk.id)} />
            </Right>
          </ListItem>
        );
      })}
    </List>
  );
};
