import React from 'react';

import Layout from '../../components/layout';
import PremiumButton from '../../components/buttons/premium';
import Flexbox from '../../components/layout/flexbox';
import P from '../../components/text/p';
import FlatListSlider from '../../components/sliders/flatlist';
import {useGetQuestionsQuery} from '../../data/api/questions-api';
import QuestionCard from '../../components/question-card';
import {useGetCategoriesQuery} from '../../data/api/categories-api';
import CategoryCard from '../../components/category-card';
import {useNavigation} from '@react-navigation/native';

function Home() {
  const {data: questions, isLoading: isLoadingQuestions} =
    useGetQuestionsQuery();
  const {data: categories, isLoading: isLoadingCategories} =
    useGetCategoriesQuery();

  const navigation = useNavigation();
  // if (isLoadingQuestions) {
  //   return <Text>Loading...</Text>;
  // }

  // if (isLoadingCategories) {
  //   return <Text>Loading...</Text>;
  // }

  return (
    <Layout>
      <Flexbox>
        <PremiumButton
          onClick={() => navigation.navigate('Onboarding', {screen: 'Paywall'})}
        />
      </Flexbox>
      <Flexbox>
        <P nativewindStyle="font-rubik font-medium text-black-100">
          Get Started
        </P>
      </Flexbox>
      <Flexbox>
        <FlatListSlider
          horizontal
          data={!isLoadingQuestions ? questions : []}
          renderItemComponent={item => <QuestionCard question={item} />}
        />
      </Flexbox>
      <Flexbox>
        <FlatListSlider
          data={!isLoadingCategories ? categories?.data : []}
          numColumns={2}
          scrollEnabled={false}
          renderItemComponent={item => <CategoryCard category={item} />}
        />
      </Flexbox>
      <Flexbox />
    </Layout>
  );
}

export default Home;
