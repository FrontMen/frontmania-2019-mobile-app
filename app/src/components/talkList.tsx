import _ from 'lodash';
import { Badge, Body, Icon, Left, List, ListItem, Right, Text } from 'native-base';
import React from 'react';
import styled from 'styled-components/native';
import { useFavoriteTalks } from '../providers/favoriteTalksProvider';
import { Talk } from '../types';
import { formatTime } from '../utils';

const StyledFavoriteButton = styled(Icon)`
  font-size: 30px;
  color: ${props => (props.active ? 'red' : 'grey')};
`;

const StyledBadgeContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
`;

const StyledBadge = styled(Badge)`
  margin-right: 5px;
`;

const badgeColors = ['red', 'blue', 'green'];

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
              <StyledBadgeContainer>
                {talk.tags.map((tag, index) => (
                  <StyledBadge
                    // just an idea to think about
                    // style={{ backgroundColor: badgeColors[index % badgeColors.length] }}
                    key={tag.name}
                  >
                    <Text>{tag.name}</Text>
                  </StyledBadge>
                ))}
              </StyledBadgeContainer>
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
