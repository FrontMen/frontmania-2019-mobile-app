import { Accordion, Content, Tab, Tabs } from 'native-base';
import React, { useCallback } from 'react';
import Markdown from 'react-native-markdown-renderer';
import styled from 'styled-components/native';
import { DynamicStatusBar } from '../dynamicStatusBar';
import { useDataProvider } from '../providers/dataProvider';

const StyledAboutScreen = styled.View`
  flex: 1 auto;
`;

export const AboutScreen: React.FC<{}> = () => {
  const { config, questions } = useDataProvider();

  const renderAnswer = useCallback(item => {
    return (
      <Content padder>
        <Markdown>{item.content}</Markdown>
      </Content>
    );
  }, []);

  return (
    <StyledAboutScreen>
      <DynamicStatusBar />
      <Tabs>
        <Tab heading="EVENT">
          <Content padder>
            <Markdown>{config.eventInfo}</Markdown>
          </Content>
        </Tab>
        <Tab heading="FAQ">
          <Content padder>
            <Accordion
              dataArray={questions.map(q => ({ title: q.question, content: q.answer }))}
              icon="add"
              expandedIcon="remove"
              iconStyle={{ color: 'green' }}
              expandedIconStyle={{ color: 'red' }}
              renderContent={renderAnswer}
            />
          </Content>
        </Tab>
      </Tabs>
    </StyledAboutScreen>
  );
};
