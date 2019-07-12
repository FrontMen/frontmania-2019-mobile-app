import { Icon, Text } from 'native-base';
import { View, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

type IconType =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

const StyledIcon = styled(Icon)`
  color: ${props => props.theme.listNoteColor};
  font-size: 15px;
`;

export const IconText: React.FC<{
  style?: StyleProp<ViewStyle>;
  iconStyle?: any;
  iconType?: IconType;
  icon: string;
  text: string;
}> = ({ iconType, iconStyle, icon, text, style }) => {
  return (
    <View style={[{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }, style]}>
      <StyledIcon type={iconType} name={icon} style={iconStyle} />
      <View>
        <Text note>{text}</Text>
      </View>
    </View>
  );
};
