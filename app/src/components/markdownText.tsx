import React from 'react';
import { StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-renderer';

const defaultStyle = StyleSheet.create({});

export const MarkdownText: React.FC<{ style?: any }> = ({ style, children }) => {
  return <Markdown style={{ ...defaultStyle, ...style }}>{children}</Markdown>;
};
