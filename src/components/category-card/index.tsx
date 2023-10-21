import React, {PropsWithChildren} from 'react';
import {ImageBackground, View} from 'react-native';
import P from '../text/p';
import Flexbox from '../layout/flexbox';
import calculateResponsiveValue from '../../constants';
import {Category} from '../../data/api/types';
import {styled} from 'nativewind';

type CategoryCardProps = PropsWithChildren & {
  category: Category;
};

const Background = styled(ImageBackground);
const StyledView = styled(View);

const CategoryCard = (props: CategoryCardProps) => {
  const {category} = props;

  return (
    <StyledView className="flex-wrap m-2 border border-gray-300 rounded-xl">
      <Background
        source={{uri: category.image.url}}
        style={{
          width: calculateResponsiveValue(158, 1),
          height: calculateResponsiveValue(152, 1),
        }}
        resizeMethod="scale"
        resizeMode="cover"
        imageStyle={{borderRadius: calculateResponsiveValue(12, 1)}}>
        <Flexbox justifyContent="center" nativewindStyle="h-2/5 w-3/4 px-4">
          <P
            numberOfLines={2}
            nativewindStyle="text-black font-rubik font-semibold">
            {category.title}
          </P>
        </Flexbox>
      </Background>
    </StyledView>
  );
};

export default CategoryCard;
