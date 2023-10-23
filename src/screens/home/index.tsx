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
import calculateResponsiveValue from '../../constants';

function Home(): JSX.Element {
  const {data: questions, isLoading: isLoadingQuestions} =
    useGetQuestionsQuery();
  const {data: categories, isLoading: isLoadingCategories} =
    useGetCategoriesQuery();

  const navigation = useNavigation();

  return (
    <Layout>
      <Flexbox>
        <PremiumButton
          onClick={() =>
            navigation.navigate('OnboardingStack', {screen: 'Paywall'})
          }
        />
      </Flexbox>
      <Flexbox>
        <P
          nativewindStyle="font-rubik text-black-100 font-semibold"
          style={{fontSize: calculateResponsiveValue(15, 1)}}>
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
          columnWrapperStyle={{
            justifyContent: 'space-between',
            // marginHorizontal: calculateResponsiveValue(14, 1),
          }}
          scrollEnabled={false}
          renderItemComponent={item => <CategoryCard category={item} />}
        />
      </Flexbox>
      <Flexbox />
    </Layout>
  );
}

export default Home;
