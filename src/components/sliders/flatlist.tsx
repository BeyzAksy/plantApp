import React from 'react';
import {FlatList} from 'react-native';

type FlatListSliderProps = {
  data: any;
  numColumns?: number;
  horizontal?: boolean;
  scrollEnabled?: boolean;
  renderItemComponent: (item: any) => React.ReactElement;
};

const FlatListSlider = ({
  data,
  numColumns,
  horizontal,
  scrollEnabled,
  renderItemComponent,
}: FlatListSliderProps) => {
  const renderItem = ({item}: {item: any}) => {
    return renderItemComponent(item);
  };

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      numColumns={numColumns}
      horizontal={horizontal}
      scrollEnabled={scrollEnabled}
    />
  );
};

export default FlatListSlider;
