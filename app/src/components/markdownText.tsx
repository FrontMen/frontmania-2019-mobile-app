import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import Markdown from 'react-native-markdown-renderer';

const defaultStyle = StyleSheet.create({
  root: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  heading: {
    borderBottomWidth: 1,
    borderColor: '#000000',
  },
  text: {
    color: 'white',
  },
  list: {
    color: 'white',
  },
});

export const MarkdownText: React.FC<{ style?: StyleSheet.NamedStyles<ViewStyle> }> = ({
  style,
  children,
}) => {
  return <Markdown style={{ ...defaultStyle, ...style }}>{children}</Markdown>;
};
