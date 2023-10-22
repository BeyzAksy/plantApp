import React from 'react';
import {FlatList} from 'react-native';

type FlatListSliderProps = {
  data: any;
  numColumns?: number;
  horizontal?: boolean;
  scrollEnabled?: boolean;
  columnWrapperStyle?: any;
  renderItemComponent: (item: any) => React.ReactElement;
};

const FlatListSlider = ({
  data,
  numColumns,
  horizontal,
  scrollEnabled,
  columnWrapperStyle,
  renderItemComponent,
}: FlatListSliderProps) => {
  const renderItem = ({item}: {item: any}) => {
    return renderItemComponent(item);
  };

  return (
    <FlatList
      columnWrapperStyle={columnWrapperStyle}
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
