import React, { useCallback } from 'react';
import { Tabs, Tab, Content, Accordion } from 'native-base';
import styled from 'styled-components/native';
import { DynamicStatusBar } from '../dynamicStatusBar';
import { useDataProvider } from '../providers/dataProvider';
import { MarkdownText } from '../components/markdownText';

const StyledAboutScreen = styled.View`
  flex: 1 auto;
`;

const StyledMarkdownContainer = styled.View`
  flex: 1 auto;
`;

export const AboutScreen: React.FC<{}> = () => {
  const { config, questions } = useDataProvider();

  const renderAnswer = useCallback(item => {
    return (
      <StyledMarkdownContainer>
        <MarkdownText>{item.content}</MarkdownText>
      </StyledMarkdownContainer>
    );
  }, []);

  return (
    <StyledAboutScreen>
      <DynamicStatusBar />
      <Tabs>
        <Tab heading="EVENT">
          <Content>
            <StyledMarkdownContainer>
              <MarkdownText>{config.eventInfo}</MarkdownText>
            </StyledMarkdownContainer>
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
