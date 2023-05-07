import { NavigationContext } from '@react-navigation/native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

const { width } = Dimensions.get('window');

const Carousel = ({ data }) => {
  const { images } = data;
  const navigation = useContext(NavigationContext);
  const flatListRef = useRef<FlatList>();
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if(flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: startIndex, animated: false });
    }
  }, [startIndex]);

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });
  
  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={startIndex}
        renderItem={({ item, index }) => (
        <Pressable onPress={() => navigation.navigate('Details', {data, index, setStartIndex})}>
          <SharedElement id={`${data.id}.${index}.photo`}>
          <Image
            key={index}
            source={item}
            style={[styles.carouselImage, { width }]}
          />
          </SharedElement>
          </Pressable>
        )}
        keyExtractor={(_, index) => index.toString()}
        viewabilityConfig={viewConfigRef.current}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselImage: {
    height: 400,
    resizeMode: 'cover',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  indicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1,
  },
  activeDot: {
    backgroundColor: '#000',
  },
});

export default Carousel;
