import React from 'react';
import { StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-renderer';

const defaultStyle = StyleSheet.create({
  root: {
    color: 'white',
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

export const MarkdownText: React.FC<{ style?: any }> = ({ style, children }) => {
  return <Markdown style={{ ...defaultStyle, ...style }}>{children}</Markdown>;
};
