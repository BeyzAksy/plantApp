import React, {PropsWithChildren} from 'react';
import {ImageBackground, View} from 'react-native';
import P from '../text/p';
import Flexbox from '../layout/flexbox';
import calculateResponsiveValue from '../../constants';
import {Question} from '../../data/api/request-response';
import {styled} from 'nativewind';

type QuestionCardProps = PropsWithChildren & {
  question: Question;
};

const Background = styled(ImageBackground);
const StyledView = styled(View);

const QuestionCard = (props: QuestionCardProps) => {
  const {question} = props;

  return (
    <StyledView className="px-1">
      <Background
        source={{uri: question.image_uri}}
        className="w-60 h-40 justify-end"
        imageStyle={{borderRadius: calculateResponsiveValue(12, 1)}}>
        <Flexbox justifyContent="center" nativewindStyle="h-2/5 w-auto px-4">
          <P nativewindStyle="text-white font-rubik font-medium">
            {question.title}
          </P>
        </Flexbox>
      </Background>
    </StyledView>
  );
};

export default QuestionCard;
