import { Accordion, Content, Tab, Tabs, Container } from 'native-base';
import React, { useCallback } from 'react';
import { useDataProvider } from '../providers/dataProvider';
import { MarkdownText } from '../components/markdownText';
import { useTheme } from '../providers/themeProvider';

export const AboutScreen: React.FC<{}> = () => {
  const { config, questions } = useDataProvider();
  const theme = useTheme();

  const renderAnswer = useCallback(item => {
    return (
      <Content padder>
        <MarkdownText>{item.content}</MarkdownText>
      </Content>
    );
  }, []);

  return (
    <Container>
      <Tabs>
        <Tab heading="EVENT">
          <Container>
            <Content padder>
              <MarkdownText>{config.eventInfo}</MarkdownText>
            </Content>
          </Container>
        </Tab>
        <Tab heading="FAQ">
          <Container>
            <Content padder>
              <Accordion
                headerStyle={{ backgroundColor: theme.darkenHeader }}
                dataArray={questions.map(q => ({ title: q.question, content: q.answer }))}
                icon="add"
                expandedIcon="remove"
                iconStyle={{ color: 'green' }}
                expandedIconStyle={{ color: 'red' }}
                renderContent={renderAnswer}
              />
            </Content>
          </Container>
        </Tab>
      </Tabs>
    </Container>
  );
};
