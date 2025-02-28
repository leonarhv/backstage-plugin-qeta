import React from 'react';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { Content, ContentHeader } from '@backstage/core-components';
// @ts-ignore
import RelativeTime from 'react-relative-time';
import { QuestionsContainer } from '../QuestionsContainer/QuestionsContainer';
import { TagsContainer } from './TagsContainer';
import HelpOutline from '@material-ui/icons/HelpOutline';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import { useStyles } from '../../utils/hooks';

export const TagPage = () => {
  const { tag } = useParams();
  const styles = useStyles();
  return (
    <Content>
      <ContentHeader title={tag ? `Questions tagged [${tag}]` : 'Tags'}>
        <Button
          href="/qeta"
          className={styles.marginRight}
          startIcon={<HomeOutlined />}
        >
          Back to questions
        </Button>
        <Button
          variant="contained"
          href="/qeta/ask"
          startIcon={<HelpOutline />}
        >
          Ask question
        </Button>
      </ContentHeader>
      {tag ? <QuestionsContainer tags={[tag ?? '']} /> : <TagsContainer />}
    </Content>
  );
};
