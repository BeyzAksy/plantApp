import React from 'react';
import {FlatList} from 'react-native';

type FlatListSliderProps = {
  data: any;
  renderItemComponent: (item: any) => React.ReactElement;
};

const FlatListSlider = ({data, renderItemComponent}: FlatListSliderProps) => {
  const renderItem = ({item}: {item: any}) => {
    return renderItemComponent(item);
  };

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default FlatListSlider;
