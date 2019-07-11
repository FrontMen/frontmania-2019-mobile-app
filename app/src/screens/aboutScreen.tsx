import { Accordion, Content, Tab, Tabs, Container } from 'native-base';
import React, { useCallback } from 'react';
import { DynamicStatusBar } from '../dynamicStatusBar';
import { useDataProvider } from '../providers/dataProvider';
import { MarkdownText } from '../components/markdownText';

export const AboutScreen: React.FC<{}> = () => {
  const { config, questions } = useDataProvider();

  const renderAnswer = useCallback(item => {
    return (
      <Content padder>
        <MarkdownText>{item.content}</MarkdownText>
      </Content>
    );
  }, []);

  return (
    <Container>
      <DynamicStatusBar />
      <Tabs>
        <Tab heading="EVENT">
          <Content padder>
            <MarkdownText>{config.eventInfo}</MarkdownText>
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
    </Container>
  );
};
