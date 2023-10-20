import React from 'react';

import {Text} from 'react-native';

import Layout from '../../components/layout';
import PremiumButton from '../../components/buttons/premium';
import Flexbox from '../../components/layout/flexbox';
import P from '../../components/text/p';
import FlatListSlider from '../../components/sliders/flatlist';
import {useGetQuestionsQuery} from '../../data/api/questions-api';
import QuestionCard from '../../components/question-card';

function Home() {
  const {
    data: questions,
    isLoading: isLoadingQuestions,
    isError: isErrorQuestions,
    error: errorQuestions,
  } = useGetQuestionsQuery();

  if (isLoadingQuestions) {
    console.log(questions);
    return <Text>Loading...</Text>;
  }

  if (isErrorQuestions) {
    console.log(JSON.stringify(errorQuestions));
  }

  return (
    <Layout>
      <Flexbox>
        <PremiumButton />
      </Flexbox>
      <Flexbox>
        <P nativewindStyle="font-rubik font-medium text-black-100">
          Get Started
        </P>
      </Flexbox>
      <Flexbox>
        <FlatListSlider
          data={!isLoadingQuestions ? questions : []}
          renderItemComponent={item => <QuestionCard question={item} />}
        />
      </Flexbox>
    </Layout>
  );
}

export default Home;
